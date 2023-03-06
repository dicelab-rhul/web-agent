from typing import Any, Optional


# TODO: use a database in production.
class ReportsLogs():
    csp_reports: list[dict[str, Any]] = []
    coop_reports: list[dict[str, Any]] = []
    coep_reports: list[dict[str, Any]] = []
    MAX_LENGTH: int = 100

    @staticmethod
    def add_csp_report(report: Optional[dict[str, Any]]) -> bool:
        if report is not None and ReportsLogs.__csp_report_interesting(report):
            ReportsLogs.__append_and_shift(report, ReportsLogs.csp_reports)

            return True
        else:
            return False

    @staticmethod
    def add_coop_report(report: Optional[dict[str, Any]]) -> bool:
        if report is not None and ReportsLogs.__coop_report_interesting(report):
            ReportsLogs.__append_and_shift(report, ReportsLogs.coop_reports)

            return True
        else:
            return False

    @staticmethod
    def add_coep_report(report: Optional[dict[str, Any]]) -> bool:
        if report is not None and ReportsLogs.__coep_report_interesting(report):
            ReportsLogs.__append_and_shift(report, ReportsLogs.coep_reports)

            return True
        else:
            return False

    @staticmethod
    def get_csp_reports() -> list[dict[str, Any]]:
        return ReportsLogs.csp_reports

    @staticmethod
    def get_coop_reports() -> list[dict[str, Any]]:
        return ReportsLogs.coop_reports

    @staticmethod
    def get_coep_reports() -> list[dict[str, Any]]:
        return ReportsLogs.coep_reports

    @staticmethod
    def __csp_report_interesting(report: dict[str, Any]) -> bool:
        return not ReportsLogs.__is_csp_report_caused_by_extension(report)

    @staticmethod
    def __coop_report_interesting(report: dict[str, Any]) -> bool:
        return True # TODO: filter out uninteresting reports.

    @staticmethod
    def __coep_report_interesting(report: dict[str, Any]) -> bool:
        return True # TODO: filter out uninteresting reports.

    @staticmethod
    def __is_csp_report_caused_by_extension(report: dict[str, Any]) -> bool:
        csp_report_key: str = "csp-report"
        source_file_key: str = "source-file"
        moz_extension: str = "moz-extension"

        return csp_report_key in report and source_file_key in report[csp_report_key] and report[csp_report_key][source_file_key] == moz_extension

    @staticmethod
    def __append_and_shift(report: dict[str, Any], sink: list[dict[str, Any]]) -> None:
        sink.append(report)

        if len(sink) > ReportsLogs.MAX_LENGTH:
            sink.pop(0)
