from django.http import HttpRequest, HttpResponse

from typing import Optional, Callable


class CookieFlagsMiddleware():
    def __init__(self, get_response: Callable[..., HttpResponse]) -> None:
        self.__get_response: Callable[..., HttpResponse] = get_response

    def __call__(self, request: HttpRequest) -> Optional[HttpResponse]:
        response: HttpResponse = self.__get_response(request)

        for cookie in response.cookies.values():
            cookie["httponly"] = True
            cookie["samesite"] = "Strict"
            cookie["secure"] = True

        return response
