---
title: webpack 简介
order: 2
category:
  - 前端
tag:
  - 模块化
  - webpack
---

webpack 是基于模块化的打包（构建）工具，它把一切视为模块

它通过一个开发时态的 ==入口模块== 为起点，分析出所有的依赖关系，然后经过一系列的过程（压缩、合并），最终生成运行时态的文件。

webpack 的特点：

- **为前端工程化而生**：webpack 致力于解决前端工程化，特别是浏览器端工程化中遇到的问题，让开发者集中注意力编写业务代码，而把工程化过程中的问题全部交给 webpack 来处理
- **简单易用**：支持零配置，可以不用写任何一行额外的代码就使用 webpack
- **强大的生态**：webpack 是非常灵活、可以扩展的，webpack 本身的功能并不多，但它提供了一些可以扩展其功能的机制，使得一些第三方库可以融于到 webpack 中
- **基于 nodejs**：由于 webpack 在构建的过程中需要 ==读取文件== ，因此它是运行在`node`环境中的
- **基于模块化**：webpack 在构建过程中要分析依赖关系，方式是通过模块化导入语句进行分析的，它支持各种模块化标准，包括但不限于 CommonJS、ES6 Module

构建其实是工程化、自动化思想在前端开发中的体现，将一系列流程用代码去实现，让代码自动化地执行这一系列复杂的流程。

构建可以实现如下内容：

- 代码转换：将 _TypeScript_/_ES6_ 编译成 _JavaScript_、将 _SCSS_ 编译成 _CSS_ 等。
- 文件优化：压缩 _JavaScript_、_CSS_、_HTML_ 代码，压缩合并图片等。
- 代码分割：提取多个页面的公共代码，提取首屏不需要执行部分代码让其异步加载。
- 模块合并：在采用模块化的项目里会有很多个模块和文件，需要通过构建功能将模块分类合并成一个文件。
- 自动刷新：监听本地源代码变化，自动重新构建、刷新浏览器。
- 代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过。
- 自动发布：更新代码后，自动构建出线上发布代码并传输给发布系统。

官网上有这么一段话来介绍 _webpack_：

> _webpack_ 是一个现代 _JavaScript_ 应用程序的模块打包器（_module bundler_）。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。

![](./images/16495724443983.jpg)

_webpack_ 官方文档地址：[https://www.webpackjs.com/concepts/](https://www.webpackjs.com/concepts/)

## 一、webpack 的安装

webpack 通过 npm 安装，它提供了两个包：

- webpack：核心包，包含了 webpack 构建过程中要用到的所有 api
- webpack-cli：提供一个简单的 cli 命令，它调用了 webpack 核心包的 api，来完成构建过程

安装方式：

- 全局安装：可以全局使用 webpack 命令，但是无法为不同项目对应不同的 webpack 版本
- **本地安装**：推荐，每个项目都使用自己的 webpack 版本进行构建

```js
npm i -D webpack webpack-cli
```

## 二、使用

```shell
webpack
```

**示例：**

- 对应目录： ![](./images/16495730791263.jpg)

其中 **src** 目录用来存放源文件

- _index.js_ 文件内容

```js
import module_1 from './module1';
import module_2 from './module2';
import module_3 from './module3';

module_1();
module_2();
module_3();
```

- 各个 _module.js_ 文件内容

```js
// module1.js 文件内容
export default function module_1() {
    console.log("这是module_1模块");
}
// module2.js 文件内容
export default function module_2() {
    console.log("这是module_2模块");
}
// module3.js 文件内容
export default function module_3() {
    console.log("这是module_3模块");
}
```

默认情况下，在当前工程目录下执行`webpack`会以`./src/index.js`作为入口文件分析依赖关系，打包到`./dist/main.js`文件中

执行**webpack**，出现下面的提示：

![](./images/16495732600677.jpg)

我们也可以通过 webpack 的配置文件，来精确控制 webpack 的打包

- 在根目录下创建 `webpack.config.js` 配置文件

```js
const path = require('path');
module.exports = {
  mode: 'development', // development production生成文件的方式
  devtool: 'source-map', // ** 方便调试 **
  entry: './src/index.js', // 入口文件
  // 出口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 必须是绝对路径
    filename: 'app.js',
  },
};
```

其中：

- entry:源文件的入口文件
- output:webpack 打包之后生成文件的路径
  - path:打包生成文件的绝对路径
  - filename:生成文件的名字
- mode:打包模式，development 开发模式 production 生成模式，这会影响最终生成文件的内容格式
- devtool:由于经过 webpack 打包之后，源文件并不易读，因此当运行发生错误的时候，我们更加希望能看到源代码中的错误，而不是转换后代码的错误。也就是说**错误的时候会直接帮我们提示在真正代码的位置中出现的问题，而不是编译之后的代码**

我们还可以在`package.json`文件的脚本中修改运行 webpack 的执行命令

```js
...
"scripts": {
    "dev":"webpack"
},
...
```

之后要运行 webpack，我们可以直接执行 `npm run dev` 命令

![](./images/16495743331507.jpg)
