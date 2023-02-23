from typing import Any

from django.conf import settings


class StaticSubResourcesHeaders():
    def __init__(self) -> None:
        # Multiple CSPs are added by a different middleware.
        self.__headers: dict[str, Any] = {
            "Report-To": {
                "group": "default",
                "max_age": 10886400,
                "endpoints":
                    [
                        {
                            "url": f"{settings.CSP_ENDPOINT}"
                        }
                    ],
                "include_subdomains": "true"
            },
            "Access-Control-Allow-Origin": "*",
            "Cross-Origin-Resource-Policy": "cross-origin",
            "Timing-Allow-Origin": "*",
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "SAMEORIGIN",
            "X-XSS-Protection": "1; mode=block", # TODO: is this still worth it? Only Safari supports it, and it is notoriously unreliable.
            "Permissions-Policy": "accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), serial=(), sync-xhr=(), usb=(), xr-spatial-tracking=()",
            "Referrer-Policy": "same-origin",
            "Server": "Web-Agent",
            "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",

            # TODO: uncomment when served over HTTPS with a real certificate.
            # "Expect-CT": "enforce, max-age=63072000, report-uri=\"/expect-ct-endpoint\""
        }

    def get_headers(self) -> dict[str, Any]:
        return self.__headers
