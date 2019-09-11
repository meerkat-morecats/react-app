// import  from '@loadable/component';
import Home from './components/pages/Home';
import List from './components/pages/List';

export default function routeConfig() {
    return [
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
            redirect: true,
            path: '/',
        },
    ];
}

/**
 *
 * @param {String} url 需要匹配的路由
 * @param {String} rule router-dom中规定的path（规则）
 */
export function isMatch(url, rule) {
    const endReg = /[\s|\/]*$/g;
    const mReg = /\//g;
    url = url.replace(endReg, '');
    rule = rule.replace(endReg, '');
    if (url === rule) {
        return true;
    }

    const urlArr = url.split(mReg);
    const ruleArr = rule.split(mReg);
    if (urlArr.length !== ruleArr.length) {
        return false;
    }
    for (let i = 0; i < urlArr.length; i++) {
        if (urlArr[i] !== ruleArr[i] && ruleArr[i].indexOf(':') !== 0) {
            return false;
        }
    }
    return true;
}
/**
 * @method getComponent
 * @param {String} url 真是url地址
 * @todo 参考react-router中的路由匹配代码
 */
export function getComponent(url, matchF = isMatch) {
    const _routes = routeConfig();
    // 第一步
    // 做路由的绝对相等匹配
    for (let i = 0; i < _routes.length; i++) {
        // 非重定向
        if (!_routes[i].redirect) {
            // 去除末尾 / 再对比

            if (matchF(url, _routes[i].path)) {
                // 路由完全匹配直接返回
                return _routes[i].component;
            }
            // 将 / 匹配次数相同的插入的数组中
        }
    }
    return null;
}
