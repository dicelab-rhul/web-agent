"""
ASGI config for webserver project.

It exposes the ASGI callable as a module-level variable named ``application``.
"""

import os

from django.core.asgi import get_asgi_application
from django.core.handlers.asgi import ASGIHandler

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "webserver.settings")

application: ASGIHandler = get_asgi_application()
