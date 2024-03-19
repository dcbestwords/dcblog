---
title: 数组去重
---

## ES6的Set去重

适配范围广，效率一般，书写简单

```js
function unique(arr){
    return [...new Set(arr)] // Array.from(new Set(arr));
}
```

## 循环遍历

- 任意数组去重，适配范围广，效率低

```js
function unique(arr){
    let result = []
    arr.forEach((item)=>{
        if(!result.includes(item)){
            result.push(item)
        }
    })
    return result
}
```

-  数字或字符串数组去重，效率高( ==利用对象属性名的唯一性来保证不重复== )

```js
function unique(arr){
    let result = {}
    arr.forEach((item)=>{
        if(!result[item]){
            result[item] = true
        }
    })
    return result
}
```

## filter 

```js
function unique(arr){
    return arr.filter((element, index, array) => {
        return array.indexOf(element) == index;
    })
}
```

## reduce

```js
function unique(arr){
    // 先排序，如果重复，则上一个下标的内容一样
    return arr.sort().reduce((acc, current) => {
        if(acc.length == 0 || acc[acc.length - 1] !== current){
            acc.push(current);
        }
        return acc;
    }, [])
}
```

- 将acc初始赋值为一个空数组