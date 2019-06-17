/**
 * @file webpack.server.js
 * ----------
 * File Created: Saturday, 8th June 2019 11:18:55 am
 * Last Modified: Saturday, 8th June 2019 3:22:02 pm
 * Modified By: kangkai (kakcool@qq.com)
 * ----------
 * @author kangkai
 * @description webpack服务端配置信息
 */

const path = require("path");
const webpack = require("webpack");
const commonWebpack = require("./webpack.common");
const nodeExternals = require('webpack-node-externals')

const output = {
  path: path.join(__dirname, "../dist"),
  filename: 'server.js',
  publicPath: "/assets/",
  libraryTarget: "commonjs2"
};

const config = commonWebpack.getConfig();
config.entry = path.join(__dirname, "../src/server.js");
config.target = "node";
config.output = output;
config.externals = [nodeExternals()];

module.exports = config;