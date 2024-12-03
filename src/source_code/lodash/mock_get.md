---
order: 1
category:
  - 源码解析
tag:
  - Lodash
---

# **\_.get() 函数**

## 题目描述

补充函数的 TODO 部分，模拟 lodash 中的 \_.get() 函数。

## 测试用例

输入：

```js
const obj = { selector: { to: { toutiao: 'FE Coder' } }, target: [1, 2, { name: 'byted' }] };
get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name');
```

输出：`['FE coder', 1, 'byted']`

## 代码

```js
function get(object, ...path) {
  // 如果object是null，则直接返回undefined即可
  if (object == null) {
    return undefined;
  }

  // 对path逐个处理，并依靠map方法，返回处理结果
  return path.map((item) => {
    // 第1步，先处理下标`[*]`情况，并转换为数组
    // a[3].b.c => a.3.b.c => [a, 3, b, c]
    const keys = item.replace(/\[(\d+)\]/g, '.$1').split('.');

    let result = object;
    let index = 0;
    const length = keys.length;

    // 逐级获取object的下标结果
    while (result !== null && index < length && typeof result !== 'undefined') {
      result = result[keys[index++]];
    }

    // 最终返回结果，只有遍历完keys，才返回result，否则，视为中途出错，返回undefined
    return index && index == length ? result : undefined;
  });
}
```
