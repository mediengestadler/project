#!/bin/bash

SCRIPT_DIR=`dirname "$(readlink -f $0)"`;

cd "${SCRIPT_DIR}/script/frontend/";

bower install

npm install

grunt

cd "${SCRIPT_DIR}/public/";

ln -s ../script/

ln -s ../src/

ln -s ../build/