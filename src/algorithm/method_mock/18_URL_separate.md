# URL拆解问题

## 题目一

>  实现一个 parseParem 函数，将 url 转化为指定结果
>
> 输入：url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'
>
> 输出：
> {
>  user:'anonymous',
>  id:[123,456],// 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
>  city:'北京',// 中文需解码
>  enabled: true // 未指定值的 key 与约定为 true
> }

```js
const parseParem = (url) => {
    const arr = url.split('?')[1].split('&');
    const res = {};
    arr.forEach((e) => {
        let key = e.split('=')[0], value = e.split('=')[1];
        if (value === undefined) {
            res[key] = true;
        } else {
            if (key in res) {
                Array.isArray(res[key]) ? res[key].push(value) : res[key] = [res[key]].concat(value);
            } else {
                res[key] = decodeURI(value)
            }
        }
    })
    return res;
}
```

## 题目二

> 实现一个函数，可以对 url 中的 query 部分做拆解，返回一个 key: value 形式的 object  
>
> --- 实例 ---
>
> 输入：'http://sample.com/?a=1&e&b=2&c=xx&d#hash' 
>
> 输出：`{a: 1, b: 2, c: 'xx', d: ''}  `

```js
function getQueryObj(url) {
    // TODO
    let arr = url.split('?')[1].split('#')[0].split('&');
    const res = {};
    arr.forEach(e => {
        const [key, value] = e.split('=');
        if (!value) {
            res[key] = '';
        } else {
            res[key] = value;
        }
    })
    return res;
}
```

