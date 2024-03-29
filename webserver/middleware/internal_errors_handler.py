from django.http import HttpRequest, HttpResponse
from django.template.response import TemplateResponse

from webserver.web_agent_server.views import handler500

from typing import Callable


class InternalServerErrorMiddleware():
    def __init__(self, get_response: Callable[..., HttpResponse]) -> None:
        self.__get_response: Callable[..., HttpResponse] = get_response

    def __call__(self, request: HttpRequest) -> HttpResponse:
        try:
            return self.__get_response(request)
        except Exception:
            return handler500(request=request)

    def process_exception(self, request: HttpRequest, _: Exception) -> TemplateResponse:
        return handler500(request=request)