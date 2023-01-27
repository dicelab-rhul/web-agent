#!/bin/bash

# This script is used to re-deploy `vacuumworld-ts` only.

cd envs/vacuumworld-ts && npm run build && cd - && live-server
