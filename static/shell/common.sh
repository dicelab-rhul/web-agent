# Global variable, so that it is easy to switch bwtween package managers (e.g., yarn vs. npm).
PACKAGE_MANAGER=yarn
LOCK_FILE=yarn.lock
YML_RC_FILE=.yarnrc.yml

function check_for_package_manager() {
    if ! command -v ${PACKAGE_MANAGER} &> /dev/null; then
        echo "${PACKAGE_MANAGER} could not be found."
        echo "Please install ${PACKAGE_MANAGER} and try again."
        echo "Exiting..."
        exit 1
    fi
}

function print_no_venv_message() {
    echo "No Python3 Virtual Environment active."
    echo "Either activate a Python3 Virtual Environment or run 'source virtualenv_manager.sh' to create and activate one."
    echo "If you wish to use you own Python3 Virtual Environment, make sure it has django, django-extensions, Twisted[tls, http2], daphne installed."
    echo "Then you can run './$(basename $1) [--launch]'."
    echo "Exiting..."
}

function check_for_venv() {
    INVENV=$(python3 -c 'import sys; print ("1" if sys.prefix != sys.base_prefix else "0")')

    # Is there an active Python3 Virtual Environment?
    if [[ ${INVENV} -eq 0 ]]; then
        # Alternatively, is there an active Conda Environment?
        if [[ ${CONDA_DEFAULT_ENV} == "" ]] || [[ ${CONDA_DEFAULT_ENV} == "base" ]]; then
            print_no_venv_message $1

            exit 1
        fi
    fi
}

function remove_previously_deployed_files_from_webserver() {
    rm -rf static/js/*
    rm -rf static/json/envs.json
    rm -rf webserver/web_agent_server/static/*
}

function copy_env_files_to_webserver() {
    DIR=$1

    # Copy the environment files to the webserver directory
    mkdir -p ../../webserver/web_agent_server/static/${DIR}/
    cp -r dist ../../webserver/web_agent_server/static/${DIR}/
    find ../../webserver/web_agent_server/static/${DIR}/ -name "*.LICENSE.txt" -type f | xargs rm -f
    cp -r res ../../webserver/web_agent_server/static/${DIR}/
}

function deploy_sub_module_with_package_manager() {
    if [[ ${FULL_DEPLOY} == true ]]; then
        rm -f ${YML_RC_FILE}

        ${PACKAGE_MANAGER} set version latest

        touch ${LOCK_FILE}

        ${PACKAGE_MANAGER} install
    fi

    if [[ ${DEV_DEPLOY} == true ]]; then
        ${PACKAGE_MANAGER} run dev-build
    else
        ${PACKAGE_MANAGER} run build
    fi
}

function deploy_sub_module() {
    DIR=$1

    echo "Deploying ${DIR}..."

    deploy_sub_module_with_package_manager

    echo "Done."
    echo
}

function deploy_envs() {
    for DIR in envs/*/; do
        cd ${DIR}

        rm -rf dist/js/*

        deploy_sub_module ${DIR}
        copy_env_files_to_webserver ${DIR}

        cd - &> /dev/null
    done
}

function copy_teleora_files_to_webserver() {
    DIR=$1

    mkdir -p ../webserver/web_agent_server/static/${DIR}/
    cp -r dist ../webserver/web_agent_server/static/${DIR}/
    find ../webserver/web_agent_server/static/${DIR}/ -name "*.LICENSE.txt" -type f | xargs rm -f
}

function deploy_teleora_editor() {
    DIR="teleora_editor"

    cd ${DIR}

    deploy_sub_module ${DIR}
    copy_teleora_files_to_webserver ${DIR}

    cd - &> /dev/null
}

function build_main_page() {
    echo "Deploying the main page..."

    deploy_sub_module_with_package_manager
    copy_main_page_files_to_webserver

    echo "Done."
    echo
}

function copy_main_page_files_to_webserver() {
    cp -r static/css/ webserver/web_agent_server/static/
    cp -r static/images/ webserver/web_agent_server/static/
    cp -r static/js/ webserver/web_agent_server/static/
    cp -r static/json/ webserver/web_agent_server/static/
    find static/ -name "*.LICENSE.txt" -type f | xargs rm -f
    find webserver/web_agent_server/static/ -name "*.LICENSE.txt" -type f | xargs rm -f
}

function generate_keys_and_certs() {
    cd webserver/tls

    ./gen_keys_and_certs.sh

    cd - &> /dev/null
}

function post_build() {
    if [[ ${FULL_DEPLOY} == true ]]; then
        generate_keys_and_certs

        python3 -m pip install -r webserver/requirements.txt
    fi
}

function deploy_web_agent() {
    DEPLOYMENT_SCRIPT=$1

    # Is there an active Python3 Virtual Environment?
    check_for_venv ${DEPLOYMENT_SCRIPT}

    echo "Python3 Virtual Environment active, proceeding..."

    remove_previously_deployed_files_from_webserver

    python3 discover_envs.py

    deploy_envs
    deploy_teleora_editor
    build_main_page
    post_build

    killall -9 ${PACKAGE_MANAGER} &> /dev/null
}

function deploy_and_run_web_agent() {
    DEPLOYMENT_SCRIPT=$1
    LAUNCH=$2

    check_for_package_manager
    deploy_web_agent ${DEPLOYMENT_SCRIPT}

    ./run.sh ${LAUNCH}
}
