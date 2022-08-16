#!/usr/bin/env bash

if [ ! -d "public" ]; then
    mkdir public
fi

find public -name '*.js*' -type f -delete
find public -name '*.css*' -type f -delete
find public -name '*.woff*' -type f -delete
find public -name '*.html*' -type f -delete

if [ -d terraform/aws/.terraform ]; then
    rm -rf terraform/aws/.terraform
fi

if [ -d terraform/backend/.terraform ]; then
    rm -rf terraform/backend/.terraform
fi

find terraform* -name '*.tfstate*' -type f -delete
find terraform* -name '*.tfplan' -type f -delete
