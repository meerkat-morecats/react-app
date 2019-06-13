
function tpl2page(serverHtml) {

  // const serverRenderer = (req, res, next) => {
  //   fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
  //     if (err) {
  //       console.error(err)
  //       return res.status(500).send('An error occurred')
  //     }
  //     return res.send(
  //       data.replace(
  //         '<div id="root"></div>',
  //         `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
  //       )
  //     )
  //   })
  // }

  return `
    <html>
      <body>
        <div id='root'>
          ${serverHtml}
        </div>
      </body>
    </html>
  `
}

{/* 
        <script src="/dist/assets/main.js" type="text/babel"  ></script>
  
        <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>  
  <script src="https://cdn.jsdelivr.net/npm/react@16.7.0/umd/react.production.min.js" text="text/javascript" ></script/>
<script src="/js/index.js" text="text/javascript" ></script/> */}
module.exports = tpl2page;