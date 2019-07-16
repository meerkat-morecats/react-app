import { React, } from 'react';
import { StaticRouter, } from 'react-router-dom';
import App from '../components/App';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';

export default async function(req,res){

  const context = {};

  const html = ReactDOMServer.renderToStaticMarkup(
    <StaticRouter
      context={context}
      location={req.url}
    >
      <App  />
    </StaticRouter>
  );
  const tpl = fs.readFileSync(path.join(process.cwd(), 'dist/assets/index.html'),'utf-8');
  // const html = insertStatic(options);
  return tpl.replace('<!-- STATIC_DOM -->', html);

}