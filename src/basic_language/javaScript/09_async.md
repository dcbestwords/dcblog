---
title: async和await
order: 9
---

## `Generator`和`yield`的基本使用

```js
function* fn(){
    console.log('pause'+ (yield 1));
    yield 2;
    yield console.log('hhh');
}
let test = fn();
console.log(test.next()); //{value: 1, done: false}
console.log(test.next()); //pauseundefined  {value: 2, done: false}
console.log(test.next()); //hhh {value: undefined, done: false}
```

- `Generator`函数执行之后生成一个指针对象（迭代器对象），使用`实例.next()`可以执行函数内代码，直到遇见`yield`关键字会交出执行权，跳出函数外继续执行后面的代码。
- `实例.next()`的返回值是一个普通的对象，包含遇到的`yield`后面表达式的值`value`和是否执行完毕的标志`done`。
- `yield表达式`本身的值为undefined，可以通过`实例.next(v)`中的v来赋值。

## `async`和`await`

`async函数`是`Generator函数`的一种语法糖，Generator函数需要手动的来切换执行权（next方法进入函数内，yield切出函数外），而async函数内置了一个自动执行器，大致原理如下：

```js
async function fn(args) {
  // ...
}

// 等同于

function fn(args) {
  return spawn(function* () {//spawn为自动执行器
    // ...
  });
}
```

```js
function spawn(genF) {
  return new Promise(function(resolve, reject) {
    const gen = genF();
    function step(nextF) {
      let next;
      try {
        next = nextF();
      } catch(e) {
        return reject(e);
      }
      if(next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value).then(function(v) {
        step(function() { return gen.next(v); });
      }, function(e) {
        step(function() { return gen.throw(e); });
      });
    }
    step(function() { return gen.next(undefined); });
  });
}
```

- 自动执行器执行`Generator`函数，生成指针对象，然后递归调用next方法直到结束。
- `Promise.resolve(next.value).then(递归调用)`，前半句将`next.value`，即`await(yield)后表达式的值`转为promise对象，然后将递归调用的任务放在then中处理。
- 所以实际的执行顺序为：await后表达式执行（将下次递归调用任务放入微队列）==>执行主代码==>从事件队列中加载任务执行。

- 不会阻塞主线程

## 练习

```js
const test = async ()=>{
    console.log('start');
    const res = await new Promise((resolve, rej) => {
        setTimeout(()=>{console.log(1);},0)
        resolve();
    }).then(()=>{
        console.log('a')
    });
    const res2 = await new Promise((resolve, rej) => {
        setTimeout(()=>{console.log(2);},0)
        resolve();
    }).then(()=>{
        console.log('b')
    });
    console.log('mid');
}

test()
console.log('end');
for(let i=0;i<10;i++){
    console.log('===');
}
/**
start
end
10次===
a
b
mid
1
2
**/
```

## 总结

```js
(async (){
	const res1 = await 任务1;
 	const res2 = await 任务2;
})() 
```

- 执行顺序类似于`promise`的嵌套：`任务1.then(任务2.then(...))`，不会阻塞主线程。
- res的值为任务返回的值
  - promise对象resolve传递的参数（无then）
  - 后续处理后返回的值（有then）