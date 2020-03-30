#!/bin/bash

# ensure directories
mkdir -p dist/malvinas
# clean dir
rm -rf dist/malvinas/*
# build malvinas
cd malvinas && yarn build && cd ..
# copy build
cp -r malvinas/dist/* dist/malvinas
# push to github
gh-pages -d dist

