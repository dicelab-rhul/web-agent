#!/bin/bash

for dir in envs/*/; do
    cd $dir
    ./deploy.sh
    cd ../..
done

cd experimental
./deploy.sh
cd ..

echo "Deploying the main page..."
npm install
npm run build
echo "Done."

live-server
