---
title: 深浅拷贝
---

## 一、浅拷贝

浅拷贝，指的是创建新的数据，这个数据有着原始数据属性值的一份精确拷贝

如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址

即浅拷贝是拷贝一层，深层次的引用类型则共享内存地址

```js
function shallowClone(obj){
    const newObj = {}
    for(let prop in obj){
        if(obj.hasOwnProperty(prop)){
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}
```

在`JavaScript`中，存在浅拷贝的现象有：

- `Object.assign`
- `Array.prototype.slice`
- `Array.prototype.concat()`
- `拓展运算符`

## 二、深拷贝

### 1.  JSON.stringify()

```js
const obj2=JSON.parse(JSON.stringify(obj1));
```

但是这种方式存在弊端，会忽略`undefined`、`symbol`和`函数`

```js
const obj = {
    name: 'A',
    name1: undefined,
    name3: function() {},
    name4:  Symbol('A')
}
const obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2); // {name: "A"}
```

### 2. 循环递归

```js
const deepClone = function (obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let copyObj;
  if (Array.isArray(obj)) {
    copyObj = [];
    for (let i = 0; i < obj.length; ++i) {
      copyObj.push(deepClone(obj[i]));
    }
  } else if (obj instanceof Set) {
    copyObj = new Set([...obj]);
  } else if (obj instanceof Map) {
    copyObj = new Map([...obj]);
  } else {
    copyObj = {};
    Reflect.ownKeys(obj).forEach((key) => {
      copyObj[key] = deepClone(obj[key]);
    });
  }

  return copyObj;
};

```

> 在新版本的JavaScript引入了[`structuredClone()`](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)全局函数，可以用来完成深拷贝
>
> ```js
> const a = { x: 1, y: { y1: 'a' }, z: new Set([1, 2]) };
> const b = structuredClone(a); // a !== b, a.y !== b.y, a.z !== b.z
> ```

