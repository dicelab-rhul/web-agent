from django.urls import include, path, re_path, URLResolver
from django.conf import settings

RELEVANT_PATHS: list[str] = ["", "favicon.ico"] + [reporting_endpoint[1:] for reporting_endpoint in settings.REPORTING_ENDPOINTS.values()]
RELEVANT_RE_PATHS: list[str] = [r"^static/", r"^.*"]

urlpatterns: list[URLResolver] = [path(p, include("web_agent_server.urls")) for p in RELEVANT_PATHS] + [re_path(p, include("web_agent_server.urls")) for p in RELEVANT_RE_PATHS]
