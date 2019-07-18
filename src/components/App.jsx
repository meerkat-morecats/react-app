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
import { Switch, Route,Redirect, } from 'react-router-dom';
import routeConfig from '../configuration/route.config';
// import routes from './routeConfig';

export default function App(props) {
  return (
    <Switch>
      {routeConfig.map((item,index) => {
        if (item.redirect) {
          return <Redirect
            key={index}
            to={item.path}
          />;
        }
        return <Route
          exact={item.exact}
          key={index}
          path={item.path}
          render={()=>
            <item.component ssrData={props.ssrData} />}
        />;
      })
      }

    </Switch>
  );
}
