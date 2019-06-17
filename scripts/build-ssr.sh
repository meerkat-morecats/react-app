export NODE_ENV=production
webpack --config=webpack/webpack.server.js --progess --quiet
webpack --config=webpack/webpack.prod.js --progess --quiet
