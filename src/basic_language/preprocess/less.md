---
title: Less
---

## 一、简介

Less(Leaner Style Sheets 精简样式表) 是一种动态样式语言，属于 css 预处理器的范畴，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展，Less 既可以在 客户端 上运行 ，也可以借助 Node.js 在服务端运行。

Less 编译工具：

- [Koala](http://koala-app.com/index.html)
- vscode 的 Easy LESS 插件

## 二、注释

- 多行注释会被保留
- 单行注释不被保留在编译生成的 CSS 中

```less
/* 
 * 一个块注释
 * style comment! 
*/

// 这一行被注释掉了！
div {
  color: red;
}
```

## 三、变量

### 1. 基本使用

- 使用`@` 声明变量

```less
@width: 50px;
@height: 100px;

div {
  width: @width;
  height: @height;
}
```

::: tip 

作为变量<strong style="color:green">属性值</strong>直接使用

:::

### 2. 变量插值

- 变量用于**选择器名**

```less
@my-selector: banner;

// 需要添加 {}
.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```
- 变量用于**属性名**

```less
@property: color;

.widget {
  @{property}: #0ee;
  background-@{property}: #999;
}
```
::: tip 

作为<strong style="color:green">变量名</strong>使用

:::

- 变量用于**URL**
```less
// Variables
@images: '../img';

// Usage
body {
  color: #444;
  background: url('@{images}/white-sand.png');
}
```
- 变量用于 @**import语句**
```less
// Variables
@themes: '../../src/themes';

// Usage
@import '@{themes}/tidal-wave.less';
```

::: tip 

作为<strong style="color:green">字符串一部分</strong>使用

:::

### 3. 延迟加载

当一个变量被声明多次，会取最后一次的值，并从当前作用域往外寻找变量。

```less
@var: 0;
.class {
  @var: 1;
  .brass {
    @var: 2;
    three: @var;
    @var: 3;
  }
  one: @var;
}
```

```css
.class {
  one: 1;
}
.class .brass {
  three: 3;
}
```

### 4. 属性名变量

```less
.widget {
  color: #efefef;
  background-color: $color;
}
```

```css
.widget {
  color: #efefef;
  background-color: #efefef;
}
```

- 直接在已有的属性名前加`$`可将其作为变量进行复用

## 四、嵌套

Less 使用嵌套代替层叠或与层叠结合使用

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

```css
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

## 五、父选择器

在嵌套规则中， `&` 表示父选择器，常用于给现有选择器添加伪类。

```less
.header {
  a {
    color: blue;
    &:hover {
      color: green;
    }
  }
}
```

```css
.header a {
  color: blue;
}
.header a:hover {
  color: green;
}
```

- 如果没有 `&`，会被编译成后代选择器 `a :hover`。

- 除此之外，`&` 还能用于生成重复类名(近似于拼串)

```less
.button {
    &-ok {
        background-image: url('ok.png');
    }
    &-cancel {
        background-image: url('cancel.png');
    }
    &1 {
        width: 200px;
    }
}
```

```css
.button-ok {
  background-image: url('ok.png');
}
.button-cancel {
  background-image: url('cancel.png');
}
.button1 {
  width: 200px;
}
```

- 生成所有可能的选择器排列

```less
p, a, ul, li {
  border-top: 2px dotted #366;
  //生成所有可能的选择器排列
  & &{
    border-top: 0;
  }
}
```
```css
p p,
p a,
p ul,
p li,
a p,
a a,
a ul,
a li,
ul p,
ul a,
ul ul,
ul li,
li p,
li a,
li ul,
li li {
  border-top: 0;
}
```

## 六、混合(Mixins)

混合(Mixin)将一组属性从一个规则集包含(或混入)到另一个规则集的方式，可理解为复制粘贴。

### 1. 普通混合

```less
.common{
    width: @width;
    height: @height;
}
div{
    background-color: #bfa;
    .common();
}
```

```css
.common {
  width: 50px;
  height: 100px;
}
div {
  background-color: #bfa;
  width: 50px;
  height: 100px;
}
```

::: tip

混合前的css代码同样存在

:::

### 2. 带参数的混合

1. 混合带参数，参数需要**按顺序传递**

```less
.border(@width, @style, @color) {
  border: @width @style @color;
  //border: @arguments;
}
div {
  .border(1px, solid, #ccc);
}
```

```css
div {
  border: 1px solid #ccc;
}
```

- `@arguments` 变量包含了传入的所有参数

::: tip

此时混合前的代码就不存在了（包含圆括号）

:::

2. 混合带参数并有默认值

- 需注意的是，就算有默认值，也要按顺序传递

```less
.border(@width, @style, @color: #ccc) {
  border: @width @style @color;
}
div {
  .border(1px, solid);
}

// 会出错
.border(@width: 1px, @style, @color) {
  border: @width @style @color;
}
div {
  .border(solid, #ccc);
}
```

- 哪怕存在默认值也得按照顺序进行传参，可以使用以下指定参数名来传参

### 3. 命名参数

可以在向混合传参时指定参数名称，从而不需要按顺序传入

```less
.border(@width, @style, @color: #ccc) {
  border: @width @style @color;
}
div {
  .border(@style: solid, @color: red, @width: 100px);
}
```

- 此时`@color`传的参数可以省略 

### 4. 匹配模式

在多个相同的混合中(参数个数必须相同)，匹配特定的混合。

```less
.mixin(dark, @color) {
  color: darken(@color, 10%);
}
.mixin(light, @color) {
  color: lighten(@color, 10%);
}
// @_ 表示匹配所有
.mixin(@_, @color) {
  display: block;
}

@switch: light;

.class {
  .mixin(@switch, #888);
}
```

```css
.class {
  color: #a2a2a2;
  display: block;
}
```

## 七、运算

- 计算结果以操作数最左侧的单位类型为准

```less
@conversion-1: 5cm + 10mm; // 6cm
@conversion-2: 2 - 3cm - 5mm; // -1.5cm
@conversion-3: 3.1 * 2cm; // 6.2cm
@conversion-4: 4px / 2; // 4px / 2

@incompatible-units: 1cm - 1px; // 0.97354167cm

@base: 5%;
@filler: @base * 2; // 10%
@other: @base + @filler; // 15%

@color: #224488 / 2; // #112244
background-color: #112244 + #111; // #223355
```

## 八、继承

- 继承可让多个选择器应用同一组属性，最终编译为并集选择器
- 其性能比混合高，但灵活性比混合低

```less
nav ul {
  &:extend(.inline);
  background: blue;
}
.inline {
  color: red;
}
```

```css
nav ul {
  background: blue;
}
.inline,
nav ul {
  color: red;
}
```

### Extend "all"

- 可理解为把 `all` 前的选择器出现的地方全都替换为 `extend` 前的选择器
- 即把 `.test` 替换为 `.replacement` 生成一个新的选择器应用样式，且不破坏原有的选择器

```less
.a.b.test,
.test.c {
  color: orange;
}
.test {
  &:hover {
    color: green;
  }
}

.replacement:extend(.test all) {
}
```

```css
.a.b.test,
.test.c,
.a.b.replacement,
.replacement.c {
  color: orange;
}
.test:hover,
.replacement:hover {
  color: green;
}
```

## 九、避免编译

通过加引号可以避免 Less 编译，直接把内容输出到 CSS 中

```less
.banner .inline .header {
  width: '100px + 100px';
  height: 100px + 100px;
}
```

```css
.banner .inline .header {
  width: '100px + 100px';
  height: 200px;
}
```

> SCSS与less大同小异，具体的语法可以参考他人博客[常用的SCSS语法](https://juejin.cn/post/7116139958699556877#comment)
