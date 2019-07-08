const fs = require('fs');
const path = require('path');
const cwd = process.cwd();
module.exports = function(pageName) {
  // read & change custom page
  pageName = upperFirstLetter(pageName);
  const pagePath = path.join(cwd, `src/pages/${pageName}`);
  console.log(pagePath);
  try {
    const stat = fs.statSync(pagePath);
    if (stat.isDirectory()) {
      console.info('this file is already exist! please try again.');
      return;
    }
  } catch (error) {
    console.log('not such file , and building now.');
  }

  const tplPath = path.join(cwd, 'cli/tpl/page.tpl');
  const tpl = fs.readFileSync(tplPath, 'utf-8');
  const targetPage = tpl.replace(/PageName/g, pageName);

  // write file
  fs.mkdirSync(pagePath);
  fs.writeFileSync(pagePath + '/index.jsx', targetPage, function(err) {
    if (err) {
      console.log(err);
      return false;
    }
    console.info('write jsx file success !');
  });
  fs.writeFileSync(pagePath + '/style.scss', '', function(err) {
    if (err) {
      console.log(err);
      return false;
    }
    console.info('write scss file success !');
  });
};

function upperFirstLetter(str) {
  const first = str[0].toLocaleUpperCase();
  return first + str.substr(1);
}
