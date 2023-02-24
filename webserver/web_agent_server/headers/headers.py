from django.conf import settings


class Headers():
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
