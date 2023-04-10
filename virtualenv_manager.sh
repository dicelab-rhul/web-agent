#!/usr/bin/env bash

VENV_NAME="webagent_teleora"
ENVS_DIR="${HOME}/envs"
VENV_PATH="${ENVS_DIR}/${VENV_NAME}"

if [ ! -d "${VENV_PATH}" ]; then # create venv environment
    mkdir -p ${ENVS_DIR}
    python3 -m venv ${VENV_PATH}
    source ${VENV_PATH}/bin/activate
    python3 -m pip install -r webserver/requirements.txt
fi

source ${VENV_PATH}/bin/activate
