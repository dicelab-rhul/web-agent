from django.http import HttpRequest, HttpResponse
from django.http.request import HttpHeaders

from typing import Optional, Callable


class AllowRequestsMiddleware():
    def __init__(self, get_response: Callable[..., HttpResponse]) -> None:
        self.__sec_fetch_site: str = "sec-fetch-site"
        self.__sec_fetch_mode: str = "sec-fetch-mode"
        self.__sec_fetch_dest: str = "sec-fetch-dest"
        self.__get_response: Callable[..., HttpResponse] = get_response

    def __call__(self, request: HttpRequest) -> Optional[HttpResponse]:
        if request.method is None or not self.__allow_request(request.method, request.headers):
            print(f"Request blocked: {request.method} {request.path} {request.headers}")
            return HttpResponse(status=403) # TODO: add the appropriate headers.
        else:
            return self.__get_response(request)

    def __allow_request(self, method: Optional[str], headers: HttpHeaders) -> bool:
        assert method is not None

        # Allow requests from browsers which don't send Fetch Metadata
        if self.__sec_fetch_site not in headers:
            return True

        # Allow same-origin, same-site, and browser-initiated requests
        if headers[self.__sec_fetch_site] in ("same-origin", "same-site", "none"):
            return True

        # Allow simple top-level navigations except <object> and <embed>
        if headers[self.__sec_fetch_mode] == "navigate" and method == "GET" and headers[self.__sec_fetch_dest] not in ("object", "embed"):
            return True

        # Reject all other requests that are cross-site and not navigational
        return False
