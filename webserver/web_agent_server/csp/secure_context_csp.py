from .csp import CSP


class SecureContextCSP(CSP):
    def __init__(self) -> None:
        super(SecureContextCSP, self).__init__()

    def generate(self, nonce: str) -> str:
        return "upgrade-insecure-requests"
