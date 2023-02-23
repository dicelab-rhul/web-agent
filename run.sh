#!/bin/bash

PROTOCOL="https"

cd webserver

if ! command -v python3 -m pip show django &> /dev/null; then
    python3 -m pip install django
fi

if [ ! -d "tls" ]; then
    PROTOCOL="http"
elif ! command -v python3 -m pip show django-extensions &> /dev/null; then
    python3 -m pip install django-extensions
fi

if ! command -v python3 -m pip show django &> /dev/null; then
    echo "django could not be found. Please install it (python3 -m pip install django) before running Web-Agent."
    exit
elif ! command -v python3 -m pip show django-extensions &> /dev/null; then
    echo "django-extensions could not be found. Please install it (python3 -m pip install django-extensions) before running Web-Agent."
    exit
elif [ ${PROTOCOL} == "https" ]; then
    sleep 2 && open ${PROTOCOL}://127.0.0.1:8000 &
    python3 manage.py runserver_plus --cert tls/secp256r1-cert.pem --key-file tls/secp256r1-key.pem --insecure
elif [ ${PROTOCOL} == "http" ]; then
    sleep 2 && open ${PROTOCOL}://127.0.0.1:8000 &
    python3 manage.py runserver --insecure
fi
