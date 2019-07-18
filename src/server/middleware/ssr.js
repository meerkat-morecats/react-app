import React from 'react';
import { StaticRouter, withRouter,} from 'react-router-dom';
import App from '../../components/App';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import routeConfig from '../../configuration/route.config';
import Home from '../../components/pages/Home';

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
  console.log(`request comming >>> '${req.url}'`);

  const context = {};
  const CSS_REG = /\.css$/;
  /** 获取css内容 */
  // const testReg = /<[^<>]+(script)[^<>]+>/g;
  const cssReg=/<[^<>]+(stylesheet)[^<>]+>/g;
  const distFiles =  fs.readdirSync(path.join(CWD,'dist/assets'));
  const cssFiles = distFiles.filter(item=>CSS_REG.test(item));
  const cssContent = cssFiles.reduce((content,filename)=>{
    return content+ fs.readFileSync(path.join(CWD,'dist/assets',filename));
  },'');
  // @todo 在这里加入 root 元素，要不然会有警告
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

  // const markup = ReactDOMServer.renderToString(
  //   <Home  ssrData={ssrData} />
  // );

  // console.log(markup);

  const tpl = fs.readFileSync(path.join(CWD, 'dist/assets/index.html'),'utf-8');

  const html = tpl
    .replace(cssReg,'')
    // .replace(testReg,'')
    .replace('<!-- MARKUP -->', markup)
    .replace('<!-- INNER_STYLE -->',`<style type="text/css">${cssContent}</style>`)
    .replace('/*getInitialProps*/',`window.__SSR_DATA__=${JSON.stringify(ssrData)}`);
    // .replace('<div id="root"><div class="home-wrapper">','<div id="root"><div class="home-wrapper" data-reactroot="">');

  // console.log(html);

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