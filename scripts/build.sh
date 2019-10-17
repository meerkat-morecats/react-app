#!/bin/bash
sudo rm -rf dist/*
export NODE_ENV=production
webpack --config config/webpack.config.js --progess --quiet
