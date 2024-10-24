#!/bin/bash -x

tar -czf build.tar.gz ./build
scp -i ../lightsail_key.pem build.tar.gz ubuntu@18.138.65.194:/home/ubuntu/
