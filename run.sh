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
    if [ "${1}" == "--launch" ]; then
        sleep 2 && open ${PROTOCOL}://${HOST}:${PORT} &
    fi

    cd tls
    python3 find_key_and_cert.py
    cd -

    KEY_PATH="tls/active/cert.pem"
    CERT_PATH="tls/active/key.pem"
    if [ ! -f "${KEY_PATH}" ] || [ ! -f "${CERT_PATH}" ]; then
        echo "Could not find a valid certificate and key. The content will be served in plain HTTP."
        python3 manage.py runserver --nostatic
    else
        python3 manage.py runserver_plus --cert tls/active/cert.pem --key-file tls/active/key.pem --nostatic
    fi
elif [ ${PROTOCOL} == "http" ]; then
    if [ "${1}" == "--launch" ]; then
        sleep 2 && open ${PROTOCOL}://${HOST}:${PORT} &
    fi
    python3 manage.py runserver --nostatic
fi
