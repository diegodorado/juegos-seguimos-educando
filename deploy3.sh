#!/bin/bash

# ensure directories
mkdir -p dist/sopa
# clean dir
rm -rf dist/sopa/*
# build corona
cd sopa && ember build && cd ..
# copy build
cp -r sopa/dist/* dist/sopa
# push to github
gh-pages -d dist

