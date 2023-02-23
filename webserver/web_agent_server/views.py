# Create your views here.

from django.http import HttpRequest, HttpResponse, JsonResponse
from django.template.response import TemplateResponse
from django.views.decorators.csrf import csrf_exempt

from json import loads

from .csp.reports import CSPReportsLog


def index(request: HttpRequest) -> HttpResponse:
    return TemplateResponse(request=request, template="index.html", context={"nonce_value": "{nonce_value}"})

# We don't need to check for CSRF tokens here because this page is meant to be public for research purposes.
@csrf_exempt
def csp_endpoint(request: HttpRequest) -> JsonResponse | HttpResponse:
    if request.method == "GET":
        return JsonResponse({"reports": CSPReportsLog.get_reports()})
    elif request.method == "POST":
        # TODO: validate the request body and filter out uninteresting reports.
        result: bool = CSPReportsLog.add_report(loads(request.body))

        return JsonResponse({"result": result})
    else:
        return HttpResponse(status=403)
