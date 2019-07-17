module.exports = [
  {
    component: require('../pages/Home').default,
    exact: true,
    path: '/list', // 前端路由规则
  },
  {
    component: require('../pages/Home').default,
    exact: true,
    path: '/', // 前端路由规则
  },
];

