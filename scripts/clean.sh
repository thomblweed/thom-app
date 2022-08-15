#!/usr/bin/env bash

if [ ! -d "public" ]; then
    mkdir public
fi

find public -name '*.js*' -type f -delete
find public -name '*.css*' -type f -delete
find public -name '*.woff*' -type f -delete
find public -name '*.html*' -type f -delete
