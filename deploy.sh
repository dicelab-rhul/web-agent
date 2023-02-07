#!/bin/bash

for dir in envs/*/; do
    cd $dir
    ./deploy.sh
    mkdir -p ../../static/$dir
    cp -r dist ../../static/$dir/
    cp -r res ../../static/$dir/
    cd -
done

# The experimental module is not to be deployed on the main page.
# cd experimental
# ./deploy.sh
# cd -

cd teleora_editor
./deploy.sh
mkdir -p ../static/teleora_editor
cp -r dist ../static/teleora_editor/
cd -

echo "Deploying the main page..."
./discover_envs.py
npm prune
npm install
npm run build
echo "Done."

./run.sh
