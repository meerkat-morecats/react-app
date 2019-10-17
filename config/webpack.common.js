/**
 * @file webpack.common.js
 * ----------
 * File Created: Saturday, 8th June 2019 11:18:55 am
 * Last Modified: Saturday, 8th June 2019 3:22:02 pm
 * Modified By: kangkai (kakcool@qq.com)
 * ----------
 * @author kangkai
 * @description webpack公共的配置信息
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');
const packageInfo = require('../package');

const ENV_PRODUCTION = 'production';
const ENV_DEVELOPMENT = 'development';
const IS_PRD = process.env.NODE_ENV.trim() === ENV_PRODUCTION;

exports.ENV_DEVELOPMENT = ENV_DEVELOPMENT;
exports.ENV_PRODUCTION = ENV_PRODUCTION;

exports.IS_PRD = IS_PRD;

exports.getConfig = function() {
  const cssLoader = IS_PRD
    ? [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader',]
    : [
      'css-hot-loader',
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
    ];
  const sassLoader = IS_PRD
    ? [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ]
    : [
      'css-hot-loader',
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ];
  const config = {
    mode: IS_PRD ? ENV_PRODUCTION : ENV_DEVELOPMENT,
    resolve: {
      extensions: ['.js', '.jsx', '.json',],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
            // {
            //   loader: 'eslint-loader',
            //   options: {
            //     quiet: true,
            //   },
            // },
          ],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: cssLoader,
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: sassLoader,
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: ['file-loader',],
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: ['url-loader',],
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          use: ['file-loader', 'image-webpack-loader',],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
        'process.package': {
          version: JSON.stringify(packageInfo.version),
        },
      }),
      new ProgressBarPlugin(),
      new MiniCssExtractPlugin({
        filename: IS_PRD ? '[name].[hash].css' : '[name].css',
        chunkFilename: IS_PRD ? '[id].[hash].css' : '[id].css',
      }),
    ],
  };
  return config;
};
