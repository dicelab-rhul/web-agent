#!/usr/bin/env bash

mkdir -p parcel_dist/static/css/
mkdir -p parcel_dist/static/images/
mkdir -p parcel_dist/static/js/
mkdir -p parcel_dist/static/json/
mkdir -p parcel_dist/static/envs/example-env-ts/dist/
mkdir -p parcel_dist/static/envs/vacuumworld-ts/dist/
mkdir -p parcel_dist/static/teleora_editor/dist/
mkdir -p parcel_dist/envs/example-env-ts/src/
mkdir -p parcel_dist/envs/vacuumworld-ts/src/
mkdir -p parcel_dist/envs/vacuumworld-ts/res/
mkdir -p parcel_dist/teleora_editor/

cd parcel_dist/static/envs/example-env-ts/dist
ln -s ../../../../envs/example-env-ts/src js
ln -s ../../../../envs/example-env-ts/dist/css css
cd - &>/dev/null
cd parcel_dist/static/envs/vacuumworld-ts/dist
ln -s ../../../../envs/vacuumworld-ts/src js
ln -s ../../../../envs/vacuumworld-ts/dist/css css
cd - &>/dev/null
cd parcel_dist/static/teleora_editor/dist
ln -s ../../../teleora_editor/src js
ln -s ../../../teleora_editor/dist/css css
cd - &>/dev/null

cp favicon.ico parcel_dist/static/images/
cp -r envs/example-env-ts/res parcel_dist/static/envs/example-env-ts
cp -r envs/vacuumworld-ts/res parcel_dist/static/envs/vacuumworld-ts

parcel envs/example-env-ts/src/main.ts envs/example-env-ts/dist/css/style.css envs/vacuumworld-ts/src/main.ts envs/vacuumworld-ts/dist/css/style.css teleora_editor/src/main.ts teleora_editor/dist/css/style.css static/css/index.css index.html --dist-dir parcel_dist
