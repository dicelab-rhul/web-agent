#!/usr/bin/env python3

# For Python < 3.9
from __future__ import annotations

from importlib.util import find_spec

# Safeguard (mainly) for MS Windows.
if find_spec("flask") is None:
    raise ImportError("Flask is not installed. Please run `pip install flask`.")

from flask.app import Flask
from flask.globals import request
from flask.templating import render_template
from flask.wrappers import Response
from secrets import token_urlsafe
from typing import Any
from json import loads
from webbrowser import open_new_tab
from threading import Timer
from ssl import SSLContext, PROTOCOL_TLS_SERVER

import os
import flask.helpers as helpers


class WebAgentServer:
    CSP_SELF: str = "'self'"
    CSP_NONE: str = "'none'"

    def __init__(self, host: str="127.0.0.1", port: int=5000) -> None:
        self.__host: str = host
        self.__port: int = port

        self.__app: Flask = Flask(__name__, template_folder=os.path.abspath("templates"))

        self.__csp_endpoint_route: str = "/csp-endpoint"

        self.__register_routes()

        # It would be nice to be able to include `style-src 'nonce-{nonce}'`.
        # Unfortunately, the CodeMirror editor adds a lot of `style` attributes/elements.
        # As such, `style-src-elem` with the nonce and a set of hashes + `style-src-attr` with 'unsafe-hashes' and a set of hashes is a good compromise.
        # At the moment, removing all the style attributes from the CodeMirror editor is not an option.
        # At the end of the day, not having to use `'strict-dynamic'` is good enough.
        self.__nonce_based_csp_dict: dict[str, str] = {
            "base-uri": WebAgentServer.CSP_NONE,
            "frame-ancestors": WebAgentServer.CSP_SELF,
            "object-src": WebAgentServer.CSP_NONE,
            "script-src": "'nonce-{nonce}' 'report-sample'",
            "style-src-elem": "'nonce-{nonce}' {hashes} 'report-sample'".format(nonce="{nonce}" , hashes=" ".join(self.__get_inline_styles_hashes())),
            "style-src-attr": "'nonce-{nonce}' 'unsafe-hashes' {hashes} 'report-sample'".format(nonce="{nonce}" , hashes=" ".join(self.__get_attr_styles_hashes())),
            "trusted-types": "webagent dompurify literal-string default",

            # TODO: keep an eye on `report-to` support in Firefox and bugfixes in Chromium, so that `report-uri` can be replaced by `report-to`.
            # `report-uri` is deprecated, but `report-to` is broken in Chromium (see https://bugs.chromium.org/p/chromium/issues/detail?id=1098885), and not supported by Firefox.
            "report-uri": self.__csp_endpoint_route

            # TODO: keep an eye on TypeScript support for non-string values in DOM sinks, so the `require-trusted-types-for` directive can be included.
            # Unfortunately, the following directive will cause issues with TypeScript (see https://github.com/microsoft/TypeScript/issues/30024).
            # "require-trusted-types-for": "'script'"
        }

        self._nonce_based_csp_list: list[str] = [
            "upgrade-insecure-requests",
        ]

        self.__whitelist_based_csp_dict: dict[str, str] = {
            "script-src": WebAgentServer.CSP_SELF,
        }

        self.__max_number_of_csp_reports: int = 100
        self.__latest_csp_reports: list[dict[str, Any]] = []
        self.__common_headers: dict[str, Any] = {
            "Report-To": {
                "group": "default",
                "max_age": 10886400,
                "endpoints":
                    [
                        {
                            "url": self.__csp_endpoint_route
                        }
                    ],
                "include_subdomains": "true"
            },
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "X-XSS-Protection": "1; mode=block", # TODO: is this still worth it? Only Safari supports it, and it is notoriously unreliable.
            "Referrer-Policy": "same-origin",
            "Permissions-Policy": "accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), serial=(), sync-xhr=(), usb=(), xr-spatial-tracking=()",
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp",
            "Cross-Origin-Resource-Policy": "same-origin",
            "Cross-Origin-Window-Policy": "deny",
            "Server": "Web-Agent",
            "Vary": "Accept-Encoding, Sec-Fetch-Site, Sec-Fetch-Mode, Sec-Fetch-Dest",

            "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",

            # TODO: uncomment when served over HTTPS with a real certificate.
            # "Expect-CT": "enforce, max-age=63072000, report-uri=\"/expect-ct-endpoint\"",

            # TODO: keep an eye on `report-to` support in Firefox and bugfixes in Chromium, so that `report-uri` can be replaced by `report-to`.
            # TODO: keep an eye on TypeScript support for non-string values in DOM sinks. so that this CSP can be enforced.
            # `report-uri` is deprecated, but `report-to` is broken in Chromium (see https://bugs.chromium.org/p/chromium/issues/detail?id=1098885), and not supported by Firefox.
            # Also, see the comment above regarding `require-trusted-types-for` and TypeScript.
            "Content-Security-Policy-Report-Only": f"require-trusted-types-for 'script'; report-uri {self.__csp_endpoint_route};",
        }

    def run(self, https: bool, tls_folder: str="") -> None:
        if https and tls_folder:
            context: SSLContext = SSLContext(protocol=PROTOCOL_TLS_SERVER)

            # TLS 1.3+ only.
            context.minimum_version = context.maximum_version

            context.load_cert_chain(os.path.join(tls_folder, "localhost+2.pem"), os.path.join(tls_folder, "secp521r1.pem"))

            self.__app.run(host=self.__host, port=self.__port, debug=False, ssl_context=context)
        else:
            self.__app.run(host=self.__host, port=self.__port, debug=False)

    def index(self) -> tuple[str | dict[str, Any], int, dict[str, Any]]:
        nonce: str = WebAgentServer.__generate_csp_nonce()
        additional_headers: dict[str, Any] = self.__get_default_additional_headers(nonce_value=nonce)

        if WebAgentServer.__allow_request() and request.method == "GET":
            return render_template("index.html", nonce_value=nonce), 200, additional_headers
        else:
            return self.__deny_request(403, additional_headers=additional_headers)

    def csp_endpoint(self) -> tuple[dict[str, Any], int, dict[str, Any]]:
        additional_headers: dict[str, Any] = self.__get_default_additional_headers()

        additional_headers["Content-Type"] = "application/json"

        if not WebAgentServer.__allow_request():
            return self.__deny_request(403, additional_headers=additional_headers)
        elif request.method == "GET":
            return {"reports": self.__latest_csp_reports}, 200, additional_headers
        elif request.method == "POST":
            if len(self.__latest_csp_reports) < self.__max_number_of_csp_reports:
                self.__latest_csp_reports.append(loads(request.data))
            else:
                self.__latest_csp_reports.pop(0)
                self.__latest_csp_reports.append(loads(request.data))

            return {"result": "Report received and processed."}, 200, additional_headers
        else:
            return self.__deny_request(403, additional_headers=additional_headers)

    def favicon(self) -> Response | tuple[dict[str, Any], int, dict[str, Any]]:
        additional_headers: dict[str, Any] = self.__get_default_additional_headers()

        if WebAgentServer.__allow_request() and request.method == "GET":
            # We use reflection to call `send_from_directory` in order to get around the 'partially unkown' error.
            return getattr(helpers, "send_from_directory")(os.path.join(self.__app.root_path, "static", "images"), "favicon.ico", mimetype="image/vnd.microsoft.icon")
        else:
            return self.__deny_request(403, additional_headers=additional_headers)

    def __register_routes(self) -> None:
        self.__app.add_url_rule("/", "index", self.index, methods=["GET"])
        self.__app.add_url_rule("/favicon.ico", "favicon", self.favicon, methods=["GET"])
        self.__app.add_url_rule(self.__csp_endpoint_route, "csp_endpoint", self.csp_endpoint, methods=["GET", "POST"])
        self.__app.register_error_handler(404, self.__handle_404)
        self.__app.register_error_handler(403, lambda err: self.__deny_request(err, self.__get_default_additional_headers()))
        self.__app.register_error_handler(500, self.__handle_500)

    def __generate_csp(self, nonce: str) -> str:
        return self.__pack_whitelist_based_csp() + ", " + self.__pack_nonce_based_csp(nonce) + ";"

    def __pack_nonce_based_csp(self, nonce: str) -> str:
        return self.__pack_nonce_based_csp_dict(nonce) + "; " + self.__pack_nonce_based_csp_list()

    def __pack_nonce_based_csp_dict(self, nonce: str) -> str:
        return "; ".join([f"{key} {value.format(nonce=nonce)}" for key, value in self.__nonce_based_csp_dict.items()])

    def __pack_nonce_based_csp_list(self) -> str:
        return "; ".join(self._nonce_based_csp_list)

    def __pack_whitelist_based_csp(self) -> str:
        return "; ".join([f"{key} {value}" for key, value in self.__whitelist_based_csp_dict.items()])

    @staticmethod
    def __generate_csp_nonce() -> str:
        return token_urlsafe(32)

    @staticmethod
    def __get_inline_styles_hashes() -> list[str]:
        return [
            "'sha256-qVvPl0vp1SoXFHXl+VfRXjyKNAjlZvJDeXDMCnMbSeM='", # CodeMirror-injected style.
            "'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='", # CodeMirror-injected style.
        ]

    @staticmethod
    def __get_attr_styles_hashes() -> list[str]:
        return [
            "'sha256-qokx773Tl626SVTuhxQSccr23ixTSkbnBXWRqLjyuIg='" # CodeMirror-injected style.
        ]

    @staticmethod
    def __allow_request() -> bool:
        # Allow requests from browsers which don't send Fetch Metadata
        if not request.headers.get("sec-fetch-site", ""):
            return True

        # Allow same-site and browser-initiated requests
        if request.headers.get("sec-fetch-site", "") in ("same-origin", "same-site", "none"):
            return True

        # Allow simple top-level navigations except <object> and <embed>
        if request.headers.get("sec-fetch-mode", "") == "navigate" and request.method == "GET" and request.headers.get("sec-fetch-dest", "") not in ("object", "embed"):
            return True

        # Reject all other requests that are cross-site and not navigational
        return False

    def __get_default_additional_headers(self, nonce_value: str="") -> dict[str, Any]:
        headers: dict[str, Any] = {k: v for k, v in self.__common_headers.items()}
        nonce: str = WebAgentServer.__generate_csp_nonce() if not nonce_value else nonce_value

        headers["Content-Security-Policy"] = self.__generate_csp(nonce)

        return headers

    def __deny_request(self, error: Any, additional_headers: dict[str, Any]) -> tuple[dict[str, Any], int, dict[str, Any]]:
        return self.__return_error(error, 403, "The request was explicitly refused by the server.", additional_headers)

    def __handle_404(self, error: Any) -> tuple[dict[str, Any], int, dict[str, Any]]:
        return self.__return_error(error, 404, "The requested resource was not found.")

    def __handle_500(self, error: Any) -> tuple[dict[str, Any], int, dict[str, Any]]:
        return self.__return_error(error, 500, "An internal server error occurred.")

    def __return_error(self, error: Any, default_error_code: int, error_message: str, headers: dict[str, Any]={}) -> tuple[dict[str, Any], int, dict[str, Any]]:
        additional_headers: dict[str, Any] = self.__get_default_additional_headers() if not headers else headers

        additional_headers["Content-Type"] = "application/json"

        error_code: int = error if isinstance(error, int) else default_error_code

        return {"error": error_message}, error_code, additional_headers


if __name__ == "__main__":
    host: str = "127.0.0.1"
    port: int = 5000
    tls_folder: str = os.path.abspath("tls")
    https: bool = os.path.exists(tls_folder) and os.path.isdir(tls_folder)
    server = WebAgentServer(host=host, port=port)
    protocol: str = "https" if https else "http"

    Timer(1, lambda: open_new_tab(f"{protocol}://{host}:{port}/")).start()

    server.run(https=https, tls_folder=tls_folder if https else "")
