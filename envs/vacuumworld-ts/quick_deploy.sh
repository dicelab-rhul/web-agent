#!/bin/bash

SCRIPT_DIR=$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)

echo "Deploying ${SCRIPT_DIR}..."
npm run build
echo "Done."
