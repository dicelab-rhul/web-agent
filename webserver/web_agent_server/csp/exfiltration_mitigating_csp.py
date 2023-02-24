from .csp import CSP


class ExfiltrationMitigatingCSP(CSP):
    # `report-uri` is on by default, unless report_to is set to True.
    def __init__(self, report_to: bool=False) -> None:
        super(ExfiltrationMitigatingCSP, self).__init__(report_to=report_to)

        self.__whitelist_dict: dict[str, str] = {
            "script-src": CSP.CSP_SELF,
            "img-src": CSP.CSP_SELF,

            # TODO: keep an eye on `report-to` support in Firefox and bugfixes in Chromium, so that `report-uri` can be replaced by `report-to`.
            # `report-uri` is deprecated, but `report-to` is broken in Chromium (see https://bugs.chromium.org/p/chromium/issues/detail?id=1098885), and not supported by Firefox.
            self.get_report_directive_name(): self.get_report_directive_value()
        }

    def generate(self, nonce: str) -> str:
        return "; ".join(["{} {}".format(key, value.format(nonce=nonce)) for key, value in self.__whitelist_dict.items()])
