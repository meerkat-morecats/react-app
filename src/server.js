const ReactDomServer = require("react-dom/server")
const express = require("express");
const React = require('react')
const path = require("path");
const logger = require("./node_utils/logger");
const page = require('./node_utils/tpl2page');
// const history = require("connect-history-api-fallback");
const parser = require("body-parser");
const Home = require("./views/Home/index.jsx")

// const favicon = require("serve-favicon");

const app = express();
const ENV = process.env.NODE_ENV;
const PORT = ENV === "development" ? 8989 : 80;

app.use(parser.json()); // parsing application/json
app.use(parser.urlencoded({ extended: true })); // parsing application/x-www-form-urlencoded
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

// 根据路由判断渲染那个页面
app.get('/', (req, res) => {
  console.log('request comming')
  res.end(page(<Home />))
})



// // 设置静态文件目录
app.use('/js',express.static(path.join(__dirname, "dist/js"), { maxAge: '30d' }));

app.listen(PORT, () => {
  logger.info(`SSR is running on ${PORT}!`);
});

