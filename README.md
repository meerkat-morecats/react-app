### Readme.md

- 这是一个探索 react hooks ssr 工程化的项目

### 目录结构

```
.
├── config 配置
│   └── ...
├── node_modules
├── scripts 脚本
│   └── ...
├── src
│   ├── views 页面
│   │   └── ...
│   ├── components 组件
│   │   └── ...
│   ├── dist 打包后的文件
│   ├── node_utils node需要的一些工具
│   ├── public webpack 模板
│   ├── routes.js 前端路由
│   ├── server.js node服务端
│   └── index.js 前端入口
├── webpack webpack配置
│   └── ...
├── package.json
└── ...
```

### TODO

- [x] 配置开发环境 
- [ ] 配置 webpack
- [ ] 开发前端界面 hooks，实现多个页面，每个页面依赖多个组件
- [ ] express 文件压缩、打包
- [ ] express 缓存设计
- [ ] webpack + 单个页面的 ssr
- [ ] webpack + 多个页面的 ssr
- [ ] 脚手架、实现页面组建的创建
- [ ] 透过 nextjs
