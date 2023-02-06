#!/bin/bash

SCRIPT_DIR=$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)

echo "Deploying ${SCRIPT_DIR}..."
npm prune
npm install
npm run dev-build
echo "Done."
