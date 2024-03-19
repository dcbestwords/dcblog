---
title: 防抖和节流
---

## 一、防抖

```js
function debounce(fn, time) {
  let timeout = null;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
}
```

## 二、节流

```js
function throttle(fn, time) {
  let flag = false;
  return function () {
    if (flag === true) return;
    flag = true;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = false;
    }, time);
  };
}
```
