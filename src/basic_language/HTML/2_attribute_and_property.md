---
title: attribute和property
category:
  - 前端
tag:
  - attribute
---

## 一、定义

### 1. attribute

html 标签的**预定义**和**自定义属性**我们统称为 attribute（html 概念）

> 只要是 DOM 标签中出现的属性（html 代码），都是**Attribute**

![image-20221123100921950](./images/attributes.png)

> 有些常用特性（id、class、title 等预定义属性），会被转化为**Property**，而自定义的属性不会

![image-20221123101054215](./images/property.png)

- class 特性在变成属性时，名字会变成“className”

==attribute 的值只能够是字符串== ，使用 setAttribute 函数设置的值总是会被字符串化，例如：

```js
el.setAttribute('disabled', false);
// 等同于
el.setAttribute('disabled', 'false');
```

---

### 2. property

js 原生对象的直接属性，我们统称为**property**（js 概念）

- js 中 property 泛指对象的属性

- attributes 是属于 property 的一个子集

```js
const el = document.querySelector('#my-input');
el.xxx;
```

很多 HTML Attributes 在 DOM 对象上有与之同名的 DOM Propertiess，例如 id="my-input" 对 应 el.id，type="text" 对应 el.type，value="foo" 对应 el.value 等。但 ==DOM Properties 与 HTML Attributes 的名字不总是一 模一样的== ，例如：

```html
<div class="foo"></div>
```

class="foo" 对应的 DOM Properties 则是 el.className。另 外， ==并不是所有 HTML Attributes 都有与之对应的 DOM Properties== ，例 如：

```html
<div aria-valuenow="75"></div>
```

aria-\* 类的 HTML Attributes 就没有与之对应的 DOM Properties。

类似地，也不是所有 DOM Properties 都有与之对应的 HTML Attributes，例如可以用 el.textContent 来设置元素的文本内容， 但并没有与之对应的 HTML Attributes 来完成同样的工作。

> HTML Attributes 的值与 DOM Properties 的值之间是有关联的，大致可以认为：
>
> - HTML Attributes 的作用是设置与之对应的 DOM Pr operties 的初始值

## 二、布尔值属性与非布尔值属性

property 的属性值为布尔类型的 我们统称为布尔值属性

property 的属性值为非布尔类型的 我们统称为非布尔值属性

## 三、attribute 和 property 的同步关系（预定义属性）

1. 非布尔值属性：实时同步

2. 布尔值属性（true/false）

   - property 永远都不会同步给 attribute

   - 在没有动过 property 的情况下（保持默认状态），attribute 会同步给 property（只有初始时同步一次）
   - 在动过 property 的情况下，attribute 不会同步给 property（此时浏览器页面不会同步对 attribute 的修改）

## 四、操作对象

用户操作的是 property（界面的交互）； 浏览器认的也是 property（只认）

## 五、attribute 的一些方法

1. 操作类名的添加、删除与切换

```js
var testNode = document.querySelector('#test');
//classList属于property
testNode.classList.add('class4');
testNode.classList.remove('class1');
testNode.classList.toggle('class2');
console.log(testNode.classList);
```

2. 获取并修改自定义属性的值

```html
<!-- 在自定义属性的名字前加data-  -->
<div id="test" data-atguigu-qhf="qhf"></div>
```

```js
var testNode = document.querySelector('#test');
console.log(testNode.dataset.atguiguQhf); //驼峰命名
testNode.dataset.atguiguQhf = '111';
```

3. 使标签中的文本可编辑

```html
<div id="test" contenteditable="true">djhaldhaskj</div>
```

## 六、总结

布尔值属性最好使用 prop 方法非布尔值属性则使用 attr 方法
