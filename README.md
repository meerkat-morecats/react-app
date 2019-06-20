# react hooks ssr 工程化的项目

- node v10.15
- 通过我的个人网站将他落地

## 目录结构

```
.
├── config 配置
│ └── ...
├── node_modules
├── scripts 脚本
│ └── ...
├── dist 打包后的文件
│ ├── assets/
│ └── server.js
├── src
│ ├── views 页面
│ │ └── ...
│ ├── components 组件
│ │ └── ...
│ ├── node_utils node 需要的一些工具
│ ├── public webpack 模板 (本地开发环境中使用)
│ ├── routes.js 前端路由
│ ├── server.js node 服务端
│ ├── app.js 前端入口
│ ├── routeConfig.js 路由配置文件
│ └── ...
├── webpack webpack 配置
│ └── ...
├── package.json
└── ...
```

## TODO

- [x] 配置开发环境
- [x] 配置 webpack
- [ ] 开发前端界面 hooks，实现多个页面，每个页面依赖多个组件
- [ ] express 文件压缩、打包
- [ ] express 缓存设计
- [ ] 脚手架、实现页面组件的创建(产生page/component，page包含getInitialProps)
- [ ] 与 next 框架对比
- [ ] 添加测试
- [ ] typscript

## QUESTION

- 对于嵌套比较多的路由层数，如何在服务端渲染确定的页面