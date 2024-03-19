---
title: 模拟apply、call、bind
---
## 一、模拟apply

### 代码

```js
Function.prototype.apply = function (obj, ...args) {
  if (typeof this !== 'function') {
     throw new TypeError(this + 'is not a function');
  }
  const bindThis = obj || globalThis; // 获取绑定对象
  const fnArgs = args[0]; // 获取传递的参数数组

  if (!fnArgs instanceof Array) {
    throw new TypeError('args must be array');
  }
  const fn = Symbol('fn');
  bindThis[fn] = this; // 将需要调用的函数挂载到绑定对象上
  const result = bindThis[fn](...fnArgs);

  delete bindThis[fn];
  return result;
};
```

### 测试

```js
const obj = {
  name: 'zhangsan',
};
function test(msg) {
  console.log(msg + this.name);
}
test.apply(obj, ['你好啊！']);
// 你好啊！zhangsan
```

## 二、模拟call

```js
Function.prototype.myCall = function(obj,...args){
  if (typeof this !== 'function') {
    throw new TypeError(this + 'is not a function');
  }
  const fn = Symbol('fn');
  obj[fn] = this;
  const res = obj[fn](...args);
  delete obj[fn];
  return res;
}
```

## 三、模拟bind

### 代码

```js
Function.prototype.myBind = function (obj, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(this + 'is not a function');
  }
  const fn = this;
  return function (...restArgs) {
    if (new.target) {
      return new fn(...args, ...restArgs);
    } else {
      return fn.apply(obj, [...args, ...restArgs]);
    }
  };
};
```

### 测试

```js
function test(a, b) {
  console.log(`${this} && ${a}:${b}`);
}
const obj = {
  name: 'zhangsan',
};
const newFn = test.bind(obj, 'test');
newFn('原始bind'); // zhangsan && test:newFn
const Fn = test.myBind(obj, 'test');
Fn('自定义bind'); // zhangsan && test:Fn
const result = new newFn('通过new调用');
console.log(result); //test(){}
```

