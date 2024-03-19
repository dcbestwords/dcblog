---
title: 柯里化
---

## 一、柯里化

```js
function curry(fn, ...args) {
  return function (...inArgs) {
    const allArgs = [...args, ...inArgs];
    if (allArgs.length > fn.length) {
      return fn(...allArgs);
    } else {
      return curry(fn, ...allArgs);
    }
  };
}
```

本质上分为两个阶段：

- 将所有传入的参数利用闭包储存到一个数组中。
- 当完成 ==固定条件时== （这里指传入参数的数量大于等于函数的数量），执行 ==对应的操作== （执行传入的函数）

## 二、实现add(1)(2)(3)(4)

```js
function add(...args) {
  const _args = [...args];
  function fn(...inArgs) {
    _args.push(...inArgs);
    return fn;
  }
  fn.toString = function () {
    return _args.reduce((acc, item) => acc + item);
  };
  return fn;
}

```

- 将条件变为`toString`的自动调用，即与原始数据相加，对应操作变为将储存的所有参数相加。
