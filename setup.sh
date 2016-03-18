#!/bin/bash

SCRIPT_DIR=`dirname "$(readlink -f $0)"`;

cd "${SCRIPT_DIR}/client/";

npm install

grunt

cd "${SCRIPT_DIR}/server/public/";

ln -s ../../client/build/