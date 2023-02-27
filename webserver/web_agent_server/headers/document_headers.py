from django.http import HttpRequest

from typing import Any

from web_agent_server.headers.headers import Headers


class DocumentHeaders(Headers):
    @staticmethod
    def get_headers(request: HttpRequest, report_to: bool=False, report_uri: bool=True) -> dict[str, Any]:
        return Headers.get_common_headers(request=request) | {
            "Cross-Origin-Opener-Policy": f"same-origin;{Headers.get_coop_report_directive(report_to=report_to, report_uri=report_uri)}",
            "Cross-Origin-Resource-Policy": f"same-origin",
            "Cross-Origin-Embedder-Policy": f"require-corp;{Headers.get_coep_report_directive(report_to=report_to, report_uri=report_uri)}",
            "Vary": "Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site, Sec-Fetch-User",

            # TODO: keep an eye on TypeScript support for non-string values in DOM sinks. so that this CSP can be enforced.
            # Also, see the comment above regarding `require-trusted-types-for` and TypeScript.
            "Content-Security-Policy-Report-Only": f"require-trusted-types-for 'script';{Headers.get_csp_report_directive(report_to=report_to, report_uri=report_uri)}"
        }
