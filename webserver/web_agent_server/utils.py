from django.http import HttpRequest
from django.template.response import TemplateResponse

from web_agent_server.headers.headers import Headers


def http403(request: HttpRequest) -> TemplateResponse:
    return __http_code(request=request, code=403)

def http404(request: HttpRequest) -> TemplateResponse:
    return __http_code(request=request, code=404)

def http500(request: HttpRequest) -> TemplateResponse:
    return __http_code(request=request, code=500)

def __http_code(request: HttpRequest, code: int) -> TemplateResponse:
    response: TemplateResponse = TemplateResponse(request=request, template=f"{code}.html", context={"nonce_value": "{nonce_value}"})

    response["Server"] = Headers.get_common_headers(request=request)["Server"]

    return response
