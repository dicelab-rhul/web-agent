"""webserver URL Configuration

The `urlpatterns` list routes URLs to views.
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path("", views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path("", Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path("blog/", include("blog.urls"))
"""
from django.urls import include, path, re_path, URLResolver
from django.conf import settings

RELEVANT_PATHS: list[str] = ["", "favicon.ico"] + [reporting_endpoint[1:] for reporting_endpoint in settings.REPORTING_ENDPOINTS.values()]
RELEVANT_RE_PATHS: list[str] = [r"^static/", r"^.*"]

urlpatterns: list[URLResolver] = [path(p, include("web_agent_server.urls")) for p in RELEVANT_PATHS] + [re_path(p, include("web_agent_server.urls")) for p in RELEVANT_RE_PATHS]
