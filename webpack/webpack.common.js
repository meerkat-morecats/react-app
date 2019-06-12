/**
 * @file webpack.common.js
 * ----------
 * File Created: Saturday, 8th June 2019 11:18:55 am
 * Last Modified: Saturday, 8th June 2019 3:22:02 pm
 * Modified By: kangkai (kakcool@qq.com)
 * ----------
 * @author kangkai
 * @description 基础的webpack配置
 */

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require("webpack");
const packageInfo = require("../package");

const ENV_PRODUCTION = "production";
const ENV_DEVELOPMENT = "development";

exports.ENV_DEVELOPMENT = ENV_DEVELOPMENT;
exports.ENV_DEVELOPMENT = ENV_DEVELOPMENT;

exports.getConfig = function() {
  const cssLoader =
    process.env.NODE_ENV === ENV_PRODUCTION
      ? [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      : [
          "css-hot-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ];
  const sassLoader =
    process.env.NODE_ENV === ENV_PRODUCTION
      ? [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      : [
          "css-hot-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ];
  const config = {
    mode:
      process.env.NODE_ENV === ENV_PRODUCTION
        ? ENV_PRODUCTION
        : ENV_DEVELOPMENT,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "eslint-loader",
              options: {
                quiet: true
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: cssLoader
        },
        {
          test: /\.sass$/,
          use: sassLoader
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: ["file-loader"]
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: ["url-loader"]
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          use: ["file-loader", "image-webpack-loader"]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        },
        "process.package": {
          version: JSON.stringify(packageInfo.version)
        }
      })
    ]
  };
  if (process.env.NODE_ENV === ENV_PRODUCTION) {
    config.plugins.push(
      new webpack.BannerPlugin({
        banner:
          "react-ssr version : " + packageInfo.version + " , file : [file]"
      })
    );

    config.optimization = {
      // minimize: process.env.NODE_ENV === ENV_PRODUCTION,
      minimizer: [new OptimizeCSSAssetsPlugin()],
      mergeDuplicateChunks: true
    };
  } else {
    config.devtool = "cheap-module-eval-source-map";
  }
  return config;
};
