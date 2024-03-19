---
title: 模拟函数重载
---

## 定义

 函数重载是一个同名函数完成不同的功能，编译阶段通过函数参数个数、参数类型，函数的返回值来区分该调用哪一个函数。

> 函数名相同，函数的参数不同(包括参数个数和参数类型)，根据参数的不同去执行不同的操作。

JavaScript 中没有真正意义上的函数重载，但是我们可以通过一些方式对其进行模拟

## arguments对象实现

```js
var arr = [1,3,4,6,7,7,7,45,3];
Array.prototype.finds = function() {
    var len = arguments.length;
    var that = this;

    // 通过传递参数的个数来进入不同的分支，调用不同的函数
    if (len === 0) {
        console.log(`${len}参数`)
        return that;
    } else if (len === 1) {
        console.log(`${len}参数`)
        return that[arguments[0]]
    } else if (len === 2) {
        console.log(`${len}参数`)
        return that.slice(arguments[0], arguments[1])
    }
}

console.log(arr.finds());// 0参数 [1, 3, 4, 6, 7, 7, 7, 45, 3]
console.log(arr.finds(1)); // 1参数 3
console.log(arr.finds(1,2)); // 2参数 [3]

```

缺点在于参数过多或需要分辨参数数据类型时，判断条件过于复杂，不利于维护和扩展

## 利用对象和闭包

```js
var objectTest = {
    arr: [1,3,4,6,7,7,7,45,3]
}

function addMethod(object, name, fn) {
    // 先把原来的object[name] 方法，保存在old中
    var oldObject = object[name];
    // 重新定义 object[name] 方法
    object[name] = function() {
        // 如果函数需要的参数 和 实际传入的参数 的个数相同，就直接调用fn
        if (fn.length === arguments.length) return fn.apply(this, arguments)
        // 如果不相同,判断old 是不是函数，如果是就调用old，也就是刚才保存的 object[name] 方法
        if (typeof oldObject === 'function') return oldObject.apply(this, arguments);
    }
}

// 给 objectTest 对象添加处理 没有参数 的方法
addMethod(objectTest, "findTest", find0);

// 给 objectTest 对象添加处理 一个参数 的方法
addMethod(objectTest, "findTest", find1);

// 给 objectTest 对象添加处理 两个参数 的方法
addMethod(objectTest, "findTest", find2);

function find0() {
    return this.arr;
}
function find1(idx) {
    return this.arr[idx];
}
function find2(st, ed) {
    return this.arr.slice(st, ed);
}

console.dir(objectTest.findTest) // 图1
console.log(objectTest.findTest()) // (9) [1, 3, 4, 6, 7, 7, 7, 45, 3]
console.log(objectTest.findTest(4)) // 7
console.log(objectTest.findTest(1,4)) // (3) [3, 4, 6]
console.log(arr.findTest(1,4,7)) // undefined
```

- `addMethod`中为`object`添加调用函数，其中引用传入的重写函数`fn`，创建闭包。

> 上面两种方式都是通过判断 ==参数的个数== ，根据不同的个数，执行不同的操作

## 可选参数实现

```js
var arr = [1, 3, 4, 6, 7, 7, 7, 45, 3];
function disposeArr(num1 = null, num2 = null, status = null) {
  num1 = num1;
  num2 = num2;
  status = status;

  if (typeof status === 'string' && status === 'add') return num1 + num2;
  if (num2 !== null) return arr.slice(num1, num2);
  if (num1 !== null) return arr[num1];
  if (!num1 && !num2) return arr;
}

console.log(disposeArr()); // (9) [1, 3, 4, 6, 7, 7, 7, 45, 3]
console.log(disposeArr(4)); // 7
console.log(disposeArr(1, 4)); // (3) [3, 4, 6]
console.log(disposeArr(21, 42, 'add')); // 63
```

