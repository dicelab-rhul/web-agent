#!/usr/bin/env python3

from flask.app import Flask
from flask.helpers import send_from_directory
from flask.globals import request
from flask.templating import render_template
from flask.wrappers import Response
from secrets import token_urlsafe

import os


class WebAgentServer:
    def __init__(self) -> None:
        self.__app: Flask = Flask(__name__, template_folder=os.path.abspath("templates"))

        self.__register_routes()

    def run(self) -> None:
        self.__app.run(debug=False)

    def index(self) -> tuple[str, int, dict[str, str]]:
        if request.method == "GET":
            nonce: str = WebAgentServer.__generate_csp_nonce()

            return render_template("index.html", nonce_value=nonce), 201, {"Content-Security-Policy": WebAgentServer.__generate_csp(nonce)}
        else:
            return f"Method not allowed: {request.method}", 405, {}

    def favicon(self) -> Response:
        return send_from_directory(os.path.join(self.__app.root_path, "static", "images"), "favicon.ico", mimetype="image/vnd.microsoft.icon")

    def __register_routes(self) -> None:
        self.__app.add_url_rule("/", "index", self.index)
        self.__app.add_url_rule("/favicon.ico", "favicon", self.favicon)

    @staticmethod
    def __generate_csp(nonce: str) -> str:
        # It would be nice to be able to include `style-src 'nonce-{nonce}'`.
        # Unfortunately, the CodeMirror editor adds a lot of `style` attributes/elements.
        # As such, `style-src-elem` with the nonce and a set of hashes + `style-src-attr` with 'unsafe-hashes' and a set of hashes is a good compromise.
        # At the moment, removing all the style attributes from the CodeMirror editor is not an option.
        return f"base-uri 'self'; frame-ancestors 'self'; object-src 'none'; script-src 'nonce-{nonce}'; style-src-elem 'nonce-{nonce}' {' '.join(WebAgentServer.__get_inline_styles_hashes())}; style-src-attr 'nonce-{nonce}' 'unsafe-hashes' {' '.join(WebAgentServer.__get_attr_styles_hashes())}; upgrade-insecure-requests;"

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
