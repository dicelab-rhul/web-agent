from typing import Any


class ReportsLogs():
    csp_reports: list[dict[str, Any]] = []
    coop_reports: list[dict[str, Any]] = []
    coep_reports: list[dict[str, Any]] = []
    expect_ct_reports: list[dict[str, Any]] = []
    MAX_LENGTH: int = 100

    @staticmethod
    def add_csp_report(report: dict[str, Any] | None) -> bool:
        if report is not None and ReportsLogs.__interesting(report):
            ReportsLogs.__append_and_shift(report, ReportsLogs.csp_reports)

            return True
        else:
            return False

    @staticmethod
    def add_coop_report(report: dict[str, Any] | None) -> bool:
        if report is not None and ReportsLogs.__interesting(report):
            ReportsLogs.__append_and_shift(report, ReportsLogs.coop_reports)

            return True
        else:
            return False

    @staticmethod
    def add_coep_report(report: dict[str, Any] | None) -> bool:
        if report is not None and ReportsLogs.__interesting(report):
            ReportsLogs.__append_and_shift(report, ReportsLogs.coep_reports)

            return True
        else:
            return False

    @staticmethod
    def add_expect_ct_report(report: dict[str, Any] | None) -> bool:
        if report is not None and ReportsLogs.__interesting(report):
            ReportsLogs.__append_and_shift(report, ReportsLogs.expect_ct_reports)

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
    def get_expect_ct_reports() -> list[dict[str, Any]]:
        return ReportsLogs.expect_ct_reports

    @staticmethod
    def __interesting(report: dict[str, Any]) -> bool:
        # TODO: add more filters.
        return True

    @staticmethod
    def __append_and_shift(report: dict[str, Any], sink: list[dict[str, Any]]) -> None:
        sink.append(report)

        if len(sink) > ReportsLogs.MAX_LENGTH:
            sink.pop(0)
