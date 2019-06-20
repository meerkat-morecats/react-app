/**
 * @file webpack.dev.js
 * ----------
 * File Created: Saturday, 8th June 2019 11:18:55 am
 * Last Modified: Saturday, 8th June 2019 3:22:02 pm
 * Modified By: kangkai (kakcool@qq.com)
 * ----------
 * @author kangkai
 * @description webpack开发环境的配置信息
 */

const commonWebpack = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { clientEntry, templatePath, clientOutput } = require('./paths')

const config = commonWebpack.getConfig();

config.mode = 'development'
config.entry = clientEntry;
config.target = 'web';
config.output = {
  path: clientOutput,
};
config.stats = 'errors-only'
config.devtool = 'inline-source-map';
config.devServer = {
  contentBase: clientEntry,
  port: 3000,
};

config.plugins.push(
  new MiniCssExtractPlugin({
    filename: "[name][hash].css",
    chunkFilename: "[id].css"
  })
)
config.plugins.push(
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: templatePath
  })
)

module.exports = config;
