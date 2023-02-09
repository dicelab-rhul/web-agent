#!/bin/bash

SCRIPT_DIR=$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)

rm -rf dist/js/*

echo "Deploying ${SCRIPT_DIR}..."
npm run dev-build
echo "Done."
