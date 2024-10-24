#!/bin/bash -x

if [ "$USER" != "www-user" ]; then
    echo "This script must be run by user 'www-user'! Exiting..."
    exit 1
fi

rm -rf ./build.old
mv ./build ./build.old
mkdir ./build
tar -zxf ./build.tar.gz ./build
mkdir ./build/tmp
cp .env ./build/
echo "cd build and update NODE_ENV to 'production'!"

