/**
 * @file webpack.common.js
 * ----------
 * File Created: Saturday, 10th June 2019 11:18:55 am
 * Last Modified: Saturday, 10th June 2019 3:22:02 pm
 * Modified By: kangkai (kakcool@qq.com)
 * ----------
 * @author kangkai
 * @description 前端路由配置
 */
import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import routeConfig from '../configuration/route.config';
// import routes from './routeConfig';

export default function App() {
  return (
    <Switch>
      {routeConfig.map((item) => {
        console.log(item.component);
        return <Route
          exact={item.exact}
          key={item.path}
          path={item.path}
          render={props=><item.component {...props}></item.component>}
        />;
      })
      }

    </Switch>
  );
}

