---
title: XHR
---

## 代码

```js
function Ajax(url, method, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.onerror = function () {
      reject(xhr.statusText);
    };

    if (data) {
      xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }
  });
}

```

```js
// 使用示例
ajax('https://jsonplaceholder.typicode.com/posts/1', 'GET')
    .then(function (response) {
    console.log('Success:', response);
})
    .catch(function (error) {
    console.error('Error:', error);
});
```

