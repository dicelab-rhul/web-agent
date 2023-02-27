from .csp import CSP


class DOMXSSMitigatingCSP(CSP):
    # `report-uri` is on by default, unless report_to is set to True.
    def __init__(self, report_to: bool=False) -> None:
        super(DOMXSSMitigatingCSP, self).__init__(report_to=report_to)

        # It would be nice to be able to include `style-src 'nonce-{nonce}'`.
        # Unfortunately, the CodeMirror editor adds a lot of `style` attributes/elements.
        # As such, `style-src-elem` with the nonce and a set of hashes + `style-src-attr` with 'unsafe-hashes' and a set of hashes is a good compromise.
        # At the moment, removing all the style attributes from the CodeMirror editor is not an option.
        # At the end of the day, not having to use `'strict-dynamic'` is good enough.
        self.__csp_dict: dict[str, str] = {
            "trusted-types": "webagent dompurify literal-string default",

            # TODO: keep an eye on TypeScript support for non-string values in DOM sinks, so the `require-trusted-types-for` directive can be included.
            # Unfortunately, the following directive will cause issues with TypeScript (see https://github.com/microsoft/TypeScript/issues/30024).
            # "require-trusted-types-for": "'script'"

            # TODO: keep an eye on `report-to` support in Firefox and bugfixes in Chromium, so that `report-uri` can be replaced by `report-to`.
            # `report-uri` is deprecated, but `report-to` is broken in Chromium (see https://bugs.chromium.org/p/chromium/issues/detail?id=1098885), and not supported by Firefox.
            self.get_report_directive_name(): self.get_report_directive_value()
        }

    def generate(self, nonce: str) -> str:
        return "; ".join(["{} {}".format(key, value.format(nonce=nonce)) for key, value in self.__csp_dict.items()])
