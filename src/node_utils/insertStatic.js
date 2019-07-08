// 向目标模板中插入静态资源
const fs = require('fs');
const pug = require('pug')
const path = require('path')
// console.log(pugFile)
// 将静态资源插入到 pug模板中
const distPath = path.join(process.cwd(), './dist/assets')
const staticFiles = fs.readdirSync(distPath);
const PREFIX = '/dist/assets/'
const TEMPLATE = `
<!DOCTYPE html>
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    meta(http-equiv="X-UA-Compatible", content="ie=edge,chrome=1")
    title #{title}
    each cssFile in cssFileList
      link(rel="stylesheet", href=cssFile)
    each meta in metaList 
      meta(name=meta.name,content=meta.content)
  body
    div(id="root") #{ssrHtml}
    each jsFile in jsFileList
      script(src=jsFile)
`


function insertStatic(options = {}) {
  const jsFiles = [];
  const cssFiles = [];
  staticFiles.forEach(function (file) {
    if (path.extname(file) === '.js') {
      jsFiles.push(PREFIX + file)
    }
    if (path.extname(file) === '.css') {
      cssFiles.push(PREFIX + file)
    }
  })
  const defaultOptions = {
    cssFileList: cssFiles,
    jsFileList: jsFiles,
    metaList: [],
  }
  const html = pug.render(TEMPLATE, Object.assign(defaultOptions, options));
  return html;
}
module.exports = insertStatic;