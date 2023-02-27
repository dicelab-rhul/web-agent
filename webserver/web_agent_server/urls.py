from django.urls import path, re_path, URLPattern
from django.conf import settings

from . import views

urlpatterns: list[URLPattern] = [
    path("", views.index, name="index"),
    re_path(r"^static/", views.static_files, name="static_files"),
    path("favicon.ico", views.favicon, name="favicon")
] + [path(route=reporting_endpoint[1:], view=views.__dict__[reporting_endpoint[1:].replace("-", "_")], name=reporting_endpoint[1:]) for reporting_endpoint in settings.REPORTING_ENDPOINTS.values()]
