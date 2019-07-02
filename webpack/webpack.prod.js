/**
 * @file webpack.prod.js
 * ----------
 * File Created: Saturday, 8th June 2019 11:18:55 am
 * Last Modified: Saturday, 8th June 2019 3:22:02 pm
 * Modified By: kangkai (kakcool@qq.com)
 * ----------
 * @author kangkai
 * @description webpack生产环境配置信息 客户端渲染页面
 */

const path = require('path');
// const webpack = require("webpack");
const commonWebpack = require('./webpack.common');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const output = {
  path: path.join(__dirname, '../dist/assets'),
  publicPath: '/assets/',
  chunkFilename: '[name].bundle.js',

};

const config = commonWebpack.getConfig();
config.entry = path.join(__dirname, '../src/app.js');
config.target = 'web';
config.stats = 'errors-only';
config.output = output;
config.optimization = {
  // minimize: process.env.NODE_ENV === ENV_PRODUCTION,
  minimizer: [new OptimizeCSSAssetsPlugin(),],
  mergeDuplicateChunks: true,
  // splitChunks: {
  //   chunks: 'all'
  // }
};
config.plugins.push(
  new MiniCssExtractPlugin({
    filename: '[name][hash].css',
    chunkFilename: '[id].css',
  })
);
module.exports = config;
