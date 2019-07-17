const { CleanWebpackPlugin, } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const { SRC, DIST, } = require('./PATH');
const { getConfig, IS_PRD, } = require('./webpack.common');

module.exports = merge(getConfig(), {
  mode: 'development',
  target: 'web',
  entry: path.join(SRC, 'client.js'),
  output: {
    path: path.join(DIST, 'assets'),
    publicPath: '/assets/',
    filename: !IS_PRD ? '[name].js' : '[name].[hash].js',
    chunkFilename: !IS_PRD ? '[name].js' : '[name].[hash].chunk.js',
  },
  stats: 'errors-only',
  devtool: IS_PRD?'eval':'cheap-module-eval-source-map',
  watch: !IS_PRD ,
  // watchOptions: IS_PRD ? undefined : {
  //   aggregateTimeout: 1000,
  //   poll: 2000,
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(SRC, 'public/index.html'),
      title: 'development',
      favicon: path.join(SRC,'public/favicon.ico'),
    }),
    // new MiniCssExtractPlugin({
    //   filename: !IS_PRD ? '[name].css' : '[name].[hash].css',
    //   chunkFilename: !IS_PRD ? '[id].css' : '[id].[hash].css',
    // }),
  ],
});
