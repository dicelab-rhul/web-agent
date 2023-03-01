from django.http import HttpRequest, HttpResponse
from django.template.response import TemplateResponse

from web_agent_server.utils import http500

from typing import Callable


class InternalServerErrorMiddleware():
    def __init__(self, get_response: Callable[..., HttpResponse]) -> None:
        self.__get_response: Callable[..., HttpResponse] = get_response

    def __call__(self, request: HttpRequest) -> HttpResponse:
        try:
            return self.__get_response(request)
        except Exception:
            return http500(request=request)

    def process_exception(self, request: HttpRequest, _: Exception) -> TemplateResponse:
        return http500(request=request)