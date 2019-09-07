# react hooks ssr 工程化的项目
- node v10.15
- 开发环境，只启动前端项目，通过webpack devserver启动，
- 生产环境，将 node 与 前端项目一起打包，通过 pm2 启动

## 运行项目

```
npm install
npm start
```

## 目录结构

```
.
├── cli  脚手架
│   └── ...
├── config 配置
│   └── ...
├── node_modules
├── scripts 脚本
│   └── ...
├── dist 打包后的文件
│   ├── assets/
│   │   └── ...  js css
│   └── server.js
├── src
│   ├── components 组件
│   │   ├── pages   页面
│   │   └── common  公共组件
│   ├── static  静态资源
│   │   └── ...
│   ├── lib  客户端服务端公共方法
│   │   └── ...
│   ├── server 服务端
│   │   ├── middleware 中间件
│   │   │   └── index.js 在index中引入全部中间件
│   │   ├── utils node封装的工具
│   │   └── index.js  node入口
│   ├── configuration 配置文件
│   ├── app.js 前端入口
│   └── index.html 前端模板
├── webpack webpack 配置
│   └── ...
└── ...
```

## TODO

- [x] 配置开发环境
- [x] 开发前端界面 hooks，实现多个页面，每个页面依赖多个组件
- [ ] express 文件压缩、打包、缓存设计
- [x] 脚手架、实现页面组件的创建(产生 page/component，page 包含 getInitialProps)
- [ ] typscript
- [ ] 与 next 框架对比
- [ ] 添加测试
- [ ] 开发环境热更新，修改之后依然需要每次刷新页面
- [ ] rematch 状态管理

## QUESTION

- [x] 在 router 中异步引入组件会有错误
- [x] staticRouter 有一个问题 ： 不会在 dom 标签上添加 data-reactroot 导致页面重新渲染
