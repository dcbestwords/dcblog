---
title: 模拟new
---
## 代码

```js
function mynew(fn, ...args) {
  if (typeof fn !== 'function') {
    throw TypeError('fn must be a function');
  }
  const obj = Object.create(fn.prototype);
  const res = fn.apply(obj, args);

  const isObject = typeof res === 'object' && res !== null;
  const isFuntion = typeof res === 'function';
  return isObject || isFuntion ? res : obj;
}
```
## 测试
```js
function Leon(name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}

Leon.prototype.strength = 60;

Leon.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

// 调用myNew，实现继承
const person = myNew(Leon, 'leon', '27');

console.log(person.name);    // leon
console.log(person.habit);   // Games
console.log(person.strength);// 60

person.sayYourName();        // I am leon
```
