from django.http import HttpRequest
from django.template.response import TemplateResponse

from web_agent_server.headers.headers import Headers


def http403(request: HttpRequest) -> TemplateResponse:
    return __http_code(request=request, code=403, error="403 Forbidden")

def http404(request: HttpRequest) -> TemplateResponse:
    return __http_code(request=request, code=404, error="404 Not Found")

def http500(request: HttpRequest) -> TemplateResponse:
    return __http_code(request=request, code=500, error="500 Internal Server Error")

def __http_code(request: HttpRequest, code: int, error: str) -> TemplateResponse:
    response: TemplateResponse = TemplateResponse(request=request, template="error.html", context={"nonce_value": "{nonce_value}", "error": error})

    response.status_code = code

    response["Server"] = Headers.get_common_headers(request=request)["Server"]

    return response
