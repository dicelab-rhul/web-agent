#!/bin/bash

# This script is used to deploy the whole project.
# It is used for quick deployment, i.e., it assumes that all the dependencies are already installed.

for dir in envs/*/; do
    cd $dir
    ./quick_dev_deploy.sh
    mkdir -p ../../static/$dir
    cp -r dist ../../static/$dir/
    cp -r res ../../static/$dir/
    cd -
done

# The experimental module is not to be deployed on the main page.
# cd experimental
# ./quick_dev_deploy.sh
# cd -

cd teleora_editor
./quick_dev_deploy.sh
mkdir -p ../static/teleora_editor
cp -r dist ../static/teleora_editor/
cd -

echo "Deploying the main page..."
./discover_envs.py
npm run dev-build
echo "Done."

./run.sh
