#!/bin/bash

rm -rf static/envs/*
rm -rf static/js/*
rm -rf static/json/envs.json
rm -rf static/teleora_editor/*

python3 discover_envs.py

for dir in envs/*/; do
    cd $dir
    ./dev_deploy.sh
    mkdir -p ../../static/$dir
    cp -r dist ../../static/$dir/
    find ../../static/$dir/ -name "*.LICENSE.txt" -type f | xargs rm -f
    cp -r res ../../static/$dir/
    cd -
done

# The experimental module is not to be deployed on the main page.
# cd experimental
# ./dev_deploy.sh
# cd -

cd teleora_editor
./dev_deploy.sh
mkdir -p ../static/teleora_editor
cp -r dist ../static/teleora_editor/
find ../static/teleora_editor/ -name "*.LICENSE.txt" -type f | xargs rm -f
cd -

echo "Deploying the main page..."
npm prune
npm install
npm run dev-build
find static -name "*.LICENSE.txt" -type f | xargs rm -f
echo "Done."

cd tls
./gen_keys_and_certs.sh
cd -

./run.sh
