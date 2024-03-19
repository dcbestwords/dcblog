---
title: JSONP
---

## 代码

```js
const jsonp = ({ url, params, callbackName }) => {
  const generateUrl = () => {
    let dataSrc = '';
    for (const key in params) {
      if (Object.hasOwnProperty.call(params, key)) {
        dataSrc += `${key}=${params[key]}&`;
      }
    }
    dataSrc += `callback=${callbackName}`;
  };
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = generateUrl();
    document.body.appendChild(script);
    window[callbackName] = (data) => {
      resolve(data);
      document.removeChild(script);
    };
  });
};
```

