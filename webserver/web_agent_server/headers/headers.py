from django.conf import settings
from django.http import HttpRequest

from webserver.web_agent_server.headers.reporting_groups import ReportingGroups

from typing import Any
from json import dumps


class Headers():
    @staticmethod
    def get_common_headers(request: HttpRequest) -> dict[str, Any]:
        return {
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "SAMEORIGIN",
            "Permissions-Policy": "accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), serial=(), sync-xhr=(), usb=(), xr-spatial-tracking=()",
            "Referrer-Policy": "same-origin",
            "Server": "Web-Agent",
            "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload"
        } | Headers.__get_x_xss_protection_if_safari(request=request) | Headers.__get_report_to_if_necessary()

    # TODO: remove this once safari drops support for X-XSS-Protection.
    @staticmethod
    def __get_x_xss_protection_if_safari(request: HttpRequest) -> dict[str, Any]:
        x_xss_protection: dict[str, str] = {"X-XSS-Protection": "1; mode=block"}
        relevant_headers_names: list[str] = ["HTTP_USER_AGENT", "HTTP_SEC_CH_UA", "HTTP_SEC_CH_UA_FULL_VERSION_LIST"]

        if any("Safari" in request.META.get(header, "") for header in relevant_headers_names):
            return x_xss_protection
        else:
            return {}

    @staticmethod
    def __get_report_to_if_necessary() -> dict[str, Any]:
        if not settings.REPORT_TO_ACTIVE:
            return {}
        else:
            return {"Report-To": ", ".join(dumps(group) for group in ReportingGroups.get_report_to_header_dicts())}

    # TODO: keep an eye on `report-to` support in Firefox and bugfixes in Chromium, so that `report-uri` can be replaced by `report-to`.
    # `report-uri` is deprecated, but `report-to` is broken in Chromium (see https://bugs.chromium.org/p/chromium/issues/detail?id=1098885), and not supported by Firefox.
    @staticmethod
    def get_report_directive(group_name: str, report_to: bool=False, report_uri: bool=True) -> str:
        if not report_to and not report_uri:
            return ""
        elif report_to:
            return f" report-to {group_name};"
        else:
            return f" report-uri {settings.REPORTING_ENDPOINTS[group_name]};"

    @staticmethod
    def get_coop_report_directive(report_to: bool=False, report_uri: bool=True) -> str:
        return Headers.get_report_directive(group_name="coop", report_to=report_to, report_uri=report_uri)

    @staticmethod
    def get_coep_report_directive(report_to: bool=False, report_uri: bool=True) -> str:
        return Headers.get_report_directive(group_name="coep", report_to=report_to, report_uri=report_uri)

    @staticmethod
    def get_csp_report_directive(report_to: bool=False, report_uri: bool=True) -> str:
        return Headers.get_report_directive(group_name="csp", report_to=report_to, report_uri=report_uri)
