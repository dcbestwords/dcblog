---
title: loader
order: 5
---

## loader

*loader* 让 *webpack* 能够去处理那些非 *JavaScript* 文件（*webpack* 自身只理解 *JavaScript*）。*loader* 可以将所有类型的文件转换为 *webpack* 能够处理的有效模块，然后你就可以利用 *webpack* 的打包能力，对它们进行处理。

本质上，*webpack loader* 将所有类型的文件，转换为应用程序的依赖图可以直接引用的模块。

在更高层面，在 *webpack* 的配置中 *loader* 有两个目标。

- **识别**出应该被对应的 *loader* 进行转换的那些文件。(使用 *test* 属性)
- **转换**这些文件，从而使其能够被添加到依赖图中（并且最终添加到 *bundle* 中）（*use* 属性）

> 有了 *loader*，*webpack* 就会把非 *js* 文件也看成是模块，并且可以引用它

来看一个具体的示例，在 *src* 下面创建 *index.css*

![](./images/16495810061798.jpg)

代码如下：

```css
body{
    background: skyblue;
    font-family: 'Roboto', sans-serif;
}
```

接下来在 *index.js* 中来引入该 *css* 文件，如下：

*index.js*

```js
import module_1 from './module1'
import module_2 from './module2'
import module_3 from './module3'

//引入css模块
import "./index.css"
```

然后输入`npm run dev`进行打包操作，会发现出现打包失败，在错误提示中提醒我们需要相应的 *loader*。

![](./images/16495811318201.jpg)

回到项目根目录，安装 *css-loader* 和 *style-loader*。其中 *css-loader* 负责把 *css* 文件打包到 *js* 中，*style-loader* 让 *style* 样式加入到 *index.html* 结构中。如下：

```sh
npm i -D css-loader style-loader
```

接下来在 `webpack.config.js`中添加相应的配置信息，如下：
```js
module:{
    rules: [
       { 
           test: /\.css$/,
           use: ['style-loader','css-loader']
       }
    ]
}
```

> webpack的loader执行顺序自后往前

其中 *test* 属性对应的是一个正则表达式，代表要处理的文件类型，后面的 *use* 属性代表所要使用的 *loader* 文件。

执行命令`npm run dev` 或者 `npm start`，可以看到样式打包成功。