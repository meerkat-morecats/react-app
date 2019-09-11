// import  from '@loadable/component';
import Home from './components/pages/Home';
import List from './components/pages/List';
export default [
  {
    component: List,
    exact: true,
    path: '/list/:id', // 前端路由规则
  },
  // {
  //   component: List,
  //   exact: true,
  //   path: '/abc', // 前端路由规则
  // },
  {
    component: Home,
    exact: true,
    path: '/:abc', // 前端路由规则
  },
  {
    redirect:true,
    path: '/',
  },
];

