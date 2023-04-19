#!/usr/bin/env bash

if ! command -v parcel &> /dev/null; then
    npm prune && npm install
fi

cp favicon.ico parcel_dist
sleep 2 && cd parcel_dist && live-server &
parcel watch
