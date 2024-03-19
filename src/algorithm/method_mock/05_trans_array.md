---
title: 类数组转数组
---
## 一、Array.from

```js
Array.from(document.querySelectorAll('div'))
```

## 二、Array.prototype.slice.call()

```js
Array.prototype.slice.call(document.querySelectorAll('div'))
```

## 三、拓展运算符

```js
[...document.querySelectorAll('div')]
```

