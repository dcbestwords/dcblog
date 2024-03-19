---
title: 实现继承
---

## 一、圣杯模式

```js
function inherit(Child,Parent){
    function F(){};
    F.prototype = Parent.prototype; // 拿到父类原型的副本
    Child.prototype = new F(); //改变子类构造函数的原型对象
    Child.prototype.constructor = Child // 修正
}
// 父类
function Parent(name){
    this.name = name
}
Parent.prototype.setName = function(){
    this.name = name
}
// 子类
function Child(name,price){
    Parent.call(this, name); // 盗用父类的构造函数
    this.price = price
}
inherit(Child, Parent); // 使用圣杯模式实现继承
// 测试
var child = new Child('a', 20); 
child.setName('b')

```

## 二、使用Object.create

```js
function Parent(name) {
  this.name = name;
}
function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
```



