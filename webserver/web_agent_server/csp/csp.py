from django.conf import settings


class CSP():
    CSP_SELF: str = "'self'"
    CSP_NONE: str = "'none'"

    def get_csp_endpoint_route(self) -> str:
        return settings.CSP_ENDPOINT

    def generate(self, nonce: str) -> str:
        raise NotImplementedError(f"Abstract method. FYI, the provided nonce is: {nonce}.")
