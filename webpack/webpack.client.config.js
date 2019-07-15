
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin, } = require('clean-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const {SRC,DIST,CWD,}  = require('./PATH');
const {getConfig,ENV_DEVELOPMENT,ENV_PRODUCTION,} = require('./webpack.common');


console.log(path.join(DIST,'assets'));

module.exports = merge(getConfig(),{
    mode:'development',
    target:'web',
    entry:path.join(SRC,'app.js'),
    output:{
        path:path.join(DIST,'assets'),
        publicPath:'/assets/',
        filename:'[name].[hash].js',
        chunkFilename:'[name].[hash].chunk.js',
    },
    stats:'errors-only',
    devtool:'cheap-module-eval-source-map',
    watch:true,
    watchOptions:{
        aggregateTimeout:1000,
        poll:2000,
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(
            {
                filename: '[name][hash].css',
                chunkFilename: '[id].css',
            }
        ),
    ],
});