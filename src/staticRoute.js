// 服务器入口
const {Home} = require('./views/Home/index.jsx');


module.exports =  function (route) {
  // 判断route 返回 组件
  if (route) {
    return route;
  }
  const Application = Home;
  return Application ;
}
