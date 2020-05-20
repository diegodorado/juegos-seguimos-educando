#!/bin/bash

# ensure directories
mkdir -p dist/emojis
# clean dir
rm -rf dist/emojis/*
# build emojis
cd emojis && ember build && cd ..
# copy build
cp -r emojis/dist/* dist/emojis
# push to github
gh-pages -d dist

