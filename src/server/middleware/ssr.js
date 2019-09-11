import React from 'react';
import { StaticRouter,} from 'react-router-dom';
import App from '../../client/components/App';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import routeConfig from '../../client/route.config';

const CWD = process.cwd();
const ssrData ={ data:[
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
};

/**
 * @todo 1.找到个锁定组件的办法 => 初始化数据
 *
 */
export default async function(req,res,next){

  const context = {};
  /**
   * @description 加入了StaticRouter  data-reactroot 属性不见了
   */
  const markup=ReactDOMServer.renderToString(
    <StaticRouter
      context={context}
      location={req.url}
    >
      <App
        routes={routeConfig}
        ssrData={ssrData} />
    </StaticRouter>
  );

  const tpl = fs.readFileSync(path.join(CWD, 'dist/assets/index.html'),'utf-8');

  const html = tpl
    .replace('<!-- MARKUP -->', markup)
    .replace('/*getInitialProps*/',`window.__SSR_DATA__=${JSON.stringify(ssrData)}`);

  res.append('content-type', 'text/html; charset=utf-8');
  // 处理重定向
  if (context.url) {
    res.writeHead(302, {
      Location: context.url,
    });
    res.end(html);
  } else {
    res.end(html);
  }
  next();
}