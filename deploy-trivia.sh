#!/bin/bash

# ensure directories
mkdir -p dist/trivia
# clean dir
rm -rf dist/trivia/*
# build trivia
cd trivia && ember build && cd ..
# copy build
cp -r trivia/dist/* dist/trivia
# push to github
gh-pages -d dist

