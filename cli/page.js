const fs = require('fs');
const path = require('path')
const cwd = process.cwd();
module.exports = function (pageName) {
  // read & change custom page
  pageName = upperFirstLetter(pageName)
  const pagePath = path.join(cwd, `src/pages/${pageName}`)
  const stat = fs.statSync(pagePath);
  if (stat.isDirectory()) {
    console.log('this file is already exist! please try again.')
    return;
  }

  const tplPath = path.join(cwd, 'cli/tpl/page.tpl')
  const tpl = fs.readFileSync(tplPath, 'utf-8');
  const targetPage = tpl.replace(/PageName/g, pageName)

  // write file
  fs.mkdirSync(pagePath);
  fs.writeFileSync(pagePath + '/index.jsx', targetPage, function (err) {
    if (err) {
      console.log(err);
      return false;
    }
    console.log('write file success !')
  })
}


function upperFirstLetter(str) {
  let first = str[0].toLocaleUpperCase();
  return first + str.substr(1);
}