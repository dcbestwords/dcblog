---
title: 实现一个repeat方法
---

## 一、题意

使用JS实现一个repeat方法

```js
function repeat (func, times, wait) {
    //...
}
const repeatFunc = repeat(alert, 4, 3000);
```

调用这个 `repeatedFunc("hellworld")`，会alert4次 `helloworld`, 每次间隔3秒

```js
const repeatedFunc = repeat(alert, 4, 3000)
repeatedFunc("hellworld")
```

## 二、解法

> 解答此题的关键，在于使用`await`语法，结合`event loop`的机制，对执行语句进行阻塞。
> 如果单单靠`setTimeout`，是无法做到`每次间隔3秒`的要求。

```js
function repeat (func, times, wait) {
    return async (word) => {
        for(let i = 0; i < times; i++){
            await sleep(wait);
            func(word);
        }
    }
}

function sleep(time){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
```