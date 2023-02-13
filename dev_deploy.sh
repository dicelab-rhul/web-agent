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
    find dist ! -name "*.LICENSE.txt" -type f | xargs cp -t ../../static/$dir/
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
find dist ! -name "*.LICENSE.txt" -type f | xargs cp -t ../static/teleora_editor/
cd -

echo "Deploying the main page..."
npm prune
npm install
npm run dev-build
find static -name "*.LICENSE.txt" -type f | xargs rm -f
echo "Done."

./run.sh
