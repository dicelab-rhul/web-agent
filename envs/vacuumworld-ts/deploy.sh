#!/bin/bash

SCRIPT_DIR=$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)

rm -rf dist/js/*

echo "Deploying ${SCRIPT_DIR}..."
npm prune
npm install
npm run build
echo "Done."
