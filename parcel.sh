#!/usr/bin/env bash

if ! command -v parcel &> /dev/null; then
    npm prune && npm install
fi

parcel index.html envs/example-env-ts/src/main.ts envs/vacuumworld-ts/src/main.ts teleora_editor/src/main.ts --dist-dir parcel_dist
