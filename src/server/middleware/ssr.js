import React from 'react';
import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import App from '../../client/components/App';
import routeConfig, { getComponent } from '../../client/route.config';
import logger from '../utils/logger';
import { host } from '../config';

const CWD = process.cwd();

export default async function(req, res, next) {
    const context = {};
    const component = getComponent(req.url);

    try {
        const ssrData = await component.getInitialProps(host, req.url);
        // const _test = await axios.get('http://localhost:8989/api');
        // console.log(`test:${_test}`);
        const markup = ReactDOMServer.renderToString(
            <StaticRouter context={context} location={req.url}>
                <App routes={routeConfig()} ssrData={ssrData} />
            </StaticRouter>,
        );

        const tpl = fs.readFileSync(path.join(CWD, 'dist/assets/index.html'), 'utf-8');

        const html = tpl
            .replace(/[\s]+<!-- MARKUP -->[\s]+/g, markup)
            .replace('/*getInitialProps*/', `window.SSR_DATA=${JSON.stringify(ssrData)};window.SSR_PAGE='${req.url}'`)
            .replace('<!-- <title></title> -->', `<title>${ssrData.title}</title>`);

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
    } catch (error) {
        logger.error(error.message);
        res.end('<h1>404 Not Found .</h1>');
    }

    next();
}
