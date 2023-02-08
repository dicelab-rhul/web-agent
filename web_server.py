#!/usr/bin/env python3

from flask.app import Flask
from flask.globals import request
from flask.templating import render_template
from flask.wrappers import Response
from secrets import token_urlsafe
from typing import Any

import os
import flask.helpers as helpers


class WebAgentServer:
    CSP_SELF: str = "'self'"
    CSP_NONE: str = "'none'"

    def __init__(self) -> None:
        self.__app: Flask = Flask(__name__, template_folder=os.path.abspath("templates"))

        self.__register_routes()

        # It would be nice to be able to include `style-src 'nonce-{nonce}'`.
        # Unfortunately, the CodeMirror editor adds a lot of `style` attributes/elements.
        # As such, `style-src-elem` with the nonce and a set of hashes + `style-src-attr` with 'unsafe-hashes' and a set of hashes is a good compromise.
        # At the moment, removing all the style attributes from the CodeMirror editor is not an option.
        # At the end of the day, not having to use `'strict-dynamic'` is good enough.
        self.__nonce_based_csp_dict: dict[str, str] = {
            "base-uri": WebAgentServer.CSP_SELF,
            "frame-ancestors": WebAgentServer.CSP_SELF,
            "object-src": WebAgentServer.CSP_NONE,
            "script-src": "'nonce-{nonce}'",
            "style-src-elem": "'nonce-{nonce}' {hashes}".format(nonce="{nonce}" , hashes=" ".join(self.__get_inline_styles_hashes())),
            "style-src-attr": "'nonce-{nonce}' 'unsafe-hashes' {hashes}".format(nonce="{nonce}" , hashes=" ".join(self.__get_attr_styles_hashes())),
            "trusted-types": "webagent dompurify literal-string default",

            # Unfortunately, the following directive will cause issues with TypeScript (see https://github.com/microsoft/TypeScript/issues/30024).
            # "require-trusted-types-for": "'script'"
        }

        self._nonce_based_csp_list: list[str] = [
            "upgrade-insecure-requests",
        ]

        self.__whitelist_based_csp_dict: dict[str, str] = {
            "script-src": WebAgentServer.CSP_SELF,
        }

    def run(self) -> None:
        self.__app.run(debug=False)

    def index(self) -> tuple[str, int, dict[str, Any]]:
        if request.method == "GET":
            nonce: str = WebAgentServer.__generate_csp_nonce()
            additional_headers: dict[str, Any] = {
                "Report-To": {
                    "group": "default",
                    "max_age": 10886400,
                    "endpoints":
                        [
                            {
                                "url": "/csp-endpoint"
                            }
                        ],
                    "include_subdomains": "true"
                },
                "Content-Security-Policy": self.__generate_csp(nonce),
                "Content-Security-Policy-Report-Only": "require-trusted-types-for 'script'; report-to default; report-uri /csp-endpoint",
            }

            return render_template("index.html", nonce_value=nonce), 200, additional_headers
        else:
            return f"Method not allowed: {request.method}", 405, {}

    def csp_endpoint(self) -> tuple[str, int, dict[str, Any]]:
        if request.method == "GET":
            return "CSP endpoint", 200, {}
        elif request.method == "POST":
            print(request.data)

            return "", 200, {}
        else:
            print(request.method)
            return f"Method not allowed: {request.method}", 405, {}

    def favicon(self) -> Response:
        # We use reflection to call `send_from_directory` in order to get around the 'partially unkown' error.
        return getattr(helpers, "send_from_directory")(os.path.join(self.__app.root_path, "static", "images"), "favicon.ico", mimetype="image/vnd.microsoft.icon")

    def __register_routes(self) -> None:
        self.__app.add_url_rule("/", "index", self.index)
        self.__app.add_url_rule("/favicon.ico", "favicon", self.favicon)
        self.__app.add_url_rule("/csp-endpoint", "csp_endpoint", self.csp_endpoint)

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


if __name__ == "__main__":
    server = WebAgentServer()

    server.run()
