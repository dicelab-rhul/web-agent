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
        # Unfortunately, the CodeMirror editor library is full of scripts that add both inline style elements and style attributes without propagating the nonce.
        # As such, `style-src-elem` and `style-src-attr` cannot be used either.
        # Hashing all those scripts, and including them in `style-src` (or `style-src-elem`), would be a nightmare.
        return f"base-uri 'self', frame-ancestors 'self', object-src 'none'; script-src 'nonce-{nonce}'; upgrade-insecure-requests;"

    @staticmethod
    def __generate_csp_nonce() -> str:
        return token_urlsafe(32)


if __name__ == "__main__":
    server = WebAgentServer()

    server.run()
