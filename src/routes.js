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
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './routeConfig'

const routeConfig = Object.values(routes)

console.log(routeConfig)
function App() {
  return <BrowserRouter>
    <Switch>
      {routeConfig.map(ele => <Route exact={ele.exact} path={ele.path} component={ele.component} />)}
    </Switch>
  </BrowserRouter>
}

export { App }
