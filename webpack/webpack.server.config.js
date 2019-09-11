/**
 * @file webpack.server.config.js
 * ----------
 * File Created: Monday, 15th July 2019 9:25:02 pm
 * Last Modified: Monday, 15th July 2019 9:25:19 pm
 * Modified By: kangkai (kakcool@qq.com)
 * ----------
 * @author kangkai
 * @description webpack 服务端打包
 */

const path = require('path');
const EventHooksPlugin = require('event-hooks-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const nodemon = require('nodemon');
const { getConfig, IS_PRD,ENV_PRODUCTION ,ENV_DEVELOPMENT,} = require('./webpack.common');
const { SRC, DIST, } = require('./PATH');

let running = false;

module.exports = merge(getConfig(), {
  mode: IS_PRD ? ENV_PRODUCTION : ENV_DEVELOPMENT,
  entry: path.join(SRC, 'server/index.js'),
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(DIST),
    libraryTarget: 'commonjs2',
  },
  stats: 'errors-only',
  externals: [nodeExternals(),'*.css','*.scss',],
  plugins: [
    new EventHooksPlugin({
      done: () => {
        if (!IS_PRD) {
          if (!running) {
            running = true;
            // process.chdir(path.join(__dirname, '../dist'));
            // cp.exec("node server.js").stdout.pipe(process.stdout);
            nodemon({
              script: path.join(DIST, 'server.js'),
              delay: 2 * 1000,
              ignore: ['public/*', 'logs/*',],
            });
            // nodemon.on('start', function () {
            //     var url = 'http://127.0.0.1:3000';
            //     console.log(colors.green('\n Please access ' + url + ' in browser \n'));
            // });
          }
        }
      },
    }),
  ],
});
