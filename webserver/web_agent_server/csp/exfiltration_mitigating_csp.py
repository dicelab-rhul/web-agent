from .csp import CSP


class ExfiltrationMitigatingCSP(CSP):
    def __init__(self) -> None:
        super(ExfiltrationMitigatingCSP, self).__init__()

        self.__whitelist_dict: dict[str, str] = {
            "script-src": CSP.CSP_SELF,

            # TODO: keep an eye on `report-to` support in Firefox and bugfixes in Chromium, so that `report-uri` can be replaced by `report-to`.
            # `report-uri` is deprecated, but `report-to` is broken in Chromium (see https://bugs.chromium.org/p/chromium/issues/detail?id=1098885), and not supported by Firefox.
            "report-uri": self.get_csp_endpoint_route()
        }

    def generate(self, nonce: str) -> str:
        return "; ".join(["{} {}".format(key, value.format(nonce=nonce)) for key, value in self.__whitelist_dict.items()])
