const { CleanWebpackPlugin, } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const { SRC, DIST, ENV_DEVELOPMENT,ENV_PRODUCTION,} = require('./PATH');
const { getConfig, IS_PRD, } = require('./webpack.common');

const devConfig = {
  mode:ENV_DEVELOPMENT,
  output:{
    filename:'[name].js',
    chunkFilename:'[name].chunk.js',
  },
  devtool:'cheap-module-eval-source-map',
  watch:true,
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ],
};

const prodConfig = {
  mode:ENV_PRODUCTION,
  output:{
    filename:'[name].[hash].js',
    chunkFilename:'[name].[hash].chunk.js',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    // 'react-router-dom':'ReactRouterDom',
  },
  devtool:'eval',
  plugins:[],
};

module.exports = merge(getConfig(), {
  mode: 'development',
  target: 'web',
  entry: path.join(SRC, 'client/app.js'),
  output: {
    path: path.join(DIST, 'assets'),
    publicPath: '/assets/',
  },

  stats: 'errors-only',
  optimization: {
    minimize: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },

  },
  plugins:[
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin({cleanStaleWebpackAssets: true,}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(SRC, 'client/index.html'),
      title: 'development',
      favicon: path.join(SRC,'client/static/favicon.ico'),
    }),],
},IS_PRD ? prodConfig : devConfig);
