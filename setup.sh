#!/bin/bash

SCRIPT_DIR=`dirname "$(readlink -f $0)"`;

cd "${SCRIPT_DIR}/client/";

npm install

grunt