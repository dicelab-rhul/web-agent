#!/usr/bin/env bash

if ! command -v parcel &> /dev/null; then
    echo "parcel could not be found. Please install it before deploying Web-Agent."

    exit
fi

PARCEL_DIST_DIR="parcel_dist"
PARCEL_CACHE_DIR=".parcel-cache"
EXAMPLE_ENV_DIR="envs/example-env-ts"
VACUUMWORLD_DIR="envs/vacuumworld-ts"
TELEORA_DIR="teleora_editor"

rm -rf ${PARCEL_CACHE_DIR} &>/dev/null
rm -rf ${EXAMPLE_ENV_DIR}/${PARCEL_CACHE_DIR} &>/dev/null
rm -rf ${VACUUMWORLD_DIR}/${PARCEL_CACHE_DIR} &>/dev/null
rm -rf ${TELEORA_DIR}/${PARCEL_CACHE_DIR} &>/dev/null
rm -rf ${PARCEL_DIST_DIR} &>/dev/null

mkdir -p ${PARCEL_DIST_DIR}

# This is necessary because `rm` is aliased to `rm -i` on some systems.
/bin/rm -rf ${PARCEL_DIST_DIR}/*

mkdir -p ${PARCEL_DIST_DIR}/static/css/
mkdir -p ${PARCEL_DIST_DIR}/static/images/
mkdir -p ${PARCEL_DIST_DIR}/static/js/
mkdir -p ${PARCEL_DIST_DIR}/static/json/
mkdir -p ${PARCEL_DIST_DIR}/static/${EXAMPLE_ENV_DIR}/dist/
mkdir -p ${PARCEL_DIST_DIR}/static/${VACUUMWORLD_DIR}/dist/
mkdir -p ${PARCEL_DIST_DIR}/static/${TELEORA_DIR}/dist/
mkdir -p ${PARCEL_DIST_DIR}/${EXAMPLE_ENV_DIR}/src/
mkdir -p ${PARCEL_DIST_DIR}/${VACUUMWORLD_DIR}/src/
mkdir -p ${PARCEL_DIST_DIR}/${VACUUMWORLD_DIR}/res/
mkdir -p ${PARCEL_DIST_DIR}/${TELEORA_DIR}/

cd ${PARCEL_DIST_DIR}/static/${EXAMPLE_ENV_DIR}/dist
ln -s ../../../../${EXAMPLE_ENV_DIR}/src js
ln -s ../../../../${EXAMPLE_ENV_DIR}/dist/css css
cd - &>/dev/null
cd ${PARCEL_DIST_DIR}/static/${VACUUMWORLD_DIR}/dist
ln -s ../../../../${VACUUMWORLD_DIR}/src js
ln -s ../../../../${VACUUMWORLD_DIR}/dist/css css
cd - &>/dev/null
cd ${PARCEL_DIST_DIR}/static/${TELEORA_DIR}/dist
ln -s ../../../${TELEORA_DIR}/src js
ln -s ../../../${TELEORA_DIR}/dist/css css
cd - &>/dev/null

cp favicon.ico ${PARCEL_DIST_DIR}/static/images/
cp -r ${EXAMPLE_ENV_DIR}/res ${PARCEL_DIST_DIR}/static/${EXAMPLE_ENV_DIR}
cp -r ${VACUUMWORLD_DIR}/res ${PARCEL_DIST_DIR}/static/${VACUUMWORLD_DIR}

parcel ${EXAMPLE_ENV_DIR}/src/main.ts ${EXAMPLE_ENV_DIR}/dist/css/style.css ${VACUUMWORLD_DIR}/src/main.ts ${VACUUMWORLD_DIR}/dist/css/style.css ${TELEORA_DIR}/src/main.ts ${TELEORA_DIR}/dist/css/style.css static/css/index.css index.html --dist-dir ${PARCEL_DIST_DIR}
