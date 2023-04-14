#!/usr/bin/env bash

# This script is used to deploy the whole project.
# It is used for quick deployment, i.e., it assumes that all the dependencies and X.509 certificates are already installed.

source static/shell/common.sh

FULL_DEPLOY=false
DEV_DEPLOY=false

deploy_and_run_web_agent $0 $1
