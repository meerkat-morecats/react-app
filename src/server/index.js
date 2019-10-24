import express from 'express';
import path from 'path';
import parser from 'body-parser';
import favicon from 'serve-favicon';
import axios from 'axios';
import logger from './utils/logger';
import middlewares from './middleware';
import { PORT, host } from './config';
import api from './middleware/api';

const app = express();
// const ENV = process.env.NODE_ENV;

app.use(parser.json()); // parsing application/json
app.use(parser.urlencoded({ extended: true })); // parsing application/x-www-form-urlencoded

// // 设置静态文件目录
app.use('/assets', express.static(path.join(process.cwd(), 'dist/assets'), { maxAge: '30d' }));

// 设置 favicon.ico
app.use(favicon(path.join(process.cwd(), 'dist/assets', 'favicon.ico')));

app.use('/api', api);

middlewares.forEach((middleware) => {
    app.use('/', middleware);
    // app.use(middleware);
});

app.listen(PORT, () => {
    console.info(`node server is running on ${PORT}!`);
});
