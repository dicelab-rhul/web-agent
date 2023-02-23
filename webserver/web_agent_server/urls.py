from django.urls import path
from django.conf import settings

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path(settings.CSP_ENDPOINT[1:], views.csp_endpoint, name="csp_endpoint")
]
