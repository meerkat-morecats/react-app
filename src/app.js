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
import {hydrate,render,} from 'react-dom';
// import { BrowserRouter, } from 'react-router-dom';
// import App from './components/App';
import './static/scss/main.scss';
// import routeConfig from './configuration/route.config';
import Home from './components/pages/Home';

hydrate(
  // <BrowserRouter>
  //   <App routes={routeConfig} />
  // </BrowserRouter>
  <Home />
  , document.getElementById('root'));

