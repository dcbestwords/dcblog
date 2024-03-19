---
title: 模拟数组遍历
---
## 一、foreach

### 代码

```js
Array.prototype.myForEach = function (callback, thisArg) {
  if (this === undefined || this === null) {
    throw new TypeError('Arrry is not undefined or null');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const O = Object(this);
  const length = this.length >>> 0;
  let k = 0;
  while (k < length) {
    if (k in O) {
      callback.call(thisArg, O[k], k, O);
    }
    k++;
  }
  return undefined;
};

```

## 二、reduce

### 代码

```js
Array.prototype.myReduce = function (callback, initialValue) {
  if (this === undefined || this === null) {
    throw new TypeError('myReduce is called on null or undefined ');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const O = Object(this);
  const length = this.length >>> 0;
  let accumulator = initialValue;
  let k = 0;
  if (accumulator === undefined) {
    while (k < length && !(k in O)) {
      k++;
    }
    if (k >= length) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulator = O[k++];
  }
  while (k < length) {
    if (k in O) {
      accumulator = callback.call(undefined, accumulator, O[k], O);
    }
    k++;
  }
  return accumulator;
};
```

### 测试

```js
let arr = [1, 2, 3, 4, 5]
let res = arr.myReduce((pre, cur, i, arr) => {
 console.log(pre, cur, i, arr)
 return pre + cur
}, 10)
console.log(res)//25
```

## 三、filter

### 代码

```js
Array.prototype.myFilter = function (callback, thisArg) {
  if (this === undefined || this === null) {
    throw new TypeError('myFilter is called on undefined or null');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const O = Object(this);
  const length = this.length >>> 0;
  let res = new Array(length);
  let k = 0;
  while (k < length) {
    if (k in O && callback(thisArg, O[k], k, O)) {
      res.push(O[k]);
    }
    k++;
  }
  return res;
};
```

## 四、map

### 代码

```js
Array.prototype.myMap = function (callback, thisArg) {
  if (this === undefined || this === null) {
    throw new TypeError('myFilter is called on undefined or null');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const O = Object(this);
  const len = O.length>>>0;
  const A = new Array(len);
  let k = 0;
  while (k < len) {
    const pk = String(k);
    if (O.hasOwnProperty(pk)) {
      const kValue = O[pk];
      A[pk] = callback.call(thisArg, kValue, k, O);
    }
    k++;
  }
  return A;
};
```

