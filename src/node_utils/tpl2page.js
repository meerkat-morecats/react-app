const ReactDomServer = require("react-dom/server")

function tpl2page(reactElement) {

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
        <div class='root'>
          ${ReactDomServer.renderToString(reactElement)}
        </div>
      </body>
    </html>
  `
}

module.exports = tpl2page;