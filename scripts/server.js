// 开发环境使用 register
require("@babel/register")( {
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

require('../src/server')