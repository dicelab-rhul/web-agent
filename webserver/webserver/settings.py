from pathlib import Path
from secrets import token_urlsafe

import os


# Build paths
BASE_DIR: Path = Path(__file__).resolve().parent.parent
WEB_AGENT_DIR: Path = Path(BASE_DIR, "web_agent_server")

# Secret key
SECRET_KEY_FILE: Path = Path(BASE_DIR, "secret_key.txt")

def __load_or_generate_key() -> str:
    key: str = __load_secret_key()

    if key == "":
        __create_secret_key_file()

        key = __load_secret_key()

    return key

def __load_secret_key() -> str:
    try:
        if SECRET_KEY_FILE.exists():
            with open(SECRET_KEY_FILE, "r") as f:
                return f.read()
        else:
            return ""
    except Exception as e:
        raise IOError("Could not load the secret key file.") from e

def __create_secret_key_file() -> None:
    try:
        if not SECRET_KEY_FILE.exists():
            with open(SECRET_KEY_FILE, "w") as f:
                f.write(token_urlsafe(64))
    except Exception as e:
        raise IOError("Could not create the secret key file.") from e

SECRET_KEY: str = __load_or_generate_key()

# Debug
DEBUG: bool = False

# Allowed hosts
# TODO: change this if necessary.
ALLOWED_HOSTS: list[str] = ["127.0.0.1", "localhost"]

# Application definition
INSTALLED_APPS: list[str] = [
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django_extensions"
]

# Middleware
MIDDLEWARE: list[str] = [
    "webserver.middleware.allow_requests.AllowRequestsMiddleware",
    "webserver.middleware.cookie_flags.CookieFlagsMiddleware",
    "webserver.middleware.csp_manager.CSPMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "webserver.middleware.security_headers.SecurityHeadersMiddleware",
    "webserver.middleware.internal_errors_handler.InternalServerErrorMiddleware"
]

# URLs
ROOT_URLCONF: str = "webserver.webserver.urls"

# Templates
TEMPLATES: list[dict[str, str | list[str] | bool | dict[str, list[str]]]] = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.abspath(os.path.join(WEB_AGENT_DIR, "templates"))],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

# Database
DATABASES: dict[str, dict[str, str | Path]] = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

# Password validation
AUTH_PASSWORD_VALIDATORS: list[dict[str, str]] = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

# Internationalization
LANGUAGE_CODE: str = "en-gb"
TIME_ZONE: str = "UTC"
USE_I18N: bool = True
USE_L10N: bool = True
USE_TZ: bool = True

# Static files (CSS, JavaScript, Images)
STATIC_URL = "/static/"
STATICFILES_DIRS = [os.path.join(WEB_AGENT_DIR, "static")]

# Default primary key field type
DEFAULT_AUTO_FIELD: str = "django.db.models.BigAutoField"

# Endpoints for the Reporting API.
REPORTING_ENDPOINTS: dict[str, str] = {
    "csp": "/csp-endpoint",
    "coep": "/coep-endpoint",
    "coop": "/coop-endpoint"
}

# If `False``, the `Report-To` header will not be sent, and all the `report-to` directives will be replaced by `report-uri` directives.
REPORT_TO_ACTIVE: bool = True

# Cookies
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SESSION_EXPIRE_AT_BROWSER_CLOSE = True
