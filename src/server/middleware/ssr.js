import React from 'react';
import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import App from '../../client/components/App';
import routeConfig, { getComponent } from '../../client/route.config';
import logger from '../utils/logger';

const CWD = process.cwd();
let ssrData = {
    data: [
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
    tags: [
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
 * @todo 2.加入了StaticRouter  data-reactroot 属性不见了
 */

export default async function(req, res, next) {
    const context = {};

    const component = getComponent(req.url);
    console.log(component);
    try {
        ssrData = await component.getInitialProps();
    } catch (error) {
        logger.error(error.message);
    }

    const markup = ReactDOMServer.renderToString(
        <StaticRouter context={context} location={req.url}>
            <App routes={routeConfig()} ssrData={ssrData} />
        </StaticRouter>,
    );

    const tpl = fs.readFileSync(path.join(CWD, 'dist/assets/index.html'), 'utf-8');

    const html = tpl
        .replace(/[\s]+<!-- MARKUP -->[\s]+/g, markup)
        .replace(
            '/*getInitialProps*/',
            `window.__SSR_DATA__=${JSON.stringify(ssrData)};window.__SSR_PAGE__=${req.url}`,
        );

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
