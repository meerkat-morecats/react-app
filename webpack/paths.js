const cwd  = process.cwd();
const path = require('path')

module.exports = {
  clientEntry:path.join(cwd,'src/app.js'),
  clientOutput:path.join(cwd,'dist/assets'),
  serverEntry:path.join(cwd,'src/server.js'),
  serverOutput:path.join(cwd,'dist'),
  templatePath:path.join(cwd,'src/index.html')
}