from typing import Any


class CSPReportsLog():
    reports: list[dict[str, Any]] = []
    MAX_LENGTH: int = 100

    @staticmethod
    def add_report(report: dict[str, Any] | None) -> bool:
        if report is not None and CSPReportsLog.__interesting(report):
            CSPReportsLog.__append_and_shift(report)

            return True
        else:
            return False

    @staticmethod
    def get_reports() -> list[dict[str, Any]]:
        return CSPReportsLog.reports

    @staticmethod
    def __interesting(report: dict[str, Any]) -> bool:
        # TODO: add more filters.
        if "source-file" in report["csp-report"] and report["csp-report"]["source-file"] == "moz-extension":
            return False
        else:
            return True

    @staticmethod
    def __append_and_shift(report: dict[str, Any]) -> None:
        CSPReportsLog.reports.append(report)

        if len(CSPReportsLog.reports) > CSPReportsLog.MAX_LENGTH:
            CSPReportsLog.reports.pop(0)
