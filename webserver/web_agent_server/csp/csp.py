from django.conf import settings


class CSP():
    CSP_SELF: str = "'self'"
    CSP_NONE: str = "'none'"

    def __init__(self, report_to: bool) -> None:
        if report_to:
            self.__report_directive: str = "report-to"
        else:
            self.__report_directive: str = "report-uri"

    def generate(self, nonce: str) -> str:
        raise NotImplementedError(f"Abstract method. FYI, the provided nonce is: {nonce}.")

    def get_report_directive_name(self) -> str:
        return self.__report_directive

    def get_report_directive_value(self) -> str:
        if self.__report_directive == "report-to":
            return "csp"
        elif self.__report_directive == "report-uri":
            return settings.REPORTING_ENDPOINTS["csp"]
        else:
            raise NotImplementedError(f"Unknown report directive: {self.__report_directive}.")
