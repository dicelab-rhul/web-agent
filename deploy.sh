#!/bin/bash

for dir in envs/*/; do
    cd $dir
    ./deploy.sh
    cd ../..
done

# The experimental module is not to be deployed on the main page.
# cd experimental
# ./deploy.sh
# cd ..

cd teleora_editor
./deploy.sh
cd ..

echo "Deploying the main page..."
./discover_envs.py
npm prune
npm install
npm run build
echo "Done."

./run.sh
