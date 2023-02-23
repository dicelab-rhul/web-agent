from django.urls import path, re_path
from django.conf import settings

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path(settings.CSP_ENDPOINT[1:], views.csp_endpoint, name="csp_endpoint"),
    re_path(r"^static/", views.static_files, name="static_files")
]
