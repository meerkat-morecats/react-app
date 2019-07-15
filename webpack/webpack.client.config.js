const { CleanWebpackPlugin, } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const { SRC, DIST, CWD, } = require('./PATH');
const { getConfig, IS_PRD, } = require('./webpack.common');

const isDevelope = IS_PRD;

module.exports = merge(getConfig(), {
  mode: 'development',
  target: 'web',
  entry: path.join(SRC, 'app.js'),
  output: {
    path: path.join(DIST, 'assets'),
    publicPath: '/assets/',
    filename: isDevelope ? '[name].js' : '[name].[hash].js',
    chunkFilename: isDevelope ? '[name].js' : '[name].[hash].chunk.js',
  },
  stats: 'errors-only',
  devtool: 'cheap-module-eval-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 1000,
    poll: 2000,
  },
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
    }),
    // new MiniCssExtractPlugin({
    //   filename: isDevelope ? '[name].css' : '[name].[hash].css',
    //   chunkFilename: isDevelope ? '[id].css' : '[id].[hash].css',
    // }),
  ],
});
