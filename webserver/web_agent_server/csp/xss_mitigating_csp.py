from .csp import CSP


class XSSMitigatingCSP(CSP):
    # `report-uri` is on by default, unless report_to is set to True.
    def __init__(self, report_to: bool=False) -> None:
        super(XSSMitigatingCSP, self).__init__(report_to=report_to)

        self.__inline_styles_hashes: list[str] = [
            "'sha256-qVvPl0vp1SoXFHXl+VfRXjyKNAjlZvJDeXDMCnMbSeM='", # CodeMirror-injected style.
            "'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='", # CodeMirror-injected style.
            "'sha256-dd4J3UnQShsOmqcYi4vN5BT3mGZB/0fOwBA72rsguKc='", # :host { display: none }
        ]

        self.__attr_styles_hashes: list[str] = [
            "'sha256-qokx773Tl626SVTuhxQSccr23ixTSkbnBXWRqLjyuIg='", # CodeMirror-injected style.
        ]

        # It would be nice to be able to include `style-src 'nonce-{nonce}'`.
        # Unfortunately, the CodeMirror editor adds a lot of `style` attributes/elements.
        # As such, `style-src-elem` with the nonce and a set of hashes + `style-src-attr` with 'unsafe-hashes' and a set of hashes is a good compromise.
        # At the moment, removing all the style attributes from the CodeMirror editor is not an option.
        # At the end of the day, not having to use `'strict-dynamic'` is good enough.
        self.__csp_dict: dict[str, str] = {
            "base-uri": CSP.CSP_NONE,
            "object-src": CSP.CSP_NONE,
            "script-src": "'nonce-{nonce}' 'report-sample'",
            "style-src-elem": "'nonce-{nonce}' {hashes} 'report-sample'".format(nonce="{nonce}" , hashes=" ".join(self.__inline_styles_hashes)),
            "style-src-attr": "'nonce-{nonce}' 'unsafe-hashes' {hashes} 'report-sample'".format(nonce="{nonce}" , hashes=" ".join(self.__attr_styles_hashes)),

            # TODO: keep an eye on `report-to` support in Firefox and bugfixes in Chromium, so that `report-uri` can be replaced by `report-to`.
            # `report-uri` is deprecated, but `report-to` is broken in Chromium (see https://bugs.chromium.org/p/chromium/issues/detail?id=1098885), and not supported by Firefox.
            self.get_report_directive_name(): self.get_report_directive_value()
        }

    def generate(self, nonce: str) -> str:
        return "; ".join(["{} {}".format(key, value.format(nonce=nonce)) for key, value in self.__csp_dict.items()])
