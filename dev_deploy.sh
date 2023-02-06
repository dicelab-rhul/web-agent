#!/bin/bash

for dir in envs/*/; do
    cd $dir
    ./dev_deploy.sh
    cd ../..
done

# The experimental module is not to be deployed on the main page.
# cd experimental
# ./deploy.sh
# cd ..

cd teleora_editor
./dev_deploy.sh
cd ..

echo "Deploying the main page..."
./discover_envs.py
npm prune
npm install
npm run dev-build
echo "Done."

./run.sh
