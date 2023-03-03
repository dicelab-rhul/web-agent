from django.urls import path, re_path, URLPattern
from django.conf import settings
from django.template.response import TemplateResponse
from django.http import HttpRequest

from . import views

from typing import Callable


urlpatterns: list[URLPattern] = [
    path("", views.index, name="index"),
    re_path(r"^static/", views.static_files, name="static_files"),
    path("favicon.ico", views.favicon, name="favicon")
] + [
    path(route=reporting_endpoint[1:], view=views.__dict__[reporting_endpoint[1:].replace("-", "_")], name=reporting_endpoint[1:]) for reporting_endpoint in settings.REPORTING_ENDPOINTS.values()
] + [
    re_path(r"^.*", views.handler404, name="handler404")
]

handler400: Callable[[HttpRequest], TemplateResponse] = views.handler400
handler403: Callable[[HttpRequest], TemplateResponse] = views.handler403
handler404: Callable[[HttpRequest], TemplateResponse] = views.handler404
handler406: Callable[[HttpRequest], TemplateResponse] = views.handler406
handler408: Callable[[HttpRequest], TemplateResponse] = views.handler408
handler500: Callable[[HttpRequest], TemplateResponse] = views.handler500
