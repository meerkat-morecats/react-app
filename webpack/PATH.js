const path = require('path');
const CWD = process.cwd();

const SRC = path.join(CWD, 'src');
const DIST = path.join(CWD, 'dist');

module.exports = {
  clientEntry: path.join(CWD, 'src/app.js'),
  clientOutput: path.join(CWD, 'dist/assets'),
  serverEntry: path.join(CWD, 'src/server.js'),
  serverOutput: path.join(CWD, 'dist'),
  templatePath: path.join(CWD, 'src/index.html'),
  SRC,
  DIST,
  CWD,
};
