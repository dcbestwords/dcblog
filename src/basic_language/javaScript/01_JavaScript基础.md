---
title: JavaScript基础
order: 1
---

## 一、语言基础

1. JS中严格区分大小写

2. JS中每一条语句以`；`结尾（非必须），可以使用 C 语言的风格用一对大括号将多条语句组合到一个代码块里面。

    ```js
    {
        let i = 10;
        console.log(i); // 10
    }
    ```

3. JS中自动忽略多个空格和换行。

4. 声明变量：`var age = 80;`

5. 在 JavaScript 中，注释可以分为单行注释和多行注释。

    ```js
    // 这是一个单行注释
    /*
     *
     * 这是一个较长的 
     * 多行的注释
     * 
     */
    ```

6. 标识符（命名规则）
    - 标识符中可以含有字母、数字、_、$
    - 标识符不能以数字开头
    - 标识符不能是ES中的关键字或保留字
    - 标识符一般都采用驼峰命名法（helloWorld）

## 二、变量

所谓变量，就是用于引用内存中存储的一个值。当然，我们在使用变量之前，还需要先做的一件事儿就是声明变量。

### 1. 声明变量

在 JavaScript 中声明变量的方式有3种：`var`，`let`，`const`。其中`var`现在已经不推荐使用了，因为会有变量提升等问题。（后面我们会具体来探讨此问题）

`const`和`let`的区别在于，`const`所声明的变量如果是简单数据类型，那么是不能够再改变的。而`let`所声明的变量无论是简单数据类型还是复杂数据类型，在后面是可以改变的。示例如下：

const 声明变量：

```js
const name = 'Bill';
name = 'Lucy';
// TypeError: Assignment to constant variable.
```

let 声明变量：

```js
let name = 'Bill';
name = 'Lucy';
console.log(name);
```

### 2. 变量的赋值与初始化

我们可以利用`=`来给一个变量进行赋值，给变量第一次赋值的过程，叫做变量的 ==初始化== 。一般我们在声明变量的时候就会将变量给初始化，如下：

```js
let a = 3;
```

当然我们也可以一次性初始化多个变量，将其写在一行里面。

```js
let x = 3,y = 4,z = 5;
```

如果声明变量时没有赋予初值，那么默认值为`undefined`

```js
let a;
console.log(a); // undefined
```

### 3. 使用 var 声明变量

前面有提到过，在 JavaScript 中声明变量的方式有3种：`var`，`let`，`const`。其中`var`现在已经不推荐使用了。这是因为使用`var`来声明变量会伴随着一些问题。当然，这些问题也经常被看作是 JavaScript 的一些特点。这里要介绍到的是 ==重复声明== 和  ==遗漏声明== 。

#### 重复声明

如果是使用`var`关键字来声明的变量，那么是允许重复声明的。只不过这个时候会忽略此次声明。如果重新声明并且带有赋值，则相当于是重新赋值

重复声明不带有赋值操作，JavaScript 引擎会自动忽略后面的变量声明：

```js
var test = 3;
var test;
console.log(test); // 3
```

重新声明时如果带有赋值操作，那么会进行一个数据的覆盖：

```js
var test = 3;
var test = 5;
console.log(test); // 5
```

需要注意的是，重复声明仅仅是使用`var`关键字时可以这样。如果是在严格模式中，或者使用`let`或者`const`的话是会报错的。

#### 遗漏声明

如果试图读取一个没有声明的变量的值，JavaScript 引擎会报错：

```js
console.log(a);
// ReferenceError: a is not defined
```

但是 JavaScript 引擎允许遗漏声明。即直接对变量赋值而无需事先声明，赋值操作会自动声明该变量（`window.a`）：

```js
{
    a = 5;
    console.log(a); // 5
}
console.log(a); // 5
```

### 4. 作用域

所谓作用域，就是变量在程序中能够被访问到的区域。这里我们介绍一个全局作用域，一个局部作用域

#### 全局作用域

这是 JavaScript 引擎一进来就处于的运行环境。在全局作用域中所声明变量称之为全局变量。全局变量的特点在于变量在任何地方都能被访问，如下：

```js
let a = 5; // 这是一个全局变量
```

#### 局部作用域

在 JavaScript 中，一对大括号就可以产生一个局部作用域。局部作用域里面的变量称之为局部变量。既然是局部变量，那么就只能在这个局部的作用域里面能访问到，外部是访问不到的，如下：

```js
{
    let i = 10;
    console.log(i); // 10
}
console.log(i);
// ReferenceError: i is not defined
```

顺带一提的是，在大括号中用`var`声明的变量不是局部变量，而是一个全局变量。这其实也是最早使用`var`来声明变量所遗留下来的一个问题，如下：

```js
{
    var i = 10;
    console.log(i); // 10
}
console.log(i); // 10
```

在局部作用域里面，如果变量名和全局作用域里面的变量名冲突，优先使用局部作用域里面的变量：

```js
let i = 10;
{
    let i = 100;
    console.log(i); // 100
}
console.log(i); // 10
```

如果在局部作用域里面声明变量时没有书写关键字，那么会声明一个全局变量：

```js
{
    i = 10;
}
console.log(i); // 10
```

- var 声明的变量可以重复声明不会报错

- var声明的变量没有 ==块级作用域==

## 三、数据类型

所谓数据类型，就是指数据不同的种类。

在 JavaScript 中，存在 7 种简单数据类型以及 1 种复杂数据类型。

简单数据类型：`string、number、boolean、null、undefined、bigint、symbol`

复杂数据类型：`object`

以下介绍的是 ==简单数据类型==

### 1. String 

#### 字符串介绍

这是程序里面使用最为广泛的一种类型。在 JavaScript 里面，可以使用单引号，也可以使用双引号

```js
let a = "abcd";
let b = 'abcd';
```

这里需要注意一个问题，就是字符串的内容本身包含单引号或者双引号的话，需要和字符串界限符区分开，如下：

```js
let a = "Hello 'World',welcome"; // 正确
let b = 'Hello "World",welcome'; // 正确
let c = "Hello "World",welcome"; // 错误
```

当然，我们这里使用转义字符也是一个很好的选择，如下：

```js
let a = "Hello 'World',welcome"; // 正确
let b = 'Hello "World",welcome'; // 正确
let c = "Hello \"World\",welcome"; // 正确
```

字符串这种数据类型非常的霸道，==它和其他数据类型相加都会被转换为字符串类型==，示例如下：

```js
let a = "abcd";
let b = 13 + a;
let c = 3.14 + a;
let d = true + a;
let e = null + a;
let f = undefined + a;
console.log(typeof b); // string
console.log(typeof c); // string
console.log(typeof d); // string
console.log(typeof e); // string
console.log(typeof f); // string
```

所以如果我们要让一个非字符串的变量转换为字符串的话，只需要和一个空字符串相加就可以了。

当然，转换字符串事实上我们也有相应的函数来转换，最常见的就是`toString()`函数。

**toString()**

说明：该函数会将 ==除了 null 和 undefined 以外的数据类型== 转换为字符串。

示例：

```js
let a = 10,b = true,c = null,d;
console.log(typeof a.toString()); // string
console.log(typeof b.toString()); // string
console.log(typeof c.toString()); // 报错
console.log(typeof d.toString());
```

可以看到，程序报错，因为 null 和 undefined 并不能通过`toString()`函数来转换为相应的字符串。

还有一个知识点，就是`toString()`函数在转换数值的时候是可以带有参数的。可以将数值指定转换为几进制。示例如下：

```js
let i = 10;
console.log(i.toString()); // 10
console.log(i.toString(2)); // 1010
console.log(i.toString(8)); // 12
console.log(i.toString(10)); // 10
console.log(i.toString(16)); // a
```

当想要将 null 和 undefined 转换成字符串时，可以使用`String()`方法。该方法可以 ==将 5 种数据类型都转换为字符串==。示例如下：

```js
let a = 10,b = true,c = null,d;
console.log(String(a),typeof String(a)); // 10 string
console.log(String(b),typeof String(b)); // true string
console.log(String(c),typeof String(c)); // null string
console.log(String(d),typeof String(d)); // undefined string
```

#### 字符串模板

在 ECMAScript 6 中新增了模板字面量。这可以看作是增强版的字符串，它用反引号 ` 进行标识：

```js
let str = `Hello World`;
console.log(str); // Hello World
console.log(typeof str); // string
console.log(str.length); // 11
```

以上代码中，使用模板字面量语法创建一个字符串，并赋值给 str 变量，这时变量的值与一个普通的字符串无异。

如果想在字符串中包含反引号，只需使用反斜杠`\`转义即可。

ECMAScript 6 的模板字面量使得多行字符串更加容易创建，因为它不需要特殊的语法，只需要在想要的位置直接换行即可，如下：

```js
let str = `Hello 
World`;
console.log(str);
// Hello
// World
console.log(typeof str); // string
console.log(str.length); // 12
```

在反引号之内的所有空白符都是字符串的一部分，因此需要特别留意缩进。

模板字面量看上去仅仅是普通 JavaScript 字符串的升级版，但二者之间真正的区别在于模版字面量存在变量占位符。变量占位符允许将任何有效的 JavaScript 表达式嵌入到模板字面量中，并将其结果输出为字符串的一部分。

变量占位符由起始的`${`与结束的`}`来界定，之间允许放入任意的 JavaScript 表达式。示例如下：

```js
let name = "xiejie";
console.log(`Hello,${name}`);
// Hello,xiejie
```

占位符`${name}`会访问本地变量`name`，并将其值插入到字符串中。 

既然占位符是可以是 JavaScript 表达式，那么可替换的就不仅仅是简单的变量名，可以轻易嵌入运算符、函数调用等，示例如下：

```js
let count = 10,price = 0.25;
console.log(`${count} items cost $${(count*price).toFixed(2)}`);
// 10 items cost $2.50
```


### 2. Number 

数字类型又被称之为`number`类型。`number`类型的值可以分为**整数和实数**两大类。

#### 整数

整数可以分为正整数和负整数，如下：

```js
let a = 12;
let b = -7;
```

这个虽然没什么好说的，但是还是有一个注意点，那就是 ==进制问题==。二进制以`0b`开头，八进制以`0`开头，十六进制以`0x`开头，示例如下：

```js
// 二进制
let a = 0b101; // 5
// 八进制
let b = 017; // 15
// 十进制
let c = 21; // 21
// 十六进制
let d = 0xFD; // 253
console.log(a,b,c,d);
```

需要注意的是，不管参与运算的变量是多少进制，最终计算结果仍然会为十进制。

在 ECMAScript 6 中提供了八进制数值新的写法，使用`0o`作为前缀，如下：

```js
let a = 017;
let b = 0o17;
console.log(a,b); // 15 15
```

#### 实数

所谓实数，就是我们平常所常见的小数，或者称之为浮点数。在 JavaScript 里面，表示浮点数的方式有两种，==小数型和科学记数法型== 。示例如下：

```js
let a = 3.14;
let b = 9.12e+2;
console.log(a,b); // 3.14 912
```

#### 数值范围（扩展）

由于内存限制，JavaScript 并不能保存世界上所有的数值。在 JavaScript 中能够表示的最小数值在绝大多数浏览器中为`5e-324`，而最大值为`1.7976931348623157e+308`。

通过`Number.MIN_VALUE`和`Number.MAX_VALUE`我们可以查看到 JavaScript 中支持的最小值和最大值：

```js
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
```

如果某次计算的结果超出了 ECMAScript 的数值范围，那么正数会被转化为`infinity`（正无穷），负数会被转换为`-infinity`（负无穷）。例如，根据 ECMAScript 的规定：

大于等于 2 的 1024 次方的数为无穷大

```js
let i = Math.pow(2,1024);
console.log(i); // Infinity
```

小于等于 2 的 1024 次方的数为无穷小

```js
let i = -Math.pow(2,1024);
console.log(i); // -Infinity
```

如果某次计算返回了 infinity 值，那么该值无法参与下一次计算。因为 infinity 不是能够参与计算的数值。要想确定一个数值是不是有穷的，可以使用`isFinite()`函数。

示例：如果是无穷大数，会返回 false，否则返回 true（其实这个函数就是用于判断一个变量是否为数值的）

```js
let i = Math.pow(2,1024);
console.log(isFinite(i)); // fasle
let j = 7;
console.log(isFinite(j)); // true
```

#### NaN

英文全称为 `Not a Number`，即非数值。这个数值用于表示 ==本来要返回数值的操作数未返回数值== 的情况（这样就不会抛出错误了）。NaN 有两个特点：

**1. 任何涉及 NaN 的操作都会返回 NaN**

```js
let a = NaN + 10;
console.log(a); // NaN
```

**2. NaN 和任何值都不相等，包括它自己本身**

```js
console.log(NaN === NaN); // false
```

除此之外，ECMAScript 还定义了一个`isNaN()`函数，来判断一个参数是否不是数值。`isNaN()`函数在接收到一个值之后，会尝试将这个值转换为数值。示例如下：

```js
console.log(isNaN(NaN)); // true
console.log(isNaN("123")); // false
console.log(isNaN(123)); // false
console.log(isNaN("Hello")); // true
console.log(isNaN(true)); // false
```

最后需要补充说明一下的是，==NaN是属于number类型的==：

```js
console.log(typeof NaN); // number
```

### 3. Boolean 

布尔类型，也被称为`boolean`类型。这个类型的值只有两个，一个是 true，另一个是 false。

```js
let i = true;
console.log(i); // true
console.log(typeof i); // boolean
```

需要注意的是，这两个值与数字值不是一回事，因此 true 不一定等于 1，而 false 也不一定等于0。
还有一点就是布尔类型的字面值 true 和 false 是区分大小写的。也就是说，True 和 False 都不是布尔值。

虽然布尔类型的字面值只有 2 个，但是 ECMAScript 中**所有类型的值都可以转换为布尔类型**。可以使用`Boolean()`函数将其他类型转换为布尔值。

```js
console.log(Boolean("Hello")); // true
console.log(Boolean(42)); // true
console.log(Boolean(0)); // false
```

最后需要注意的就是下面的 9 个值是对应着布尔类型里面的 ==假值：==

- ""：双引号的空字符串
- ''：单引号的空字符串
- ``：空字符串模板
- 0：数字0
- -0：==JavaScript 中 -0 和 0 为不同的值==
- NaN
- false
- null
- undefined

### 4. Null 

`null`类型的值也是只有一个，就是 null。`null`表示一个空的对象。从逻辑角度来看，==null 值表示一个空对象指针== ，这也正是用`typeof`操作符检测 null 值时会返回 object 的原因。

示例：

```js
let i = null;
console.log(typeof i); // object
```

实际上，undefined 值是从 null 值派生而来的，因此当我们对这两个数据类型进行相等测试时，会返回true。如下：

```js
if(null == undefined){
    console.log('Yes'); // Yes
}
```

### 5. Undefined

`undefined`类型就只有一个值，undefined。在使用变量但是没有为其赋值的时候，这个变量的值就是 undefined。

还需要注意一点，就是没有申明的变量，使用时会报错，而不是 undefined。但是打印其类型的时候，显示的类型却是 undefined

```js
let i;
console.log(typeof i); // undefined
console.log(typeof j); // undefined
console.log(i); // undefined
console.log(j);
// ReferenceError: j is not defined
```

### 6.  [bigint](https://wangdoc.com/es6/number#bigint-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)

### 7.  [symbol](https://wangdoc.com/es6/symbol)

### 8. 类型的转换

通过前面的介绍，我们已经知道了在 JavaScript 中有好几种不同的数据类型。然而这些数据类型都是可以相互转换的。类型转换可以分为两种，**隐性转换**和**显性转换**。

**1. 隐性转换**

当不同数据类型之间进行相互运算，或者当对非布尔类型的数据求布尔值的时候，会发生隐性转换。

预期为数字的时候：算术运算的时候，我们的结果和运算的数都是数字，数据会转换为数字来进行计算。

| 类型      | 转换前    | 转换后 |
| --------- | --------- | ------ |
| number    | 4         | 4      |
| string    | "1"       | 1      |
| string    | "abc"     | NaN    |
| string    | ""        | 0      |
| boolean   | true      | 1      |
| boolean   | false     | 0      |
| undefined | undefined | NaN    |
| null      | null      | 0      |

预期为字符串的时候：如果有一个操作数为字符串时，使用`+`符号做相加运算时，会自动转换为字符串。
	
预期为布尔的时候：前面在介绍布尔类型时所提到的 9 个值会转为 false，其余转为 true

**2. 显性转换**

所谓显性转换，就是只程序员强制将一种类型转换为另外一种类型。显性转换往往会使用到一些转换方法。常见的转换方法如下：

- 转换为数值类型：`Number()`，`parseInt()`，`parseFloat()`

- 转换为布尔类型：`Boolean()`

- 转换为字符串类型：`toString()`，`String()`

当然，除了使用上面的转换方法，我们也可以通过一些快捷方式来进行数据类型的显性转换，如下：

- 转换字符串：直接和一个空字符串拼接，例如：`a = "" + 数据`

- 转换布尔：!!数据类型，例如：`!!"Hello"`

- 转换数值：数据*1 或 /1，例如：`"Hello * 1"`

## 四、运算符

###     1. 算数运算符

常见的算数运算符有加减乘除和取模运算。主要需要注意的就是，在动态语言中做除法运算时，能够得到小数。下面是关于算数运算符的示例：

```js
console.log(5 + 3.14); // 8.14
console.log(6 - 11); // -5
console.log(7 * 3); // 21
console.log(5 / 2); // 2.5
console.log(10 % 3); // 1
```

从 ECMAScript 6 开始新增加了求幂运算，使用两个`*`号代表求幂。以此可以代替以前的`Math.pow()`方法

```js
console.log(2 ** 3); // 8
```

### 2. 一元运算符

所谓一元运算符，就是指只作用于一个操作数的运算符。常见的一元运算符有两种，赋值运算符和递增递减运算符。

#### 赋值运算符

关于赋值运算符，前面我们已经见到过了。最常见的就是`=`，代表将右边的内容赋值给左边。除此之外，还有`+=`、`-=`、`*=`等一系列赋值运算符，具体的示例如下：

```js
let a = 5;
a += 5;
console.log(a); // 10
a -= 3;
console.log(a); // 7
a *= 5;
console.log(a); // 35
a /= 5;
console.log(a); // 7
a %= 2;
console.log(a); // 1
```

#### 递增和递减

除了上面所介绍的赋值运算符以外，常见的一元运算符还有递增和递减。在递增递减中，主要需要注意前置和后置的区别。如果是前置，那么是先自增或自减，然后参与运算。如果是后置，则是先参与运算，然后再自增或者自减，示例如下：

前置示例：

```js
let a = 2;
let b = 10;
let c = --a + b;
let d = a + b;
console.log(a,b,c,d); // 1 10 11 11
```

后置示例：

```js
let a = 2;
let b = 10;
let c = a-- + b;
let d = a + b;
console.log(a,b,c,d); // 1 10 12 11
```

> 即a--表示的是--前的数值，而--a表示的是--后的数值

需要注意的是，我们的自增自减操作符不仅仅局限于数值，其他类型也可以，遵循下面的规则：

- 在应用于一个包含有效数字字符的字符串时，现将其转换为数字值，再执行加减 1 操作。字符串变量变为了数值变量。
- 在应用于一个不包含有效数字字符的字符串时，将变量的值设置为 NaN，字符串变量变成数值变量。
- 遇布尔值 false 时，先将其转换为 0 再执行加减 1 操作，布尔值变量变成数值变量。
- 遇布尔值 true 时，先将其转换为 1 再执行加减 1 操作，布尔值变量变成数值变量。
- 在应用浮点数数值时，执行加减 1 操作。

示例：

```js
let s1 = "123";
let s2 = "123Hello";
let s3 = "Hello";
let s4 = true;
let s5 = 3.14;
console.log(--s1); // 122
console.log(--s2); // NaN
console.log(--s3); // NaN
console.log(--s4); // 0
console.log(--s5); // 2.14
```

### 3. 逻辑运算符

JS中为我们提供了三种逻辑运算符

#### 1. && 与

作用于两到多个值，并且只有所有的操作数都是真值时，才为 true

```js
console.log(false && true); // false
console.log(true && true); // true
```

JavaScript里面的`&&`存在短路现象，具体说明如下：

- 第一个操作数为真：会进入第二个操作数的判断，且无论第二个操作数真假，都会返回第二个操作数。
- 第一个操作数为假：不会进入第二个操作数的判断，直接返回第一个操作数。

来看下面的例子：

```js
console.log(3 && 5); // 5
console.log("Hello" && 20); // 20
console.log("Hello" && false); // false
console.log("" && "shoe"); // ""
console.log("Hello" && ''); // ''
```

下面是关于`&&`运算符的一道经典练习题：

```js
let a = true;
let b = a && c; // 因为a是true,所以会判断第2个数
console.log(b);
// ReferenceError: c is not defined
```

```js
let a = false;
let b = a && c; // 因为a是false,所以不会判断第2个数
console.log(b); // false
```

#### 2. || 或

同样是作用于两到多个值，但是只要有一个操作数为真，就返回真

```js
console.log(false || true); // true
console.log(true || false); // true
```

JavaScript 里面的`||`同样存在短路现象，具体说明如下：

- 如果第一个操作数为真，则不会进入第二个数的判断。所以无论第二个操作数真假，都直接返回第一个操作数
- 如果第一个操作数为假，则会进入第二个数的判断。但是无论第二个操作数真假，都直接返回第二个操作数

来看下面的例子：

```js
console.log(false || true); // true
console.log("Hello" || ""); // Hello
console.log("Hello" || "str"); // Hello
console.log(NaN || ""); // ""
console.log(0 || "Hello World"); // Hello World
console.log('' || 'str'); // str
console.log('' || false); // false
```

下面是关于`||`运算符的一道经典练习题：

```js
let a = false;
let b = a || c; // 因为a是false,所以会判断第2个数
console.log(b);
// ReferenceError: c is not defined
```

```js
let a = true;
let b = a || c; // 因为a是false,所以会判断第2个数
console.log(b); // true
```

####  3. ! 非

所谓非，就是取反，非真即假，非假即真

```js
let i = true;
console.log(!i); // false
```

非运算符不仅仅只能用于布尔值，其他数据类型也是可以的，如下：

- 如果操作数是一个对象，返回 false
- 如果操作数是一个空字符串，返回 true
- 如果操作数是一个非空字符串，返回 false
- 如果操作数是数值 0，返回true
- 如果操作数是任意非 0 数值（包括 Infinity），返回 false
- 如果操作数是 null，返回 true
- 如果操作数是 NaN，返回 true
- 如果操作数是 undefined，返回 true

```js
console.log(!false); // true
console.log(!"blue"); // false
console.log(!0); // true
console.log(!NaN); // true
console.log(!""); // true
console.log(!12); // false
```

可使用双否定`!!`来判定一个值是真值还是假值，

简单来说,!!,就是把一个值转换为boolean类型

如下：

```js
console.log(!!''); // false
console.log(!!NaN); // false
console.log(!!'Hello'); // true
```

### 4. 比较运算符

#### 1. 关系运算符

常见的关系运算符有`小于`，`大于`，`小于等于`，`大于等于`，关于数的比较就不用说了，如下：

```js
console.log(5 > 3); // true
console.log(3 > 5); // false
```

主要说一下字符串的比较，如下：

```js
console.log("c" > "b"); // true
console.log("c" > "box"); // true
```

这里的比较主要是按照 ASCII 码来进行比较的。

如果是字符串和数字进行比较，那么会将字符串先转换为数字，如果不能转换为数字，则转换为 NaN

```js
console.log("5" > 3); // true，因为"5"转为了5
// 任何一个数与 NaN 进行关系比较,返回的都是 false
console.log("Hello" > 3); // false，因为"Hello"转为了NaN
```

完整的特殊规则如下：

- 如果两个数都是数值，则执行数值比较
- 如果两个数都是字符串，则比较两个字符串对应的字符编码
- 如果一个操作数是数值，则将另一个操作数转换为一个数值，然后执行数值的比较
- 如果一个操作数是对象，则调用这个对象的`valueOf()`方法，用得到的结果按照前面的规则执行比较。如果对象没有`valueOf()`方法，则调用`toString()`方法，并用得到的结果根据前面的规则执行比较。
- 如果一个数是布尔值，则先将其转换为数值，然后再进行比较

还需要注意，任何数和 NaN 进行比较返回的都是 false

```js
console.log(10 > NaN); // false
console.log(10 < NaN); // false
```

#### 2. 相等和不相等

`==`表示相等，`!=`表示不相等，数据类型不同的数据进行相等比较的话会自动转换数据类型，还有一些其他的转换规则如下：

- null 和 undefined 是相等的
- 如果有一个操作数是 NaN，则返回 false，NaN 和 NaN 比较也是 false
- 如果是数字的字符串和数字进行比较，会先将字符串转换为数字
- 布尔值里面 true 转换为 1，false 转换为 0

下表列出了一些特殊的情况

| 表达式            | 值    |
| ----------------- | ----- |
| null == undefined | true  |
| "NaN" == NaN      | false |
| 5 == NaN          | false |
| NaN == NaN        | false |
| NaN != NaN        | true  |
| false == 0        | true  |
| true == 1         | true  |
| true == 2         | false |
| undefined == 0    | false |
| null == 0         | false |
| "5" == 5          | true  |

#### 3. 全等和不全等

全等是`===`，不全等是`!==`，所谓全等，就是要求数据类型和数值都必须相等，如下：

```js
console.log("5" == 5); // true
console.log("5" === 5); // false
```

### 5. 三目运算符

条件表达式?语句1:语句2;

- 条件运算符在执行时，首先对条件表达式进行求值，如果该值为true，则执行语句1，并返回执行结果；如果该值为false，则执行语句2，并返回执行结果。

- 如果条件的表达式的求值结果是一个非布尔值，会将其转换为布尔值然后再运算。

### 9.  运算符的优先级

JavaScript 中的运算符优先级是一套规则。该规则在计算表达式时控制运算符执行的顺序。具有较高优先级的运算符先于较低优先级的运算符执行。例如，乘法的执行先于加法。

下表按照最高到最低的优先级列出了 JavaScript 运算符。具有相同优先级的运算符按从左至右的顺序求值。

| 运算符                                               | 描述                                       |
| ---------------------------------------------------- | ------------------------------------------ |
| `.` `[]` `()`                                        | 字段访问，数组下标，函数调用以及表达式分组 |
| `++` `--` `-` `~` `!` `delete` `new` `typeof` `void` | 一元运算符，返回类型，对象创建，未定义值   |
| `*` `/` `%`                                          | 乘法，除法，取模                           |
| `+` `-` `+`                                          | 加法，减法，字符串拼接                     |
| `<<` `>>` `>>>`                                      | 移位                                       |
| `<` `<=` `>` `>=` `instanceof`                       | 小于，小于等于，大于，大于等于，instanceof |
| `==` `!=` `===` `!==`                                | 等于，不等于，全等，不全等                 |
| `&`                                                  | 按位与                                     |
| `^`                                                  | 按位异或                                   |
| `|`                                                  | 按位或                                     |
| `&&`                                                 | 逻辑与                                     |
| `||`                                                 | 逻辑或                                     |
| `?:`                                                 | 三目运算符                                 |
| `=`                                                  | 赋值                                       |
| `,`                                                  | 多重赋值                                   |

## 五、流程控制

所谓流程控制，主要就是用于控制整个程序的走向的。默认情况下，程序是从上往下，逐条执行，这种情况我们将其称之为顺序结构。但是并不是所有的程序都是使用顺序结构就能够完成的。在我们书写程序时往往还需要对整个程序进行分支，或者对某一段代码进行重复执行。

###     1. 条件判断语句

```js
if(条件表达式){
    语句1
}else if(条件表达式){
    语句2
}else if(条件表达式){
    语句3
}else{
    语句4
}
```

- if语句只能控制紧随其后的那个语句,如果希望if语句可以控制多条语句，可以将这些语句统一放到代码块中。（建议都加上代码块，以便代码阅读）
- JS中的空格和换行会自动忽略，所以仅靠缩进无法表示彼此间的联系。
- 如果条件不是一个布尔值，那么会被自动转换为布尔值

### 2. 条件分支语句

```js
switch(条件表达式){
    case 表达式:
        语句...
        break;
    case 表达式:
        语句...
        break;
    default:
        语句...
        break;
}
```

- 和其他静态语言有所不同的是， ==case 后面的值不一定必须是常量，可以是变量甚至是表达式==
- `switch`语句在执行时会依次将`case`后的表达式的值和`switch`后的条件表达式的值进行全等比较，所以当数据类型不同时，判断为`false`。
- `break`用于跳出某一个 case，如果不书写 break 的话，进入 case 以后会继续进入后面的case语句。
- `default`用于书写默认的条件，如果前面都不满足的话，就进入到 default 语句里面。

### 3. while循环

```js
while(条件表达式){
    语句...
}
    
do{
    语句...
}while(条件表达式)
```

- 这两个语句功能类似，不同的是`while`是先判断后执行，如果表达式成立，执行循环体，否则结束循环；而`do...while`会先执行后判断，`do...while`可以保证 ==循环体至少执行一次== ，而while不能。

### 4. for循环

```js
for(①初始化表达式;②条件表达式;④更新表达式){
    ③语句...
}
    
//举例：
for(var i = 0 ; i < 10 ; i++ ){
    alert(i);
}
```

- 它执行的顺序为：首先执行初始化表达式 ，然后进行条件表达式的判断，如果表达式成立，那么执行循环体，循环体执行结束后，执行更新表达式，然后回头再看条件表达式是否成立，成立就执行循环体，不成立该循环就结束
- for循环中的三个部分都可以省略，也可以写在外部，如果在for循环中不写任何的表达式，只写两个;此时循环是一个死循环会一直执行下去。
- for循环的嵌套使用

#### 遍历数组

最早的时候，在 JavaScript 里面就经常使用 for 循环来对数组进行遍历。示例如下：

```js
let arr = [1,2,3,4,5];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
```

这里有一个小技巧，就是在使用 for 循环来遍历数组的时候，使用一个变量来存储数组的长度，这样可以大大提升程序的效率，因为不用每次都去重新计算数组的长度

```js
let arr = [1,2,3,4,5];
for(let i=0,j=arr.length;i<j;i++){
    console.log(arr[i]);
}
```

### 5. break和continue

####  break

- break关键字可以用来退出switch或循环语句，不能在if语句中使用break和continue
- break关键字，会立即终止离他最近的那个循环语句
- 可以为循环语句创建一个label，来标识当前的循环
  - label:循环语句

    `outer:
    for(;;){}`
    
  - 使用break语句时，可以在break后跟着一个label，这样break将会结束指定的循环，而不是最近的

#### continue

- continue关键字可以用来跳过当次循环，同样continue也是默认只会对离他最近的循环循环起作用。

## 六、对象

JavaScript 里面的对象就是一组键值对的集合。这些键一般由字符串构成，而值可以是任意数据类型。比如字符串，数字，布尔，数组或者函数。

一般来讲，如果一个键映射的是一个非函数的值，我们将其称之为该对象的**属性**，而如果一个键映射的是一个函数的值，我们将其称之为**方法**。

### 1. 创建对象

要创建一个对象，我们只需要输入一对大括号即可。这样我们就可以创建一个空的对象，如下：

```javascript
let objName = {};
```

创建好对象以后，我们就可以给该对象添加相应的属性，例如这里我们给 xiejie 这个对象添加相应的属性：

```javascript
let xiejie = {};
xiejie.name = "xiejie";
xiejie.age = 18;
xiejie.gender = "male";
xiejie.score = 100;
```

当然，和数组一样，我们可以在创建对象时就给该对象初始化好相应的信息，如下：

```javascript
let xiejie = {
    name : "xiejie",
    age : 18,
    gender : "male",
    score : 100
};
```

可以看到，当我们创建包含属性的对象的时候，属性与属性之间是以逗号隔开的。这里我们可以将属性名称之为键，而属性对应的数据称之为值。

所以，正如开头我们所介绍的那样，对象是由一个一个**键值对**组成的。

### 2. 访问对象属性

访问对象的属性的方法有 3 种：点访问法，中括号访问法，symbol 访问法。

**1. 点访问法**

我们可以通过一个点`.`来访问到对象的属性，如下：

```javascript
let xiejie = {
    name : "xiejie",
    age : 18,
    gender : "male",
    score : 100
};
console.log(xiejie.name); // xiejie
console.log(xiejie.age); // 18
console.log(xiejie.gender); // male
console.log(xiejie.score); // 100
```

**2. 中括号访问法**

第二种方法，是使用中括号法来访问对象的属性，如下：

```javascript
let xiejie = {
    name : "xiejie",
    age : 18,
    gender : "male",
    score : 100
};
console.log(xiejie["name"]); // xiejie
console.log(xiejie["age"]); // 18
console.log(xiejie["gender"]); // male
console.log(xiejie["score"]); // 100
```

一般来讲，访问对象属性的时候使用点访问法的情况要多一些，那什么时候使用中括号访问方法呢？

当我们的属性名来自于变量的时候，这个时候中括号就要比点要灵活许多。来看下面的例子：

```javascript
let xiejie = {
    name : "xiejie",
    age : 18,
    gender : "male",
    score : 100
};
let str = "name";
console.log(xiejie[str]); // xiejie
```

既然讲到了对象属性的中括号访问法，那我们就顺便为大家介绍一下伪数组对象的原理。

前面给大家介绍过的`arguments`就是一个伪数组对象。伪数组对象的原理就在于对象的键都是数字。**如果属性名是数字的话，通过中括号法来访问时可以不用添加引号**，如下：

```javascript
let obj = {
    1 : "Bill",
    2 : "Lucy",
    3 : "David"
}
console.log(obj[1]); // Bill
console.log(obj[2]); // Lucy
console.log(obj[3]); // David
```

这样，就形成了给人感觉像是数组，但是并不是数组的伪数组对象。

**3. symbol 访问法**

在 ECMAScript 6 之前，对象的属性名都只能是字符串。但是这样很容易造成属性名的冲突。

比如我们使用了一个别人提供的对象，然后我们想在这个对象的基础上进行一定的扩展，添加新的属性，这个时候可能会因为不知道原来的对象里面包含哪些属性名，所以就把别人的对象所具有的属性给覆盖掉了。

示例如下：

```javascript
// 假设 person 对象是从外部库引入的一个对象
let person = {
    name : "xiejie"
}
console.log(person.name); // xiejie
// 接下来我手动为 person 这个对象添加了一个 name 属性
// 这里便产生的属性冲突
person.name = "yajing";
console.log(person.name); // yajing
```

可以看到，这里两个 name 属性就产生了冲突，下面的 name 属性值把上面的 name 属性值给覆盖掉了。

从 ECMAScript 6 开始，新增了`symbol`这种数据类型，专门用来解决这样的问题。

创建一个 symbol，需要使用`Symbol()`函数，其语法如下：

```javascript
let sym = Symbol(描述信息);
```

示例：

```javascript
let name = Symbol("这是一个名字");
console.log(name); // Symbol(这是一个名字)
console.log(typeof name); // symbol
```

这里的描述信息是可选的，是对我们自己创建的 symbol 的一个描述。接下来我们来用 symbol 作为对象的属性，示例如下：

```javascript
let person = {
    name : "xiejie"
}
let name = Symbol("这是一个名字");
person[name] = "yajing";
console.log(person.name); // xiejie
console.log(person[name]); // yajing
```

可以看到，使用 symbol 来作为对象的属性，避免了同名的属性名发生冲突。

有些时候我们希望在不同的代码中共享一个 symbol，那么这个时候可以使用`Symbol.for()`方法来创建一个共享的 symbol。

ECMAScript 6 提供了一个可以随时访问的全局 symbol 注册表。当我们使用`Symbol.for()`方法注册一个 symbol 的时候，系统会首先在全局表里面查找对应键名的 symbol 是否存在。如果存在，直接返回已经有的 symbol，如果不存在，则在全局表里面创建一个新的 symbol，如下：

```javascript
let obj = {};
let name = Symbol.for("test"); // 此时的 test 不在是描述信息，而是全局表里的键
obj[name] = "xiejie";
let name2 = Symbol.for("test");
console.log(obj[name2]); // xiejie
```

如果使用`Symbol.for()`方法创建 symbol 的时候没有传递任何参数，那么也会将 undefined 作为全局表里面的键来进行注册，证明如下：

```javascript
let obj = {};
let name = Symbol.for();
obj[name] = "xiejie";
let name2 = Symbol.for(undefined);
console.log(obj[name2]); // xiejie
```

ECMAScript 6 里面还提供了`Symbol.keyFor()`方法来查找一个 symbol 的键是什么。

但是需要注意的是，该方法只能找到注册到全局表里面的 symbol 的键。如果是通过`Symbol()`方法创建的 symbol，是无法找到的。

>其实也很好理解，因为通过`Symbol()`方法创建的 symbol 不存在有键。

```javascript
let obj = {};
let name1 = Symbol("test1");
let name2 = Symbol.for("test2");
let i = Symbol.keyFor(name1);
let j = Symbol.keyFor(name2);
console.log(i); // udnefined
console.log(j); // test2
```

前面有提到，如果一个对象的属性对应的是一个函数，那么这个函数被称之为对象的方法。调用对象方法的方式和前面介绍的访问对象属性的方式是一样的，可以通过点访问法，中括号访问法以及 symbol 访问法来进行对象方法的调用。

>其实方法也可以看作是对象的一个属性，只是对应的值为一个函数而已。

```javascript
let walk = Symbol("this is a test");
let person = {
    name : "xiejie",
    walk : function(){
        console.log("I'm walking");
    },
    [walk] : function(){
        console.log("I'm walking,too");
    }
}
person.walk(); // I'm walking
person["walk"](); // I'm walking
person[walk](); // I'm walking,too
```

### 3. 删除对象属性

对象的任何属性都可以通过`delete`运算符来从对象中删除。示例如下：

```javascript
let person = {
    name : "xiejie",
    age : 18,
    walk : function(){
        console.log("I'm walking");
    }
}
console.log(person.age); // 18
delete person.age; // 删除 age 这个属性
console.log(person.age); // undefined
person.walk(); // I'm walking
delete person.walk; // 删除 walk 方法
person.walk(); // 报错
// TypeError: person.walk is not a function
```

如果是删除的是属性，那么再次访问值为变为 undefined，而如果删除的是方法，那么调用时会直接报错。

### 4. 对象常用属性和方法

**1. in 操作符**

该操作符用于判断一个对象是否含有某一个属性，如果有返回 true，没有返回 false。

需要注意的是，如果对象对应的某个属性为 symbol 属性，那么写法上有一定的区别，如下：

```javascript
let person = {
    name : "xiejie",
    age : 18,
    walk : function(){
        console.log("I'm walking");
    }
}
let gender = Symbol("person's gender");
person[gender] = "male";
console.log("name" in person); // true
console.log("age" in person); // true
console.log([gender] in person); // 报错
// TypeError: Cannot convert a Symbol value to a string
```

书写为`[gender]`，系统给出了无法将 symbol 值转换为字符串的错误。

正确的写法，应该是直接书写 symbol 名，而不需要包含在中括号里面，如下：

```js
let person = {
    name : "xiejie",
    age : 18,
    walk : function(){
        console.log("I'm walking");
    }
}
let gender = Symbol("person's gender");
person[gender] = "male";
console.log("name" in person); // true
console.log("age" in person); // true
console.log(gender in person); // true
```

**2. for..in**

这个`for..in`我们在前面讲解遍历数组的时候已经见到过了。可以使用`for..in`来取出数组的键。因为数组也是一种对象，所以我们可以使用`for..in`来循环遍历一个对象的所有属性，示例如下：

```javascript
let person = {
    name : "xiejie",
    age : 18,
    walk : function(){
        console.log("I'm walking");
    }
}
for(let i in person){
    console.log(i);
}
// name
// age
// walk
```

需要注意的是，使用`for..in`虽然说可以遍历出一个对象的所有的属性和方法（包括继承的，关于继承后面会介绍），但是无法遍历出用 symbol 来定义的属性，证明如下：

```javascript
let person = {
    name : "xiejie",
    age : 18,
    walk : function(){
        console.log("I'm walking");
    }
}
let gender = Symbol("person's gender");
person[gender] = "male";
for(let i in person){
    console.log(i);
}
// name
// age
// walk
```

那么，这个时候可能有人会问了，那我如何才能遍历出一个对象的 symbol 属性呢？这里介绍两种方式。

第一种是使用`Object.getOwnPropertySymbols()`来返回一个对象所有的 symbol 属性，如下：

```javascript
let person = {
    name: "xiejie",
    age: 18,
    walk: function () {
        console.log("I'm walking");
    }
}
let gender = Symbol("person's gender");
let score = Symbol("person's score");
let hobby = Symbol.for("hobby");
let food = Symbol.for("food");
person[gender] = "male";
person[score] = 100;
person[hobby] = "JavaScript";
person[food] = "meat";
console.log(Object.getOwnPropertySymbols(person));
// [ Symbol(person's gender),
//   Symbol(person's score),
//   Symbol(hobby),
//   Symbol(food) ]
```

除了上面的方法以外，ECMAScript 6 中还提供了一个叫做`Reflect.ownkeys()`方法。该方法可以遍历出一个对象的所有类型的键名，包括字符串的键名以及 symbol 类型的键名。

```javascript
let person = {
    name : "xiejie",
    age : 18,
    walk : function(){
        console.log("I'm walking");
    }
}
let gender = Symbol("person's gender");
person[gender] = "male";
console.log(Reflect.ownKeys(person));
// [ 'name', 'age', 'walk', Symbol(person's gender) ]
```

**3. keys()，values()，entries()**

前面在介绍遍历数组，集合以及映射的时候，有介绍过这 3 个方法，分别用于找出可迭代对象的键，值，以及键和值。这里，我们也可以使用这 3 个方法来找出非可迭代对象的键和值，如下：

**Object.key()**

```javascript
let person = {
    name : "xiejie",
    age : 18,
    walk : function(){
        console.log("I'm walking");
    }
}
let gender = Symbol("person's gender");
person[gender] = "male";
for(let i of Object.keys(person)){
    console.log(i);
}
// name
// age
// walk
```

**Object.values()**

```javascript
let person = {
    name : "xiejie",
    age : 18,
    walk : function(){
        console.log("I'm walking");
    }
}
let gender = Symbol("person's gender");
person[gender] = "male";
for(let i of Object.values(person)){
    console.log(i);
}
// xiejie
// 18
// [Function: walk]
```

**Object.entries()**

```javascript
let person = {
    name : "xiejie",
    age : 18,
    walk : function(){
        console.log("I'm walking");
    }
}
let gender = Symbol("person's gender");
person[gender] = "male";
for(let i of Object.entries(person)){
    console.log(i);
}
// [ 'name', 'xiejie' ]
// [ 'age', 18 ]
// [ 'walk', [Function: walk] ]
```

### 5. 嵌套对象

一个对象里面包含其他的对象，这个我们称之为对象的嵌套。示例如下：

```javascript
let family = {
    xiejie : {
        age : 18,
        gender : "male"
    },
    song : {
        age : 20,
        gender : "female"
    }
};
```

当我们访问嵌套对象里面的值的时候，和访问单个对象的方式是一样的。

```javascript
let family = {
    xiejie : {
        age : 18,
        gender : "male"
    },
    song : {
        age : 20,
        gender : "female"
    }
};
console.log(family.xiejie.gender); // male 点访问法
console.log(family["song"]["age"]); // 20 中括号访问法
```

### 6. 对象的解构

在前面介绍解构的时候，我们有介绍过数组的解构。这里来看一下对象的解构，基本上和数组的解构类似：

```js
let a = {name:"xiejie",age:18};
let b = {name:"song",age:20};
let {name:aName,age:aAge} = a;
let {name:bName,age:bAge} = b;
console.log(aName); // xiejie
console.log(aAge); // 18
console.log(bName); // song
console.log(bAge); // 20
```

当属性名和变量名一致的时候，可以进行简写，如下：

```js
let a = {name:"xiejie",age:18};
let {name,age} = a;
console.log(name); // xiejie
console.log(age); // 18
```

和数组一样，同样可以解构嵌套的对象，如下：

```js
let family = {
    xiejie : {
        age : 18,
        gender : "male"
    },
    song : {
        age : 20,
        gender : "female"
    }
};
let {xiejie,song} = family;
console.log(xiejie); // { age: 18, gender: 'male' }
console.log(song); // { age: 20, gender: 'female' }
```

顺便一提的是，解构我们也是可以像函数一样设置一个默认值的，如下：

```js
let { name = "xiejie", age } = {};
console.log(name); // xiejie
console.log(age); // undefined

let [a = 3, b] = [];
console.log(a); // 3
console.log(b); // undefined
```

在上面的对象的解构中，我们为 name 变量设置了一个默认值为 xiejie，当我们解构一个空对象的时候，name 变量的值就使用了默认的 xiejie 这个值，而 age 这个变量由于没有设置默认值，所以值为 undefined。下面数组的解构也是同理。

当然，既然叫做默认值，和函数一样，如果有解构的值传过来的话，肯定就是使用解构传过来的值，如下：

```js
let { name = "xiejie", age } = { name: "song", age: 10 };
console.log(name); // song
console.log(age); // 10

let [a = 3, b = 5] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

### 7. 对象作为函数参数（扩展）

对象也可以作为函数的形式参数。这在有很多形参的时候显得非常有用，因为它允许我们在调用函数时不用记住参数的顺序。

我们先来看一下我们一般函数调用的例子，如下：

```javascript
let test = function(name,age){
    console.log(`我叫${name},我今年${age}岁`);
}
test("xiejie",18); // 我叫xiejie,我今年18岁
test(18,"xiejie"); // 我叫18,我今年xiejie岁
```

可以看到，以前我们传递参数时，实参的顺序必须要和形参的顺序一致。否则就会出现上面第 2 次调用函数时的情况，输出不符合预期的结果。

当我们使用对象来作为实参时，形参可以书写解构表达式。这样就不用必须按照定义时形参的顺序来传值，只需要传递一个对象过去即可，对象属性的顺序可以随意。示例如下：

```javascript
let test = function({name,age}){
    console.log(`我叫${name},我今年${age}岁`);
}
test({name:"xiejie",age:18}); // 我叫 xiejie,我今年 18 岁
test({age:18,name:"xiejie"}); // 我叫 xiejie,我今年 18 岁
```

我们也可以为解构的变量设置一个默认值，甚至可以给整个解构表达式设置一个默认值，示例如下：

```javascript
// 给整个解构表达式设置了一个默认值 {name:"Bill",age:20}
let test = function({name = "xiejie",age = 18} = {name:"Bill",age:20}){
    console.log(`我叫${name},我今年${age}岁`);
}
test(); // 我叫 Bill,我今年 20 岁
test({}); // 我叫 xiejie,我今年 18 岁
test({name:"yajing"}); // 我叫 yajing,我今年 18 岁
test({age:1,name:"xizhi"}); // 我叫 xizhi,我今年 1 岁
```

这种技术被称之为命名参数，经常被用在函数有很多可选参数的时候。

### 8. this 关键字

既然学习到了对象，那么有必要介绍一下`this`关键字。

this，翻译成中文是**这个**的意思。当我们在一个对象中使用 this 关键字时，代表的就是当前对象。

来看下面的例子：

```js
let person = {
    name : 'xiejie',
    age : 18,
    intro : function(){
        console.log(this); 
        // { name: 'xiejie', age: 18, intro: [Function: intro] }
        console.log(`My name is ${this.name},I'm ${this.age} years old`);
        // My name is xiejie,I'm 18 years old
    }
}
person.intro();
```

这里我们调用了 person 对象的`intro()`方法，里面涉及到了 this 关键字。由于是在对象里面，所以 this 指向当前对象，也就是 person 这个对象。

所以`this.name`等价于`person.name`，`this.age`等价于`person.age`。

### 9. 命名空间（扩展）

当相同的变量和函数名被共享在同一作用域的时候，就会发生命名冲突。这看起来不太可能，但是我们可以想象一下，随着时间的推移，我们已经写了很多的代码，可能不知不觉就重用了一个变量名。如果是使用的其他开发者的代码库，这种问题就变得更加有可能。

解决命名冲突的方式，就是使用对象字面量来为一组相关函数创建一个命名空间。这样在调用这些函数的时候需要先写上对象名，这里的对象名就充当了命名空间的角色。

示例如下：

```javascript
let myMaths = {
    // 求平方函数
    square : function(x){
        return x * x;
    },
    // 传入数组求平均值函数
    avg : function(arr){
        let total = arr.reduce((a,b) => a + b);
        return total / arr.length;
    }
}
let arr = [1,2,3,4,5];
console.log(myMaths.avg(arr)); // 3
console.log(myMaths.square(5)); // 25
```

这里我们的 myMaths 就是我们的命名空间，这样就不用担心和其他人的变量或者函数名发生命名冲突。

### 10. 速写属性与速写函数

速写属性：如果对象的属性使用了外面变量的值，并且这个变量名与属性名一直，那么就可以直接简写

```js
let username = "张三";
let age = 18;
let obj = {
	username:username,
	age:age
}

//可以直接简写为
let obj = {
	username,
	age
}
```

速写方法，再对象中，声明函数属性，可以直接函数名()就行了

```js
let obj = {
	show:function(){},
	info:function(){}
}

//可以简写为：
let obj = {
	show(){},
	info(){}
}
```



```javascript
let username = "jack";
let score = 80;
let sex = "男";

let stu = {
  username,
  score,
  sex,
  show() {
    console.log("show");
  },
  info() {
    console.log("info");
  },
  run() {
    console.log("run");
  },
};
console.log(stu.username);
```

## 七、数组

### 1. 概念

数组也是一个对象，是大多数语言里面最常见的一种数据结构，它是一个有序的值列表。
- 它和我们普通对象功能类似，也是用来存储一些值的
- 不同的是普通对象是使用字符串作为属性名，而数组是使用数字来作为索引操作元素
  - 索引：从0开始的整数就是索引
- 数组的存储性能比普通对象要好，在开发中我们经常使用数组来存储一些数据
- 数组中的元素可以是任意的数据类型（包括对象和函数）

### 2. 创建数组

#### 构造函数创建数组

```js
var arr = new Array(1,2,3);
```

- 当传入的参数为单一的整数值时，代表的是数组的长度

#### 静态方法创建数组

```js
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1
```

- `Array.of()`方法用于将一组值，转换为数组，不会因为参数个数的不同而影响Array的行为

```js
Array.from({ length: 2 }, () => 'jack')
// ['jack', 'jack']

let spans = document.querySelectorAll('span.name');
let names2 = Array.from(spans, s => s.textContent)
```

- `Array.from`可以将两类对象转为真正的数组：类似数组的对象和可遍历（iterable）的对象
- 接受一个函数作为第二个参数，作用类似于数组的`map()`方法，用来对每个元素进行处理，将处理后的值放入返回的数组

#### 字面量创建数组

```js
var arr = [1,2,3,4,5,10];//常用
```

需要注意的是，无论是字面量形式创建的数组，还是构造函数创建的数组，当我们使用`typeof`来打印其数据类型的时候，都会返回一个`object`，如下：

```javascript
let arr1 = [];
let arr2 = new Array();
console.log(typeof arr1); // object
console.log(typeof arr2); // object
```

### 3. 数组赋值

给数组赋值的方法也非常简单，不过可以分为先声明再赋值和声明时直接赋值，如下：

**1.	先声明再赋值**

```javascript
let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
```

注意下标是从 0 开始的。

**2.	声明时直接赋值**

```javascript
let arr = [1,2,3,4,5];
```

需要注意的是我们可以在数组的任意位置进行赋值，数组的长度会自动改变，空的位置使用`undefined`来进行填充

```javascript
let arr = [];
arr[0] = 1;
arr[4] = 10;
console.log(arr);
// [ 1, <3 empty items>, 10 ]
```

由于 JavaScript 是动态语言，所以 JavaScript 里面数组的数据类型可以是任意类型

```javascript
let arr = [1,"Hello",3.14,true];
```

### 4. 访问数组元素

通过数组的下标，我们可以轻松的访问到存储在数组里面的元素，如下：

```javascript
let arr = [1,2,3,4,5];
console.log(arr[0]); // 1
```

>需要注意数组里面的第一个元素是从下标 0 开始的。

除了这种常规的访问方式，我们还可以使用变量的方式来进行访问，如下：

```javascript
let arr = [1,2,3,4,5];
let i = 2;
console.log(arr[i]); // 3
```

### 5. 删除元素

我们可以使用`delete`运算符来删除数组中的某一个元素，示例如下：

```javascript
let arr = [1,2,3,4,5];
delete arr[2]; // 删除数组中的第3个元素
console.log(arr);
// [ 1, 2, <1 empty item>, 4, 5 ]
```

### 6. 数组的遍历

接下来我们来看一下数组的遍历，在 JavaScript 中，遍历数组的方式非常的多。这里先介绍几种常见的数组遍历方式。

**通过 for 循环来遍历数组**

最简单的方式就是通过`for`循环来进行数组的遍历，这也是一直以来被使用得最多的方式，示例如下：

```js
let arr = [1, 2, 3, 4, 5];
for (let i=0;i<arr.length;i++) {
    console.log(arr[i]);
}
// 1
// 2
// 3
// 4
// 5
```

**通过 for-in 来遍历数组**

`for-in`主要迭代的是数组的键，然后我们通过键就可以找到相应的数组元素，示例如下：

```js
let arr = [1, 2, 3, 4, 5];
for (let i in arr) {
    console.log(`键为${i}的元素值为${arr[i]}`);
}
// 键为 0 的元素值为 1
// 键为 1 的元素值为 2
// 键为 2 的元素值为 3
// 键为 3 的元素值为 4
// 键为 4 的元素值为 5
```

**通过 for-of 来遍历数组**

上面介绍的`for-in`是迭代数组的键，这里所介绍的`for-of`是直接迭代数组的值，示例如下：

```js
let arr = [1, 2, 3, 4, 5];
for (let i of arr) {
    console.log(i);
}
// 1
// 2
// 3
// 4
// 5
```

**通过 forEach 来遍历数组（扩展）**

最后再介绍一种通过`forEach`的方式来遍历数组，不过这里涉及到了回调函数的知识。在第 5 章我们就会学习回调函数，所以这里大家先了解一下这种遍历的方式即可，示例如下：

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10];
// 将数组的每一项传入到回调函数，然后执行回调函数里面的操作
let i = arr.forEach(function(item){
    console.log(item);
});
```

**使用迭代器进行遍历**

在 ECMAScript 6 中，还专门提供了 3 个用于迭代可迭代元素的方法，分别是`keys()`，`values()`以及`entries()`方法。

其中`keys()`是找到可迭代元素的键，`values()`是找到可迭代元素的值，`entries()`是同时找到可迭代元素的键和值。

示例：使用`keys()`方法遍历出数组的键

```js
let arr = [3,5,8,1];
for(let i of arr.keys()){
    console.log(i);
}
// 0
// 1
// 2
// 3
```

示例：使用`values()`方法遍历出数组的值

```js
let arr = [3,5,8,1];
for(let i of arr.values()){
    console.log(i);
}
// 3
// 5
// 8
// 1
```

> 注意：根据 Node.js 环境的版本，可能出现数组里面无法使用`values()`方法情况。

示例：使用`entries()`方法遍历出数组的键和值

```js
let arr = [3,5,8,1];
for(let i of arr.entries()){
    console.log(i);
}
// [ 0, 3 ]
// [ 1, 5 ]
// [ 2, 8 ]
// [ 3, 1 ]
```

### 7. 解构数组

首先我们需要了解什么是解构，所谓解构，就是将一个复杂类型的数据分解为一个普通类型数据。解构是从 ECMAScript 6 开始新添加的功能。可以对数组和对象进行解构。

这里我们先来看一下数组的解构，如下：

```javascript
let arr = [1,2,3];
let [a,b,c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

这里，就是将 arr 这个数组里面的值分解给了 a，b，c
	
可以使用逗号来跳过不想要解构的元素，如下：

```javascript
let arr = [1,2,3];
let [a,,b] = arr;
console.log(a); // 1
console.log(b); // 3
```

在解构出现之前，我们交换两个数需要使用到一个中间变量，但是现在我们可以使用解构来交换两个数

```javascript
let a = 1,b = 2;
[a,b] = [b,a];
console.log(a); // 2
console.log(b); // 1
```

关于对象的解构，我们会在后面进行介绍，详细参见对象的相关章节。
	

### 8. 多维数组

首先需要说明的是，JavaScript 里面不支持传统编程语言中的多维数组。但是，由于 JavaScript 的数组里面所存放的数据的数据类型可以是任意类型，所以我们可以模拟出多维数组

```javascript
let a = ["Bill","Mary","Lucy"];
let b = [21,24,27];
let c = [a,b]; // 这里 c 就是一个多维数组
```

如果要访问多维数组里面的数据，可以使用下面的形式

```javascript
let a = ["Bill","Mary","Lucy"];
let b = [21,24,27];
let c = [a,b];
console.log(c[0][2]); // Lucy
```

利用前面所介绍的解构，我们可以来解构一个多维数组，示例如下：

```js
let arr = [[1,2,3],4,5];
let [a,b,c] = arr;
console.log(a); // [1,2,3]
console.log(b); // 4
console.log(c); // 5
```

### 9. 扩展运算符

扩展运算符是 ECMAScript 6 开始新添加的运算符，用于取出可迭代对象的每一项。这里我们可以用它来快速的展开一个数组

```javascript
let a = ["Bill","Mary","Lucy"];
let b = [21,24,27];
let c = [...a,...b];
console.log(c);
// [ 'Bill', 'Mary', 'Lucy', 21, 24, 27 ]
```

我们再来看一个例子：

```javascript
let a = [1,2,3];
let b = [...a,4,5,6];
console.log(b);
// [ 1, 2, 3, 4, 5, 6 ]
```

有了这个运算符以后，我们可以使用它将字符串快速转为数组

```javascript
let str = "Hello";
let arr = [...str];
console.log(arr);
// [ 'H', 'e', 'l', 'l', 'o' ]
```

## 八、数组属性和方法

### 1. 数组相关属性

这里主要就是要介绍`length`这个属性，用于返回数组元素的个数。

```javascript
let arr = [1,2,3,4,5];
console.log(arr.length); // 5
```

我们利用此属性，可以快速的清空数组，这种方法比使用重新赋值的效率要高些，如下：

```javascript
let arr = [1,2,3,4,5];
arr.length = 0;
console.log(arr); // []
```

其实我们使用`length`属性就是可以随意的对数组的长度进行操控，例如：

```javascript
let arr = [1,2,3,4,5];
arr.length = 3;
console.log(arr); // [1,2,3]
```

### 2. 数组相关方法

#### 添加删除方法

`push()`: 该方法可以向数组的末尾添加一个或多个元素，并返回 ==数组的新的长度==

`pop()`: 该方法可以删除数组的最后一个元素,并将 ==被删除的元素== 作为返回值返回

```js
let arr = [];
let i = arr.push("red","blue");
console.log(arr); // [ 'red', 'blue' ]
console.log(i); // 2

let j = arr.pop();
console.log(arr); // [ 'red' ]
console.log(j); // blue
```

> 可以使用`push()`和`pop()`方法来实现类似栈的行为。

`unshift()`

- 向数组开头添加一个或多个元素，并返回新的数组长度
- 向前边插入元素以后，其他的元素索引会依次调整

`shift()`

- 可以删除数组的第一个元素，并将被删除的元素作为返回值返回

```js
// 从右往左的队列
let arr = [];
arr.push("red","green","pink");
let item = arr.shift();
console.log(item); // red
console.log(arr); // [ 'green', 'pink' ]
```

> 利用`shift()`和`push()`方法就可以实现从右往左的队列

#### 操作方法

操作方法里面介绍3个操作方法，分别是`concat()`，`slice()`和`splice()`

`concat()`方法是先创建当前数组的一个副本，然后将接收到的参数添加到副本的末尾，最后返回新构建的数组，而原本的数组不会变化。

```javascript
let arr = [1,2,3];
let arr2 = arr.concat("red","blue");
console.log(arr);//[ 1, 2, 3 ]
console.log(arr2);//[ 1, 2, 3, 'red', 'blue' ]
```

`slice()`方法可以接收一个或者两个参数，代表返回项的起始和结束位置。

1 个参数：那就代表起始位置，返回从指定的起始位置到数组末尾的所有项目
2 个参数：那就代表从指定的起始位置到指定的末尾位置之间的项，但是不包括结束位置的项目。

>注意：`slice()`方法不会影响原始数组

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10];
// 一个参数
let i = arr.slice(3);
console.log(i); // [ 4, 5, 6, 7, 8, 9, 10 ]
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// 两个参数
let j = arr.slice(2,6);
console.log(j); // [ 3, 4, 5, 6 ]
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

如果传入的是负数，则用数组长度加上该数来确定相应的位置

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10];
// 一个参数
let i = arr.slice(-3);// 等价于slice(7)
console.log(i); // [ 8, 9, 10 ]
// 两个参数
let j = arr.slice(-6,-2); // 等价于slice(4,8)
console.log(j); // [ 5, 6, 7, 8 ]
// 不满足条件返回空数组
let k = arr.slice(-2,-6); // 等价于slice(8,4)
console.log(k); // []
```

`splice()`这个方法非常的厉害，可以实现对数组的 3 种类型的操作： ==删除，插入和替换== ，相当于是增删改操作都可以用这个方法来实现。

==删除== ：可以删除任意数量的元素，只需要指定 `2` 个参数：要参数的第一项位置和要删除的项数。

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10];
// 从下标为3的元素开始删除，删除5个元素
// 将删除的元素返回给i
let i = arr.splice(3,5);
console.log(i); // [ 4, 5, 6, 7, 8 ]
console.log(arr); // [ 1, 2, 3, 9, 10 ]
```

==插入== ：可以向任意位置插入任意数量的元素。只需要提供 `s` 个参数：起始位置，0（要删除的项目），要插入的项目。

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10];
// 从下标为3的元素之前开始插入
let i = arr.splice(3,0,"red","blue");
console.log(i); // []
console.log(arr);
// [ 1, 2, 3, 'red', 'blue', 4, 5, 6, 7, 8, 9, 10 ]
```

==替换== ：替换的原理在于插入的时候同时进行删除，这样就实现了替换功能。

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10];
// 从下标为3的元素之前开始插入
// 插入多少，刚好就删除多少
let i = arr.splice(3,2,"red","blue");
console.log(i); // [ 4, 5 ]
console.log(arr);
// [ 1, 2, 3, 'red', 'blue', 6, 7, 8, 9, 10 ]
```

**数组和字符串相互转换：**`join()` 和 `split()`

`join()`是将数组转为字符串，可以传入分隔符作为参数。

```javascript
let arr = [1,2,3];
let str = arr.join("");
console.log(str); // 123
let str2 = arr.join(",");
console.log(str2); // 1,2,3
```

`split()`是将字符串转为数组，传入参数指明以什么作为分隔符。

```javascript
let str = "Hello";
let arr = str.split("");
console.log(arr); // [ 'H', 'e', 'l', 'l', 'o' ]
let arr2 = str.split("l");
console.log(arr2); // [ 'He', '', 'o' ]
```

#### 数组重排序方法

重排序涉及到两个方法：`reverse()`和`sort()`

`reverse()`用于反转数组项的顺序，注意使用该方法时会改变原来数组的顺序，而不是返回一个副本。

```javascript
let arr = [1,2,3,4,5];
console.log(arr.reverse()); // [ 5, 4, 3, 2, 1 ]
console.log(arr); // [ 5, 4, 3, 2, 1 ]
```

`sort()`是按照升序排列数组每一项。

```javascript
let arr = [0,12,3,7,-12,23];
console.log(arr.sort());
// [ -12, 0, 12, 23, 3, 7 ]
```

可以看到，我们调用`sort()`方法以后排序并没有正确的按照升序来进行排序。

原因在于`sort()`方法排序时首先会调用每个元素的`toString()`转型方法，然后比较得到的字符串。即使每一项都是数值，`sort()`方法比较的也是字符串。

解决方法：`sort()`方法可以接收一个比较函数作为参数，以便我们指定哪个值位于哪个值的前面。比较函数接收两个参数，如果第一个参数应该位于第二个数的前面，返回一个负数，如果两个参数相等，返回 0，如果第一个参数应该位于第二个数的后面，返回一个正数。

```javascript
let arr = [0,12,3,7,-12,23];
console.log(arr.sort(function(a,b){
    if(a < b){
        return -1;
    }else if(a > b){
        return 1;
    }else{
        return 0;
    }
}));
```

如果是要进行降序排列，只需要将返回值进行修改即可。

```javascript
let arr = [0,12,3,7,-12,23];
console.log(arr.sort(function(a,b){
    if(a < b){
        return 1;
    }else if(a > b){
        return -1;
    }else{
        return 0;
    }
}));
```

事实上我们的比较函数还有一种更加简单的书写方法，如下：

```javascript
let arr = [0,12,3,7,-12,23];
console.log(arr.sort(function(a,b){
    return a - b;
    // 降序就返回 b - a
}));
```

最后需要注意的是，`reverse()`和`sort()`方法，返回值是经过排序之后的数组。

#### 位置方法

JavaScript 还为数组提供了两个位置方法：`indexOf()`和`lastIndexOf()`

- 这两个方法都接收两个参数：要查找的项目和查找的起点位置索引。区别在于一个是从数组开头开始找，一个是从数组末尾开始找。如果没找到就返回 -1。

```javascript
let arr = ["H","e","l","l","o"];
console.log(arr.indexOf("l")); // 2
console.log(arr.lastIndexOf("l")); // 3
console.log(arr.indexOf("z")); // -1
```

- 还需要注意的是，这两个方法进行查找时使用的是 ==全等== 进行比较。

```javascript
let arr = ["1","2","3"];
console.log(arr.indexOf(1)); // -1
```

> 因为`NaN===NaN`为`false`，所以这两种方法无法用来查找数组中是否存在`NaN`，可使用es6中新加的`find`和`findIndex`

`includes()`用于查看数组里面是否包含某个元素，包含返回 true，否则返回 false。

```javascript
let arr = ["1","2","3"];
console.log(arr.includes(2)); // false
console.log(arr.includes("2")); // true
console.log(arr.includes(7)); // false
```

`at()`方法，接受一个整数作为参数，返回对应位置的成员，并支持负索引。

```js
const arr = [5, 12, 8, 130, 44];
arr.at(2) // 8
arr.at(-2) // 130
arr.at(10) //undefined
```

- 如果参数位置超出了数组范围，`at()`返回`undefined`

#### 过滤方法

`every()`方法测试一个数组内的所有元素是否 ==都能通过== 指定函数的测试。它返回一个布尔值。

```js
[12, 5, 8, 130, 44].every((ele,idx,arr)=> ele >= 10); // false
[12, 54, 18, 130, 44].every((ele,idx,arr)=> ele >= 10); // true
```

`filter()` 方法创建给定数组一部分的[浅拷贝](https://developer.mozilla.org/zh-CN/docs/Glossary/Shallow_copy)，其包含通过所提供函数实现的测试的所有元素。

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

`some()` 方法测试数组中是否 ==至少有一个== 元素通过了由提供的函数实现的测试。如果在数组中找到一个元素使得提供的函数返回 true，则返回 true；否则返回 false。它不会修改数组

```js
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even));// true
```

## 九、集合

集合（set）是在 ECMAScript 6 中引入的一种数据结构，用于表示唯一的值。所以**这种数据结构里面不能包含重复的值**。

接下来这一小节，就让我们具体来看一下这种新的数据结构。

### 1. 什么是集合

在 ECMAScript 6 标准制定以前，可选的数据结构类型有限，可以说只有数组这种数据结构。数组使用的是数值型索引，经常被用来模拟队列和栈的行为。

但是如果需要使用非数值型索引，就会用非数组对象创建所需的数据结构，而这就是 Set 集合与后面一节要介绍的 Map 映射的早期实现。

Set 集合是一种无重复元素的列表，这是这种数据结构最大的一个特点。

### 2. 创建集合

要创建一个集合，方法很简单，直接使用 new 就可以创建一个 Set 对象。如果想要集合在创建时就包含初始值，那么我们可以传入一个数组进去。

```javascript
let s1 = new Set();
let s2 = new Set([1,2,3]);
console.log(s1); // Set {}
console.log(s2); // Set { 1, 2, 3 }
```

### 3. 给集合添加值

使用`add()`方法可以给一个集合添加值，由于调用`add()`方法以后返回的又是一个 Set 对象，所以我们能连续调用`add()`方法进行值的添加，这种像链条一样的方法调用方式被称为链式调用。

```javascript
let s1 = new Set();
s1.add(1);
console.log(s1); // Set { 1 }
s1.add(2).add(3).add(4);
console.log(s1);
// Set { 1, 2, 3, 4 }
```

我们还可以直接将一个数组传入`add()`方法里面

```javascript
let s1 = new Set();
s1.add([1,2,3]);
console.log(s1);
// Set { [ 1, 2, 3 ] }
```

但是需要注意的是建立 Set 对象时传入数组与调用`add()`方法时传入数组是效果是不一样，区别如下：

建立 Set 对象时传入数组，数组每一项成为 Set 对象的一个元素

```javascript
let s1 = new Set([1,2,3]);
console.log(s1); // Set { 1, 2, 3 }
console.log(s1.size); // 3
```

调用`add()`方法时传入数组，就是作为 Set 对象的一个元素

```javascript
let s1 = new Set();
s1.add([1,2,3]);
console.log(s1); // Set { [ 1, 2, 3 ] }
console.log(s1.size); // 1
```

在 Set 对象中，不能够添加相同的元素，这是很重要的一个特性

```javascript
let s1 = new Set();
s1.add(1).add(2).add(2).add(3);
console.log(s1);
// Set { 1, 2, 3 }
```

### 4. 集合相关属性和方法

**1.	用`size`属性获取元素个数**

```javascript
let s1 = new Set([1,2,3]);
console.log(s1.size); // 3
```

**2.	使用`has()`方法来查看一个集合中是否包含某一个值**

```javascript
let s1 = new Set([1,2,3]);
console.log(s1.has(1)); // true
console.log(s1.has("1")); // false
```

**3. 删除集合值**

使用`delete()`方法删除 Set 对象里面的某一个元素

```javascript
let s1 = new Set([1,2,3]);
s1.delete(2);
console.log(s1); // Set { 1, 3 }
// 没有的元素也不会报错
s1.delete("2");
console.log(s1); // Set { 1, 3 }
```

如果要一次性删除所有的元素，可以使用`clear()`方法

```javascript
let s1 = new Set([1,2,3]);
s1.clear()
console.log(s1); // Set {}
```

### 5. 遍历集合

集合也是可以枚举的，我们同样可以使用`for-of`来对集合进行遍历，如下：

```javascript
let s = new Set([1,2,3,4,5]);
for(let i of s){
    console.log(i);
}
// 1
// 2
// 3
// 4
// 5
```

或者通过`forEach`来进行遍历，示例如下：

```js
//使用 forEach 进行遍历
let s = new Set([1,2,3,4,5]);
s.forEach(ele => console.log(ele));
// 1
// 2
// 3
// 4
// 5
```

除此之外，我们也可以使用集合里面自带的`keys()`，`values()`以及`entries()`方法来对集合进行遍历。顺便要说一下的是，**在集合里面键和值是相同的**。

`keys()`方法遍历集合的键：

```javascript
let s = new Set(["Bill","Lucy","David"]);
for(let i of s.keys()){
    console.log(i);
}
// Bill
// Lucy
// David
```

`values()`方法遍历集合的值：

```javascript
let s = new Set(["Bill","Lucy","David"]);
for(let i of s.values()){
    console.log(i);
}
// Bill
// Lucy
// David
```

`entries()`方法同时遍历集合的键与值：

```javascript
let s = new Set(["Bill","Lucy","David"]);
for(let i of s.entries()){
    console.log(i);
}
// [ 'Bill', 'Bill' ]
// [ 'Lucy', 'Lucy' ]
// [ 'David', 'David' ]
```

### 6. 集合转数组

将集合转为数组，最快的方法就是使用前面所讲过的扩展运算符，如下：

```javascript
let s1 = new Set([1,2,3]);
console.log(s1); // Set { 1, 2, 3 }
let arr = [...s1];
console.log(arr); // [ 1, 2, 3 ]
```

除此之外，我们还可以使用 Array 类的静态方法`from()`来进行转换

```javascript
let s1 = new Set([1,2,3]);
console.log(s1); // Set { 1, 2, 3 }
let arr = Array.from(s1);
console.log(arr); // [ 1, 2, 3 ]
```

前面我们有提到过，Set 对象里面是不能够存放相同的元素的，利用这个特性，我们可以快速的为数组去重，如下：

```javascript
let arr = [1,2,2,3,4,3,1,6,7,3,5,7];
let s1 = new Set(arr);
let arr2 = [...s1];
console.log(arr2); // [ 1, 2, 3, 4, 6, 7, 5 ]
```

### 7. 弱集合（扩展）

当对象添加到集合中时，只要集合存在，它们就一直存储在集合。即使对象的引用被删除了也依然如此，我们来看下面的这个例子：

```javascript
let arr = [1,2,3];
let s = new Set(arr);
arr = null; // 删除arr数组的指向
console.log(s); // Set { 1, 2, 3 } 数组依然存在于集合中
console.log(arr); // null
```

可以看到，这里我们删除了对数组的引用，但是该数组依然存在，只不过里面的值为 null，这样的话垃圾回收就不会不会回收这个数组，从而可能会引起内存泄漏

**什么是内存泄漏？**

一个程序里面保留着已经不能在内存中访问的值时，就会发生内存泄露，也就是说占着空间却没用，造成内存的浪费。

例如：

```javascript
let arr = [1,2,3];
arr = null;
```

断开了 arr 对 1，2，3 的引用，现在 1，2，3 在内存里面已经是垃圾了。内存泄露会逐渐减少全部可用内存，导致程序和系统的速度变慢甚至崩溃。

那么怎样才能清空这些没用的数据呢？例如上例中的 1，2，3。事实上在 JavaScript 中采用的是动态内存管理技术，比如垃圾回收机制，会自动从内存中删除不再被程序需要的东西。而有些编程语言，例如 C++，则是需要程序员手动的管理内存，在某些东西完成任务之后，将其从内存中删除。

那么，集合的问题就在于即使失去了引用，也不会被垃圾回收，这个时候我们可以使用弱集合来避免这种状况。创建弱集合使用`new`运算符和`WeakSet()`构造函数，如下：

```javascript
let weak = new WeakSet();
```

由于弱集合要解决的问题是引用数据变为垃圾时无法被回收的问题，所以弱集合无法添加基本数据类型，也就是说无法像集合那样添加简单值进去。

```javascript
let weak = new WeakSet();
weak.add(1);
// TypeError: Invalid value used in weak set
```

除了这个限制以外，弱集合和普通集合还有一些细微的区别，例如无法在创建弱集合时传入一个数组进行初始化。

```js
let arr = [1,2,3,4,5];
let weak = new WeakSet(arr);
// TypeError: Invalid value used in weak set
// 无法在创建弱集合时传入一个数组进行初始化
```

不过弱集合也拥有`has()`，`add()`，`delete()`等方法。还需要注意一点的是，弱集合是对对象的弱引用，所以不能访问对象里面的值列表。这使得弱集合看上去像是空的，但是并不是空的，证明如下：

```javascript
let weak = new WeakSet();
let arr = [1,2,3];
weak.add(arr);
console.log(weak); // WeakSet {}
console.log(weak.has(arr)); // true
```

## 十、映射

映射（Map）也是 ECMAScript 6 规范中引入的一种数据结构。这是一种存储键值对列表很方便的方法，类似于其他编程语言中的词典或者哈希表。这一小节，让我们一起来看一下映射这种数据结构。

### 1. 什么是映射

JavaScript 的对象（Object），本质上是键值对的集合（Hash结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。

为了解决这个问题，ECMAScript 6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是"键"的范围不仅仅局限于字符串，而是各种类型的值（包括对象）都可以当作键。也就是说，Object 结构（对象结构）提供了" ==字符串—值== "的对应，而 Map 结构提供了" ==值—值== "的对应，是一种更完善的 Hash 结构的实现。

### 2. 创建映射

使用`new`关键字与`Map()`构造函数，就可以创建一个空的 Map 对象。如果要向 Map 映射中添加新的元素，可以调用`set()`方法并分别传入键名和对应值作为两个参数。如果要从集合中获取信息，可以调用`get()`方法。具体示例如下：

```javascript
let m = new Map();
m.set("name","xiejie");
m.set("age",18);
console.log(m);
// Map { 'name' => 'xiejie', 'age' => 18 }
console.log(m.get("name"));
// xiejie
```

在对象中，无法用对象作为对象属性的键名。但是在 Map 映射中，却可以这样做，可以这么说，在 Map 映射里面可以使用任意数据类型来作为键。

```javascript
let m = new Map();
m.set({},"xiejie");
m.set([1,2,3],18);
m.set(3581,18);
console.log(m);
// Map { {} => 'xiejie', [ 1, 2, 3 ] => 18, 3581 => 18 }
```

**传入数组来初始化 Map 映射**

可以向 Map 构造函数传入一个数组来初始化 Map 映射，这一点同样与 Set 集合相似。数组中的每个元素都是一个子数组，子数组中包含一个键值对的键名与值两个元素。因此，整个 Map 映射中包含的全是这样的两个元素的二维数组

```javascript
let arr = [["name","xiejie"],["age",18]];
let m = new Map(arr);
console.log(m);
// Map { 'name' => 'xiejie', 'age' => 18 }
```

### 3. 映射相关属性和方法

在设计语言新标准时，委员会为 Map 映射与 Set 集合设计了如下 3 个通用的方法：

```js
has(key)：// 检测指定的键名在Map映射中是否已经存在
delete(key)：// 从Map映射中移除指定键名及其对应的值
clear()：// 移除Map映射中的所有键值对
```

Map 映射同样支持`size`属性，其代表当前集合中包含的键值对数量

```javascript
let arr = [["name","xiejie"],["age",18]];
let m = new Map(arr);
console.log(m); // Map { 'name' => 'xiejie', 'age' => 18 }
console.log(m.size); // 2
console.log(m.has("name")); // true
console.log(m.get("name")); // xiejie
m.delete("name");
console.log(m); // Map { 'age' => 18 }
m.clear();
console.log(m); // Map {}
```

### 4. 映射的遍历

与集合一样，映射也是可以枚举的，所以可以用与集合类似的方式进行遍历。

使用`for-of`来遍历映射：

```javascript
let m = new Map([["name","xiejie"],["age",18]]);
for(let i of m){
    console.log(i);
}
// [ 'name', 'xiejie' ]
// [ 'age', 18 ]
```

`keys()`方法遍历映射的键：

```javascript
let m = new Map([["name","xiejie"],["age",18]]);
for(let i of m.keys()){
    console.log(i);
}
// name
// age
```

`values()`方法遍历映射的值：

```javascript
let m = new Map([["name","xiejie"],["age",18]]);
for(let i of m.values()){
    console.log(i);
}
// xiejie
// 18
```

`entries()`方法同时遍历映射的键与值：

```javascript
let m = new Map([["name","xiejie"],["age",18]]);
for(let i of m.entries()){
    console.log(i);
}
// [ 'name', 'xiejie' ]
// [ 'age', 18 ]
```

### 5. 映射转为数组

Map 结构转为数组结构，比较快速的方法还是使用前面介绍过的扩展运算符`...`

```javascript
let arr = [["name","xiejie"],["age",18]];
let m = new Map(arr);
console.log([...m.keys()]); // [ 'name', 'age' ]
console.log([...m.values()]); // [ 'xiejie', 18 ]
console.log([...m.entries()]); // [ [ 'name', 'xiejie' ], [ 'age', 18 ] ]
console.log([...m]); // [ [ 'name', 'xiejie' ], [ 'age', 18 ] ]
```

或者使用 Array 类的静态方法`from()`

```javascript
let arr = [["name","xiejie"],["age",18]];
let m = new Map(arr);
console.log(Array.from(m));
// [ [ 'name', 'xiejie' ], [ 'age', 18 ] ]
```

### 6. 弱映射（扩展）

弱映射和弱集合很类似，主要是解决存在映射里面的垃圾数据问题，创建弱映射使用`new`运算符以及`WeakMap()`构造函数，如下：

```javascript
let weakMap = new WeakMap();
```

弱映射和普通映射一样，同样也具有`has()`，`get()`，`set()`，`delete()`等方法。

## 十一、Date对象

Date 对象主要是用于处理和时间相关的操作。

### 1. 时间戳

在学习 Date 对象之前，有一个概念必须要了解，那就是时间戳。

所谓时间戳，就是指从 1970 年 1 月 1 日 0 时 0 分 0 秒到现在为止的豪秒数。在计算机里面，进行时间的计算都是通过时间戳来进行计算的。计算完成以后再将时间戳转换为表示时间的字符串。

**获取时间戳**

比起其他编程语言，在 ECMAScript 中所获取到的时间戳的精度要更高一些，可以精确到毫秒。

通过以下的方式可以获取到时间戳：

```javascript
let now = Date.now();
console.log(now); // 1511767644238
```

如果想要得到秒数，可以使用得到的毫秒数除以 1000，然后四舍五入，如下：

```javascript
let now = Date.now();
now = Math.round(now / 1000); // 毫秒除以 1000,四舍五入后得到秒数
console.log(now); // 1511767768
```

### 2. 静态方法（扩展）

可以看到，上面的`Date.now()`就是一个静态方法（直接从类上面调用的方法）。除了这个方法以外，这里还要介绍两个静态方法，分别是`Date.parse()`和`Date.UTC()`。

**`Date.parse()`方法**

该方法用于解析一个日期字符串，参数是一个包含待解析的日期和时间的字符串，返回从 1970 年 1 月 1 日 0 点到给定日期的毫秒数。

该方法会根据日期时间字符串格式规则来解析字符串的格式，除了标准格式外，以下格式也支持。

1. '月/日/年' 如 6/13/2004

2. '月 日,年' 如 January 12,2004 或 Jan 12,2004

3. '星期 月 日 年 时:分:秒 时区'  如 Tue May 25 2004 00:00:00 GMT-0700

如果字符串无法识别，将返回 NaN

>注：浏览器不支持不表示日期只表示时间的字符串格式

```javascript
console.log(Date.parse("1990/03/23")); // 638121600000
console.log(Date.parse("March 23,1990")); // 638121600000
console.log(Date.parse("2017")); // 1483228800000
console.log(Date.parse("Hello")); // NaN
```

>注：在 ECMAScript5 中，如果使用标准的日期时间字符串格式规则的字符串中，数学前有前置 0，则会解析为 UTC 时间，时间没有前置 0，则会解析为本地时间。其他情况一般都会解析为本地时间。
>
>UTC 时间：协调世界时，又称世界统一时间、世界标准时间、国际协调时间。由于英文（CUT）和法文（TUC）的缩写不同，作为妥协，简称 UTC。
>
>协调世界时是以原子时秒长为基础，在时刻上尽量接近于世界时的一种时间计量系统。

**`Date.UTC()`方法**

`Date.UTC()`同样返回给定日期的毫秒数，但其参数并不是一个字符串，而是分别代表年、月、日、时、分、秒、毫秒的数字参数，说白了就是参数的形式和上面不一样。

`Date.UTC()`方法的具体语法如下：

```
Date.UTC(year,month,day,hours,minutes,seconds,ms)
```

其中 year 参数是固定的，其余参数都是可选的，我们可以通过函数的 length 属性来查看该函数的形式参数个数。

```javascript
console.log(Date.UTC.length); // 7
```

>注：该方法使用的是 UTC 时间，而不是本地时间。

```javascript
console.log(Date.UTC("1990/03/23")); // NaN
console.log(Date.UTC(1990,3,23)); // 640828800000
console.log(Date.UTC(2017)); // 1483228800000
console.log(Date.UTC("Hello")); // NaN
```

### 3. 日期对象构造函数

日期对象的构造函数为`Date()`。该构造函数根据使用的不同效果也不尽相同。

**不使用 new 关键字**

如果不使用`new`关键字，那么就只是单纯的函数调用。会返回一个当前的日期和时间的字符串表示。并且被当作函数调用时，会忽略所有传递进去的参数，如下：

```javascript
console.log(Date());
// Mon Nov 27 2017 16:03:33 GMT+0800 (CST)
console.log(Date("1990-03-23"));
// Mon Nov 27 2017 16:03:33 GMT+0800 (CST)
```

**使用 new 关键字**

如果使用`new`关键字，那么这个时候就会返回一个对象。关于这种使用`new`关键字创建对象的方式，我们会在后面进行详细的介绍，这是只是作为了解即可。

使用`new`关键字但是没有传入任何参数，则会根据当前的日期时间来创建一个`date`对象。

```javascript
let date = new Date();
console.log(date); // 2017-11-27T08:05:44.025Z
console.log(typeof date); // object
```

如果传入数字参数，则该参数表示与 1970 年 1 月 1 日 0 时 0 分 0 秒之间的毫秒数，如下：

```javascript
let date = new Date(638121600000);
console.log(date); // 1990-03-22T16:00:00.000Z
```

可以接收多个数字参数，这个时候形式有点类似于`Date.UTC()`这个方法，不过返回的是一个对象，而不是毫秒数。

```javascript
let date = new Date(1990,3,23);
console.log(date); // 1990-04-22T15:00:00.000Z
```

如果传入的是字符串参数，则返回该日期对象。如果字符串不能被解析为日期，则返回 Invalid Date

```javascript
let date = new Date("1990-03-23");
console.log(date); // 1990-03-23T00:00:00.000Z
let date2 = new Date("Hello");
console.log(date2); // Invalid Date
```

### 4. 实例方法

Date 对象没有可以直接读写的属性，所有对日期和时间的访问都需要通过方法。

Date 对象的大多数方法分为两种形式：一种是使用本地时间，一种是使用 UTC 时间，这些方法会在下面一起列出。其中，所列出的`get[UTC]Day()`方法同时代表`getDay()`方法和`getUTCDay()`方法。

Date 对象一共有 46 个实例方法，可以分为以下 3 类：**to 类**、**get 类** 和 **set 类**。

因为 Date 对象的实例方法个数太多，而大多数实例方法在使用的时候都是非常相似的，所以我们这里只选择个别方法进行演示。

**1. to 类**

to 类方法从 Date 对象返回一个字符串，表示指定的时间。常见的 to 类方法如下：

```
toString():方法返回本地时区的日期字符串。
toUTCString():方法返回 UTC 时间的日期字符串。
toISOString():返回 Date 对象的标准的日期时间字符串格式的字符串。
toDateString():返回 Date 对象的日期部分的字符串。
toTimeString():返回 Date 对象的时间部分的字符串。
toJSON():返回一个符合 JSON 格式的日期字符串，与 toISOString() 方法的返回结果完全相同。
toLocaleString():toString() 方法的本地化转换。
toLocaleTimeString():toTimeString() 方法的本地化转换。
toLocaleDateString():toDateString() 方法的本地化转换。
```

个别方法演示：

```javascript
console.log(new Date("1990-03-23").toString());
// Fri Mar 23 1990 08:00:00 GMT+0800 (CST)
console.log(new Date("1990-03-23").toDateString()); // Fri Mar 23 1990
console.log(new Date("1990-03-23").toTimeString()); // 08:00:00 GMT+0800 (CST)
console.log(new Date("1990-03-23").toLocaleString()); // 1990-3-23 08:00:00
```

**2. get 类**

Date 对象提供了一系列 get 类方法，用来获取实例对象某个方面的值。

在介绍 get 类方法之前，介绍一下`valueOf()`方法。该方法返回距离 1970 年 1 月 1 日 0 点的毫秒数。因此，可以方便地使用比较运算符来比较日期值。

```javascript
let date1 = new Date(1990, 3, 23).valueOf();
let date2 = new Date(1988, 8, 21).valueOf();
console.log(date1); // 640796400000
console.log(date2); // 590774400000
console.log(date1 > date2); // true
```

常见的 get 类方法如下：

```
getTime():返回距离 1970 年 1 月 1 日 0 点的毫秒数，同 valueOf()。
在 ECMAScript5 之前，可以使用 getTime() 方法来实现 Date.now() 方法。
getTimezoneOffset():返回格林威治时间和本地时间之间的时差，以分钟为单位。
getYear():返回距离 1900 年的年数(已过时)。
get[UTC]FullYear():返回年份(4位数)。
get[UTC]Month():返回月份(0 - 11)。
get[UTC]Date():返回第几天(1 - 31)。
get[UTC]Day():返回星期几(0 - 6)。
get[UTC]Hours():返回小时值(0 - 23)。
get[UTC]Minutes():返回分钟值(0 - 59)。
get[UTC]Seconds():返回秒值(0 - 59)。
get[UTC]Milliseconds():返回毫秒值(0 - 999)。
```

>注意：通过标准日期时间格式字符串，且有前置 0 的形式的参数设置，设置的是 UTC 时间。

个别方法演示：

```javascript
console.log(new Date("1990-03-23").valueOf()); // 638150400000
console.log(new Date("1990-03-23").getTime()); // 638150400000
console.log(new Date("1990-03-23").getDay()); // 5
console.log(new Date("1990-03-23").getMonth()); // 2
```

**3. set 类**

Date 对象提供了一系列 set 类方法，用来设置实例对象各个方面的值。

set 方法基本与 get 方法相似，传入类似于`Date.UTC()`的参数，返回调整后的日期的内部毫秒数。

>注意：星期只能获取，不能设置。

```
setTime():使用毫秒的格式，设置一个 Date 对象的值。
setYear():设置年份(已过时)。
set[UTC]FullYear():设置年份(4 位数)，以及可选的月份值和日期值。
set[UTC]Month():设置月份(0 - 11)，以及可选的日期值。
set[UTC]Date():设置第几天(1 - 31)。
set[UTC]Hours():设置小时值(0 - 23)，以及可选的分钟值、秒值及毫秒值。
set[UTC]Minutes():设置分钟值(0 - 59)，以及可选的秒值及毫秒值。
set[UTC]Seconds():设置秒值(0 - 59)，以及可选的毫秒值。
set[UTC]Milliseconds():设置毫秒值(0 - 999)。
```

个别方法演示：

```javascript
let date = new Date("1990-03-23");
console.log(date.setFullYear(1992),date.getFullYear());
// 701308800000 1992
console.log(date.setMonth(4),date.getMonth());
// 706579200000 4
```

## 十二、Math

Math和其他的对象不同，它不是一个构造函数，它属于一个工具类不用创建对象，它里边封装了数学运算相关的属性和方法

###  1. 属性

Math 对象常见的属性如下表：

| 属性         | 说明                              |
| ------------ | --------------------------------- |
| Math.E       | 自然对数的底数，即常量 e 的值     |
| Math.LN10    | 10 的自然对数                     |
| Math.LN2     | 2 的自然对数                      |
| Math.LOG2E   | 以 2 为底 e 的对数                |
| Math.LOG10E  | 以 10 为底 e 的对象               |
| Math.PI      | 数学里面 PI 的值                  |
| Math.SQRT1_2 | 1/2 的平方根（即2的平方根的倒数） |
| Math.SQRT2   | 2 的平方根                        |

这里面用得稍微多一点的就是 PI，直接拿来用即可。

```javascript
console.log(Math.PI); // 3.141592653589793
```

### 2. 方法

####  `min()`和`max()`

这两个方法很简单，就是求一组数值的最大值和最小值。

```javascript
let max = Math.max(3,5,8,1);
let min = Math.min(3,5,8,1);
console.log(max); // 8
console.log(min); // 1
```

#### 舍入方法`ceil()`，`floor()`和`round()`

`ceil()`方法执行向上舍入，`floor()`方法执行向下舍入，`round()`方法执行四舍五入。

```javascript
let num = 3.14;
console.log(Math.ceil(num)); // 4
console.log(Math.floor(num)); // 3
console.log(Math.round(num)); // 3
```

#### 随机数方法

`Math.random()`方法返回 0 - 1 之间的随机数，如果想显示固定范围的随机数，可以套用下面的公式。

```
随机值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)
```

具体示例如下：

```javascript
let num = Math.random();
console.log(num); // 0.24003779065523112
// 生成 25 - 50 之间的随机数
// 可能值的计算：50 - 25 + 1
let rand = Math.floor(Math.random() * 26 + 25);
console.log(rand); // 41
```

练习：封装一个函数，这个函数接收 1 个或者 2 个函数。如果参数只有 1 个，则生成 0 - 参数之间的随机数，如果参数有 2 个，则生成这 2 个参数之间的随机数。

```javascript
// 接收 1 个或者 2 个参数 
// 如果只有 1 个参数 生成 0 - 参数之间的随机数
// 如果有 2 个参数 则生成这 2 个参数之间的随机数
const randomNum = function (i, j = 0) {
    if (i > j) {
        [i, j] = [j, i];
    }
    return Math.floor(Math.random() * (j - i + 1) + i);
}
console.log(randomNum(1, 100));
console.log(randomNum(100, 1));
console.log(randomNum(10));
```

#### 其他方法

在 Math 对象里面还有诸如下表中所示的其他方法，这里不再做一一演示。

| 方法                | 说明                    |
| ------------------- | ----------------------- |
| Math.abs(num)       | 返回 num 的绝对值       |
| Math.exp(num)       | 返回 Math.E 的 num 次幂 |
| Math.log(num)       | 返回 num 的自然对数     |
| Math.pow(num,power) | 返回 num 的 power 次幂  |
| Math.sqrt(num)      | 返回 num 的平方根       |
| Math.acos(x)        | 返回 x 的反余弦值       |
| Math.asin(x)        | 返回 x 的反正弦值       |
| Math.atan(x)        | 返回 x 的反正切值       |
| Math.atan2(x)       | 返回 y / x 的反正切值   |
| Math.cos(x)         | 返回 x 的余弦值         |
| Math.sin(x)         | 返回 x 的正弦值         |
| Math.tan(x)         | 返回 x 的正切值         |

## 十三、String对象

### 1. 属性

`length`属性：可以用来获取字符串的长度

### 2. 方法

#### 访问特定字符

`charAt()`:可以返回字符串中指定位置的字符（等同于str[i]）

```js
let str = "Hello World";
console.log(str.charAt(1)); // e
console.log(str.charAt('a')); // H 因为 a 被转为了数字0
```

- `at()`函数等效

`charCodeAt():`获取指定位置字符的字符编码（Unicode编码）

```js
let str = "Hello World";
console.log(str.charCodeAt(1)); // 101
console.log(str.charCodeAt('a')); // 72
```

`String.formCharCode():`可以根据字符编码去获取字符

```js
console.log(String.fromCharCode(104,101,108,108,111)); // hello
```

#### 字符串操作方法

`concat():`可以用来连接两个或多个字符串(作用和+一样)

```js
let str = "Hello";
let newStr = str.concat(" World!!!");
console.log(str); // Hello
console.log(newStr); // Hello World!!!
```

- 原字符串不会产生改变，拼接后的字符串以返回值的方式返回

`trim():`用于删除字符串的头尾空白符

```js
let str = "    Hello World    ";
let newStr = str.trim();
console.log(str); //    Hello World    
console.log(newStr); // Hello World
```

- 等同于`str.replace(/^\s |\s $/g,"")`;

`includes()`方法用于查看是否包含某个字符，如果包含返回 true，否则返回 false。

```javascript
let str = "Hello World";
console.log(str.includes("l")); // true
console.log(str.includes("M")); // false
```

`startsWith()`和`endsWith()`方法分别用于检测开始字符和结束字符。

```javascript
let str = "Hello World";
console.log(str.startsWith("H")); // true
console.log(str.endsWith("d")); // true
console.log(str.endsWith("z")); // false
```

`repeat()`方法接收一个参数，为字符串重复的次数。返回值为字符串重复指定次数后的新字符串。

```javascript
let str = "Hello";
console.log(str.repeat(3));
// HelloHelloHello
```

#### 字符串位置方法

`indexof():`该方法可以检索一个字符串中是否含有指定内容

```js
let str = "Hello World";
console.log(str.indexOf('l')); // 2
console.log(str.lastIndexOf('l')); // 9
```

- 如果字符串中含有该内容，则会返回其第一次出现的索引;如果没有找到指定的内容，则返回-1
- 可以指定一个第二参数，指定开始查找的位置
- eg:    `result = str.indexOf("h",1);`
- 当所传参数为空时，意为检索字符串中是否含有空白，此时会返回0

`lastIndexOf()`

- 该方法的用法和`indexOf()`一样，不同的是`indexOf`是从前往后找，而`lastIndexOf`是从后往前找
- 同样可以指定开始查找的位置

#### 获取部分字符串

`slice()`  使用方式和数组相同

```js
let str = "Hello World";
let str2 = str.slice(2);
let str3 = str.slice(2,7); // 不包括 7
console.log(str); // Hello World
console.log(str2); // llo World
console.log(str3); // llo W
```

`substring()`

```js
let str = "Hello World";
let str1 = str.slice(2);
let str2 = str.substr(2);
let str3 = str.substring(2);
console.log(str1); // llo World
console.log(str2); // llo World
console.log(str3); // llo World

str1 = str.slice(2,7); // 结束位置为 7,不包含 7
str2 = str.substr(2,7); // 要返回的字符个数
str3 = str.substring(2,7); // 结束位置为 7,不包含 7
console.log(str1); // llo W
console.log(str2); // llo Wor
console.log(str3); // llo W
```

- 第一个参数：开始截取位置的索引（包括开始位置）
- 第二个参数：结束位置的索引（不包括结束位置）
- 不同的是这个方法 ==不能接受负值作为参数，如果传递了一个负值，则默认使用0==
- 同时会自动调整参数的位置，如果第二个参数小于第一个，则自动交换

`substr()`

```js
let str = "Hello World";
let str1 = str.slice(2);
let str2 = str.substr(2);
console.log(str1); // llo World
console.log(str2); // llo World

str1 = str.slice(2,7); // 结束位置为 7,不包含 7
str2 = str.substr(2,7); // 要返回的字符个数
console.log(str1); // llo W
console.log(str2); // llo Wor
```

- 第一个参数：截取开始位置的索引
- 第二个参数：截取的长度

#### 字符串大小写转换方法

`toUpperCase()：`将一个字符串转换为大写并返回

`toLowerCase()：`将一个字符串转换为小写并返回

```js
let str = "HELLO";
console.log(str.toLowerCase()); // hello
str = "hello";
console.log(str.toUpperCase()); // HELLO
```

#### 字符串补全

`padStart()`用于头部补全，`padEnd()`用于尾部补全，共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。

```js
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'
'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba
```

- 如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。

#### 参数可以传递正则表达式的方法

`split()`

- 需要一个字符串作为参数，将会根据该字符串去拆分数组
- 如果传递一个空串作为参数，则会将每个字符都拆分为数组中的一个元素。
- 这个方法即使不指定全局匹配，也会全都拆分

`search()`

- 可以搜索字符串中是否含有指定内容
- 如果搜索到指定内容，则会返回第一次出现的索引，如果没有搜索到返回-1
- 它可以接受一个正则表达式作为参数，然后会根据正则表达式去检索字符串
- serach()只会查找第一个，即使设置全局匹配也没用

`match()`

- 可以根据正则表达式，从一个字符串中将符合条件的内容提取出来
- 默认情况下我们的match只会找到第一个符合要求的内容，找到以后就停止检索
- 我们可以设置正则表达式为全局匹配模式，这样就会匹配到所有的内容
  - 可以为一个正则表达式设置多个匹配模式，且顺序无所谓
    `result = str.match(/[a-z]/ig);`
- match()会将匹配到的内容封装到一个数组中返回，即使只查询到一个结果

`replace()`

- 可以将字符串中指定内容替换为新的内容
- 参数：
  - 被替换的内容，可以接受一个正则表达式作为参数
  - 新的内容
    `result = str.replace(/[a-z]/gi , "");`
  - 默认只会替换第一个，可以设置全局匹配替换全部

## 十四、JSON

JSON，英语全称为 JavaScript Object Notation，翻译成中文为 JavaScript 对象简谱。

它是 Douglas Crockford 于 2001 年发明的一种轻量级数据存储格式，在 2005 - 2006 年正式成为主流的数据格式，雅虎和谷歌就在那时开始广泛地使用该格式。之后很多社交网站（例如 Twitter，Facebook）也使用 JSON 来进行 Web 服务之间的信息共享与交换。

JSON 最大的优点是在人、机可读性方面达到了一个最佳的临界点。比起之前广泛使用的 XML 数据格式，解析一个 JSON 数据要轻松容易很多。

经常有人会把 JavaScript 对象字面量和 JSON 混淆，认为是同一个东西。但实际上它们之间还是有几个关键性的区别，如下：

- 属性名必须用双引号引起来

- 允许的值包括数字，true，false，null，数组，对象以及双引号引起来的字符串

- 函数是不允许的

例如：蝙蝠侠的 JSON 字符串可以表示为如下

```javascript
let batman = {
    "name" : "Batman",
    "real name" : "Bruce Wayne",
    "height" : 74,
    "weight" : 210,
    "hero" : true,
    "villain" : false,
    "allies" : ["Robin","Batgirl","Superman"]
}
```

JSON 作为一种数据存储格式从诞生以来日益流行，现在很多编程语言都有现成的库来解析和生成 JSON 对象。从 ECMAScript 5 开始，就已经有了全局的 JSON 对象。

![-w536](./images/15440227927364.jpg)

该对象的一些方法，可以将 JavaScript 中的字符串转为 JSON 对象或者将 JSON 对象转换为字符串。

### 1. JSON 对象转为字符串

使用的方法为`JSON.stringify()`，示例如下：

```javascript
let person = {
    "name" : "xiejie",
    "age" : 18,
    "gender" : "male",
}
let str = JSON.stringify(person);
console.log(str);
// {"name":"xiejie","age":18,"gender":"male"}
```

如果一个字面量对象里面包含了方法，那么在使用`JSON.stringify()`方法将其转为字符串时，会直接忽略掉对象里面的方法，如下：

```javascript
let person = {
    name : "xiejie",
    age : 18,
    walk : function(){
        console.log("I'm walking");
    }
}
let str = JSON.stringify(person);
console.log(str); // {"name":"xiejie","age":18}
```

### 2. 字符串转为 JSON 对象

使用的方法为`JSON.parse()`方法。但是需要注意的一个问题是，当我们要将一个字符串转为 JSON 对象时，必须要保证字符串的格式要和 JSON 的格式一模一样，否则无法进行转换，示例如下：

```javascript
let person = '{"name":"xiejie","age":18,"gender":"male"}';
let obj = JSON.parse(person);
console.log(obj);
// { name: 'xiejie', age: 18, gender: 'male' }

let person2 = '{name:"xiejie",age:18,gender:"male"}'; // 因为格式不一致,所以会报错
let obj2 = JSON.parse(person2);
console.log(obj2);
// SyntaxError: Unexpected token n in JSON at position 1
```

## 十五、正则表达式

正则表达式（regular expression）描述了一种字符串匹配的模式（pattern），可以用来检查一个字符串是否含有某种子串，或者对匹配的子串进行替换、取出等操作。

###  1. 创建正则表达式对象

#### RegExp 构造函数构建正则表达式

```js
var 变量 = new RegExp("正则表达式","匹配模式");
```

#### 字面量构建正则表达式

```js
var 变量 = /正则表达式/匹配模式
```

- 匹配模式：i:忽略大小写； g：全局匹配模式；   m：多行匹配

需要注意无论是字面量方式，还是构造函数方式创建的正则表达式，返回的类型都为 **object**。

```javascript
let reg1 = /at/i;
// 等同于
let reg2 = new RegExp("at","i");
console.log(typeof reg1); // object
console.log(typeof reg2); // object
```

### 2. 元字符

简单字符在正则表达式中，就是字面的含义，比如`/a/`匹配 a，`/b/`匹配 b；而除了简单字符以外，还有一些字符，它们除了字面意思外，还有着特殊的含义，这些字符就是元字符。

JavaScript 所支持的元字符如下表：

| 元字符     | 名称         | 匹配对象                                                     |
| ---------- | ------------ | ------------------------------------------------------------ |
| `.`        | 点号         | 单个任意字符(除回车\r、换行\n、行分隔符\u2028和段分隔符\u2029外) |
| `[]`       | 字符组       | 列出的单个任意字符                                           |
| `[^]`      | 排除型字符组 | 未列出的单个任意字符                                         |
| `?`        | 问号         | 匹配0次或1次                                                 |
| `*`        | 星号         | 匹配0交或多次                                                |
| `+`        | 加号         | 匹配1次或多次                                                |
| `{a,b}`    | 区间量词     | 匹配至少a次，最多b次                                         |
| `^`        | 脱字符       | 行的起始位置                                                 |
| `$`        | 美元符       | 行的结束位置                                                 |
| `|`        | 竖线         | 分隔两边的任意一个表达式                                     |
| `()`       | 括号         | 限制多选结构的范围，标注量词作用的元素，为反向引用捕获文本   |
| `\1,\2...` | 反向引用     | 匹配之前的第一、第二...组括号内的表达式匹配的文本            |

### 3. 字符组元字符

字符组（Character Class），有的翻译成字符类或字符集。简单而言，就是指用方括号表示的一组字符，它匹配若干字符之一。

- 连字符`-`提供了范围表示法（只在字符组中表示范围）
- 脱字符`^`表示在当前位置匹配一个没有列出的字符（只在字符组开始位置表示排除）
- 在字符组中，只有`^`，`-`这 2 个字符可能被当做元字符，其他有元字符功能的字符都只表示其本身。

```js
console.log(/[0-9a-fA-F]/.test('d')); // true
console.log(/[0-9a-fA-F]/.test('x')); // false

console.log(/[0-9][^0-9]/.test('1e')); // true
console.log(/[0-9][^0-9]/.test('q2')); // false

console.log(/-/.test('-')); // true
console.log(/[a-c^]/.test('^')); // true
```

#### 简记

正则表达式也提供了对应的排除型字符组的简记法：`\D`、`\W`、`\S`。字母完全相同，只是改为大写。它们和小写的简记符在含义上刚好相反。

```
\d:数字，等同于 [0-9]
\D:非数字，等同于 [^0-9]
\s:空白字符，等同于 [\f\n\r\t\u000B\u0020\u00A0\u2028\u2029]
\S:非空白字符，等同于 [^\f\n\r\t\u000B\u0020\u00A0\u2028\u2029]
\w:字母、数字、下划线，等同于 [0-9A-Za-z_]（汉字不属于\w）
\W:非字母、数字、下划线，等同于 [^0-9A-Za-z_]
```

>注意：`\w` 不仅包括字母、数字，还包括下划线。在进行数字验证时，只允许输入字母和数字时，不可以使用 `\w`，因为还包含了下划线。所以应该使用`[0-9a-zA-Z]`

#### 任意字符

经常有人存在一个误区，认为点可以代表任意字符，其实并不是。点号`.`代表除回车（\r），换行（\n），行分隔符（\u2028）和段分隔符（\u2029）以外的任意字符。

如果要匹配任意字符，可以妥善的利用互补属性来得到这一效果。比如，`[\s\S]`、`[\w\W]`、`[\d\D]`都可以表示任意字符。

```javascript
// 匹配任意字符
console.log(/./.test('\r')); // false
console.log(/[\s\S]/.test('\r')); // true
console.log(/[\d\D]/.test('\r')); // true
```

### 4. 量词相关元字符

根据字符组的介绍，可以用字符组`[0-9]`或`\d`来匹配单个数字字符，但是如果要匹配多个数字字符，则显得有点不太方便，如下：

```javascript
// 表示邮政编码 6 位数字
/[0-9][0-9][0-9][0-9][0-9][0-9]/;
// 等价于
/\d\d\d\d\d\d/;
```

正则表达式提供了量词，用来设定某个模式出现的次数

```js
{n}: 匹配 n 次。
{n,m}: 匹配至少 n 次，最多 m 次。
{n,}: 匹配至少 n 次。
?: 相当于 {0,1}
*: 相当于 {0,}
+: 相当于 {1,}
```

举个例子，在美国英语和英国英语里面有些单词的写法不一样，例如 traveler 和 traveller，favor 和 favour，color 和 colour，写出来的正则表达式如下：

```javascript
// 同时匹配美国英语和英国英语单词
/travell?er/;
/favou?r/;
/colou?r/;
```

超文本传输协议名有 http 和 https 两种，其正则表达式可写作：

```javascript
/https?/;
```

#### 贪婪模式（扩展）

默认情况下，量词采用的是贪婪模式（greedy quantifier），即尽可能多的进行匹配，如下：

```javascript
let reg = /a+/;
let str = "aaabbcc";
console.log(reg.exec(str));
// [ 'aaa', index: 0, input: 'aaabbcc' ]
```

这里我们使用了正则表达式的另外一个常用的实例方法`exec()`。该方法会返回一个数组，数组里面有**匹配上的字符**，**匹配项开始的索引值**以及**原始的字符串**等更加详细的信息。

#### 懒惰模式（扩展）

懒惰模式（lazy quantifier）和贪婪模式相对应，在量词后添加问号`?`，表示尽可能少的匹配，一旦条件满足就不再往下匹配。

```javascript
{n}?: 匹配 n 次。
{n,m}?: 匹配至少 n 次，最多 m 次。
{n,}?: 匹配至少 n 次。
??: 相当于 {0,1}
*?: 相当于 {0,}
+?: 相当于 {1,}
```

示例如下：

```javascript
let reg = /a+?/;
let str = "aaabbcc";
console.log(reg.exec(str));
// [ 'a', index: 0, input: 'aaabbcc' ]
```

### 5. 括号相关元字符

括号有两个功能，分别是**分组**和**引用**。具体而言，用于限定量词或选择项的作用范围，也可以用于捕获文本并进行引用或反向引用。

#### 分组

量词控制之前元素的出现次数，而这个元素可以是一个字符，也可以是一个字符组，或者是一个表达式。如果把一个表达式用括号包围起来，这个元素就是括号里的表达式，被称为子表达式。

例如：如果希望字符串`ab`重复出现 2 次，应该写为`(ab){2}`，而如果写为`ab{2}`，则`{2}`只限定 b，如下：

```javascript
console.log(/ab{2}/.test("abab")); // false
console.log(/(ab){2}/.test("abab")); // true
```

身份证长度有 15 位和 18 位两种，如果只匹配长度，可能会想当然地写成`\d{15,18}`，实际上这是错误的，因为它包括 15、16、17、18 这 4 种长度。因此，正确的写法如下：

```javascript
/\d{15}(\d{3})?/
```

#### 捕获

括号不仅可以对元素进行分组，还会保存每个分组匹配的文本，等到匹配完成后，引用捕获的内容。因为捕获了文本，这种功能叫捕获分组。

比如，要匹配诸如 2016 - 06 - 23 这样的日期字符串：

```javascript
/(\d{4})-(\d{2})-(\d{2})/
```

与以往不同的是，年、月、日这三个数值被括号括起来了，从左到右的第 1 个、第 2 个、第 3 个括号，分别代表第 1、2、3 个捕获组。

ECMAScript 有 9 个用于存储捕获组的构造函数属性，如果使用的是`test()`方法，那么通过正则对象的`$1-$9`属性来进行访问到。

```javascript
// RegExp.$1\RegExp.$2\RegExp.$3…… 到 RegExp.$9
// 分别用于存储第一、第二……第九个匹配的捕获组。
// 在调用 exec() 或 test() 方法时，这些属性会被自动填充
console.log(/(\d{4})-(\d{2})-(\d{2})/.test('2016-06-23'));//true
console.log(RegExp.$1);//2016
console.log(RegExp.$2);//06
console.log(RegExp.$3);//23
console.log(RegExp.$4);//""
```

再例如：

```javascript
let reg = /(a+)(b*)xj/;
let str = "aabbbxj";
console.log(reg.test(str));//true
console.log("$1的值:",RegExp.$1);//$1的值: aa
console.log("$2的值:",RegExp.$2);//$2的值: bbb
console.log("$3的值:",RegExp.$3);//$3的值:
```

而`exec()`方法是专门为捕获组而设计的，返回的数组中，第一项是与整个模式匹配的字符串， 其他项是与模式中的 ==捕获组匹配的字符串== ，如果要获取，那么可以通过指定数组的下标来进行获取，如下：

```javascript
let reg = /(\d{4})-(\d{2})-(\d{2})/;
let str = "2017-03-21";
let i = reg.exec(str);
console.log(i);
/*
[ '2017-03-21',
  '2017',
  '03',
  '21',
  index: 0,
  input: '2017-03-21',
  groups: undefined ]
*/
console.log(i[1]); // 2017
console.log(i[2]); // 03
console.log(i[3]); // 21
```

捕获分组捕获的文本，不仅可以用于数据提取，也可以用于替换。字符串的`replace()`方法就是用于进行数据替换的，该方法接收两个参数，第一个参数为待查找的内容，而第二个参数为替换的内容。

```javascript
let str = "2017-12-12";
console.log(str.replace(/-/g,"."));
// 2017.12.12
```

>注：这里书写正则表达式的时候必须要写上模式修正符`g`，这样才能够进行全局匹配。

在`replace()`方法中也可以引用分组，形式还是用`$num`，其中 num 是对应分组的编号。

```javascript
//把2017-03-23的形式变成03-23-2017
let reg = /(\d{4})-(\d{2})-(\d{2})/;
let str = "2017-03-23";
console.log(str.replace(reg,"$2-$3-$1"));
//03-23-2017
```

#### 反向引用（扩展）

英文中不少单词都有重叠出现的字母，如 shoot 或 beep。若想检查某个单词是否包含重叠出现的字母，则需要引入反向引用（back-reference）。

反向引用允许在正则表达式内部引用之前捕获分组匹配到的文本，形式为`\num`，其中 num 表示所引用分组的编号。

```javascript
// 重复字母
let reg = /([a-z])\1/;
console.log(reg.test('aa')); // true
console.log(reg.test('ab')); // false
```

接下来我们再来看一个反向引用的例子

```javascript
let reg = /(ab)(cd)\1xj/;
let str = "abcdabxj";
console.log(reg.test(str)); // true
```

如果我们要跳过某一个子表达式，那么可以使用`?:`来跳过（后面会提到的非捕获）。

```javascript
let reg = /(?:ab)(cd)\1xj/;
let str = "abcdabxj";
let str2 = "abcdcdxj";
console.log(reg.test(str)); // false
console.log(reg.test(str2)); // true
```

反向引用可以用于建立前后联系。例如 HTML 标签的开始标签和结束标签是对应着的，这个时候我们就可以使用反向引用。

```javascript
// 开始标签
// <([^>]+)>
// 标签内容
// [\s\S]*?
// 匹配成对的标签
// /<([^>]+)>[\s\S]*?<\/\1>/
console.log(/<([^>]+)>[\s\S]*?<\/\1>/.test('<a>123</a>')); // true
console.log(/<([^>]+)>[\s\S]*?<\/\1>/.test('<a>123</b>')); // false
```

#### 非捕获（扩展）

除了捕获分组，正则表达式还提供了非捕获分组（non-capturing group），以`?:`的形式表示，它只用于限定作用范围，而不捕获任何文本。

比如，要匹配`abcabc`这个字符，一般地，可以写为`(abc){2}`，但由于并不需要捕获文本，只是限定了量词的作用范围，所以应该写为`(?:abc){2}`。

```javascript
// 限定 abc 要出现 2 次 , 并且会对内容进行捕获
console.log(/(abc){2}/.exec('abcabc')); 
// [ 'abcabc', 'abc', index: 0, input: 'abcabc', groups: undefined ]

// 同样是限定 abc 要出现 2 次 , 但是不会对内容进行捕获
console.log(/(?:abc){2}/.exec('abcabc')); 
// [ 'abcabc', index: 0, input: 'abcabc', groups: undefined ]
```

由于非捕获分组不捕获文本，对应地，也就没有捕获组编号

```javascript
console.log(/(abc){2}/.test('abcabc')); // true
console.log(RegExp.$1); // abc
console.log(/(?:abc){2}/.test('abcabc')); // true
console.log(RegExp.$1); // ""
```

非捕获分组也不会被用于反向引用

```javascript
console.log(/(?:123)\1/.test('123123')); // false
console.log(/(?:123)\1/.test('123\1')); // true
console.log(/(123)\1/.test('123123')); // true
```

捕获分组和非捕获分组可以在一个正则表达式中同时出现

```javascript
console.log(/(\d)(\d)(?:\d)(\d)(\d)/.exec('12345'));
// [ '12345', '1', '2', '4', '5', index: 0, input: '12345' ]
```

### 6. 选择相关元字符

竖线`|`在正则表达式中表示或（OR）关系的选择，以竖线`|`分隔开的多个子表达式也叫选择分支或选择项。在一个选择结构中，选择分支的数目没有限制。

在选择结构中，竖线`|`用来分隔选择项，而括号`()`用来规定整个选择结构的范围。如果没有出现括号，则将整个表达式视为一个选择结构。

选择项的尝试匹配次序是从左到右，直到发现了匹配项，如果某个选择项匹配就 ==忽略右侧其他选择项== ，如果所有子选择项都不匹配，则整个选择结构匹配失败。

```javascript
console.log(/12|23|34/.exec('1')); // null
console.log(/12|23|34/.exec('12')); // [ '12', index: 0, input: '12' ]
console.log(/12|23|34/.exec('23')); // [ '23', index: 0, input: '23' ]
console.log(/12|23|34/.exec('2334')); // [ '23', index: 0, input: '2334' ]
```

在选择结构中，应该尽量避免选择分支中存在重复匹配，因为这样会大大增加回溯的计算量。

```javascript
// 不良的选择结构
a|[ab]
[0-9]|\w
```

### 7. 断言相关元字符（扩展）

在正则表达式中，有些结构并不真正匹配文本，而只负责判断在某个位置左/右侧是否符合要求，这种结构被称为断言(assertion)，也称为锚点(anchor)，常见的断言有3种： ==单词边界、行开头结尾、环视== 。

#### 单词边界

在文本处理中可能会经常进行单词替换，比如把 row 替换成 line。但是，如果直接替换，不仅所有单词 row 都被替换成 line，单词内部的 row 也会被替换成 line。要想解决这个问题，必须有办法确定单词 row，而不是字符串 row。

为了解决这类问题，正则表达式提供了专用的单词边界（word boundary），记为`\b`，它匹配的是'单词边界'位置，而不是字符。`\b`匹配的是一边是单词字符`\w`，一边是非单词字符`\W`的位置。

与`\b`对应的还有`\B`，表示非单词边界，但实际上`\B`很少使用。

```javascript
let reg = /\bis\b/;
let str = "this is a test";
console.log(reg.exec(str));
// [ 'is', index: 5, input: 'this is a test' ]
console.log(reg.exec("is"));
// [ 'is', index: 0, input: 'is' ]
```

#### 起始结束

常见的断言还有`^`和`$`，它们分别匹配字符串的开始位置和结束位置，所以可以用来判断整个字符串能否由表达式匹配。

```javascript
let reg = /^\d\w*/;
let str1 = "1asd";
let str2 = "qwe2";
console.log(reg.test(str1)); // true
console.log(reg.test(str2)); // false
```

`^`和`$`的常用功能是删除字符串首尾多余的空白，类似于字符串对象的`trim()`方法。

```javascript
let fnTrim = function(str){
    return str.replace(/^\s+|\s+$/,'')
}  
console.log(fnTrim('      hello world   ')); // 'hello world'
```

#### 环视

环视，在不同的地方又称之为零宽断言，简称断言。环视强调的是它所在的位置，前面或者后面，必须满足环视表达式中的匹配情况，才能匹配成功。 

环视可以认为是虚拟加入到它所在位置的附加判断条件，并不消耗正则的匹配字符。

环视可分为**正序环视**和**逆序环视**，而 JavaScript 只支持正序环视，相当于只支持向前看，不支持往回看。而正序环视又分为**肯定正序环视**和**否定正序环视**。

肯定正序环视的记法为`?=正则表达式`，表示所在的位置右侧能够匹配到该正则。否定正序环视的记忆法是`?!正则表达式`，表示所在的位置右侧位置不能匹配到该正则。

举一个例子：

```js
let reg = /(?=A)[A-Z]/;
/*
匹配以下的字符串:
    1. (?=A) 所在的位置，后面是 A 
    2. 表达式 [A-Z] 匹配 A-Z 中任意一个字母
*/
console.log(reg.test('ABC')); // true
console.log(reg.test('BBC')); // fasle
```

从例子可以看出，从左到右，正则分别匹配了环视`(?=A)`和`[A-Z]`，由于环视不消耗正则的匹配字符，因此，`[A-Z]`还能对 A 进行匹配，并得到结果。

再例如，我要匹配文件名以`.js`结束的文件：

```javascript
let reg = /\w+(?=\.js)/;
let str = "test.js";
console.log(reg.test(str)); // true
```

如果在`?=`后面想要继续书写字符，那么必须先写一个`?=`后面的字符，如下：

```javascript
let reg = /a(?=b)bc/; // 正则 a 后面必须书写 b
let str1 = "abc";
let str2 = "acc";
let str3 = "abb";
let str4 = "abbc";
let str5 = "abcc";
console.log(reg.test(str1)); // true
console.log(reg.test(str2)); // false
console.log(reg.test(str3)); // false
console.log(reg.test(str4)); // false
console.log(reg.test(str5)); // true
```

注意括号后面的地方第一个字符必须写成 b，因为`?=`位置后面就写的 b，这样才能继续在后面书写字符。

如果像下面这样写，那么是不可能匹配上的。

```javascript
let reg = /a(?=b)c/; 
let str1 = "abc";
let str2 = "acc";
let str3 = "abb";
let str4 = "abbc";
let str5 = "abcc";
console.log(reg.test(str1)); // false
console.log(reg.test(str2)); // false
console.log(reg.test(str3)); // false
console.log(reg.test(str4)); // false
console.log(reg.test(str5)); // false
```

接下来我们来看`?!`，其实就和`?=`刚好相反，后面的字符不能是某一个字符，如下：

```javascript
let reg = /a(?!b)c/;
let str = "ac";
console.log(reg.test(str)); // true
```

同样需要注意的是，既然指定了后面不能是某一个字符，那么如果想要往后面继续书写字符，首先需要写一个不是`?!`后面的，如下：

```javascript
let reg = /a(?!b)b/;
let str1 = "axb";
let str2 = "abb";
let str3 = "acb";
console.log(reg.test(str1)); // false
console.log(reg.test(str2)); // false
console.log(reg.test(str3)); // false
```

注意：环视虽然也用到括号，却与捕获型分组编号无关；但如果环视结构出现捕获型括号，则会影响分组

```javascript
console.log(/ab(?=cd)/.exec("abcd"));
// [ 'ab', index: 0, input: 'abcd' ]
console.log(/ab(?=(cd))/.exec("abcd"));
// [ 'ab', 'cd', index: 0, input: 'abcd' ]
```

关于环视更多的介绍，可以参照：https://www.cnblogs.com/tsql/p/5860889.html

### 8. 模式修正符

匹配模式（match mode）又被称之为模式修正符。指的是匹配时使用的规则。设置特定的模式，可能会改变对正则表达式的识别。

前面已经介绍过创建正则表达式对象时，可以设置`m`、`i`、`g`这三个标志，分别对应多行模式、不区分大小模式和全局模式三种。

**i：**默认地，正则表达式是区分大小写的，通过设置标志`i`，可以忽略大小写（ignore case）。

```javascript
console.log(/ab/.test("aB")); // false
console.log(/ab/i.test("aB")); // true
```

**m：**默认地，正则表达式中的`^`和`$`匹配的是整个字符串的起始位置和结束位置，而通过设置标志`m`，开启多行模式，它们也能匹配字符串内部某一行文本的起始位置和结束位置。

```javascript
console.log(/^b/.test('a\nb')); // false
console.log(/^b/m.test('a\nb')); // true
```

**g：**默认地，第一次匹配成功后，正则对象就停止向下匹配了。`g`修饰符表示全局匹配（global），设置`g`标志后，正则对象将匹配全部符合条件的结果，主要用于搜索和替换。

```javascript
console.log('1a,2a,3a'.replace(/a/,'b')); // 1b,2a,3a
console.log('1a,2a,3a'.replace(/a/g,'b')); // 1b,2b,3b
```

### 9. 优先级

正则表达式千变万化，但是大多都是由之前介绍过的字符组、括号、量词等基本结构组合而成的。这些元字符，和运算符一样拥有一个优先级关系，如下：

```javascript
// 从上到下，优先级逐渐降低
\                            转义符
() (?!) (?=) []              括号、字符组、环视
* + ? {n} {n,} {n,m}         量词
^ $                          起始结束位置
|                            选择
```

由于括号的用途之一就是为量词限定作用范围，所以优先级比量词高

```javascript
console.log(/ab{2}/.test('abab')); // false
console.log(/(ab){2}/.test('abab')); // true
```

>注意：选择符`|`的优先级最低，比起始和结束位置都要低

```javascript
console.log(/^ab|cd$/.test('abc')); // true
console.log(/^(ab|cd)$/.test('abc')); // false
console.log(/^(ab|cd)$/.test('ab')); // true
console.log(/^(ab|cd)$/.test('cd')); // true
```

### 10. 局限性

尽管 JavaScript 中的正则表达式功能比较完备，但与其他语言相比，缺少某些特性。下面列出了 JavaScript 的正则表达式所不支持的特性。

- POSIX 字符组（只支持普通字符组和排除型字符组）
- Unicode支持（只支持单个Unicode字符）
- 匹配字符串开始和结尾的\A和\Z锚（只支持^和$）
- 逆序环视（只支持顺序环视）
- 命名分组（只支持0-9编号的捕获组）
- 单行模式和注释模式（只支持m、i、g）
- 模式作用范围
- 纯文本模式

### 11. 正则表达式属性和方法

前面有提到，当我们使用`typeof`运算符来打印正则表达式的类型时，返回的是`object`，这说明正则表达式在 JavaScript 中也是一种对象。那么既然是对象，就应该有相应的属性和方法。

#### 实例属性

每个 RegExp 实例对象都包含如下 5 个属性：

```
global：布尔值，表示是否设置了 g 标志。
ignoreCase：布尔值，表示是否设置了 i 标志。
multiline：布尔值，表示是否设置了标志 m。
lastIndex：整数，表示开始搜索下一个匹配项的字符位置，从 0 算起。
source：正则表达式的字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回。
```

示例如下：

```javascript
let reg = /test/gi;
console.log(reg.global); // true
console.log(reg.ignoreCase); // true
console.log(reg.multiline); // false
console.log(reg.lastIndex); // 0
console.log(reg.source); // test
```

RegExp 的`exec()`或`test()`函数，如果设定了全局模式`g`，正则表达式的匹配就会从`lastIndex`的位置开始，并且在每次匹配成功之后重新设定`lastIndex`，继续往后匹配。这样，就可以在字符串中重复迭代，依次寻找各个匹配结果。

但是，如果需要对不同字符串调用同一个RegExp的`exec()`或`test()`方法，这个变量也可能会带来意料之外的匹配结果，所以在更换字符串时，要显式地将RegExp的`lastIndex`置为 0。

```javascript
// exec()方法以数组形式返回匹配项
let reg = /\w/g;
let str = "abcd";
console.log(reg.lastIndex); // 0
console.log(reg.exec(str)); // [ 'a', index: 0, input: 'abcd' ]
console.log(reg.lastIndex); // 1
console.log(reg.exec(str)); // [ 'b', index: 1, input: 'abcd' ]
console.log(reg.lastIndex); // 2
console.log(reg.exec(str)); // [ 'c', index: 2, input: 'abcd' ]
console.log(reg.lastIndex); // 3
console.log(reg.exec(str)); // [ 'd', index: 3, input: 'abcd' ]
console.log(reg.lastIndex); // 4
console.log(reg.exec(str)); // null
console.log(reg.lastIndex); // 0
console.log(reg.exec(str)); // [ 'a', index: 0, input: 'abcd' ]
```

#### 构造函数属性（扩展）

RegExp 构造函数属性被看成静态属性，这些属性基于所执行的最近一次正则表达式操作而变化。

有 2 种方式访问它们，即长属性名和短属性名。短属性名大都不是有效的 ECMAScript 标识符，所以必须通过方括号语法来访问它们。

```javascript
长属性名         短属性名       　　　　说明
input             $_                最近一次要匹配的字符串
lastMatch         $&                最近一次的匹配项
lastParen         $+                最近一次匹配的捕获组
leftContext       $`                input字符串中lastMatch之前的文本
multiline         $*                布尔值，表示是否所有表达式都使用多行模式
rightContext      $'                input字符串中lastMatch之后的文本
```

使用这些属性，可以从`exec()`方法或`test()`方法执行的操作中提取出更具体的信息

```javascript
// test()用于测试一个字符串是否匹配某个正则表达式，并返回一个布尔值
let text = 'this has been a short summer';
let pattern = /(.)hort/g;
if(pattern.test(text)){
    console.log(RegExp.input); // 'this has been a short summer'
    console.log(RegExp.leftContext); // 'this has been a '
    console.log(RegExp.rightContext); // ' summer'
    console.log(RegExp.lastMatch); // 'short'
    console.log(RegExp.lastParen); // 's'
    console.log(RegExp.multiline); // undefined
    console.log(RegExp['$_']); // 'this has been a short summer'
    console.log(RegExp['$`']); // 'this has been a '
    console.log(RegExp["$'"]); // ' summer'
    console.log(RegExp['$&']); // 'short'
    console.log(RegExp['$+']); // 's'
    console.log(RegExp['$*']); // undefined        
}
```

JavaScript 有 9 个用于存储捕获组的构造函数属性，在调用`exec()`或`test()`方法时，这些属性会被自动填充。

>注：理论上，应该保存整个表达式匹配文本的 RegExp.$0 并不存在，值为 undefined。

```javascript
// RegExp.$1,RegExp.$2,RegExp.$3...到 RegExp.$9 分别用于存储第一、第二……第九个匹配的捕获组
let text = 'this has been a short summer';
let pattern = /(..)or(.)/g;
if(pattern.test(text)){
    console.log(RegExp.$1);//sh
    console.log(RegExp.$2);//t
}
```

### 实例方法

RegExp 对象的实例方法共 5 个，分为两类。包括`toString()`、`toLocalString()`、`valueOf()`这3种对象通用方法和`test()`、`exec()`这2种正则匹配方法

**对象通用方法（扩展）**

RegExp 对象继承了 Object 对象的`toString()`、`toLocaleString()`、`valueOf()`这 3 个通用方法。

```
toString():toString()方法返回正则表达式的字面量。
toLocaleString():toLocaleString()方法返回正则表达式的字面量。
valueOf():valueOf()方法返回返回正则表达式对象本身。
```

>注意：不论正则表达式的创建方式是哪种，这三个方法都只返回其字面量形式

```javascript
let pattern1 = new RegExp('[bc]at','gi');
console.log(pattern1.toString()); // '/[bc]at/gi'
console.log(pattern1.toLocaleString()); // '/[bc]at/gi'
console.log(pattern1.valueOf()); // /[bc]at/gi

let pattern2 = /[bc]at/gi;
console.log(pattern2.toString()); // '/[bc]at/gi'
console.log(pattern2.toLocaleString()); // '[bc]at/gi'
console.log(pattern2.valueOf()); // /[bc]at/gi
```

**正则匹配方法**

正则表达式 RegExp 对象的正则匹配方法只有两个：分别是`test()`和`exec()`。

`test()`方法用来测试在字符串中是否能够找到符合正则要求的字符。接收一个字符串参数，匹配时返回 true，否则返回 false。

```javascript
let reg = /test/;
let str = "this is a test";
console.log(reg.test(str)); // true
```

在调用`test()`方法时，会造成 RegExp 对象的`lastIndex`属性的变化。

如果指定了全局模式，每次执行`test()`方法时，都会从字符串中的`lastIndex`偏移值开始尝试匹配。所以用同一个 RegExp 多次验证相同字符串时，必须在每次调用之后，将`lastIndex`值置为 0。

```javascript
let pattern = /^\d{4}-\d{2}-\d{2}$/g;
console.log(pattern.test('2016-06-23')); // true
console.log(pattern.test('2016-06-23')); // false
// 正确的做法应该是在验证不同字符串前，先将 lastIndex 重置为 0
let pattern = /^\d{4}-\d{2}-\d{2}$/g;
console.log(pattern.test('2016-06-23'));// true
pattern.lastIndex = 0;
console.log(pattern.test('2016-06-23'));// true
```

前面有介绍过，JavaScript有 9 个用于存储捕获组的构造函数属性，在调用`exec()`或`test()`方法时，这些属性会被自动填充。

>注意：理论上，应该保存整个表达式匹配文本的`RegExp.$0`并不存在，值为`undefined`。

```javascript
if(/^(\d{4})-(\d{2})-(\d{2})$/.test('2016-06-23')){
    console.log(RegExp.$1); // '2016'
    console.log(RegExp.$2); // '06'
    console.log(RegExp.$3); // '23'
    console.log(RegExp.$0); // undefined
}
```

`exec()`方法专门为捕获组而设计，接受一个参数，即要应用模式的字符串。然后返回包含匹配项信息的数组，在没有匹配项的情况下返回`null`。

在匹配项数组中，第一项是与整个模式匹配的字符串，其他项是与模式中的捕获组匹配的字符串，如果模式中没有捕获组，则该数组只包含一项。

返回的数组包含两个额外的属性：`index`和`input`。`index`表示匹配项在字符串的位置，`input`表示应用正则表达式的字符串。

```javascript
let text = 'mom and dad and baby and others';
let pattern = /mom( and dad( and baby)?)?/gi;
let matches = pattern.exec(text);
console.log(pattern);
console.log(matches);
/*
    /mom( and dad( and baby)?)?/gi
    [ 'mom and dad and baby',
    ' and dad and baby',
    ' and baby',
    index: 0,
    input: 'mom and dad and baby and others',
    groups: undefined ]
 */
```

对于`exec()`方法而言，即使在模式中设置了全局标志`g`，它每次也只会返回一个匹配项。在不设置全局标志的情况下，在同一个字符串上多次调用`exec()`，将始终返回第一个匹配项的信息。

```javascript
let text = 'cat,bat,sat,fat';
let pattern1 = /.at/;
let matches = pattern1.exec(text);
console.log(pattern1,matches);
/* 
 *  /.at/ [ 'cat', index: 0, input: 'cat,bat,sat,fat' ] 
 */

let text = 'cat,bat,sat,fat';
matches = pattern1.exec(text);    
console.log(pattern1,matches);    
/*
 *  /.at/ [ 'cat', index: 0, input: 'cat,bat,sat,fat' ]
 */  
```

而在设置全局标志的情况下，每次调用exec()都会在字符串中继续查找新匹配项。

```javascript
let text = 'cat,bat,sat,fat';
let pattern2 = /.at/g;
let matches = pattern2.exec(text);
console.log(pattern2,matches);    
/* 
 *  /.at/g [ 'cat', index: 0, input: 'cat,bat,sat,fat' ]
 */  

let text = 'cat,bat,sat,fat';
matches = pattern2.exec(text);
console.log(pattern2,matches);    
/* 
 *  /.at/g [ 'bat', index: 4, input: 'cat,bat,sat,fat' ]
 */  
```

>注意：用`exec()`方法找出匹配的所有位置和所有值。

```javascript
let string = 'j1h342jg24g234j 3g24j1';
let pattern = /\d/g;
let valueArray = []; // 值
let indexArray = []; // 位置
let temp;
while ((temp = pattern.exec(string)) != null) {
    valueArray.push(temp[0]);
    indexArray.push(temp.index);
}
console.log(valueArray);
console.log(indexArray);
// [ '1', '3', '4', '2', '2', '4', '2', '3', '4', '3', '2', '4', '1' ]
// [ 1, 3, 4, 5, 8, 9, 11, 12, 13, 16, 18, 19, 21 ]
```

## 十六、函数

函数，是可以通过名称来引用，并且就像自包含了一个微型程序的代码块。利用函数，我们可以实现对代码的复用，降低代码的重复，并且让代码更加容易阅读。

在 JavaScript 中，函数显得尤为的重要。因为函数在 JavaScript 中是一等公民，可以像参数一样传入和返回。所以说函数是 JavaScript 中的一个重点，同时也是一个难点。

### 1. 声明函数的方式

####  构造器声明函数

```js
var fun = new Function("console.log('Hello 这是我的第一个函数');");
```

- 基本不用

#### 函数表达式声明函数

```js
var 变量 = function(){
    // 函数体
};
```

需要说明的是，这里的变量并不是该函数的名字，一般来讲，我们都是将一个匿名函数赋值给一个变量，然后通过这个变量来对函数进行调用。

#### 字面量声明函数

```js
function 函数名([形参1,形参2...形参N]){
    // 函数体...
}
```

### 2. 函数的参数设置

函数的参数可以分为两种，一种是实际参数，另外一种是形式参数。这个我们在前面已经介绍过了。

接下来我们来详细看一下形式参数。形式参数简称形参，它就是一种变量，但是这种变量只能被函数体内的语句使用，并在函数调用时被赋值。JavaScript 中的形参的声明是不需要添加关键字的，如果加上关键字反而会报错。

示例：

```javascript
function test(let i){
    console.log(i);
}
test(5);
// SyntaxError: Unexpected identifier
```

JavaScript 里面关于函数的形参，有以下几个注意点:

- 多个形参之间使用`,`隔开，声明形参就相当于在函数内部声明了对应的变量，但是并不赋值
- 调用函数时解析器不会检查实参的类型，所以要注意，是否有可能会接收到非法的参数，如果有可能则需要对参数进行 ==类型的检查==
- 调用函数时，解析器也不会检查实参的数量，==多余实参不会被赋值，如果实参的数量少于形参的数量，则没有对应实参的形参将是undefined== 
- 实参可以是任意的数据类型，包括对象，当我们的参数过多时，可以将参数封装到一个对象中，然后通过对象传递。
- 实参可以是一个对象，也可以是一个函数（经常将函数作为实参传递给另一函数）

#### arguments参数

当一个函数要被执行的时候，系统会在执行函数体代码前做一些初始化工作，其中之一就是为函数创建一个 arguments 的 ==伪数组对象== 。这个伪数组对象将包含调用函数时传递的所有的实际参数。

```js
function test(x){
    for(let i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}
test(1,2,3);
// 1
// 2
// 3
```

- `arguments.length`可以用来获取实参的长度
- 我们即使不定义形参，也可以通过`arguments`来使用实参，只不过比较麻烦
  - `arguments[0]` 表示第一个实参
  - `arguments[1]` 表示第二个实参 。。。
  - 它里边有一个属性叫做`callee`，这个属性对应一个函数对象，就是当前正在指向的函数对象

#### 不定参数

不定参数是从 ECMAScript 6 开始新添加的功能，在最后一个形式参数前面添加 3 个点，会将所有的实参放入到一个数组里面，示例如下：

```javascript
function test(a,...b){
    console.log(a); // 1
    console.log(b); // [2,3]
}
test(1,2,3);
```

这里的不定参数就是一个真正的数组，可以使用数组的相关方法

```javascript
function test(a,...b){
    console.log(a); // 1
    console.log(b); // [2,3]
    b.push(100);
    console.log(b); // [ 2, 3, 100 ]
}
test(1,2,3);
```

还有一点需要注意的是，不定参数都是放在形式参数的最后面，如果不是放在最后，则会报错。

```javascript
function test(...a,b){
    console.log(a);
    console.log(b);
}
test(1,2,3);
// SyntaxError: Rest parameter must be last formal parameter
```

#### 默认参数

从 ECMAScript 6 开始，书写函数的时候可以给函数的形式参数一个默认值。这样如果在调用函数时没有传递相应的实际参数，就使用默认值。如果传递了相应的实际参数，则使用传过去的参数。

```javascript
function test(name = "world"){
    console.log("Hello,"+name);
}
test("xiejie"); // Hello,xiejie
test(); // Hello,world
```

如果参数是一个数组，要为这个数组设置默认值的话，写法稍微有些不同，如下：

```js
let fn = function([a = 1,b = 2] = []){
    console.log(a,b);
}
fn(); // 1 2
fn([3,4]); // 3 4
```

包括后面我们要介绍的对象，也是可以设定默认值的，其写法和上面为数组设置默认值类似，如下：

```js
let fn = function({name = 'xiejie',age = 18} = {}){
    console.log(name,age);
}
fn(); // xiejie 18
fn({name:"song",age:20}); // song 20
```

### 3. 函数的返回值

函数的返回值的关键字为`return`。代表要从函数体内部返回给外部的值

在函数中return后的语句都不会执行，如果return语句后不跟任何值就相当于返回一个undefined，如果函数中不写return，则也会返回undefined。

```js
let test = function(){
    return 1;
    console.log("Hello");
}
let i = test();
console.log(i); // 1
```

- 返回值可以是任意的数据类型，也可以是一个对象。

### 4. 作用域问题

作用域指一个变量作用的范围，在JS中一共有3种作用域：全局作用域，函数作用域以及 eval 作用域。

#### 全局作用域

- 直接编写在script标签中的JS代码，都在全局作用域
- 全局作用域在页面打开时创建，在页面关闭时销毁
- 在全局作用域中有一个全局对象window，它代表的是一个浏览器的窗口，它由浏览器创建我们可以直接使用
- 在全局作用域中：
  - 创建的变量都会作为window对象的属性保存
  - 创建的函数都会作为window对象的方法保存
  - 全局作用域中的变量都是全局变量，在页面的任意的部分都可以访问的到

#### 函数作用域

- 函数作用域在编码的时候就确定了，一旦确实就不再变化
- 在函数作用域中可以访问到全局作用域的变量；在全局作用域中无法访问到函数作用域的变量
- 当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用；如果没有则向上一级作用域中寻找，直到找到全局作用域，如果全局作用域中依然没有找到，则会报错ReferenceError
- 在函数中要访问全局变量可以使用window对象                                     
- 在函数中，不使用var声明的变量都会成为全局变量

### 5. 变量提升

所谓变量提升，就是指在使用`var`关键字进行变量声明的时候，默认会将声明变量的部分提升至当前作用域的最顶上，但是注意**提升的只有变量的声明部分，赋值是不会提升的**。

```javascript
console.log(i); // undefined
var i = 10;
console.log(i); // 10
```

还有一点要注意的是，只有`var`声明的变量才具有这种特性，`let`或者`const`不存在变量提升：

```javascript
console.log(i); // ReferenceError: i is not defined
let i = 10;
```

如果我们在函数里面声明变量时没有添加关键字，那么默认将会是在全局环境中声明一个变量：

```javascript
let test = function(){
    i = 10;
}
test();
console.log(i); // 10
```

通过上面的代码，我们可以证明这是一个全局作用域里面的变量，但是这个变量究竟是以`var`的形式声明的？还是以`let`或者说`const`的方式声明的呢？

答案就是：以`var`的形式进行声明的，但是不具有变量提升。

这里我们可以来证明这一点。在上面的例子中，我们在外部成功访问到了在函数里面没有添加声明关键字的变量`i`，接下来我们来提前打印输出这个`i`变量，如下：

```js
console.log(i); // ReferenceError: i is not defined
let test = function(){
    i = 10;
}
test();
```

可以看到这里会报错，显示的是"i is not defined"，从而证明了不具有变量提升的特性。

### 6.  函数提升

所谓函数提升，是指当我们使用字面量方式来声明一个函数的时候，此时函数的声明会提升到当前作用域的最顶端，这意味着我们可以将函数的调用书写到函数的声明之前。

```javascript
test(); // Hello!
function test(){
    console.log("Hello!");
}
// 等价于
// test : pointer to  test()
// test()
// function test(){
//     console.log("Hello!");
// }
```

需要注意的是，仅仅只有字面量声明函数的方式才存在函数提升，如果是使用函数表达式来进行的函数声明，则不存在有函数提升的情况。

```javascript
test();
let test = function(){
    console.log("Hello!");
}
// ReferenceError: test is not defined
```

在上面的例子中，如果我们声明函数时使用的是`var`关键字，这时虽然不存在函数提升，但是同样会存在变量提升，如下：

```javascript
console.log(test); // undefined
var test = function(){
    console.log("Hello!");
}
console.log(test); // [Function: test]
```

### 7. 箭头函数

所谓箭头函数，是从 ECMAScript 6 开始新增加的一种声明函数的方式。其最大的特点在于不需要`function`关键字，取而代之的是使用一个`=>`来进行函数声明。

箭头函数的基本语法如下：

```javascript
let 变量 = (形式参数) => {
    // 函数体
}
```

箭头函数具体示例：

```javascript
let test = (name) => {
    console.log("Hello",name);
}
test("xiejie"); // Hello xiejie
```

上面所介绍的，只是箭头函数的基本写法。实际上箭头函数根据形式参数和函数体的不同，书写的方式拥有一些变形。如下：

```javascript
// 如果没有参数
let 变量 = () => {
    // 函数体
}
// 如果只有一个形参
let 变量 = 形参 => {
    // 函数体
}
// 如果函数体只有一个返回值
let 变量 = 形参 => expression
```

例如：书写求立方根的箭头函数

```javascript
let test = x => x*x*x;
console.log(test(3)); // 27
```

>注：从 ECMAScript 6 开始已经提供了专门用于求幂的运算符`**`来进行幂运算。

#### 箭头函数的优点

箭头函数的优点如下：

- 比普通函数声明更简洁

- 只有一个形参就不需要用括号括起来

- 如果函数体只有一行，就不需要放到一个块中

- 如果 return 语句是函数体内唯一的语句，就不需要 return 关键字

- ==不会把自己的 this 值绑定到函数上==

### 8. 回调函数

在本章开篇就有提到过，函数在 JavaScript 中是一等公民。这里所谓的一等公民，就是指函数可以像其他数据类型一样作为函数的参数传入，也可以通过返回值的形式来返回。

这里要介绍的回调（callback）就是利用了这一特性，我们将传递给另一个函数作为实参的函数称之为回调函数（callback）。

所谓回调函数，通俗的来讲，就是指将一个函数作为参数传递给另外一个函数，然后在另外一个函数里面执行传递过去的函数，我们来看一个具体的示例，如下：

```javascript
let test = function(fn){
    fn();
}
let test2 = function(){
    console.log("Hello World");
}
test(test2); // Hello World
```

这里，我们的 test2 就被称之为回调函数。因为 test2 是作为一个参数传递到了 test 函数里面，然后在 test 里面进行的 test2 函数调用。

回调函数可以和其他参数一起传入到一个参数里面，如下：

```javascript
let test = function(name,fn){
    console.log(`My name is ${name}`);
    fn();
}
let test2 = function(){
    console.log("I'm coding");
}
test("xiejie",test2);
// My name is xiejie
// I'm coding
```

#### 内置回调函数介绍

在之前的学习中，我们就已经接触过一个内置回调函数了。那就是`sort()`。

使用`sort()`为数组进行排序的时候，默认是使用的 ASCII 码来进行的排序。如果想要按照数值来进行排序，就需要我们传递一个回调函数进去。这里我们一起来复习一下：

```javascript
let arr = [0,12,3,7,-12,23];
console.log(arr.sort(function(a,b){
    return a - b;
    // 降序就返回 b - a
}));
```

甚至我们还可以使用前面小节所介绍过的箭头函数，将上面的排序写作如下：

```js
let arr = [0,12,3,7,-12,23];
console.log(arr.sort((a,b) => a - b));
```

在 JavaScript 里面，除了`sort()`以外，还有诸如`forEach()`，`map()`，`every()`，`some()`等函数，也是很常见的内置回调函数。

#### 迭代方法

`every()`是对数组的每一项运行给定的函数，如果该函数每一项都返回 true，则返回 true。

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10];
// 将数组的每一项传入到回调函数，如果每一项返回 true，那么最终返回 true
let i = arr.every(function(item){
    if(item % 2 == 0){
        return true;
    }else{
        return false;
    }
});
console.log(i); // false
```

与`every()`比较相似的是`some()`，该方法可以对数组的每一项运行指定的函数，如果该函数只要有一项返回 true 则返回 true。

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10];
// 将数组的每一项传入到回调函数，如果有一项返回 true，那么最终返回 true
let i = arr.some(function(item){
    if(item % 2 == 0){
        return true;
    }else{
        return false;
    }
});
console.log(i); // true
```

`filter()`中的 filter 是过滤的意思，这个方法会返回一个数组，数组里面返回过滤过的元素。

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10];
// 将数组的每一项传入到回调函数，然后将返回为 true 的项目组成一个数组
let i = arr.filter(function(item){
    if(item % 2 == 0){
        return true;
    }else{
        return false;
    }
});
console.log(i); // [ 2, 4, 6, 8, 10 ]
```

`forEach()`方法在前面介绍数组遍历的时候，就已经见到过了。该方法就是简单的将数组每一项传入到函数，然后执行该函数里面的代码。需要注意一下的是，该回调函数没有返回值。

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10];
// 将数组的每一项传入到回调函数，然后执行回调函数里面的操作
let i = arr.forEach(function(item){
    console.log(item);
});
console.log(i); // undefined
```

`map()`方法是对数组的每一项运行回调函数。最终返回一个数组，这个数组是每次调用函数后的运行结果。

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10];
// 将数组的每一项传入到回调函数，然后将返回的结果组成一个新的数组返回
let i = arr.map(function(item){
    if(item % 2 == 0){
        return true;
    }else{
        return false;
    }
});
console.log(i);
// [ false, true, false, true, false, true, false, true, false, true ]
```

>注：以上方法都不会改变原数组的值。
>
>并且这些方法都可以接收两个参数，第一个是数组的元素值，第二个是数组的索引。上面的例子中我们都只接收了一个参数，即数组的值。

#### 归并方法（扩展）

归并方法有两个，`reduce()`和`reduceRight()`，一个是从数组第一项开始，另外一个是从数组最后一项开始，两个方法都会迭代数组所有的项，然后构建一个最终的返回值。

这两个方法都接受两个参数：一个在每一项回调用的函数和一个可选的初始值。

关于作为回调被传入的函数，里面又可以接收 4 个参数，分别是**前一项值**，**当前值**，**数组索引**和**数组对象**。

>注：这里的前一项值指的是上一次迭代时的计算结果。

这里我们可以将回调函数的参数打印出来看一下，如下：

没有初始值的情况：

```javascript
let arr = [1,2,3,4,5];
let i = arr.reduce(function(pre,cur,index,arr){
    console.log(pre,cur,index,arr);
    return pre + cur
});
console.log(i);
// 1 2 1 [ 1, 2, 3, 4, 5 ]
// 3 3 2 [ 1, 2, 3, 4, 5 ]
// 6 4 3 [ 1, 2, 3, 4, 5 ]
// 10 5 4 [ 1, 2, 3, 4, 5 ]
// 15
```

有初始值的情况：

```javascript
let arr = [1,2,3,4,5];
let i = arr.reduce(function(pre,cur,index,arr){
    console.log(pre,cur,index,arr);
    return pre + cur
},100);
console.log(i);
// 100 1 0 [ 1, 2, 3, 4, 5 ]
// 101 2 1 [ 1, 2, 3, 4, 5 ]
// 103 3 2 [ 1, 2, 3, 4, 5 ]
// 106 4 3 [ 1, 2, 3, 4, 5 ]
// 110 5 4 [ 1, 2, 3, 4, 5 ]
// 115
```

其实，`reduce()`方法就和前面的`forEach()`，`map()`等方法很相似，将数组的每一项应用到函数里面。只不过会将每次的计算结果放入下一次迭代时进行使用。

下面的例子演示了使用`reduce()`方法来实现数值的累加：

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10];
let i = arr.reduce(function(pre,cur){
    return pre + cur;
});
console.log(i); // 55
```

`reduce()`是从左往右进行归并，`reduceRight()`是从右往左开始归并，这里就不再做演示了。

#### 链式调用

本节的最后介绍一下链式调用。所谓链式调用，就是可以像链条一样一直调用方法。其实链式调用的原理也非常简单，在调用方法时，方法里面会返回一个对象，然后这个对象又可以调用方法，这样我们就可以实现链式调用。

示例：求数组的偶数和

```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let sum = arr.filter((item) => item % 2 === 0).reduce((a, b) => a + b);
console.log(sum); // 110
// 因为 filter() 返回的是一个数组，所以我们可以直接再次调用 reduce() 方法
```

### 9. 立即执行函数

函数定义完，立即被调用，这种函数叫做立即执行函数，立即执行函数往往只会执行一次

```js
(function(a,b){
    console.log("a = "+a);
    console.log("b = "+b);
})(123,456);
```
IIFE 可以在执行一个任务的同时，将所有的变量都封装到函数的作用域里面，从而保证了全局的命名空间不会被很多变量名污染。

通过 IIFE，我们可以对我们的代码进行分块。并且块与块之间不会互相影响，哪怕有同名的变量也没问题，因为 IIFE 也是函数，在函数内部声明的变量是一个局部变量，示例如下：

```js
(function () {
    //block A
    var name = "xiejie";
    console.log(`my name is ${name}`);
})();
(function () {
    //block B
    var name = "song";
    console.log(`my name is ${name}`);
})();
// my name is xiejie
// my name is song
```

在 var 流行的时代，JavaScript 是没有块作用域的。

什么叫做块作用域呢？

目前我们所知的作用域大概有 2 种：**全局作用域**和**函数作用域**。其中，全局作用域是指声明的变量可在当前环境的任何地方使用。函数作用域则只能在当前函数所创造的环境中使用。

块级作用域是指每个代码块也可以有自己的作用域，比如在`if`块中声明一个变量，就只能在当前代码块中使用，外面无法使用。

用 var 声明的变量是不存在块级作用域的，所以即使在`if`块中用 var 声明变量，它也能在外部的函数或者全局作用域中使用。

```js
function show(valid) {
    if (valid) {
        var a = 100;
    }
    console.log('a:', a);
}
show(true); // a: 100
```

这个例子中，a变量是在`if`块中声明，但是它的外部仍然能输出它的结果。

解决这个问题有 2 种方法，第一：使用 ECMAScript 6 中的 let 关键字声明变量，这样它就有块级作用域。第二：使用 IIFE，示例如下：

```js
function show(valid) {
    if (valid) {
        (function () {
            var a = 100;
        })();
    }
    console.log('a:', a);
}
show(true); // ReferenceError: a is not defined
```

当然，只要浏览器支持，建立尽量使用 let 的方式来声明变量。

**面试题**

```js
var b = 10;
(function b() {
  b = 20;
  console.log(b)
})()
// function b() { b = 20; console.log(b) } 
```

> 当 *JavaScript* 解释器遇到非匿名立即执行函数（题目中的 *b*）时，会创建一个辅助的特定对象，然后将函数名称当作这个对象的属性，因此函数内部可以访问到 *b*，但是这个值又是只读的，所以对他的赋值并不生效，所以打印的结果还是这个函数，并且外部的值也没有发生更改。

### 10.函数属性和方法

#### `name`属性

表示函数的函数名

```javascript
function test(){
    console.log("Hello");
}
console.log(test.name); // test
```

我们可以通过这个`name`属性来证明函数表达式的变量不是函数名，如下：

```javascript
let test = function test2(){
    console.log("Hello");
}
console.log(test.name); // test2
```

#### `length`属性

表示形式参数的个数。但是形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数。

具体示例如下：

```javascript
const test = function (a, b, c) { }
console.log(test.length); // 3
```

统计具有默认值之前的参数个数。

```js
const test = function (a, b = 5, c) { }
console.log(test.length); // 1
```

不会包括剩余参数的个数。

```js
const test = function (a, b, ...c) { }
console.log(test.length); // 2
```

接下来我们需要看一下`函数名.length`与`arguments.length`的区别：

函数对象的`length`属性是表示 ==形式参数的个数== 。`arguments`伪数组对象的`length`属性是调用函数时实际参数的个数。如下：

```javascript
let test = function(a,b,c){
    console.log(arguments.length); // 5
    console.log(arguments.callee.length); // 3
}
test(1,2,3,4,5);
```

####  `caller`属性（扩展）

`caller`属性是函数对象本身的属性，它显示了函数的调用者。

如果函数是在全局执行环境中（浏览器中）被调用，那么它的值为 null，如果在另一个函数中被调用，它的值就是那个函数。

浏览器中的全局执行环境中被调用：

```html
<body>
    <script>
        let test = function(){
            console.log(test.caller);
        }
        test(); // null
    </script>
</body>
```

Node.js 中的全局执行环境中被调用：

```javascript
let test = function(){
    console.log(test.caller);
}
test(); // [Function]
```

被一个函数所调用：

```javascript
let test = function(){
    let test2 = function(){
        console.log(test2.caller);
        // [Function: test]
        // 因为这个函数的调用者就是 test 函数
    }
    test2();
}
test();
```

####  `callee`属性（扩展）

`callee`是`arguments`对象的一个属性，该属性是一个指针，指向拥有这个`arguments`对象的函数

```javascript
let test = function(){
    let test2 = function(){
        let test3 = function(){
            console.log(arguments.callee);
            // [Function: test3]
        }
        test3();
    }
    test2();
}
test();
```

`callee`的作用在于能够找到`arguments`对象所属的函数，不让函数的执行和函数名紧紧关联在一起，我们来看下面这个例子：

```javascript
// 计算阶乘的递归函数
let test = function(i){
    if(i == 1){
        return 1;
    }else{
        return i * test(i-1); // 这里就和函数名紧紧的关联了起来
    }
}
console.log(test(3));
```

如果我们把上面的写法稍作修改，就可以看到上面写法的缺陷

```javascript
// 计算阶乘的递归函数
let test = function(i){
    if(i === 1){
        return 1;
    }else{
        return i * test(i-1); // 这里就和函数名紧紧的关联了起来
    }
}
let test2 = test; // 将阶乘函数赋值给 test2
// 改变 test 这个阶乘函数的函数体
test = function(){
    console.log("我已经改变了");
}
console.log(test2(3));
// 我已经改变了
// NaN
```

所以，这个时候就可以使用`arguments`对象的`callee`属性来降低这种关联，如下：

```javascript
// 计算阶乘的递归函数
let test = function(i){
    if(i == 1){
        return 1;
    }else{
        return i * arguments.callee(i-1); // callee 指向拥有 arguments 对象的函数
    }
}
let test2 = test; // 将阶乘函数赋值给 test2
// 改变 test 这个阶乘函数的函数体
test = function(){
    console.log("我已经改变了");
}
console.log(test2(3)); // 6
```

## 十四、 严格模式

### 1. 经典真题

- *use strict* 是什么意思 ? 使用它区别是什么？

### 2. 什么是严格模式

严格模式是从 *ES5* 开始新增的一种方式，是采用具有限制性 *JavaScript* 变体的一种方式，从而使代码隐式地脱离“马虎模式/稀松模式/懒散模式“（*sloppy*）模式。

设立"严格模式"的目的，主要有以下几个：

- 消除 *Javascript* 语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的 *Javascript* 做好铺垫。

“严格模式”体现了 *Javascript* 更合理、更安全、更严谨的发展方向，支持严格模式的浏览器有：*Internet Explorer 10 +、 Firefox 4+ Chrome 13+、 Safari 5.1+、 Opera 12+*。

在“严格模式下”，同样的代码，可能会有不一样的运行结果。一些在“正常模式”下可以运行的语句，在“严格模式”下将不能运行。

掌握这些内容，有助于更细致深入地理解 *Javascript*，让你变成一个更好的程序员。

### 3. 开启严格模式

进入“严格模式”的标志，是下面这行语句：

```js
"use strict";
```

老版本的浏览器会把它当作一行普通字符串，加以忽略。

“严格模式”有两种调用方法，适用于不同的场合。

**针对整个脚本文件**

将 *“use strict”* 放在脚本文件的第一行，则整个脚本都将以“严格模式”运行。

如果这行语句不在第一行，则无效，整个脚本以“正常模式”运行。如果不同模式的代码文件合并成一个文件，这一点需要特别注意。

```js
"use strict";
console.log("这是严格模式。");
```

在上面的代码中，我们第一行书写了 *“use strict”*，所以整个代码会进入到严格模式执行。

```html
<script>
  "use strict";
  console.log("这是严格模式。");
</script>

<script>
  console.log("这是正常模式。");
</script>
```

上面的代码表示，一个网页中依次有两段 *Javascript* 代码。前一个 *script* 标签是严格模式，后一个不是。

**针对单个函数**

将 *“use strict”* 放在函数体的第一行，则整个函数以“严格模式”运行。

```js
function strict(){
  "use strict";
  return "这是严格模式。";
}

function notStrict() {
  return "这是正常模式。";
}
```

**脚本文件的变通写法**

因为第一种调用方法不利于文件合并，所以更好的做法是，借用第二种方法，将整个脚本文件放在一个立即执行的匿名函数之中。

```js
(function (){
  "use strict";
  // some code here
})();
```

### 4. 严格模式和普通模式区别

接下来，我们就来看一下严格模式下对 *Javascript* 的语法和行为，都做了哪些改变。

**没有使用 *var* 声明的变量不能使用**

在普通模式下，我们可以使用一个未声明的变量，此时该变量会成为一个全局变量。但是这种使用方式在严格模式下会报错。

```js
"use strict"
a=10; // ReferenceError: a is not defined
console.log(a)
function sum(){
	var a=10;
	console.log(a)
}
sum()
```

**删除变量和不存在的属性会报错**

在普通模式下，删除变量或者不允许删除的属性虽然也会失败，但是是“静默失败”，也就是说虽然失败了，但是不会给出任何提示。这样其实会产生很多隐藏问题，也给程序员的调错带来了难度。

在严格模式下则会保存，例如：

```js
"use strict"
var i = 10;
delete i; // SyntaxError: Delete of an unqualified identifier in strict mode.
console.log(i); // 10
```

**函数中相同的形参名会报错**

在普通模式下，函数中两个形参名相同也不会报错，只不过后面的形参所接收到的值会覆盖前面的同名形参。

```js
function a(b,b){
    console.log(b); // 2
}
a(1, 2)   
```

但是在严格模式下，相同的形参名会报错。

```js
"use strict"
// SyntaxError: Duplicate parameter name not allowed in this context
function a(b,b){
    console.log(b);
}
a(1, 2)   
```

**对象不能有重名的属性**

正常模式下，如果对象有多个重名属性，最后赋值的那个属性会覆盖前面的值。严格模式下，这属于语法错误。

```js
"use strict";
var o = {
  p: 1,
  p: 2
}; // 语法错误
```

**禁止八进制表示法**

正常模式下，整数的第一位如果是 *0*，表示这是八进制数，比如 *010* 等于十进制的 *8*。

```js
var i = 010;
console.log(i); // 8
```

严格模式禁止这种表示法，整数第一位为 *0*，将报错。

```js
"use strict"
var i = 010; // SyntaxError: Octal literals are not allowed in strict mode.
console.log(i);
```

**函数内部 *this* 值为 *undefined***

在普通模式下，函数中的 *this* 在以函数的形式被调用时，指向全局对象。而在严格模式中，得到的值为 *undefined*。

```js
"use strict"
function a(){
    console.log(this); // undefined
}
a();
```

**创设 *eval* 作用域**

正常模式下，*Javascript* 语言有两种变量作用域（*scope*）：全局作用域和函数作用域。

严格模式创设了第三种作用域：*eval* 作用域。

正常模式下，*eval* 语句的作用域，取决于它处于全局作用域，还是处于函数作用域。

严格模式下，*eval* 语句本身就是一个作用域，不再能够生成全局变量了，它所生成的变量只能用于 *eval* 内部。

```js
"use strict";
var x = 2;
console.info(eval("var x = 5; x")); // 5
console.info(x); // 2
```

**保留字**

为了向将来 *Javascript* 的新版本过渡，严格模式新增了一些保留字：*implements, interface, let, package, private, protected, public, static, yield*。使用这些词作为变量名将会报错。

```js
"use strict";
var public = "hello world" // SyntaxError: Unexpected strict mode reserved word
console.log(public);
```

更多关于严格模式的内容，可以参阅 ：

*MDN*：*https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode*

《*Javascript* 严格模式详解 *By* 阮一峰》：*http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html*

### 5. 真题解答

- *use strict* 是什么意思 ? 使用它区别是什么？

> 参考答案：
>
> *use strict* 代表开启严格模式，这种模式使得 *Javascript* 在更严格的条件下运行，实行更严格解析和错误处理。
>
> 开启“严格模式”的优点：
>
> - 消除 *Javascript* 语法的一些不合理、不严谨之处，减少一些怪异行为;
> - 消除代码运行的一些不安全之处，保证代码运行的安全；
> - 提高编译器效率，增加运行速度；
> - 为未来新版本的 *Javascript* 做好铺垫。
>
> 回答一些具体的严格模式下和普通模式之间的区别。

