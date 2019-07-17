# react hooks ssr 工程化的项目

- node v10.15
- 通过我的个人网站将他落地

## 运行项目
```
npm install 
npm start 
```

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
- [x] 开发前端界面 hooks，实现多个页面，每个页面依赖多个组件
- [ ] express 文件压缩、打包、缓存设计
- [x] 脚手架、实现页面组件的创建(产生 page/component，page 包含 getInitialProps)
- [ ] typscript
- [ ] 与 next 框架对比
- [ ] 添加测试

## QUESTION

-