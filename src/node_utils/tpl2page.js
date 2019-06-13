
function tpl2page(serverHtml) {
  return `
    <html>
      <body>
        <div id='root'>
          ${serverHtml}
        </div>
        <script src="/dist/assets/main.js"  ></script>
      </body>
    </html>
  `
}

module.exports = tpl2page;