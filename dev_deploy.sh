#!/usr/bin/env bash

source static/shell/common.sh

alias build_command='dependencies_comand && dev_build_command'

FULL_DEPLOY=true
DEV_DEPLOY=true

deploy_and_run_web_agent $0 $1
