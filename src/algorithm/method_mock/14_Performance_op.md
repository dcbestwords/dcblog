---
title: 性能优化
---

## 一、图片懒加载

```js
const imgs = document.getElementsByTagName('img');
const len = imgs.length;
function lazyload() {
  // 视口高度
  const viewHeight = document.documentElement.clientHeight || document.body.clientHeight;
  const scollTop = document.documentElement.scrollTop;
  for (let i = 0; i < len; i++) {
    const offsetHeight = imgs[i].offsetTop;
    if (offsetHeight < viewHeight + scollTop) {
      imgs[i].src = imgs[i].dataset.src;
    }
  }
}
window.addEventListener('scroll', throttle(lazyload, time));
```

## 二、滚动加载

```js
window.addEventListener('scroll', function () {
  const clientHeight = document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  if (clientHeight + scrollTop > scrollHeight) {
    // load more...
  }
});
```

## 三、渲染大量数据不卡住页面

```js
setTimeout(() => {
  const total = 100000;
  const once = 30;
  const loopCount = Math.ceil(total / once);
  let countOfRender = 0;
  function add() {
    const ul = document.createElement('ul');
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < once; i++) {
      const li = document.createElement('li');
      li.innerHTML = Math.floor(Math.random * total);
      fragment.appendChild(li);
    }
    ul.appendChild(fragment);
    countOfRender += 1;
    loop();
  }
  function loop() {
    if (countOfRender < loopCount) {
      window.requestAnimationFrame(add);
    }
  }
  loop();
}, 0);
```

