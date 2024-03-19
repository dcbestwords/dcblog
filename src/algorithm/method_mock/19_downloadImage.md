# 实现下载图片功能

## 代码

>  浏览器的下载行为需要满足一些安全性要求。其中之一是下载的源文件必须与当前页面的域名相同，否则浏览器可能会阻止自动下载操作，而是将其视为普通链接并进行页面跳转。

```js
function downloadIamge(src, imgName) {
  let image = new Image();
  image.src = src;
  image.setAttribute('crossOrigin', 'anonymous');
  image.onload = function () {
    let c = document.createElement('canvas');
    c.width = image.width;
    c.height = image.height;
    c.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
    let a = document.createElement('a');
    a.download = imgName;
    a.href = c.toDataURL('image/png');
    a.click();
  };
}
```

