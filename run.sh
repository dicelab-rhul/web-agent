#!/bin/bash

if ! command -v flask &> /dev/null; then
    echo "Flask could not be found. Please install flask (pip install flask) before running Web-Agent."
    exit
else
    ./web_server.py
fi
