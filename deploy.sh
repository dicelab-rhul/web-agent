#!/usr/bin/env bash
INVENV=$(python3 -c 'import sys; print ("1" if sys.prefix != sys.base_prefix else "0")')

# Is there an activate virtual environment?
if [[ ${INVENV} -eq 0 ]]; then
    # Alternatively, is there an active conda environment?
    if [[ ${CONDA_DEFAULT_ENV} == "" ]] || [[ ${CONDA_DEFAULT_ENV} == "base" ]]; then
        echo "No virtual environment active."
        echo "Either activate a virtual environment or run 'source virtualenv_manager.sh' to create and activate one."
        echo "If you wish to use you own virtual environment, make sure it has django, django-extensions, Twisted[tls, http2], daphne installed."
        echo "Then you can run './deploy.sh [--launch]' to deploy and start the Web-Agent server.'"
        echo "Exiting..."

        exit 1
    fi
fi

echo "Python virtual environment active, proceeding..."

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
