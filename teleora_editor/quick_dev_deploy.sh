#!/bin/bash

# This script is used to deploy the Teleora editor.
# It is used for quick deployment, i.e., it assumes that all the dependencies are already installed.

SCRIPT_DIR=$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)

echo "Deploying ${SCRIPT_DIR}..."
npm run dev-build
echo "Done."
