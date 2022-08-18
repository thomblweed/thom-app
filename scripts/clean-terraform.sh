#!/usr/bin/env bash

if [ -d terraform/aws/.terraform ]; then
    rm -rf terraform/aws/.terraform
fi

if [ -d terraform/backend/.terraform ]; then
    rm -rf terraform/backend/.terraform
fi

find terraform* -name '*.tfstate*' -type f -delete
find terraform* -name '*.tfplan' -type f -delete
