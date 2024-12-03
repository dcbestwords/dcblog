---
title: 基础重点总结
order: 2
category:
  - 前端
tag:
  - JavaScript
  - 类型转换
---

## 一、数据类型的分类和判断

### 1. 分类

#### 基本(值)类型

| 类型      | 取值       | 判别方式   |
| --------- | ---------- | ---------- |
| Number    | 任意数值   | typeof     |
| String    | 任意字符串 | typeof     |
| Boolean   | true/false | typeof     |
| undefined | undefined  | typeof/=== |
| null      | null       | ===        |

- `typeof null`时返回的是`Object`

> ES6 中引入了新的基本类型`Symbol`和`bigInt`

#### 对象(引用)类型

| 类型     | 判别方式          |
| -------- | ----------------- |
| Object   | typeof/instanceof |
| Array    | instanceof        |
| Function | typeof            |

- `typeof Array`时返回的是`Object`

### 2. 判断总结

- 一般情况下使用`typeof`（返回的是类型的字符串表达）

  无法区分的情况：==null 与 object、Array 与 object==

- `instanceof、Array.isArray`

  区分 Array 与 object

- `===`

  区分 null 与 object

利用`Object.prototype.toString`函数，可以编写一个通用函数判断变量类型

```js
function getType(data) {
  let type = typeof data;
  if (type !== 'object') {
    return type;
  }
  return Object.prototype.toString.call(data).replace(/^\[object (\S+)\]$/, '$1');
}

//测试
function Person() {}
console.log(getType(1)); // number
console.log(getType(true)); // boolean
console.log(getType([1, 2, 3])); // Array
console.log(getType(/abc/)); // RegExp
console.log(getType(new Date())); // Date
console.log(getType(new Person())); // Object
console.log(getType({})); // Object
```

## 二、数据类型的相互转换

### 1. 类型转换规则

#### 原始-->数字

- true：1；false：0
- null：0；
- `undefined：NaN`
- string
  - 空字符串（含空白字符）：0
  - 去掉引号，不是数字就是 NaN

#### 所有-->bool

- false 的情况：null、undefined、0、空字符串、NaN
- true 的情况：其他

#### 原始-->字符串

- null："null"
- undefined:"undefined"
- number:"数字"
- boolean
  - true:"true"
  - false:"false"

#### 对象-->原始

- 调用`valueOf` --> 得到的是对象？重新调用`toString` --> 得到的还是对象？报错

### 2. 数据运算符

#### 算术运算符（+、-、\*、/）

运算双方都需要转化为原始类型

- 转换为数字，然后运算
- x+y，x 和 y 有一个为字符串，转化为字符串，进行拼串
- NaN 和任何运算符进行运算还是 NaN

#### 比较运算符（>、<、=）

> 大于小于这些：转换为原始类型

- 转换为数字，然后比较
- 两端全是字符串，比较字典顺序
- `两端存在NaN，一定为false`

> ===

类型和值必须都相同

- 但是两端存在 NaN 时，一定为 false

> ==

- 两端类型相同，比较值
- 两端都是原始类型，转为数字进行比较
- 一端原始，一端对象，将对象转为原始类型进行比较
- undefined 和 null 只有与自身或者相互比较时，才会返回 true
- 两端存在 NaN，一定为 false

#### 逻辑运算符

转换为 boolean（短路特性）

### 3. 面试题

```js
// ?处填什么可以让下面的console输出true
var a = ?
console.log(a==1 && a==2 && a==3)
```

```js
var a = {
  b: 1,
  valueOf: function () {
    return this.b++;
  },
};
```

## 三、原始值和引用值的区别

### 1. 简单值（原始值）

**简单值是表示 JavaScript 中可用的数据或信息的最底层形式或最简单形式。**简单类型的值被称为简单值，是因为它们是**不可细化**的。

也就是说，数字是数字，字符串是字符串，布尔值是 _true_ 或 _false_，_null_ 和 _undefined_ 就是 _null_ 和 _undefined_。这些值本身很简单，不能够再进行拆分。

由于简单值的数据大小是固定的，所以 ==简单值的数据是存储于内存中的栈区里面的== 。

要简单理解栈的存取方式，我们可以通过类比乒乓球盒子来分析。如下图：

![img](./images/2021-09-30-025405.png)

下面是具体的代码示例：

```js
var str = 'Hello World';
var num = 10;
var bol = true;
var myNull = null;
var undef = undefined;
console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bol); // boolean
console.log(typeof myNull); // object
console.log(typeof undef); // undefined
```

这里面 _null_ 比较特殊，打印出来是 _object_，这是由于历史原因所遗留下来的问题，是来源于 _JavaScript_ 从第一个版本开始时的一个 _bug_，并且这个 _bug_ 无法被修复。因为修复会破坏现有的代码。

具体原因是因为不同的对象在底层都表现为二进制，在 _JavaScript_ 中二进制前三位都为 _0_ 的话会被判断为 _object_ 类型，_null_ 的二进制全部为 _0_，自然前三位也是 _0_，所以执行 _typeof_ 值会返回 _object_。

例外，当我们打印 `null == undefined`的时候，返回的是 `true`，这也是面试时经常会被问到的一个问题。

这两个值都表示“无”的意思。

通常情况下， 当我们试图访问某个不存在的或者没有赋值的变量时，就会得到一个 _undefined_ 值。_Javascript_ 会自动将声明是没有进行初始化的变量设为 _undifined_。而 _null_ 值表示空，_null_ 不能通过 _Javascript_ 来自动赋值，也就是说必须要我们自己手动来给某个变量赋值为 _null_。

那么为什么 _JavaScript_ 要设置两个表示"无"的值呢？这其实也是因为历史原因。

_1995_ 年 _JavaScript_ 诞生时，最初像 _Java_ 一样，只设置了 _null_ 作为表示"无"的值。根据 _C_ 语言的传统，_null_ 被设计成可以自动转为 _0_。但是，_JavaScript_ 的设计者，觉得这样做还不够，主要有以下两个原因。

- _null_ 像在 _Java_ 里一样，被当成一个对象。但是，_JavaScript_ 的数据类型分成原始类型（_primitive_）和复合类型（_complex_）两大类，作者觉得表示“无”的值最好不是对象。
- _JavaScript_ 的最初版本没有包括错误处理机制，发生数据类型不匹配时，往往是自动转换类型或者默默地失败。作者觉得，如果 _null_ 自动转为 _0_，很不容易发现错误。

因此，作者又设计了一个 _undefined_。**这里注意：先有 _null_ 后有 _undefined_ 出来，_undefined_ 是为了填补之前的坑。**JavaScript 的最初版本是这样区分的：

_null_ 是一个表示“无”的对象（空对象指针），转为数值时为 _0_；

典型用法是：

- 作为函数的参数，表示该函数的参数不是对象。

- 作为对象原型链的终点。

---

_undefined_ 是一个表示"无"的原始值，转为数值时为 _NaN_。

典型用法是：

- 变量被声明了，但没有赋值时，就等于 _undefined_。
- 调用函数时，应该提供的参数没有提供，该参数等于 _undefined_。
- 对象没有赋值的属性，该属性的值为 _undefined_。
- 函数没有返回值时，默认返回 _undefined_。

### 2. 复杂值（引用值）

在 _JavaScript_ 中，对象就是一个复杂值。因为对象可以向下拆分，拆分成多个简单值或者复杂值。

**复杂值在内存中的大小是未知的，因为复杂值可以包含任何值，而不是一个特定的已知值，所以复杂值的数据都是存储于堆区里面。**

如下图所示：

![img](./images/2021-09-30-025509.png)

下面是具体的代码示例：

```js
// 简单值
var a1 = 0;
var a2 = 'this is str';
var a3 = null;

// 复杂值
var c = [1, 2, 3];
var d = { m: 20 };
```

### 3. 访问方式

**按值访问**

简单值是作为不可细化的值进行存储和使用的，引用它们会转移其值。

```js
var str = 'Hello';
var str2 = str;
str = null;
console.log(str, str2); // null "Hello"
```

**引用访问**

复杂值是通过引用进行存储和操作的，而不是实际的值。创建一个包含复杂对象的变量时，其值是内存中的一个引用地址。引用一个复杂对象时，使用它的名称（即变量或对象属性）通过内存中的引用地址获取该对象值。

```js
var obj = {};
var obj2 = obj;
obj.name = 'zhangsan';
console.log(obj.name); // zhangsan
console.log(obj2.name); // zhangsan
```

### 4. 比较方式

简单值采用值比较，而复杂值采用引用比较。复杂值只有在引用相同的对象（即有相同的地址）时才相等。即使是包含相同对象的两个变量也彼此不相等，因为它们并不指向同一个对象。

示例 1:

```js
var a = 10;
var b = 10;
var c = new Number(10);
var d = c;
console.log(a === b); // true
console.log(a === c); // false
console.log(a === c); // false
console.log(a == c); // true
d = 10;
console.log(d == c); // true
console.log(d === c); // false
```

示例 2:

```js
var obj = { name: 'zhangsan' };
var obj2 = { name: 'zhangsan' };
console.log(obj == obj2); // false
console.log(obj === obj2); // false
var obj3 = { name: 'zhangsan' };
var obj4 = obj3;
console.log(obj3 == obj4); // true
console.log(obj3 === obj4); // ture
```

### 5. 动态属性

对于复杂值，可以为其添加属性和方法，也可以改变和删除其属性和方法。但简单值不可以：

```js
var str = 'test';
str.abc = true;
console.log(str.abc); // undefined
var obj = {};
obj.abc = true;
console.log(obj.abc); // true
```

复杂值支持动态对象属性，因为我们可以定义对象，然后创建引用，再更新对象，并且所有指向该对象的变量都会获得更新。

一个新变量指向现有的复杂对象，并没有复制该对象。这就是复杂值有时被称为引用值的原因。复杂值可以根据需求有任意多个引用，即使对象改变，它们也总是指向同一个对象

```js
var obj = { name: 'zhangsan' };
var obj2 = obj;
var obj3 = obj2;
obj.name = 'abc';
console.log(obj.name, obj2.name, obj3.name);
// abc abc abc
```

### 6. 变量赋值

最后说一下关于变量的赋值，其实是可以分为直接赋值和引用赋值的。直接赋值，就是指将简单值赋值给变量，而引用赋值是指将一个复杂值的引用赋值给变量，这个引用指向堆区实际存在的数据。

**直接赋值**

```js
var a = 3;
var b = a;
b = 5;
console.log(a); // 3
```

**引用赋值**

```js
var a = { value: 1 };
var b = a;
b.value = 10;
console.log(a.value); // 10
```

## 四、let、const、var 的区别

### var 关键字

1. 没有块级作用域的概念
2. 有全局作用域、函数作用域的概念
3. 不初始化值默认为 _undefined_
4. 存在变量提升
5. 全局作用域用 _var_ 声明的变量会挂载到 _window_ 对象下
6. 同一作用域中允许重复声明

### let 关键字

1. 有块级作用域的概念
2. 不存在变量提升
3. 暂时性死区
4. 同一块作用域中不允许重复声明

### const 关键字

1. 与 _let_ 特性一样，仅有 _2_ 个差别
2. 区别 1：必须立即初始化，不能留到以后赋值
3. 区别 2：常量的值不能改变

## 五、this 的指向

_this_ 关键字是一个非常重要的语法点。毫不夸张地说，不理解它的含义，大部分开发任务都无法完成。

_this_ 可以用在构造函数之中，表示实例对象。除此之外，_this_ 还可以用在别的场合。但不管是什么场合，_this_ 都有一个共同点： ==它总是返回一个对象== 。

关于 _this_ 的指向，有一种广为流传的说法就是“谁调用它，_this_ 就指向谁”。

这样的说法没有太大的问题，但是并不是太全面。总结起来，_this_ 的指向规律有如下几条：

- 在函数体中，非显式或隐式地简单调用函数时，在严格模式下，函数内的 _this_ 会被绑定到 `undefined` 上，在非严格模式下则会被绑定到全局对象 `window/global` 上。
- 一般使用 `new` 方法调用构造函数时，构造函数内的 _this_ 会被绑定到新创建的对象上。

- 一般通过 `call/apply/bind` 方法显式调用函数时，函数体内的 _this_ 会被绑定到指定参数的对象上。

- 一般通过上下文对象调用函数时，函数体内的 _this_ 会被绑定到该对象上。

- 在箭头函数中，_this_ 的指向是由外层（函数或全局）作用域来决定的。

当然，真实环境多种多样，下面我们就来根据实战例题逐一梳理。

### 1. 全局环境中的 this

例题 _1_：

```js
function f1() {
  console.log(this);
}

function f2() {
  'use strict';
  console.log(this);
}

f1(); // window or global
f2(); // undefined
```

这种情况相对简单、直接，函数在浏览器全局环境下被简单调用，在非严格模式下 _this_ 指向 _window_，在通过 _use strict_ 指明严格模式的情况下指向 _undefined_。

虽然上面的题目比较基础，但是需要注意上面题目的变种，例如

例题 _2_：

```js
const foo = {
  bar: 10,
  fn: function () {
    console.log(this); // window or global
    console.log(this.bar); // undefined
  },
};
var fn1 = foo.fn;
fn1();
```

这里的 _this_ 仍然指向 _window_。虽然 _fn_ 函数在 _foo_ 对象中作为该对象的一个方法，但是在赋值给 _fn1_ 之后，_fn1_ 仍然是在 _window_ 的全局环境下执行的。因此上面的代码仍然会输出 _window_ 和 _undefined_。

还是上面这道题目，如果改成如下的形式

例题 _3_：

```js
const foo = {
  bar: 10,
  fn: function () {
    console.log(this); // { bar: 10, fn: [Function: fn] }
    console.log(this.bar); // 10
  },
};
foo.fn();
```

这时，_this_ 指向的是最后调用它的对象，在 `foo.fn( )` 语句中，this 指向的是 `foo` 对象。

### 2. 上下文对象调用中的 this

例题 _4_：

```js
const student = {
  name: 'zhangsan',
  fn: function () {
    return this;
  },
};
console.log(student.fn() === student); // true
```

在上面的代码中，_this_ 指向当前的对象 _student_，所以最终会返回 _true_。

当存在更复杂的调用关系时，如以下代码中的嵌套关系，_this_ 将指向最后调用它的对象，例如

例题 _5_：

```js
const student = {
  name: 'zhangsan',
  son: {
    name: 'zhangxiaosan',
    fn: function () {
      return this.name;
    },
  },
};
console.log(student.son.fn()); // zhangxiaosan
```

在上面的代码中，_this_ 会指向最后调用它的对象，因此输出的是 `zhangxiaosan`。

至此，_this_ 的上下文对象调用已经介绍得比较清楚了。我们再来看一道比较高阶的题目

例题 _6_：

```js
const o1 = {
  text: 'o1',
  fn: function () {
    return this.text;
  },
};

const o2 = {
  text: 'o2',
  fn: function () {
    return o1.fn();
  },
};

const o3 = {
  text: 'o3',
  fn: function () {
    var fn = o1.fn;
    return fn();
  },
};

console.log(o1.fn()); // o1
console.log(o2.fn()); // o1
console.log(o3.fn()); // undefined
```

答案是 `o1、o1、undefined`。

这里主要讲一下为什么第三个是 `undefined`。这里将 _o1.fn_ 赋值给了 _fn_，所以 _fn_ 等价于 `function () { return this.text; }`，然后该函数在调用的时候，是直接 _fn( )_ 的形式调用的，并不是以对象的形式，相当于还是全局调用，指向 `window`，所以打印出 `undefined`。

### 3. this 指向绑定事件的元素

`DOM`元素绑定事件时，事件处理函数里面的 _this_ 指向绑定了事件的元素。

这个地方一定要注意它和 _target_ 的区别，_target_ 是指向触发事件的元素。

示例如下：

```html
<ul id="color-list">
  <li>red</li>
  <li>yellow</li>
  <li>blue</li>
  <li>green</li>
  <li>black</li>
  <li>white</li>
</ul>
```

```js
// this 是绑定事件的元素
// target 是触发事件的元素 和 srcElememnt 等价
let colorList = document.getElementById('color-list');
colorList.addEventListener('click', function (event) {
  console.log('this:', this);
  console.log('target:', event.target);
  console.log('srcElement:', event.srcElement);
});
```

当我点击如下位置时打印出来的信息如下：

![](./images/2021-09-28-033304.png)

有些时候我们会遇到一些困扰，比如在 _div_ 节点的事件函数内部，有一个局部的 _callback_ 方法，该方法被作为普通函数调用时，_callback_ 内部的 _this_ 是指向全局对象 _window_ 的

例如：

```html
<div id="div1">我是一个div</div>
```

```js
window.id = 'window';
document.getElementById('div1').onclick = function () {
  console.log(this.id); // div1
  const callback = function () {
    console.log(this.id); // 因为是普通函数调用，所以 this 指向 window
  };
  callback();
};
```

此时有一种简单的解决方案，可以用一个变量保存 _div_ 节点的引用，如下：

```js
window.id = 'window';
document.getElementById('div1').onclick = function () {
  console.log(this.id); // div1
  const that = this; // 保存当前 this 的指向
  const callback = function () {
    console.log(that.id); // div1
  };
  callback();
};
```

### 4. 改变 this 指向

#### `call、apply、bind`方法修改 this 指向

由于 _JavaScript_ 中 _this_ 的指向受函数运行环境的影响，指向经常改变，使得开发变得困难和模糊，所以在封装 _sdk_ 或者写一些复杂函数的时候经常会用到 _this_ 指向绑定，以避免出现不必要的问题。

`call、apply、bind`基本都能实现这一功能，起到确定 _this_ 指向的作用

---

`Function.prototype.call( )`

`call` 方法可以指定 this 的指向（即函数执行时所在的的作用域），然后在指定的作用域中，执行函数。

```js
var obj = {};
var f = function () {
  return this;
};
console.log(f() === window); // this 指向 window
console.log(f.call(obj) === obj); // 改变this 指向 obj
```

上面代码中，全局环境运行函数 _f_ 时，_this_ 指向全局环境（浏览器为 _window_ 对象）；

_call_ 方法可以改变 _this_ 的指向，指定 _this_ 指向对象 _obj_，然后在对象 _obj_ 的作用域中运行函数 _f_。

_call_ 方法的参数，应该是对象 _obj_，如果参数为空或 _null、undefind_，则默认传参全局对象。

```js
var n = 123;
var obj = { n: 456 };

function a() {
  console.log(this.n);
}

a.call(); // 123
a.call(null); // 123
a.call(undefined); // 123
a.call(window); // 123
a.call(obj); // 456
```

上面代码中，_a_ 函数中的 _this_ 关键字，如果指向全局对象，返回结果为 _123_。

如果使用 _call_ 方法将 _this_ 关键字指向 _obj_ 对象，返回结果为 _456_。可以看到，如果 _call_ 方法没有参数，或者参数为 _null_ 或 _undefined_，则等同于指向全局对象。

如果 _call_ 传参不是以上类型，则转化成对应的包装对象，然后传入方法。

例如，`5` 转成 `Number` 实例，绑定 `f` 内部 `this`

```js
var f = function () {
  return this;
};

f.call(5); // Number {[[PrimitiveValue]]: 5}
```

`call` 可以接受多个参数，第一个参数是 `this` 指向的对象，之后的是函数回调所需的参数。

```js
function add(a, b) {
  return a + b;
}

add.call(this, 1, 2); // 3
```

`call` 方法的一个应用是调用对象的原生方法。

```js
var obj = {};
obj.hasOwnProperty('toString'); // false

// 覆盖掉继承的 hasOwnProperty 方法
obj.hasOwnProperty = function () {
  return true;
};
obj.hasOwnProperty('toString'); // true

Object.prototype.hasOwnProperty.call(obj, 'toString'); // false
```

上面代码中 `hasOwnProperty` 是 _obj_ 继承来的方法，用来判断对象是否包含自身特点（非继承）属性，但是 `hasOwnProperty` 并不是保留字，如果被对象覆盖，会造成结果错误。

_call_ 方法可以解决这个问题，它将 `hasOwnProperty` 方法的原始定义放到 _obj_ 对象上执行，这样无论 _obj_ 上有没有同名方法，都不会影响结果。

---

`Function.prototype.apply( )`

_apply_ 和 _call_ 作用类似，也是改变 _this_ 指向，然后调用该函数，唯一区别是 ==apply 接收数组作为函数执行时的参数== 。语法如下：

```js
func.apply(thisValue, [arg1, arg2, ...])
```

_apply_ 方法的第一个参数也是 _this_ 所要指向的那个对象，如果设为 _null_ 或 _undefined_，则等同于指定全局对象。

第二个参数则是一个数组，该数组的所有成员依次作为参数，传入原函数。

原函数的参数，在 _call_ 方法中必须一个个添加，但是在 _apply_ 方法中，必须以数组形式添加。

```js
function f(x, y) {
  console.log(x + y);
}

f.call(null, 1, 1); // 2
f.apply(null, [1, 1]); // 2
```

利用这一特性，可以实现很多小功能。比如，输出数组的最大值：

```js
var a = [24, 30, 2, 33, 1];
Math.max.apply(null, a); //33
```

还可以将数组中的空值，转化成 _undefined_。

通过 `apply` 方法，利用 _Array_ 构造函数 ==将数组的空元素变成 undefined== 。

```js
var a = ['a', , 'b'];
Array.apply(null, a); //['a',undefind,'b']
```

空元素与 _undefined_ 的差别在于，数组的 `forEach` 方法会跳过空元素，但是不会跳过 `undefined`。因此，遍历内部元素的时候，会得到不同的结果。

```js
var a = ['a', , 'b'];

function print(i) {
  console.log(i);
}

a.forEach(print);
// a
// b

Array.apply(null, a).forEach(print);
// a
// undefined
// b
```

配合数组对象的 `slice` 方法，可以将一个类似数组的对象（比如 `arguments` 对象）转为真正的数组。

```js
Array.prototype.slice.apply({ 0: 1, length: 1 }); // [1]
Array.prototype.slice.apply({ 0: 1 }); // []
Array.prototype.slice.apply({ 0: 1, length: 2 }); // [1, undefined]
Array.prototype.slice.apply({ length: 1 }); // [undefined]
```

上面代码的 `apply`方法的参数都是对象，但是返回结果都是数组，这就起到了将 ==对象转成数组== 的目的。

从上面代码可以看到，这个方法起作用的前提是，被处理的对象必须有 `length` 属性，以及相对应的数字键。

---

`Function.prototype.bind( )`

_bind_ 用于将函数体内的 _this_ 绑定到某个对象，然后 ==返回一个新函数==

```js
var d = new Date();
d.getTime(); // 1481869925657

var print = d.getTime;
print(); // Uncaught TypeError: this is not a Date object.
```

报错是因为 `d.getTime` 赋值给 `print` 后，`getTime` 内部的 `this` 指向方式变化，已经不再指向 `date` 对象实例了。

解决方法：

```js
var print = d.getTime.bind(d);
print(); // 1481869925657
```

`bind` 接收的参数就是所要绑定的对象

```js
var counter = {
  count: 0,
  inc: function () {
    this.count++;
  },
};

var func = counter.inc.bind(counter);
func();
counter.count; // 1
```

绑定到其他对象

```js
var counter = {
  count: 0,
  inc: function () {
    this.count++;
  },
};

var obj = {
  count: 100,
};
var func = counter.inc.bind(obj);
func();
obj.count; // 101
```

`bind` 还可以接收更多的参数，将这些参数绑定到原函数的参数

```js
var add = function (x, y) {
  return x * this.m + y * this.n;
};

var obj = {
  m: 2,
  n: 2,
};

var newAdd = add.bind(obj, 5);
newAdd(5); // 20
```

上面代码中，_bind_ 方法除了绑定 _this_ 对象，还将 _add_ 函数的第一个参数 _x_ 绑定成 _5_，然后返回一个新函数 _newAdd_，这个函数只要再接受一个参数 _y_ 就能运行了。

如果 _bind_ 方法的第一个参数是 _null_ 或 _undefined_，等于将 _this_ 绑定到全局对象，函数运行时 _this_ 指向顶层对象（浏览器为 _window_）。

```js
function add(x, y) {
  return x + y;
}

var plus5 = add.bind(null, 5);
plus5(10); // 15
```

上面代码中，函数 _add_ 内部并没有 _this_，使用 _bind_ 方法的主要目的是绑定参数 _x_，以后每次运行新函数 _plus5_，就只需要提供另一个参数 _y_ 就够了。

而且因为 _add_ 内部没有 _this_，所以 _bind_ 的第一个参数是 _null_，不过这里如果是其他对象，也没有影响。

_bind_ 方法有一些 ==使用注意点== 。

（1）每一次返回一个新函数

`bind` 方法每运行一次，就返回一个新函数，这会产生一些问题。比如，监听事件的时候，不能写成下面这样。

```js
element.addEventListener('click', o.m.bind(o));
```

上面代码中，_click_ 事件绑定 _bind_ 方法生成的一个匿名函数。这样会导致无法取消绑定，所以，下面的代码是无效的。

```js
element.removeEventListener('click', o.m.bind(o));
```

正确的方法是写成下面这样：

```js
var listener = o.m.bind(o);
element.addEventListener('click', listener);
//  ...
element.removeEventListener('click', listener);
```

（2）结合回调函数使用

回调函数是 _JavaScript_ 最常用的模式之一，但是一个常见的错误是， ==将包含 _this_ 的方法直接当作回调函数== 。解决方法就是使用 _bind_ 方法，将 `counter.inc` 绑定 `counter`。

```js
var counter = {
  count: 0,
  inc: function () {
    'use strict';
    this.count++;
  },
};

function callIt(callback) {
  callback();
}

callIt(counter.inc.bind(counter));
counter.count; // 1
```

上面代码中，`callIt` 方法会调用回调函数。这时如果直接把 `counter.inc` 传入，调用时 `counter.inc` 内部的 _this_ 就会指向全局对象。使用 `bind` 方法将 `counter.inc` 绑定 `counter` 以后，就不会有这个问题，_this_ 总是指向 _counter_。

还有一种情况比较隐蔽，就是某些数组方法可以接受一个函数当作参数。这些函数内部的 _this_ 指向，很可能也会出错。

```js
var obj = {
  name: '张三',
  times: [1, 2, 3],
  print: function () {
    this.times.forEach(function (n) {
      console.log(this.name);
    });
  },
};

obj.print();
// 没有任何输出
```

上面代码中，`obj.print` 内部 `this.times` 的 _this_ 是指向 _obj_ 的，这个没有问题。

但是，`forEach` 方法的回调函数内部的 `this.name` 却是指向全局对象，导致没有办法取到值。稍微改动一下，就可以看得更清楚。

```js
obj.print = function () {
  this.times.forEach(function (n) {
    console.log(this === window);
  });
};

obj.print();
// true
// true
// true
```

解决这个问题，也是通过 `bind` 方法绑定 _this_。

```js
obj.print = function () {
  this.times.forEach(
    function (n) {
      console.log(this.name);
    }.bind(this)
  );
};

obj.print();
// 张三
// 张三
// 张三
```

（3）结合 call 方法使用

利用 `bind` 方法，可以改写一些 _JavaScript_ 原生方法的使用形式，以数组的 _slice_ 方法为例。

```js
[1, 2, 3].slice(0, 1); // [1]
// 等同于
Array.prototype.slice.call([1, 2, 3], 0, 1); // [1]
```

上面的代码中，数组的 `slice` 方法从 `[1, 2, 3]` 里面，按照指定位置和长度切分出另一个数组。这样做的本质是在 `[1, 2, 3]` 上面调用 `Array.prototype.slice` 方法，因此可以用 `call` 方法表达这个过程，得到同样的结果。

`call` 方法实质上是调用 `Function.prototype.call` 方法，因此上面的表达式可以用 `bind` 方法改写。

```js
var slice = Function.prototype.call.bind(Array.prototype.slice);
slice([1, 2, 3], 0, 1); // [1]
```

上面代码的含义就是，将 `Array.prototype.slice` 变成 `Function.prototype.call` 方法所在的对象，调用时就变成了 `Array.prototype.slice.call`。类似的写法还可以用于其他数组方法。

```js
var push = Function.prototype.call.bind(Array.prototype.push);
var pop = Function.prototype.call.bind(Array.prototype.pop);

var a = [1, 2, 3];
push(a, 4);
a; // [1, 2, 3, 4]

pop(a);
a; // [1, 2, 3]
```

如果再进一步，将 `Function.prototype.call` 方法绑定到 `Function.prototype.bind` 对象，就意味着 `bind` 的调用形式也可以被改写。

```js
function f() {
  console.log(this.v);
}

var o = { v: 123 };
var bind = Function.prototype.call.bind(Function.prototype.bind);
bind(f, o)(); // 123
```

上面代码的含义就是，将 `Function.prototype.bind` 方法绑定在 `Function.prototype.call` 上面，所以 `bind` 方法就可以直接使用，不需要在函数实例上使用。

#### 2. 箭头函数的 this 指向

当我们的 this 是以函数的形式调用时，this 指向的是全局对象。

不过对于箭头函数来讲，却比较特殊。箭头函数的 this 指向始终为外层的作用域。

先来看一个普通函数作为对象的一个方法被调用时，this 的指向，如下：

```js
const obj = {
  x: 10,
  test: function () {
    console.log(this); // 指向 obj 对象
    console.log(this.x); // 10
  },
};
obj.test();
// { x: 10, test: [Function: test] }
// 10
```

可以看到，普通函数作为对象的一个方法被调用时，this 指向当前对象。

在上面的例子中，就是 _obj_ 这个对象，`this.x` 的值为 _10_。

接下来是箭头函数以对象的方式被调用的时候的 this 的指向，如下：

```js
var x = 20;
const obj = {
  x: 10,
  test: () => {
    console.log(this); // {}
    console.log(this.x); // undefined
  },
};
obj.test();
// {}
// undefined
```

这里的结果和上面不一样，this 打印出来为` { }`，而 `this.x` 的值为 `undefined`。

为什么呢？

实际上刚才我们有讲过，箭头函数的 `this` 指向与普通函数不一样，它的 _this_ 指向始终是指向的外层作用域。所以这里的 _this_ 实际上是指向的全局对象。

如果证明呢？

方法很简单，将这段代码放入浏览器运行，在浏览器中用 _var_ 所声明的变量会成为全局对象 _window_ 的一个属性，如下：

![](./images/2021-09-28-052059.png)

接下来我们再来看一个例子，来证明箭头函数的 _this_ 指向始终是指向的外层作用域。

```js
var name = 'JavaScript';
const obj = {
  name: 'PHP',
  test: function () {
    const i = function () {
      console.log(this.name);
      // i 是以函数的形式被调用的，所以 this 指向全局
      // 在浏览器环境中打印出 JavaScript，node 里面为 undeifned
    };
    i();
  },
};
obj.test(); // JavaScript
```

接下来我们将 i 函数修改为箭头函数，如下：

```js
var name = 'JavaScript';
const obj = {
  name: 'PHP',
  test: function () {
    const i = () => {
      console.log(this.name);
      // 由于 i 为一个箭头函数，所以 this 是指向外层的
      // 所以 this.name 将会打印出 PHP
    };
    i();
  },
};
obj.test(); // PHP
```

最后需要说一点的就是，箭头函数不能作为构造函数，如下：

```js
const Test = (name, age) => {
  this.name = name;
  this.age = age;
};
const test = new Test('xiejie', 18);
// TypeError: Test is not a constructor
```

> 总结起来，_this_ 的指向规律有如下几条：
>
> - 在函数体中，非显式或隐式地简单调用函数时，在严格模式下，函数内的 _this_ 会被绑定到 _undefined_ 上，在非严格模式下则会被绑定到全局对象 _window/global_ 上。
> - 一般使用 _new_ 方法调用构造函数时，构造函数内的 _this_ 会被绑定到新创建的对象上。
> - 一般通过 _call/apply/bind_ 方法显式调用函数时，函数体内的 _this_ 会被绑定到指定参数的对象上。
> - 一般通过上下文对象调用函数时，函数体内的 _this_ 会被绑定到该对象上。
> - 在箭头函数中，_this_ 的指向是由外层（函数或全局）作用域来决定的。

## 六、数据,变量, 内存的理解

### 1. 什么是数据?

- 在内存中可读的, 可传递的保存了特定信息的'东东'
- 一切皆数据, 函数也是数据
- 在内存中的所有操作的目标: 数据

### 2. 什么是变量?

- 在程序运行过程中它的值是允许改变的量
- 一个变量对应一块小内存, 它的值保存在此内存中

### 3. 什么是内存?

- 内存条通电后产生的存储空间(临时的)
- 一块内存包含 2 个方面的数据
  - 内部存储的数据
  - 地址值数据
- 内存空间的分类
  - 栈空间: 全局变量和局部变量
  - 堆空间: 对象

### 4. 内存,数据, 变量三者之间的关系

- 内存是容器, 用来存储不同数据
- 变量是内存的标识, 通过变量我们可以操作(读/写)内存中的数据

## 七、JS 引擎如何管理内存？

- 内存生命周期

  - 分配小内存空间, 得到它的使用权

  - 存储数据, 可以反复进行操作

  - 释放小内存空间

- 释放内存

  - 局部变量: 函数执行完自动释放

  - 对象: 成为垃圾对象==>垃圾回收器回收
