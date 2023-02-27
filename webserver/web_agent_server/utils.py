from django.http import HttpRequest, HttpResponse

from web_agent_server.headers.headers import Headers


def http403(request: HttpRequest) -> HttpResponse:
    response: HttpResponse = HttpResponse(status=403)

    response["Server"] = Headers.get_common_headers(request=request)["Server"]

    return response

def http404(request: HttpRequest) -> HttpResponse:
    response: HttpResponse = HttpResponse(status=404)

    response["Server"] = Headers.get_common_headers(request=request)["Server"]

    return response
