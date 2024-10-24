#!/bin/bash -x

cp .env ./build
cd build
npm ci --omit="dev"
