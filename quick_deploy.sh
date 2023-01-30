#!/bin/bash

# This script is used to deploy the whole project.
# It is used for quick deployment, i.e., it assumes that all the dependencies are already installed.

for dir in envs/*/; do
    cd $dir
    ./quick_deploy.sh
    cd ../..
done

# The experimental module is not to be deployed on the main page.
# cd experimental
# ./quick_deploy.sh
# cd ..

cd teleora_editor
./quick_deploy.sh
cd ..

echo "Deploying the main page..."
npm run build
echo "Done."

./run.sh
