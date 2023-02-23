#!/bin/bash

PROTOCOL="https"
HOST="127.0.0.1"
PORT="8000"

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
    sleep 2 && open ${PROTOCOL}://${HOST}:${PORT} &
    # TODO: go through all the possible keys/certs and try to find one that works.
    python3 manage.py runserver_plus --cert tls/secp256r1-cert.pem --key-file tls/secp256r1-key.pem --nostatic
elif [ ${PROTOCOL} == "http" ]; then
    sleep 2 && open ${PROTOCOL}://${HOST}:${PORT} &
    python3 manage.py runserver --nostatic
fi
