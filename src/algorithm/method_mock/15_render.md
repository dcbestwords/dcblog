---
title: 模板渲染
---

## 一、模板语法

```js
const a = {
  b: 123,
  c: '456',
  d: '789',
};
const str = 'a{a.b}aa{a.c}aa {a.d}aaaa';
```

将字符串中括号内的字符由对应的变量进行替换，没有对应的变量时显示原始字符串

```js
function parse(str, obj) {
  let res = '';
  const len = str.length;
  let k = 0;
  let start = 0;
  let flag = false;
  while (k < len) {
    if (str[k] === '{') {
      start = k + 1;
      flag = true;
    }
    if (!flag) res += str[k];
    if (str[k] === '}') {
      res += match(str.slice(start, k), obj);
      flag = false;
    }
    k++;
  }
  return res;
}
function match(str, obj) {
  const keys = str.split('.').slice(1);
  let k = 0;
  let O = obj;
  while (k < keys.length) {
    if (!O[keys[k]]) return `{${str}}`;
    O = O[keys[k]];
    k++;
  }
  return O;
}
console.log(parse(str, a)); //a123aa456aa 789aaaa
```

## 二、虚拟dom转真实dom

```js
// {
//   tag, attrs, children;
// }
function render(vnode, container) {
  container.appendChild(_render(vnode));
}
function _render(vnode) {
  if (typeof vnode === 'number' || typeof vnode === 'string') {
    vnode = String(vnode);
    return document.createTextNode(vnode);
  }
  const ele = document.createElement(vnode.tag);
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach((key) => {
      ele.setAttribute(vnode.attrs[key]);
    });
  }
  if (vnode.children) {
    vnode.children.forEach((child) => {
      _render(child, ele);
    });
  }
  return ele;
}
```

