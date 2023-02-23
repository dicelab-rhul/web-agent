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
from django.urls import include, path, URLResolver
from django.conf import settings

urlpatterns: list[URLResolver] = [
    path("", include("web_agent_server.urls")),
    path(settings.CSP_ENDPOINT[1:], include("web_agent_server.urls"))
]
