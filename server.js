const express = require("express");
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const path = require("path");
const logger = require("./src/node_utils/logger");
const page = require('./src/node_utils/tpl2page');
// const history = require("connect-history-api-fallback");
const parser = require("body-parser");
const getStaticRoute = require('./dist/ssr-bundle');
// const Home = require('./src/views/Home/index.jsx')
const Application = getStaticRoute();

// const favicon = require("serve-favicon");

const app = express();
const ENV = process.env.NODE_ENV;
const PORT = ENV === "development" ? 8989 : 80;
// console.log(ReactDOMServer.renderToString(<Application />))

app.use(parser.json()); // parsing application/json
app.use(parser.urlencoded({ extended: true })); // parsing application/x-www-form-urlencoded

// // 设置静态文件目录
app.use('/dist',express.static(path.join(__dirname, "dist"), { maxAge: '30d' }));
// app.use('/css',express.static(path.join(__dirname, "dist/css"), { maxAge: '30d' }));
// app.use('/img',express.static(path.join(__dirname, "dist/img"), { maxAge: '30d' }));


// 单页
// app.use(
//   "/",
//   history({
//     index: "index.html", // default is index.html
//     verbose: true,
//     logger: logger.info
//   })
// );

// 设置 favicon.ico
// app.use(favicon(path.join(__dirname, "dist", "favicon.ico")));

// 转发路由
app.use('/api',(req,res)=>{
  console.log('req api');
  res.end('req api')
})
// 根据路由判断渲染那个页面
app.get('/*', (req, res) => {
  console.log('request comming')
  res.end(page(ReactDOMServer.renderToString(<Application test='123123' />)));
})




app.listen(PORT, () => {
  logger.info(`SSR is running on ${PORT}!`);
});

