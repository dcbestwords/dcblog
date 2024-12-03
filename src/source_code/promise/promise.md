---
title: 手写promise
star: true
order: 2
category:
  - 源码解析
tag:
  - promise
---

## 一、Promise 规范

Promise 是一套专门处理异步场景的规范，它能有效的避免回调地狱的产生，使异步代码更加清晰、简洁、统一

这套规范最早诞生于前端社区，规范名称为[Promise A+](https://promisesaplus.com/)

该规范出现后，立即得到了很多开发者的响应

Promise A+ 规定：

1. 所有的异步场景，都可以看作是一个异步任务，每个异步任务，在 JS 中应该表现为一个**对象**，该对象称之为**Promise 对象**，也叫做任务对象
2. 每个任务对象，都应该有两个阶段、三个状态

![](./images/16597684655347.jpg)

根据常理，它们之间存在以下逻辑：

- 任务总是从未决阶段变到已决阶段，无法逆行
- 任务总是从挂起状态变到完成或失败状态，无法逆行
- 时间不能倒流，历史不可改写，任务一旦完成或失败，状态就固定下来，永远无法改变

3. `挂起->完成`，称之为`resolve`；`挂起->失败`称之为`reject`。任务完成时，可能有一个相关数据；任务失败时，可能有一个失败原因。

![](./images/16597685223625.jpg)

可以针对任务进行后续处理，针对完成状态的后续处理称之为 onFulfilled，针对失败的后续处理称之为 onRejected

![](./images/16597685701402.jpg)

## 二、手写 Promise

```js
// 处理硬编码问题
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  #state = PENDING;
  #result = undefined;
  // 可能定义有多个then回调，所以使用数组进行存储
  #handler = [];

  // 一、构造器（处理所有输入）
  // promise实例完成状态的时机在内部函数中指定
  constructor(executor) {
    // 注入promise内部函数的参数
    const resolve = (data) => {
      this.#changeState(FULFILLED, data);
    };
    const reject = (reason) => {
      this.#changeState(REJECTED, reason);
    };
    // 执行promise内部函数（只能捕获同步的错误）
    try {
      executor(resolve, reject);
    } catch (error) {
      // 出错时将promise的状态变为rejected
      reject(error);
    }
  }

  // 改变promise的状态
  #changeState(state, result) {
    // 状态一经更改就不会再改变了
    if (this.#state !== PENDING) return;
    // 变更状态
    this.#state = state;
    this.#result = result;
    // 状态变更时执行对应的回调函数
    this.#run();
  }

  // 判断值是否为thenable对象
  #isPromsiseLike(value) {
    if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
      return typeof value.then === 'function';
    }
    return false;
  }

  // 模拟promise在微队列中执行
  #runMicroTask(func) {
    // Node环境
    if (typeof process === 'object' && typeof process.nextTick === 'function') {
      process.nextTick(func);
    } else if (typeof MutationObserver === 'function') {
      // 浏览器环境
      const ob = new MutationObserver(func);
      const textNode = document.createTextNode('1');
      ob.observe(textNode, { characterData: true });
      textNode.data = '2';
    } else {
      setTimeout(func, 0);
    }
  }

  #runOne(callBack, resolve, reject) {
    this.#runMicroTask(() => {
      // 传递的回调不是函数（状态穿透）
      if (typeof callBack !== 'function') {
        const settled = this.#state === FULFILLED ? resolve : reject;
        settled(this.#result);
        return;
      }
      try {
        const data = callBack(this.#result);
        // 回调函数返回了一个promise
        if (this.#isPromsiseLike(data)) {
          data.then(resolve, reject);
        } else {
          resolve(data);
        }
      } catch (error) {
        reject(this.#result);
      }
    });
  }

  // 执行then中定义的回调
  #run() {
    if (this.#state === PENDING) return;
    // 顺序执行then中注册的回调
    while (this.#handler.length) {
      const { onFulfilled, onRejected, resolve, reject } = this.#handler.shift();
      // promise执行回调
      if (this.#state === FULFILLED) {
        this.#runOne(onFulfilled, resolve, reject);
      } else {
        this.#runOne(onRejected, resolve, reject);
      }
    }
  }

  // 1. then方法回调的调用时机
  // 2. then方法返回值也是一个promise，它的状态如何确定
  //   - 对应的回调不是函数
  //   - 对应的回调是函数
  //   - 返回结果是promise
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      // 利用闭包记录对应的参数
      this.#handler.push({
        onFulfilled,
        onRejected,
        resolve,
        reject,
      });
      this.#run();
    });
  }

  // 以下不属于promiseA+规范
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(onFinally) {
    return this.then(
      (data) => {
        onFinally();
        return data;
      },
      (error) => {
        onFinally();
        throw error;
      }
    );
  }

  static resolve(value) {
    if (value instanceof MyPromise) return value;
    let _resolve, _reject;
    const p = new MyPromise((resolve, reject) => {
      _resolve = resolve;
      _reject = reject;
    });
    if (p.#isPromiseLike(value)) {
      value.then(_resolve, _reject);
    } else {
      _resolve(value);
    }
    return p;
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }
}
```

`promise.then(callback)`返回一个新的`promise`，它的状态由如下确定：

- `callback`是函数且返回值不是`thenable`对象，则`resolve(callback())`
- `callback`是函数且返回值是`thenable`对象，则` callback().then(resolve, reject);`，但在浏览器实际的实现中与规范有出入，具体可看下面的面试题目。
- `callback`不是函数，则它的状态和原始`promise`相同（状态穿透）

## 三、Promise.all

```js
Promise.myall = function (promises) {
  return new Promise(function (resolve, reject) {
    if (typeof promises[Symbol.iterator] !== 'function') {
      throw TypeError('args must be Iterable');
    }

    let count = 0; // 统计promises内元素的数量
    let resolvedCounter = 0; // 成功的promise数量
    let result = [];
    let i = 0;

    for (const prom of promises) {
      const index = i; // 保存当前prom的索引
      i++;
      count++;
      Promise.resolve(prom).then(
        (data) => {
          resolvedCounter++;
          result[index] = data;
          if (resolvedCounter === count) {
            resolve(result);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    }
    if (count === 0) {
      resolve([]);
    }
  });
};

Promise.myall([1, 2, 3, 4]).then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
```

## 四、面试题

```js
Promise.resolve()
  .then(() => {
    console.log(0);
    return Promise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });
Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
```

按照上述 promiseA+规范的复现，输出结果应该为`0 1 2 4 3 5 6`，但是在浏览器中上述代码输出的结果为：`0 1 2 3 4 5 6`，具体流程可参考[知乎 | promise.then 中 return Promise.resolve 后，发生了什么](https://www.zhihu.com/question/453677175)。

> 总结来说，在 chrome 的实现中，`return Promise.resolve(4)` 的写法额外 enqueue 了 2 个任务，
>
> - 求值（`Promise.resolve(4)`）的任务（ ==额外== ）
> - 「Promise { 4 }」的 `onfulfill`， 即`Promise.resolve().then`返回 promise 的 resolve 函数（ ==规范== ）

```js
let p2 = Promise.resolve().then(() => {
  console.log(0);
  return Promise.resolve(4);
});
Promise.resolve(4).then(resolve); // p2的resolve
```

![image-20240308195733073](./images/image-20240308195733073.png)
