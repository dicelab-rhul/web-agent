from typing import Any
from json import dumps

from web_agent_server.headers.headers import Headers
from web_agent_server.headers.reporting_groups import ReportingGroups


class DocumentHeaders(Headers):
    @staticmethod
    def get_headers(report_to: bool=False, report_uri: bool=True) -> dict[str, Any]:
        return {
            "Report-To": ", ".join(dumps(group) for group in ReportingGroups.get_report_to_header_dicts()),
            "Cross-Origin-Opener-Policy": f"same-origin;{Headers.get_coop_report_directive(report_to=report_to, report_uri=report_uri)}",
            "Cross-Origin-Resource-Policy": f"same-origin",
            "Cross-Origin-Embedder-Policy": f"require-corp;{Headers.get_coep_report_directive(report_to=report_to, report_uri=report_uri)}",
            "Vary": "Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site, Sec-Fetch-User",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "SAMEORIGIN",
            "X-XSS-Protection": "1; mode=block", # TODO: is this still worth it? Only Safari supports it, and it is notoriously unreliable.
            "Permissions-Policy": "accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), serial=(), sync-xhr=(), usb=(), xr-spatial-tracking=()",
            "Referrer-Policy": "same-origin",
            "Server": "Web-Agent",
            "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",

            # TODO: keep an eye on TypeScript support for non-string values in DOM sinks. so that this CSP can be enforced.
            # Also, see the comment above regarding `require-trusted-types-for` and TypeScript.
            "Content-Security-Policy-Report-Only": f"require-trusted-types-for 'script';{Headers.get_csp_report_directive(report_to=report_to, report_uri=report_uri)}"
        }
