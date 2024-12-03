---
title: 开发服务器
order: 4
category:
  - 前端
tag:
  - 模块化
  - webpack
---

## 开发服务器

在**开发阶段**，目前遇到的问题是打包、运行、调试过程过于繁琐，回顾一下我们的操作流程：

1. 编写代码
2. 控制台运行命令完成打包
3. 打开页面查看效果
4. 继续编写代码，回到步骤 2

并且，我们往往希望把最终生成的代码和页面部署到服务器上，来模拟真实环境

为了解决这些问题，webpack 官方制作了一个单独的库：`webpack-dev-server`

首先需要在项目中安装 `webpack-dev-server`，安装命令为:

```sh
npm i -D webpack-dev-server
```

接下来需要在 `webpack.config.js`进行如下常见的配置：

```js
devServer:{
    open: true,     // 打包后是否自动打开
    port: 8090,     // 指定端口号
}
```

针对`webpack-dev-server`的配置，参考：https://www.webpackjs.com/configuration/dev-server/

在 `package.json` 中添加如下代码：

```js
"scripts": {
    //...其他配置
    "dev": "webpack",
    "start": "webpack-dev-server"
  },
```

添加之后我们就可以使用`npm start`来启动 `webpack-dev-server`。

最后需要提出需要注意的一点是，`webpack-dev-server` 是将资源打包至内存当中，所以可以很快的提供实时刷新功能。其实类似于就是我们之前使用的`nodemon`的功能，而且更加强大。

## 跨域代理

如果你有单独的后端开发服务器 API，并且希望在同域名下发送 API 请求 ，那么代理某些 URL 会很有用。

`dev-server` 使用了非常强大的 `http-proxy-middleware` 包

```js
devServer:{
    open: true,     // 打包后是否自动打开
    port: 8090,     // 指定端口号
    proxy: {
        "/api": {
          target: "http://127.0.0.1:3001",
          changeOrigin: true,
          pathRewrite: {"^/api" : "/"}
        }
    }
},
```

前端访问代码：

```js
async function test() {
  let result = await fetch('/api/user');
  let json = await result.json();
  console.log(json);
}
test();
```
