/**
 * @file webpack.prod.js
 * ----------
 * File Created: Saturday, 8th June 2019 11:18:55 am
 * Last Modified: Saturday, 8th June 2019 3:22:02 pm
 * Modified By: kangkai (kakcool@qq.com)
 * ----------
 * @author kangkai
 * @description webpack生产环境配置信息 服务端渲染页面
 */

const path = require("path");
// const webpack = require("webpack");
const commonWebpack = require("./webpack.common");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const output = {
  path: path.join(__dirname, "../dist/assets"),
  publicPath: "/assets/"
};

const config = commonWebpack.getConfig();
config.entry = path.join(__dirname, "../src/app.js");
config.target = "web";
config.output = output;
config.optimization = {
  // minimize: process.env.NODE_ENV === ENV_PRODUCTION,
  minimizer: [new OptimizeCSSAssetsPlugin()],
  mergeDuplicateChunks: true
};
module.exports = config;
