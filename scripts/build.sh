rm -rf dist
export NODE_ENV=production
webpack --config=webpack/webpack.server.js --progess --quiet
rm -rf dist/assets/*
webpack --config=webpack/webpack.prod.js --progess --quiet
