const program = require('commander');
const page = require('./page');

program.version('0.0.1')
  .option('-p,--page <pageName>', 'create a new page with pageName')
  .option('-c,--component', 'create a new component');

program.parse(process.argv);

if (program.page) {
  page(program.page)
}

if (program.component) {
  console.log('u want to create a new component')
}