---
title: babel
order: 7
category:
  - 前端
tag:
  - 模块化
  - webpack
---

babel 一词来自于希伯来语，直译为巴别塔

![](./images/16498378583389.jpg)

巴别塔象征的统一的国度、统一的语言

而今天的 JS 世界缺少一座巴别塔，不同版本的浏览器能识别的 ES 标准并不相同，就导致了开发者面对不同版本的浏览器要使用不同的语言，和古巴比伦一样，前端开发也面临着这样的困境。

babel 的出现，就是用于解决这样的问题，它是一个编译器，可以把不同标准书写的语言，编译为统一的、能被各种浏览器识别的语言

![](./images/16498378938740.jpg)

由于语言的转换工作灵活多样，babel 的做法和 postcss、webpack 差不多，它本身仅提供一些分析功能，真正的转换需要依托于插件完成 ![](./images/16498379067693.jpg)

**babel** 官网地址：https://www.babeljs.cn/

![](./images/16498379448982.jpg)

## 一、babel 的安装

babel 可以和构建工具联合使用，也可以独立使用

如果要独立的使用 babel，需要安装下面两个库：

- @babel/core：babel 核心库，提供了编译所需的所有 api
- @babel/cli：提供一个命令行工具，调用核心库的 api 完成编译

```js
npm i -D @babel/core @babel/cli
```

## 二、使用

在项目的 src 目录中创建`babelTest.js`文件，输入如下简单代码：

```js
() => console.log('hello babel！');
```

在命令行的运行 babel 命令，将上面 js 代码中的 ES6 的语法转换为 ES5 的语法

```sh
./node_modules/.bin/babel ./src/babelTest.js
```

要`node_modules`去找`babel`命令实在太麻烦，我们可以直接使用 npm 脚本简化：

```js
"scripts": {
    "build": "babel ./src/babelTest.js"
},
```

后面我们直接运行 `npm run build` 就直接编译了`babelTest.js`文件

可以看到此时并没有将我们的 _ES 6_ 语法编译成 _ES 5_ 语法。原因很简单，_babel_ 是基于插件的，做不同的事情需要不同的插件，这样才能让 _babel_ 非常灵活并且强大。

所以接下来我们安装相应的编译箭头函数的插件，如下：

```sh
npm i babel-plugin-transform-es2015-arrow-functions
```

除了安装插件以外，还需要在项目根目录下面创建 `babel`的配置文件，如下：

![](./images/16498409491771.jpg)

文件里面书写如下的配置信息：

```js
{
    "plugins": [
      "transform-es2015-arrow-functions"
    ]
}
```

执行`npm run build`，可以看到我们的 _ES 6_ 代码已经成功被编译为了 _ES 5_ 的代码：

![](./images/16498410612095.jpg)

接下来，我们去修改 _babelTest.js_ 文件，增加其他的 _ES 6_ 语法，如下：

```js
() => console.log('hello babel！');
class demo {}
```

接下来执行`npm run build`

但是*class* 并没有被编译。这个原因和前面我们遇到的一样，它需要安装另一个插件才能让 _babel_ 工作起来，要不然就什么都不做。所以我们安装相应的插件：

```sh
npm install --save-dev babel-plugin-transform-es2015-classes
```

然后 _.babelrc_ 配置文件也要进行相应的配置，如下：

```js
{
    "plugins": [
      "transform-es2015-arrow-functions",
      "transform-es2015-classes"
    ]
}
```

执行`npm run build`，结果如下：images

![](./images/16498413752358.jpg)

通过插件的学习，我们知道了 _babel_ 要去解析转换 _ES 6_ 语法，需要安装对应的插件，我们只是使用到了两个 _ES 6_ 的语法就装了两个插件，当我们需要使用很多 _ES 6_ 语法的时候，那就需要装非常多的插件，这样显得非常麻烦，那么有没有简便点的方法呢？

_babel_ 通过 _preset_ 来解决我们上面提出的问题，_preset_ 叫做预设，意思就是说预先设置一些常用的语法配置，把一批常用的相关的插件打包来满足我们的开发。

**安装预设：**

```sh
npm i @babel/preset-env
```

babel 有多种预设，最常见的预设是`@babel/preset-env`

`@babel/preset-env`可以让你使用最新的 JS 语法，而无需针对每种语法转换设置具体的插件

**配置**

```js
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

## 三、_webpack_ 中使用 _babel_

回到 _webpack-demo_ 目录，修改 _webpack-demo_ 下的 _index.js_，加入下面一段 _ES 6_ 代码：

```js
// 测试 ES 6 是否被编译成 ES 5
() => console.log('hello babel!!!');
```

然后运行命令查看结果：

```sh
npm run dev
```

在打包出来的 _app.js_ 文件中进行查看，可以看到我们所写的 _ES 6_ 代码原样输出，_webpack_ 并没有把 _ES 6_ 代码编译成 _ES 5_。

要让 _ES 6_ 代码被编译，我们需要借助 _babel_ 的力量，这里我们需要安装 _babel-loader_ 和 _babel-core_ 以及处理 _ES 6_ 语法的预设，_babel-loader_ 的作用就是将 _ES 6_ 代码送给 _babel-core_ 处理，_babel-core_ 就是 _babel_ 工作的核心 _api_。

安装 _babel-core_ 和 _babel-loader_ 以及处理 _ES 6_ 的预设：

```sh
npm install babel-loader @babel/core @babel/preset-env
```

在 _webpack-demo_ 目录中新建 _.babelrc_ 文件，增加 _babel_ 配置：

```js
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

接下来需要在 _webpack.config.js_ 文件中增加配置项，在 _rules_ 规则数字中增加下面代码：

```js
{
    test: /\.js$/,
    use:['babel-loader']
}
```

运行`npm run dev`命令打包

在打包好的 js 代码中我们查看到，原来的 _ES 6_ 代码已经成功转换成 _ES 5_ 代码了：

```js
// 测试 ES 6 是否被编译成 ES 5
(function () {
  return console.log('hello babel!!!');
});
```

## 四、优化 babel-loader

当我们写这个正则表达式`/.js$/`的时候，表示所有 _js_ 文件都会被送 _babel-loader_ 加载，然后由 _babel-core_ 处理一边，这里包括我们安装的很多第三方包，你会发现 _node_modules_ 文件夹下会有很多的 _js_ 文件，但是这些 _js_ 文件已经由开发者打包好了我们可以直接使用的，并不需要我们再去处理一遍。因此，如果 _babel-loader_ 再去处理的话，会浪费太多的时间，导致 _webpack_ 打包编译很慢，我们现在需要优化它。

具体的做法是排除不需要再次编译的，让 _babel-loader_ 只处理我们开发的源文件，因此，我们需要修改 _webpack.config.js_ 中的配置：

```js
{
    test: /\.js$/,
    use:['babel-loader'],
    exclude: path.resolve(__dirname, 'node_modules')
},
```

其中，`exclude: path.resolve(__dirname, 'node_modules')`这条语句表示排除 _node_modules_ 这个文件夹，因为这个文件夹下放的都是第三方包，并不需要我们再次用 _babel_ 去编译了。

再次运行`npm run dev`去打包的时候会发现已经快很多了。
