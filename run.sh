#!/usr/bin/env bash

source static/shell/common.sh

check_for_venv $0

echo "Python3 Virtual Environment active, proceeding..."

PROTOCOL="https"
HOST="127.0.0.1"
PORT=8000
APPLICATION_PATH="webserver.webserver.asgi:application"
OPENER=""

for OPENER_CANDIDATE in "xdg-open" "open"; do
    if command -v ${OPENER_CANDIDATE} &> /dev/null; then
        OPENER=${OPENER_CANDIDATE}

        break
    fi
done

function open_browser() {
    if [ "${OPENER}" == "" ]; then
        echo "'xdg-open' and 'open' could not be found. Please open ${PROTOCOL}://${HOST}:${PORT} in your browser manually."
    else
        ${OPENER} ${PROTOCOL}://${HOST}:${PORT} &
    fi
}

cd webserver

if [ ! -d "tls" ]; then
    PROTOCOL="http"
    echo "tls not found, using HTTP protocol."
fi

cd - &> /dev/null

if ! command -v python3 -m pip show django &> /dev/null; then
    echo "django could not be found. Please install it (python3 -m pip install django) before running Web-Agent."

    exit
elif ! command -v python3 -m pip show django-extensions &> /dev/null; then
    echo "django-extensions could not be found. Please install it (python3 -m pip install django-extensions) before running Web-Agent."

    exit
elif ! command -v daphne &> /dev/null; then
    echo "daphne could not be found. Please install it (python3 -m pip install daphne) before running Web-Agent."

    exit
elif [ ${PROTOCOL} == "https" ]; then
    cd webserver/tls

    python3 find_key_and_cert.py

    cd - &> /dev/null

    KEY_PATH="webserver/tls/active/key.pem"
    CERT_PATH="webserver/tls/active/cert.pem"

    if [ "${1}" == "--launch" ]; then
        sleep 2 && open_browser &
    fi

    if [ ! -f "${KEY_PATH}" ] || [ ! -f "${CERT_PATH}" ]; then
        echo "Could not find a valid certificate and key. The content will be served in plain HTTP."
        daphne -b ${HOST} -p ${PORT} ${APPLICATION_PATH}
    else
        daphne -e ssl:${PORT}:privateKey=${KEY_PATH}:certKey=${CERT_PATH} ${APPLICATION_PATH}
    fi
elif [ ${PROTOCOL} == "http" ]; then
    if [ "${1}" == "--launch" ]; then
        sleep 2 && open_browser &
    fi

    daphne -b ${HOST} -p ${PORT} ${APPLICATION_PATH}
fi
