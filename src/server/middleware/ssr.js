import React from 'react';
import { StaticRouter, } from 'react-router-dom';
import App from '../../components/App';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import routeConfig from '../../configuration/route.config';


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
      <App routes={routeConfig}
        ssrData={ssrData} />
    </StaticRouter>
  );

  console.log(markup);

  const tpl = fs.readFileSync(path.join(CWD, 'dist/assets/index.html'),'utf-8');

  const html = tpl
    .replace(cssReg,'')
    .replace('<!-- MARKUP -->', `<div id="root">${markup}</div>`)
    .replace('<!-- INNER_STYLE -->',`<style type="text/css">${cssContent}</style>`);

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