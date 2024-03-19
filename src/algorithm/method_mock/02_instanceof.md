---
title: 模拟instanceof
---
## 代码
```js
function myInstanceof(instance, constructor) {
  if (typeof instance !== 'object') {
    return false;
  }
  const prototype = constructor.prototype;
  let tmpPrototype = Object.getPrototypeOf(instance);
  while (true) {
    if (tmpPrototype === null) {
      return false;
    }
    if (tmpPrototype === prototype) {
      return true;
    }
    tmpPrototype = Object.getPrototypeOf(tmpPrototype);
  }
}
```

## 测试

```js
const test = []
myInstanceof(test,Array) // true
```

