#!/usr/bin/env bash

source static/shell/common.sh

alias build_command='dependencies_comand && prod_build_command'

FULL_DEPLOY=true
DEV_DEPLOY=false

deploy_and_run_web_agent $0 $1
