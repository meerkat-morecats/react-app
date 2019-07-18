import express  from 'express';
import path  from 'path';
import logger  from './utils/logger';
import parser  from 'body-parser';
import favicon  from 'serve-favicon';
import middlewares from './middleware';

const app = express();
const ENV = process.env.NODE_ENV;
const PORT = ENV === 'production' ? 80 : 8989;

app.use(parser.json()); // parsing application/json
app.use(parser.urlencoded({ extended: true, })); // parsing application/x-www-form-urlencoded

// // 设置静态文件目录
app.use('/assets',express.static(path.join(process.cwd(), 'dist/assets'), { maxAge: '30d', }));

// 设置 favicon.ico
app.use(favicon(path.join(process.cwd(), 'dist/assets', 'favicon.ico')));

app.use('/api', (req, res) => {
  // 转发路由
  console.log('get api');
  res.json({ data:[
    {
      to: '/abc',
      title: '文章1',
      date: '2018-12-12 12:22:22',
    },
    {
      to: '/abc',
      title: '文章1',
      date: '2018-12-12 12:22:22',
    },
    {
      to: '/abc',
      title: '文章1',
      date: '2018-12-12 12:22:22',
    },
    {
      to: '/abc',
      title: '文章1',
      date: '2018-12-12 12:22:22',
    },
  ],
  tags:[
    {
      to: '/node',
      tagName: 'node',
    },
    {
      to: '/react',
      tagName: 'react',
    },
  ],
  });
});

middlewares.forEach(middleware=>{
  app.use(middleware);
});

app.listen(PORT, () => {
  logger.info(`node server is running on ${PORT}!`);
});

