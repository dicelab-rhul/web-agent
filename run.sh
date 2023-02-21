#!/bin/bash

if ! command -v flask &> /dev/null; then
    python3 -m pip install flask
fi

if ! command -v flask &> /dev/null; then
    echo "Flask could not be found. Please install flask (python3 -m pip install flask) before running Web-Agent."
    exit
else
    python3 web_server.py
fi
