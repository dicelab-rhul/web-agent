#!/bin/bash

INVENV=$(python3 -c 'import sys; print ("1" if sys.prefix != sys.base_prefix else "0")')

if [[ ${INVENV} -eq 0 ]] ; then
    echo "No virtual environment active, exiting..."

    exit 1
else
    echo "Virtualenv active, proceeding."
fi

rm -rf static/js/*
rm -rf static/json/envs.json
rm -rf webserver/web_agent_server/static/*

python3 discover_envs.py

for dir in envs/*/; do
    cd $dir

    ./deploy.sh
    mkdir -p ../../webserver/web_agent_server/static/$dir/
    cp -r dist ../../webserver/web_agent_server/static/$dir/
    find ../../webserver/web_agent_server/static/$dir/ -name "*.LICENSE.txt" -type f | xargs rm -f
    cp -r res ../../webserver/web_agent_server/static/$dir/

    cd - &> /dev/null
done

cd teleora_editor

./deploy.sh
mkdir -p ../webserver/web_agent_server/static/teleora_editor/
cp -r dist ../webserver/web_agent_server/static/teleora_editor/
find ../webserver/web_agent_server/static/teleora_editor/ -name "*.LICENSE.txt" -type f | xargs rm -f

cd - &> /dev/null

echo "Deploying the main page..."
npm prune
npm install
npm run build
cp -r static/css/ webserver/web_agent_server/static/
cp -r static/images/ webserver/web_agent_server/static/
cp -r static/js/ webserver/web_agent_server/static/
cp -r static/json/ webserver/web_agent_server/static/
find static/ -name "*.LICENSE.txt" -type f | xargs rm -f
find webserver/web_agent_server/static/ -name "*.LICENSE.txt" -type f | xargs rm -f
echo "Done."

cd webserver/tls

./gen_keys_and_certs.sh

cd - &> /dev/null

python3 -m pip install -r webserver/requirements.txt

./run.sh $1
