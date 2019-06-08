const http = require("http");
const logger = require("../utils/logger");

const express = require("express");
const path = require("path");
const logger = require("./node_utils/logger");
const history = require("connect-history-api-fallback");
const parser = require("body-parser");
const favicon = require("serve-favicon");

const app = express();
const ENV = process.env.NODE_ENV;
const PORT = ENV === "develope" ? 3333 : 80;

app.use(parser.json()); // parsing application/json
app.use(parser.urlencoded({ extended: true })); // parsing application/x-www-form-urlencoded
// 单页
app.use(
  "/",
  history({
    index: "index.html", // default is index.html
    verbose: true,
    logger: logger.info
  })
);

// 设置 favicon.ico
app.use(favicon(path.join(__dirname, "dist", "favicon.ico")));

// 设置静态文件目录
app.use("/", express.static(path.join(__dirname, "dist")));

const server = http.createServer(app);

server.on("error", (err, socket) => {
  logger.error(`server error : ${err}`);
  socket.end("HTTP/1.1 400 Bad Request \n");
});

server.on("listening", () => {
  logger.info(`server is running on ${PORT}!`);
});

server.listen(PORT);
