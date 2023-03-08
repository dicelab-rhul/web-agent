from django.http import HttpRequest

from typing import Any

from webserver.web_agent_server.headers.headers import Headers


class StaticSubResourcesHeaders(Headers):
    REPORT_GROUP: str = "default"

    @staticmethod
    def get_headers(request: HttpRequest, report_to: bool=False, report_uri: bool=True) -> dict[str, Any]:
        return Headers.get_common_headers(request=request) | {
            "Access-Control-Allow-Origin": "*",
            "Cross-Origin-Resource-Policy": "cross-origin",
            "Timing-Allow-Origin": "*",
            "Cross-Origin-Opener-Policy": f"same-origin{Headers.get_coop_report_directive(report_to=report_to, report_uri=report_uri)}"
        }
