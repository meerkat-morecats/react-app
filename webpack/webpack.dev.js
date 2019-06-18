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
const path = require('path');
const config = commonWebpack.getConfig();

config.entry = path.join(__dirname, '../src/app.js');
config.target = 'web';
config.output = {
  path: path.join(__dirname, '../dist/assets'),
  publicPath: '/assets/',
};
config.devtool = 'inline-source-map';
config.devServer = {
  host: '127.0.0.1',
  port: 3000,
};

module.exports = config;
