const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter, } =require('react-router-dom');
const path = require('path');
const logger = require('./utils/logger');
const fs = require('fs');
const App =require('../components/App');

// const history = require("connect-history-api-fallback");
const parser = require('body-parser');

const favicon = require('serve-favicon');

const app = express();
const ENV = process.env.NODE_ENV;
const PORT = ENV === 'production' ? 80 : 8989;

app.use(parser.json()); // parsing application/json
app.use(parser.urlencoded({ extended: true, })); // parsing application/x-www-form-urlencoded

// // 设置静态文件目录
app.use('/assets',express.static(path.join(process.cwd(), 'dist/assets'), { maxAge: '30d', }));

// 设置 favicon.ico
app.use(favicon(path.join(process.cwd(), 'dist/assets', 'favicon.ico')));

// 转发路由
app.use('/api', (req, res) => {
  res.end('req api');
});
// 根据路由判断渲染那个页面
app.get('/*', (req, res) => {
  console.log('request comming', req.url);
  const context = {};
  // const Application = routes[req.path]['component'];

  const ssrHtml=ReactDOMServer.renderToStaticMarkup(
    <StaticRouter context={context}
      location={req.url}
    >
      <App />
    </StaticRouter>);

  const tpl = fs.readFileSync(path.join(process.cwd(), 'dist/assets/index.html'),'utf-8');
  // const html = insertStatic(options);
  const html = tpl.replace('<!-- STATIC_DOM -->', ssrHtml);
  res.append('content-type', 'text/html; charset=utf-8');
  res.send(html);
});

app.listen(PORT, () => {
  logger.info(`SSR is running on ${PORT}!`);
});
