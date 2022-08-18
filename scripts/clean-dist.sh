#!/usr/bin/env bash

if [ ! -d "dist" ]; then
    mkdir dist
fi

find dist -name '*.js*' -type f -delete
find dist -name '*.css*' -type f -delete
find dist -name '*.woff*' -type f -delete
find dist -name '*.html*' -type f -delete
