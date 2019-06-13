const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonWebpack = require("./webpack.common");

const output = {
  path: path.join(__dirname, "../dist"),
  filename:'ssr-bundle.js',
  publicPath: "/assets/",
  libraryTarget: "commonjs2"
};

const config = commonWebpack.getConfig();
config.entry = path.join(__dirname, "../src/staticRoute.js");
config.target = "node";
config.output = output;


module.exports = config;
