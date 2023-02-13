#!/bin/bash

# This script is used to deploy the whole project.
# It is used for quick deployment, i.e., it assumes that all the dependencies are already installed.

rm -rf static/envs/*
rm -rf static/js/*
rm -rf static/json/envs.json
rm -rf static/teleora_editor/*

python3 discover_envs.py

for dir in envs/*/; do
    cd $dir
    ./quick_deploy.sh
    mkdir -p ../../static/$dir
    find dist ! -name "*.LICENSE.txt" | xargs cp -r -t ../../static/$dir/
    cp -r res ../../static/$dir/
    cd -
done

# The experimental module is not to be deployed on the main page.
# cd experimental
# ./quick_deploy.sh
# cd -

cd teleora_editor
./quick_deploy.sh
mkdir -p ../static/teleora_editor/
find dist ! -name "*.LICENSE.txt" | xargs cp -r -t ../static/teleora_editor/
cd -

echo "Deploying the main page..."
npm run build
find static -name "*.LICENSE.txt" -type f | xargs rm -f
echo "Done."

./run.sh
