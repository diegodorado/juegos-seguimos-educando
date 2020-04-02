#!/bin/bash

# ensure directories
mkdir -p dist/corona
# clean dir
rm -rf dist/corona/*
# build corona
cd corona && ember build && cd ..
# copy build
cp -r corona/dist/* dist/corona
# push to github
gh-pages -d dist

