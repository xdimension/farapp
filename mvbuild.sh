#!/bin/bash -x

if [ "$USER" != "ubuntu" ]; then
    echo "This script must be run by user 'ubuntu'! Exiting..."
    exit 1
fi

sudo mv ~/build.tar.gz ./
sudo chown www-user ./build.tar.gz
sudo chgrp www-data ./build.tar.gz
