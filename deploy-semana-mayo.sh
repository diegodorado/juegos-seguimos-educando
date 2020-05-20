#!/bin/bash

# ensure directories
mkdir -p dist/semana-mayo
# clean dir
rm -rf dist/semana-mayo/*
# build semana-mayo
cd semana-mayo && ember build && cd ..
# copy build
cp -r semana-mayo/dist/* dist/semana-mayo
# push to github
gh-pages -d dist

