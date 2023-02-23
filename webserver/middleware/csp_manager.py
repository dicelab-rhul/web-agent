from django.http import HttpRequest, HttpResponse, FileResponse, JsonResponse
from django.template.response import TemplateResponse

from web_agent_server.csp.csp import CSP
from web_agent_server.csp.xss_mitigating_csp import XSSMitigatingCSP
from web_agent_server.csp.dom_xss_mitigating_csp import DOMXSSMitigatingCSP
from web_agent_server.csp.exfiltration_mitigating_csp import ExfiltrationMitigatingCSP
from web_agent_server.csp.isolation_based_csp import IsolationBasedCSP
from web_agent_server.csp.secure_context_csp import SecureContextCSP

from typing import Optional, Callable
from secrets import token_urlsafe


class CSPMiddleware():
    def __init__(self, get_response: Callable[..., HttpResponse | TemplateResponse | FileResponse]) -> None:
        self.__get_response: Callable[..., HttpResponse | TemplateResponse | FileResponse] = get_response
        self.__csps: list[CSP] = [
            XSSMitigatingCSP(),
            DOMXSSMitigatingCSP(),
            ExfiltrationMitigatingCSP(),
            IsolationBasedCSP(),
            SecureContextCSP()
        ]

    def __call__(self, request: HttpRequest) -> Optional[HttpResponse | TemplateResponse | FileResponse]:
        self.__nonce: str = f"{token_urlsafe(32)}"

        response: HttpResponse | TemplateResponse | FileResponse = self.__get_response(request)

        if isinstance(response, TemplateResponse) and  response.context_data:
            response.context_data["nonce_value"] = self.__nonce

        if isinstance(response, (FileResponse, JsonResponse)):
            response["Content-Security-Policy"] = "sandbox"
        else:
            response["Content-Security-Policy"] = self.__generate_csp()

        return response

    def process_template_response(self, _: HttpRequest, response: TemplateResponse) -> HttpResponse:
        if response.context_data:
            response.context_data["nonce_value"] = self.__nonce

        response["Content-Security-Policy"] = self.__generate_csp()

        return response

    def __generate_csp(self) -> str:
        # Multiple indpendently enforced CSPs are separated by a comma.
        return ", ".join([f"{csp_.generate(nonce=self.__nonce)}" for csp_ in self.__csps])
