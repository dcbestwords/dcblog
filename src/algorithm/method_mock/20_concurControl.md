---
title: 并发控制
---

## 类的实现

```js
class Scheduler {
  constructor() {
    this.queue = [];
    this.maxCount = 2;
    this.runCount = 0;
  }
  add(task) {
    this.queue.push(task);
  }
  taskStart() {
    for (let i = 0; i < this.maxCount; i++) {
      this.request();
    }
  }
  request() {
    if (this.queue?.length === 0 || this.runCount > this.maxCount) return;
    this.runCount++;
    this.queue
      .shift()()
      .then(() => {
        this.runCount--;
        this.request();
      });
  }
}
const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
};
addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
scheduler.taskStart();
// 2 3 1 4
```

## 请求的并发控制

```js
function concurRequest(urls, maxNum) {
  if (urls.length === 0) return Promise.resolve([]);
  return new Promise((resolve) => {
    let index = 0; // 指向下一次请求的url对应的下标
    const result = []; //存储所有请求的结果
    let count = 0;
    async function _request() {
      const i = index;
      const url = urls[index];
      index++;
      try {
        const resp = await fetch(url);
        result[i] = resp;
      } catch (error) {
        result[i] = error;
      } finally {
        count++;
        if (count === urls.length) {
          resolve(result);
        }
        if (index < urls.length) {
          _request();
        }
      }
    }
    for (let i = 0; i < Math.min(urls.length, maxNum); i++) {
      _request();
    }
  });
}
```

