#!/bin/bash
rm -rf dist/*
export NODE_ENV=production
webpack --config webpack/webpack.config.js --progess --quiet
