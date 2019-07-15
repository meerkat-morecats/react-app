/**
 * @file app.js
 * ----------
 * File Created: Wednesday, 12th June 2019 10:11:09 pm
 * Last Modified: Wednesday, 12th June 2019 10:46:44 pm
 * Modified By: kangkai (kakcool@qq.com)
 * ----------
 * @author kangkai
 * @description 浏览器渲染入口
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { App, } from './routes';
import './common/scss/main.scss';

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(<App />, document.getElementById('root'));
} else {
  ReactDOM.hydrate(<App />, document.getElementById('root'));
}
