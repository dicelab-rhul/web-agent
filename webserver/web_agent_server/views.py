# Create your views here.

from django.http import HttpRequest, HttpResponse, JsonResponse, Http404, HttpResponseNotModified, FileResponse
from django.template.response import TemplateResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.static import was_modified_since
from django.conf import settings
from django.utils._os import safe_join
from django.utils.http import http_date

from json import loads
from posixpath import normpath
from pathlib import Path
from mimetypes import guess_type

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

def static_files(request: HttpRequest) -> HttpResponse | FileResponse:
    path: str = normpath(request.path).lstrip("/")
    fullpath: Path = Path(safe_join(settings.STATICFILES_DIRS[0].replace("/static", ""), path))

    if fullpath.is_dir():
        raise Http404("Directory listing is not allowed.")

    if not fullpath.exists():
        raise Http404(f"'{fullpath}' does not exist")

    # Respect the If-Modified-Since header.
    statobj = fullpath.stat()

    if not was_modified_since(request.META.get("HTTP_IF_MODIFIED_SINCE"), statobj.st_mtime):
        return HttpResponseNotModified()

    content_type, encoding = guess_type(str(fullpath))
    content_type = content_type or "application/octet-stream"
    response = FileResponse(fullpath.open("rb"), content_type=content_type)

    response["Last-Modified"] = http_date(statobj.st_mtime)

    if encoding:
        response["Content-Encoding"] = encoding

    return response
