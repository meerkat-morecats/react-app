rm -rf ../src/dist
export NODE_ENV=production
webpack --config=webpack/webpack.ssr.js --progess --quiet