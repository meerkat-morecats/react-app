const express = require("express");
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const path = require("path");
const logger = require("./node_utils/logger");
// const history = require("connect-history-api-fallback");
const insertStatic = require('./node_utils/insertStatic')
const parser = require("body-parser");
const { routes } = require('./routes');

// const favicon = require("serve-favicon");

const app = express();
const ENV = process.env.NODE_ENV;
const PORT = ENV === "development" ? 8989 : 8989;

app.use(parser.json()); // parsing application/json
app.use(parser.urlencoded({ extended: true })); // parsing application/x-www-form-urlencoded

// // 设置静态文件目录
app.use('/dist', express.static(path.join(process.cwd(), "dist"), { maxAge: '30d' }));

// 设置 favicon.ico
// app.use(favicon(path.join(__dirname, "dist", "favicon.ico")));

// 转发路由
app.use('/api', (req, res) => {
  res.end('req api')
})
// 根据路由判断渲染那个页面
app.get('/', (req, res) => {
  console.log('request comming', req.path, req.url)
  const Application = routes[req.path]['component'];
  const options = {
    ssrHtml: ReactDOMServer.renderToString(<Application test='123123' />)
  }
  const html = insertStatic(options)
  res.append('content-type', 'text/html; charset=utf-8');
  res.end(html);
})

app.listen(PORT, () => {
  logger.info(`SSR is running on ${PORT}!`);
});

