from django.conf import settings
from typing import Any


class ReportingGroups():
    @staticmethod
    def get_report_to_header_name() -> str:
        return "Report-To"

    @staticmethod
    def get_report_to_header_dicts() -> list[dict[str, Any]]:
        return [
            {
                "group": group_name,
                "max_age": 10886400,
                "endpoints":
                    [
                        {
                            "url": f"https://127.0.0.1:8000{group_path}"
                        }
                    ],
                "include_subdomains": "true"
            } for group_name, group_path in settings.REPORTING_ENDPOINTS.items()
        ]
