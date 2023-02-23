from django.http import HttpRequest, HttpResponse
from django.conf import settings

from web_agent_server.headers.document_headers import DocumentHeaders
from web_agent_server.headers.static_subresources_headers import StaticSubResourcesHeaders

from typing import Callable, Any


class SecurityHeadersMiddleware():
    def __init__(self, get_response: Callable[..., HttpResponse]) -> None:
        self.__get_response: Callable[..., HttpResponse] = get_response

    def __call__(self, request: HttpRequest) -> HttpResponse:
        headers: dict[str, Any] = self.__load_headers(request)
        response: HttpResponse = self.__get_response(request)

        for header, value in headers.items():
            response[header] = value

        return response

    def __load_headers(self, request: HttpRequest) -> dict[str, Any]:
        if request.path.startswith(settings.STATIC_URL):
            return StaticSubResourcesHeaders().get_headers()
        else:
            return DocumentHeaders().get_headers()
