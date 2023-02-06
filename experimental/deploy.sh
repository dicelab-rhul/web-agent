#!/bin/bash

echo "Deploying the experimental module..."
npm prune
npm install
npm run build
echo "Done."
