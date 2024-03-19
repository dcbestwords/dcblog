---
title: 数组扁平化
---
## ES6-flat
```js
var arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat());      // [1, 2, 3, 4, [5, 6]]
console.log(arr.flat(2));     // [1, 2, 3, 4, 5, 6]
var arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(arr.flat(Infinity));  // [1, 2, 3, 4, 5, 6, 7, 8]
```

- 使用 *Infinity*，可展开任意深度的嵌套数组
- 在数组中有空项的时候，使用 *flat* 方法会将中的空项进行移除。

## reduce(递归)

```js
function flattenDeep(arr){
    return Array.isArray(arr) ? arr.reduce((acc, current) =>{
        return [...acc, ...flattenDeep(current)]
    },[]) : [arr];
}
```

## reduce模拟原生flat

- 不传值时默认展开一维

```js
Array.prototype.myFlat = function (depth = 1) {
  return this.reduce((result, item) => {
    if (Array.isArray(item) && depth > 0) {
      result.push(...item.myFlat(depth - 1));
    } else {
      result.push(item);
    }
    return result;
  }, []);
};
```

## 模拟栈

```js
function flattenDeep(arr){
    const stack = [...arr]; // 先平展复制到stack
    const result = [];

    while(stack.length){
        // 取出末尾的值
        const current = stack.pop();
        if(Array.isArray(current)){
            // 如果值是数组，平展后，重新推入stack
            stack.push(...current);
        }else{
            // 末尾是普通值，则存入result
            result.unshift(current);
        }
    }
    return result;
}
```

### 简单写法

```js
var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
```
