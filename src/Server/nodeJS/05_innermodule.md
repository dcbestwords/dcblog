---
order: 4
---

# nodejs内置模块

Node.js的API文档（中文）：[https://nodejs.cn/api/](https://nodejs.cn/api/)

Node.js 应用由模块组成，采用 CommonJS 模块规范。Node.js中的模块分为三种：

- 内置模块
- 第三方模块
- 自定义模块

关于 Node.js 的内置模块和常见API，可以看官方文档，下面介绍几种常用的模块。

## 一、fs文件系统

> fs 全称为 `file system` ，称之为 `文件系统` ，是 Node.js 中的 `内置模块` ，可以对计算机中的磁盘进行操作。

**Node.js 中的同步和异步的区别**

fs模块对文件的几乎所有操作都有同步和异步两种形式。例如：readFileSync()和readFile()  。

区别：

- 同步调用会阻塞代码的执行，异步则不会。
- 异步调用会将 读取任务 下达到任务队列，直到任务执行完成才会回调。
- 异常处理方面：同步必须使用 try catch 方式，异步可以通过回调函数的第一个参数。【重要】

### 1. 文件写入

> 文件写入就是将 <span style="color:red">数据</span> 保存到 <span style="color:red">文件</span> 中，我们可以使用如下几个方法来实现该效果

| 方法                        | 说明     |
| --------------------------- | -------- |
| writeFile                   | 异步写入 |
| writeFileSync               | 同步写入 |
| appendFile / appendFileSync | 追加写入 |
| createWriteStream           | 流式写入 |

#### writeFile 异步写入

**语法**： `fs.writeFile(file, data[, options], callback)`

**参数说明**：

- file 文件名

- data 待写入的数据

- options 选项设置 `（可选）`

- callback 写入回调

**返回值**： `undefined`

**代码示例**：

```js
const fs = require('fs')

// 将 [三人行，必有我师焉。] 写入到当前文件夹下的 [座右铭.txt] 文件中
fs.writeFile('./座右铭.txt', '三人行，必有我师焉。', err =>{
    if(err) throw err;
    console.log('写入成功')  
})
```



#### writeFileSync 同步写入

**语法:** `fs.writeFileSync(file, data[, options])`

参数与 `fs.writeFile` 大体一致，只是没有 callback 参数

**返回值：**`undefined`

代码示例：

```js
try{
    fs.writeFileSync('./座右铭.txt', '三人行，必有我师焉。')
    console.log('文件写入成功');
}catch(e){
    console.log(e)
}
```

- 如果文件不存在，则创建文件；如果文件存在，则覆盖文件内容；
> Node.js 中的磁盘操作是由其他 `线程` 完成的，结果的处理有两种模式:
>
> - 同步处理 JavaScript 主线程 `会等待` 其线程的执行结果，然后再继续执行主线程的代码，`效率较低`
> - 异步处理 JavaScript 主线程 `不会等待` 其线程的执行结果，直接执行后续的主线程代码，`效率较好`



#### appendFile/appendFileSync 追加写入

> `appendFile` 作用是在文件尾部追加内容，`appendFile` 语法与 `writeFile` 语法完全相同

**语法**: 

`fs.appendFile(file, data[, options], callback)`

`fs.appendFileSync(file, data[, options])`

**返回值**：二者都为 `undefined`

实例代码：

```js
fs.append('./座右铭.txt', '则其善者而从之，其不善者而改之。', err =>{
    if(err) throw err
    console.log('追加成功')
})

fs.appendFileSync('./座右铭.txt','\r\n温故而知新，可以为师矣')
```



#### createWriteStream 流式写入

**语法**：`fs.createWriteStream(path[, options])`

**参数说明**：

- `path` 文件路径

- `options` 选项配置（ `可选` ） 

**返回值: **`Object`

代码示例：

```js
let ws = fs.createWriteStream('./观书有感.txt')

//写入数据到流
ws.write('半亩方塘一鉴开\r\n')
ws.write('天光云影共徘徊\r\n')
ws.write('问渠那得清如许\r\n')
ws.write('为有源头活水来\r\n')

//关闭写入流，表明已没有数据要被写入可写流
ws.end()
```

> <span style="color:red">程序打开一个文件是需要消耗资源的</span>，流式写入可以减少打开关闭文件的次数。
>
> 流式写入方式适用于 <span style="color:red">大文件写入或者频繁写入</span>的场景，`writeFile`适合于 <span style="color:red">写入频率较低的场景</span>



#### 写入文件的场景

`文件写入` 在计算机中是一个非常常见的操作，下面的场景都用到了文件写入

- 下载文件
- 安装软件

- 保存程序日志，如 Git

- 编辑器保存文件
- 视频录制

> 当 <span style="color:red">需要持久化保存数据</span> 的时候，应该想到 `文件写入`

### 2. 文件读取

> 文件读取顾名思义，就是通过程序从文件中取出其中的数据，我们可以使用如下几种方式：

| 方法             | 说明     |
| ---------------- | -------- |
| readFile         | 异步读取 |
| readFileSync     | 同步读取 |
| createReadStream | 流式读取 |



#### readFile 异步读取

**语法**: `fs.readFile(path[, options], callback)`

**参数说明**：

- path 文件路径

- options 选项配置

- callback 回调函数

**返 回 值 ：** `undefined`

代码示例：

```js
// 导入 fs 模块

fs.readFile('./座右铭.txt', (error,data) =>{
    if(err) throw err
    console.log(data)
})

fs.readFile('./座右铭.txt', 'uft-8', (error,data) =>{
    if(err) throw err
    console.log(data)
})
```



#### readFileSync 同步读取

**语法：**`fs.readFileSync(path[, options])`

**参数说明：**

- path 文件路径

- options 选项配置

**返 回 值 ：**`string | Buffer` 

代码示例：

```js
let data = fs.readFileSync('./座右铭.txt')
let data = fs.readFileSync('./座右铭.txt', 'utf-8')
```



#### createReadStream 流式读取

**语法：**`fs.createReadStream(path[, options])`

**参数说明：**

- path 文件路径

- options 选项配置（ `可选` ）

**返回值：**`Object`

代码示例：

```js
// 创建读取流对象
let rs = fs.createReadStream('./观书有感.txt')

// 每次取出 64k 数据后执行一次 data 回调
// 绑定一个 data 事件  chunk 块儿  大块儿
rs.on('data', chunk =>{
    console.log(chunk)
    console.log(chunk.length)
})

// 读取完毕后，执行 end 回调 (可选事件)
rs.on('end', () =>{
    console.log('读取完毕')
})
```



#### 读取文件应用场景

- 电脑开机
- 程序运行

- 编辑器打开文件
- 查看图片

- 播放视频
- 播放音乐

- Git 查看日志

- 上传文件

- 查看聊天记录

### 3. 文件移动与重命名

> 在 Node.js 中，我们可以使用 `rename` 或 `renameSync` 来移动或重命名 `文件或文件夹`

**语法：**

`fs.rename(oldPath, newPath, callback)`

`fs.renameSync(oldPath, newPath)`

**参数说明：**

- oldPath 文件当前的路径

- newPath 文件新的路径

- callback 操作后的回调

代码示例：

```js
fs.rename('./观书有感.txt', './论语/观书有感.txt', err =>{
	if(err) throw err
    console.log('移动完成')
})

fs.renameSync('./座右铭.txt', './论语/.我的座右铭.txt')
```

>  **注**: 如果还是移动到当前路径，但是修改了名字，就是重命名了

### 4. 文件删除

> 在 Node.js 中，我们可以使用 `unlink` 或 `unlinkSync` 来删除文件

**语法:**

`fs.unlink(path, callback)`

`fs.unlinkSync(path)`

**参数说明**：

- path 文件路径

- callback 操作后的回调

代码示例：

```js
const fs = require('fs')

fs.unlink('./test.txt', err =>{
    if(err) throw err
    console.log('删除成功')
})

fs.unlinkSync('./test2.txt')


// 调用 rm 方法  14.4   同步 rmSync
fs.rm('./论语.txt', err => {
  if (err) {
    console.log('删除失败')
    return
  }
  console.log('删除成功')
})
```



### 5. 文件夹操作

> 借助 Node.js 的能力，我们可以对文件夹进行 `创建` 、`读取` 、`删除` 等操作

| 方法                  | 说明       |
| --------------------- | ---------- |
| mkdir / mkdirSync     | 创建文件夹 |
| readdir / readdirSync | 读取文件夹 |
| rmdir / rmdirSync     | 删除文件夹 |



#### mkdir 创建文件夹

> 在 Node.js 中，我们可以使用 `mkdir` 或 `mkdirSync` 来创建文件夹

**语法**:

`fs.mkdir(path[, options], callback)`

`fs.mkdirSync(path[, options])`

**参数说明**：

- path 文件夹路径

- options 选项配置（ `可选` ）

- callback 操作后的回调

示例代码：

```js
// 异步创建文件夹  mk  make  制作   dir  directory  文件夹
fs.mkdir('./page', err =>{
    if(err) throw err
    console.log('创建成功')
})

// 递归异步创建
fs.mkdir('./1/2/3', {recursive: true}, err =>{
    if(err) throw err
    console.log('递归创建成功')
})

// 递归同步创建文件夹
fs.mkdirSync('./x/y/z', {recursive: true})
```



#### readdir 读取文件夹

> 在 Node.js 中，我们可以使用 `readdir` 或 `readdirSync` 来读取文件夹

**语法：**

`fs.readdir(path[, options], callback)`

`fs.readdirSync(path[, options])`

**参数说明：**

- path 文件夹路径

- options 选项配置（ `可选` ）

- callback 操作后的回调

示例代码：

```js
// 异步读取
fs.readdir('./论语', (err, data) => {
	if(err) throw err
    console.log(data)
})
// 同步读取 
let data = fs.readdirSync('./论语')
console.log(data)
```



#### rmdir 删除文件夹

> 在 Node.js 中，我们可以使用 `rmdir` 或 `rmdirSync` 来删除文件夹

**语法**：

`fs.rmdir(path[, options], callback)`

`fs.redirSync(path[, options])`

**参数说明**：

- path 文件夹路径

- options 选项配置（ 可选 ）

- callback 操作后的回调

示例代码：

```js
// 异步删除文件夹  rm  remove 移除
fs.rmdir('./page', err => {
    if(err) throw err
    console.log('删除成功')
})
//异步递归删除文件夹  不推荐
//=>DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead
fs.rmdirSync('./1', {recursive: true}, err => {
    if(err){ 
    	console.log(err)
        return
    }
    console.log('递归删除')
})
//同步递归删除文件夹
fs.rmdirSync('./x', {recursive: true})

// 建议使用
fs.rm('./a', { recursive: true }, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log('删除成功')
})
```



### 6. 查看资源状态

> 在 Node.js 中，我们可以使用 `stat` 或 `statSync` 来查看资源的详细信息

**语法**：

`fs.stat(path[, options], callback)`

`fs.statSync(path[, options])`

**参数说明**：

- path 文件夹路径

- options 选项配置（ 可选 ）

- callback 操作后的回调

示例代码：

```js
// 异步获取状态
// stat  方法  status 缩写 状态
fs.stat('/data.txt', (err, data) =>{
    if(err) throw err
    console.log(data)
})
// 同步获取状态
let data = fs.statSync('./data.txt')
```

![image-20230321144242912](./images/stat.png)

**结果值对象结构**：

- size 文件体积

- birthtime 创建时间

- mtime 最后修改时间

- isFile 检测是否为文件

- isDirectory 检测是否为文件夹

- ....

### 7. 相对路径问题

fs 模块对资源进行操作时，路径的写法有两种： 

- 相对路径
  - `./座右铭.txt` 当前目录下的 座右铭.txt
  - `座右铭.txt` 等效于上面的写法
  - `../座右铭.txt` 当前目录的上一级目录中的 座右铭.txt 

- 绝对路径
  - `D:/Program Files` windows 系统下的绝对路径
  - `/user/bin` Linux 系统下的绝对路径

> 相对路径中所谓的 `当前目录` ，指的是 `命名行的工作目录` ，而并非是文件的所在目录
>
> 所以当命名行的工作目录与文件所在目录不一致时，会出现一些 Bug

### 8. __dirname

`__dirname` 与 `require` 类似，都是 Node.js 环境中的 '全局' 变量

`__dirname` 保存着 <span style="color:red">当前文件夹所在目录的绝对路径</span>，可以使用 `__dirname` 与文件名拼接成绝对路径

代码示例:

```js
//=>__dirname + '/data.txt'  === 'D:\\Desktop\\Node\\code\\03-fs模块/data.txt'
let data = fs.readFileSync(__dirname + '/data.txt')
console.log(data) 
```

> 使用 fs 模块的时候，尽量使用 `__dirname` 路径转换为绝对路径，这样可以避免相对路径产生的 Bug

### 9. 练习 

编写一个 JS 文件，实现复制文件的功能

```js
/* 
 *  需求:
 *    复制  资料文件夹下的  [笑看风云.mp4]
 */
// 导入 fs 模块
const fs = require('fs')
// 方式一  readFile
// 读取文件内容
let data = fs.readFileSync('./资料/笑看风云.mp4')
// 写入文件
fs.writeFileSync('./资料/笑看风云2.mp4', data)

// 方式二 流式操作
// 创建读取流对象
const rs = fs.createReadStream('./资料/笑看风云.mp4')
// 创建一个写入流对象
const ws = fs.createWriteStream('./资料/笑看风云3.mp4')

// 绑定data事件
// 理想状态下，读取 64k 就写入 64 k，这样消耗的内存最少，实际上读取的速度大于写入的速度
rs.on('data', chunk => {
   ws.write(chunk)
})
//  绑定data事件 ==== rs.pipe(ws)
```

文件重命名

```js
// 1. 导入 fs 模块
const fs = require('fs')

// 读取 03-fs模块 文件夹
const files = fs.readdirSync('../03-fs模块')

// 遍历数组
files.forEach(item => {
  // 判断
  let [num, name] = item.split('-')
  if (num < 10) {
    num = '0' + num
  }
  // 创建新的文件名
  let newName = num + '-' + name
  // 重命名
  fs.renameSync(`../03-fs模块/${item}`, `../03-fs模块/${newName}`)
})
```

## 二、path模块

> `path` 模块提供了 `操作路径` 的功能，我们将介绍如下几个较为常用的几个 API：

| **API**       | **说明**                   |
| ------------- | -------------------------- |
| path.resolve  | 拼接规范的绝对路径 `常用`  |
| path.sep      | 获取操作系统的路径分隔符   |
| path.parse    | 解析路径并返回对象         |
| path.basename | 获取路径的文件名（带后缀） |
| path.dirname  | 获取路径的目录名           |
| path.extname  | 获得路径的扩展名           |

代码示例：

 ```js
 const fs = require('fs')
 const path = require('path')
 
 // 写入文件
 fs.writeFileSync(__dirname + '/index.html', 'love')
 console.log(__dirname + '/index.html') 
 //=>D:\Desktop\Node\code\04-path/index.html
 
 // resolve 解决问题  拼接绝对路径
 console.log(path.resolve(__dirname, './index.html')) 
 //=>D:\Desktop\Node\code\04-path\index.html
 
 console.log(path.resolve(__dirname, 'index.html')) 
 //=>D:\Desktop\Node\code\04-path\index.html
 
 console.log(path.resolve(__dirname, '/index.html', './test')) 
 //=>D:\index.html\test
 
 // sep 获取路径分隔符
 console.log(path.sep) 
 //=> window \  linux /
 
 // parse 方法  __filename  '全局变量'
 console.log(__filename) 
 //=>文件的绝对路径 //=>D:\Desktop\Node\code\04-path\01-path.js
 
 // 解析路径
 let str = 'D:\\Desktop\\Node\\code\\04-path\\01-path.js'
 console.log(path.parse(str))
 /*
     {
       root: 'D:\\',
       dir: 'D:\\Desktop\\Node\\code\\04-path',
       base: '01-path.js',
       ext: '.js',
       name: '01-path'
     }
 */
 
 // 获取路径基础名称
 console.log(path.basename(str))
 console.log(path.basename(str),'.js')
 //01-path.js
 //01-path
 
 // 获取路径的目录名
 console.log(path.dirname(str))
 //D:\\Desktop\\Node\\code\\04-path
 
 // 获取路径的拓展名
 console.log(path.extname(str))
 //.js
 ```

## 三、HTTP模块

### 1. 概念

> HTTP（hypertext transport protocol）协议；中文叫 <span style="color:red">超文本传输协议</span>，是一种基于TCP/IP的应用层通信协议

这个协议详细规定了 `浏览器` 和 万维网 `服务器` 之间互相通信的规则

协议中主要规定了两个方面的内容:

- 客户端：用来向服务器发送数据，可以被称之为 <span style="color:red">请求报文</span>

- 服务端：向客户端返回数据，可以被称之为 <span style="color:red">响应报文</span>

> 报文：可以简单理解为就是一堆字符串

### 2. 请求报文的组成

- 请求行
- 请求头
- 空行
- 请求体

#### **HTTP** 的请求行

- 请求方法（get、post、put、delete等）

- 请求 URL（统一资源定位器）

  例如：http://www.baidu.com/index.html?a=100&b=200#logo

  - http: 协议 (https、ftp、ssh等)
  - www.baidu.com  域名
  - 80 端口号
  - /index.html 路径
  - a=100&b=200 查询字符串
  - #logo 哈希 (锚点链接)

- HTTP协议版本号

#### HTTP 请求头

格式：『头名：头值』

常见的请求头有：

| 请求头                    | 解释                                                         |
| ------------------------- | ------------------------------------------------------------ |
| Host                      | 主机名                                                       |
| Connection                | 连接的设置 keep-alive（保持连接）；close（关闭连接）         |
| Cache-Control             | 缓存控制 max-age = 0 （没有缓存）                            |
| Upgrade-Insecure-Requests | 将网页中的http请求转化为 https 请求（很少用）老网站升级      |
| User-Agent                | 用户代理，客户端字符串标识，服务器可以通过这个标识来识别这个请求来自哪个客户端 ，一般在PC端和手机端的区分 |
| Accept                    | 设置浏览器接收的数据类型                                     |
| Accept-Encoding           | 设置接收的压缩方式                                           |
| Accept-Language           | 设置接收的语言 q=0.7 为喜好系数，满分为1                     |
| Cookie                    | 后面单独讲                                                   |

#### HTTP 的请求体

请求体内容的格式是非常灵活的，

（可以是空）==> GET请求，

（也可以是字符串，还可以是JSON）===> POST请求

例如：

- 字符串：`keywords=手机&price=2000`

- JSON：`{"keywords":"手机","price":2000}`

### 3. 响应报文的组成

- 响应行:  `HTTP/1.1 200 OK`

  - HTTP/1.1：HTTP协议版本号

  - 200：响应状态码 404 Not Found 500 Internal Server Error

    还有一些状态码，参考：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status

    OK：响应状态描述

> 响应状态码 和 响应字符串 关系是 一一对应 的。

- 响应头
  - `Cache-Control`: 缓存控制 private 私有的，只允许客户端缓存数据
  - `Connection`: 链接设置
  - `Content-Type:text/html;charset=utf-8`: 设置响应体的数据类型以及字符集,响应体为html，字符集utf-8
  - `Content-Length`: 响应体的长度，单位为字节

- 空行 

- 响应体

  响应体内容的类型是非常灵活的，常见的类型有 HTML、CSS、JS、图片、JSON

### 4. 创建 **HTTP** 服务

使用 nodejs 创建 HTTP 服务

#### 操作步骤

```js
//1. 导入 http 模块
const http = require('http');

//2. 创建服务对象 create 创建 server 服务
// request 意为请求. 是对请求报文的封装对象, 通过 request 对象可以获得请求报文的数据
// response 意为响应. 是对响应报文的封装对象, 通过 response 对象可以设置响应报文
const server = http.createServer((request, response) => { 		
    // 设置响应体
    response.end('Hello HTTP server');
});  //=>返回结果是一个对象

//3. 监听端口, 启动服务
server.listen(9000, () => {
	console.log('服务已经启动, 端口 9000 监听中...');
});
```

> `http.createServer` 里的回调函数的执行时机： <span style="color:red">当接收到 HTTP 请求的时候，就会执行</span>

#### 测试

浏览器请求对应端口

```js
http://127.0.0.1:9000
```

#### 注意事项

1. 命令行 `ctrl + c` 停止服务

2. 当服务启动后，更新代码 <span style="color:red">必须重启服务才能生效</span>

3. 响应内容中文乱码的解决办法

   ```js
   // 设置响应头
   response.setHeader('content-type','text/html;charset=utf-8');
   ```

4. 端口号被占用

   `Error: listen EADDRINUSE: address already in use :::9000`

   1）关闭当前正在运行监听端口的服务 （ <span style="color:red">使用较多</span> ）

   2）修改其他端口号

5. `HTTP` 协议<span style="color:red">默认端口</span>是 `80` 。`HTTPS` 协议的<span style="color:red">默认端口</span>是 `443`, HTTP 服务开发常用端口有 `3000`，`8080`，`8090`，`9000` 等

> 如果端口被其他程序占用，可以使用 <span style="color:red">资源监视器</span> 找到占用端口的程序，然后使用 <span style="color:red">任务管理器</span> 关闭对应的程序

### 5. 浏览器查看 HTTP 报文

![04_HTTP协议](./images/req_1.jpg)

#### 查看请求行与请求头

![04_HTTP协议](./images/req_2.jpg)

#### 查看请求体

![8-2](./images/req_3.jpg)

#### 查看 **URL** 查询字符串

![8-3](./images/req_4.jpg)

#### 查看响应行与响应头

![8-4](./images/res_1.jpg)

#### 查看响应体

![8-5](./images/res_2.jpg)

### 6. 获取 HTTP 请求报文

| 含义           | 语法                                                         | 重点掌握 |
| :------------- | :----------------------------------------------------------- | :------- |
| 请求方法       | `request.method`                                             | *****    |
| 请求版本       | `request.httpVersion`                                        |          |
| 请求路径       | `request.url`                                                | *****    |
| URL 路径       | `require('url').parse(request.url).pathname`                 | *****    |
| URL 查询字符串 | `require('url').parse(request.url,  true).query`             | *****    |
| 请求头         | `request.headers`                                            | *****    |
| 请求体         | `request.on('data', function(chunk){})`<br>`request.on('end', function(){})` |          |

```js
// 1. 导入 http 模块
const http = require('http')

// 2. 创建服务对象
const server = http.createServer((request, response) => {
  // 获取请求的方法
  console.log(request.method)  //=>GET
  // 获取请求的 url
  console.log(request.url)  // 只包含 url 中的 路径 与查询字符串
  // 获取 http 协议的版本号
  console.log(request.httpVersion)  //=> 1.1
  // 获取 http 的请求头
  console.log(request.headers) //=>结果是一个对象
  response.end('http') //=>设置响应体
})

// 3. 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...')
})
```

**注意事项：** 

1. `request.url` 只能获取路径以及查询字符串，无法获取 URL 中的域名以及协议的内容
2. `request.headers` 将请求信息转化成一个对象，并将属性名都转化成了『小写』
3. 关于路径：如果访问网站的时候，只填写了 IP 地址或者是域名信息，此时请求的路径为『 `/` 』
4. 关于 `favicon.ico`：这个请求是属于浏览器自动发送的请求



#### 提取 http 报文的请求体

```js
// 1. 导入 http 模块
const http = require('http')

// 2. 创建服务对象
const server = http.createServer((request, response) => {
  // 1. 声明一个变量
  let body = ''
  // 2. 绑定 data 事件
  request.on('data', chunk => {
    body += chunk
  })
  // 3. 绑定 end 事件
  request.on('end', () => {
    console.log(body)  //=>'username=111&password=111'
    // 响应
    response.end('Hello Http') //=>设置响应体 
  })
})

// 3. 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...')
})
```

#### 提取 http 报文中 url的路径 与 查询字符串

```js
// 导入 http 模块
const http = require('http')
// 1. 导入 url 模块
const url = require('url')

// 创建服务对象
const server = http.createServer((request, response) => {
  // 2. 解析 request.url
  console.log(request.url)   //=>/search?keyword=h5
  // 使用 parse 解析 request.url 的内容
  // true 将 query 属性将会设置为一个 对象
  let res = url.parse(request.url, true)
  console.log(res)  // 如下图所示，为一个对象
    
  // 路径
  let pathname = res.pathname
  // 查询字符串
  let keyword = res.query.keyword
  console.log(keyword)   //=>h5
  response.end('url')
})

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...')
})
```
![image-20230322162535711](./images/urlParse.png)
```js
// 导入 http 模块
const http = require('http')

// 创建服务对象
const server = http.createServer((request, response) => {
  // 实例化 url 对象
  // let url = new URL('/search?a=100&b=200','http://127.0.0.1:9000')
  let url = new URL(request.url, 'http://127.0.0.1')
  console.log(url)  //=>如图所示，为一个对象
  // 输出路径
  console.log(url.pathname)  //=>/search
  // 输出 keyword 查询字符串
  console.log(url.searchParams.get('a'))  //=> 100
  response.end('url new')
})

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...')
})
```

![image-20230322162034273](./images/URL.png)

#### 练习

按照以下要求搭建 HTTP 服务

| 请求类型**(**方法**)** | 请求地址 | 响应体结果 |
| ---------------------- | -------- | ---------- |
| get                    | /login   | 登录页面   |
| get                    | /reg     | 注册页面   |

```js
//1、引入http模块
const http = require("http");

//2、建立服务
const server = http.createServer((request,response)=>{ 
    let {url, method} = request; //对象的解构赋值

	//设置响应头信息
	//解决中文乱码
	response.setHeader("Content-Type","text/html;charset=utf-8") 
    if(url == "/register" && method == "GET"){
		response.end("注册页面");
	}else if(url=="/login" && method == "GET"){
		response.end("登录页面");
	}else{
		response.end("<h1>404 Not Found</h1>")
	}
})

//3、监听端口
server.listen(8000,()=>{
	console.log('服务启动中....');
})
```

### 7. 设置 **HTTP** 响应报文

| 作用             | 语法                                               |
| ---------------- | -------------------------------------------------- |
| 设置响应状态码   | response.statusCode                                |
| 设置响应状态描述 | response.statusMessage （ 用的非常少 ）            |
| 设置响应头信息   | response.setHeader('头名', '头值')  (`可以自定义`) |
| 设置响应体       | response.write('xx')<br/>response.end('xxx')       |

```js
// 1. 设置响应状态码
response.statusCode = 203
// 2. 响应状态的描述
response.statusMessage = 'i love you'
// 3. 响应头
response.setHeader('content-type', 'text/html;charset=utf-8')
// 自定义响应头
response.setHeader('myHeader', 'test test')
// 设置多个同名的响应头
response.setHeader('test', ['a', 'b', 'c'])
```

```js
// write 和 end 的两种使用情况：
// 1. write 和 end 的结合使用 响应体相对分散
response.write('xx');
response.write('xx');
response.write('xx');
response.end(); //每一个请求，在处理的时候必须要执行 end 方法的

//2. 单独使用 end 方法 响应体相对集中
response.end('xxx');
```

#### 练习

搭建 HTTP 服务，响应一个 4 行 3 列的表格，并且要求表格有 `隔行换色效果` ，且 `点击` 单元格能 `高亮显示`

**方法一**

```js
// 导入 http 模块
const http = require('http')
const fs = require('fs')

// 创建服务对象
const server = http.createServer((request, response) => {
  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.end(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        td {
          padding: 20px 40px;
        }

        table tr:nth-child(odd) {
          background-color: #aef;
        }

        table tr:nth-child(even) {
          background-color: #fcb;
        }

        table,
        td {
          border-collapse: collapse;
        }
      </style>
    </head>

    <body>
      <table border="1">
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <script>
        const tds = document.querySelectorAll('td')
        tds.forEach(item => {
          item.addEventListener('click', function () {
            this.style.backgroundColor = '#000'
          })
        })
      </script>
    </body>

    </html>
  `)
})

// 监听端口，启动服务器
server.listen(9000, () => {
  console.log('服务器已经启动...')
})
```

方法二

```js
// 导入 http 模块
const http = require('http')
const fs = require('fs')

// 创建服务对象
const server = http.createServer((request, response) => {
  response.setHeader('content-type', 'text/html;charset=utf-8')
  // 读取文件内容
  let html = fs.readFileSync(__dirname + '/table.html')
  // end 方法的参数可以是字符串也可以是Buffer
  response.end(html)
})

// 监听端口，启动服务器
server.listen(9000, () => {
  console.log('服务器已经启动...')
})
```

table.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    td {
      padding: 20px 40px;
    }

    table tr:nth-child(odd) {
      background-color: #aef;
    }

    table tr:nth-child(even) {
      background-color: #fcb;
    }

    table,
    td {
      border-collapse: collapse;
    }
  </style>
</head>

<body>
  <table border="1">
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
  <script>
    const tds = document.querySelectorAll('td')
    tds.forEach(item => {
      item.addEventListener('click', function () {
        this.style.backgroundColor = '#000'
      })
    })
  </script>
</body>

</html>
```



### 8. 静态资源服务

`静态资源` 是指 <span style="color:red">内容长时间不发生改变的资源</span> ，例如图片，视频，CSS 文件，JS文件，HTML文件，字体文件等

`动态资源` 是指 <span style="color:red">内容经常更新的资源</span> ，例如百度首页，网易首页，京东搜索列表页面等

### 9. 网站根目录或静态资源目录

HTTP 服务在哪个文件夹中寻找静态资源，那个文件夹就是 <span style="color:red">静态资源目录</span> ，也称之为 <span style="color:red">网站根目录</span>

> 思考：vscode 中使用 live-server 访问 HTML 时， 它启动的服务中网站根目录是谁？
>
> - 该文件所处的文件夹

### 10. 网页中的 **URL**

网页中的 URL 主要分为两大类：`相对路径` 与 `绝对路径`

#### 绝对路径

绝对路径可靠性强，而且相对容易理解，在项目中运用较多

| 形式                   | 特点                                                         |
| ---------------------- | ------------------------------------------------------------ |
| http://atguigu.com/web | 直接向目标资源发送请求，容易理解。网站的外链会用到此形式     |
| //atguigu.com/web      | 与页面 URL 的协议拼接形成完整 URL 再发送请求。大型网站用的比较多 |
| /web                   | 与页面 URL 的协议、主机名、端口拼接形成完整 URL 再发送请求。中小型网站 |

#### 相对路径

相对路径在发送请求时，需要与当前页面 URL 路径进行 `计算` ，得到完整 URL 后，再发送请求，学习阶段用的较多

例如当前网页 url 为 http://www.atguigu.com/course/h5.html

| 形式               | 最终的 **URL**                            |
| ------------------ | ----------------------------------------- |
| ./css/app.css      | http://www.atguigu.com/course/css/app.css |
| js/app.js          | http://www.atguigu.com/course/js/app.js   |
| ../img/logo.png    | http://www.atguigu.com/img/logo.png       |
| ../../mp4/show.mp4 | http://www.atguigu.com/mp4/show.mp4       |

#### 网页中使用 **URL** 的场景小结

包括但不限于如下场景：

- a 标签 href
- link 标签 href
- script 标签 src 
- img 标签 src
- video audio 标签 src
- form 中的 action
- AJAX 请求中的 URL



### 11. 设置资源类型（**mime**类型）

`媒体类型`（通常称为 Multipurpose Internet Mail Extensions 或 MIME 类型 ）是一种标准，用来表示文档、文件或字节流的性质和格式。

```
mime 类型结构： [type]/[subType]

例如： text/html text/css image/jpeg image/png application/json
```

HTTP 服务可以设置响应头 Content-Type 来表明响应体的 MIME 类型，浏览器会根据该类型决定如何处理资源

下面是常见文件对应的 mime 类型

```js
html: 'text/html',
css: 'text/css',
js: 'text/javascript',
png: 'image/png',
jpg: 'image/jpeg', 
gif: 'image/gif',
mp4: 'video/mp4',
mp3: 'audio/mpeg',
json: 'application/json'
```

> 对于未知的资源类型，可以选择 `application/octet-stream` 类型，浏览器在遇到该类型的响应时，会对响应体内容进行独立存储，也就是我们常见的 `下载` 效果

```js
require('http').createServer((request,response)=>{
	//获取请求的方法已经路径
	let {url,method} = request;
	//判断请求方式以及请求路径
	if(method == "GET" && url == "/index.html"){
		//需要响应文件中的内容
		let data = require('fs').readFileSync( dirname + '/index.html');
         response.end(data);
	}else if(method == "GET" && url == "/css/app.css"){
		//需要响应文件中的内容
		let data = require('fs').readFileSync( dirname + '/public/css/app.css');
		response.end(data);
	}else if(method == "GET" && url == "/js/app.js"){
		//需要响应文件中的内容
		let data = require('fs').readFileSync( dirname + '/public/js/app.js');
         response.end(data);
	}else{
		//404响应
         response.statusCode = 404;
		response.end("<h1>404 Not Found</h1>");
	}
}).listen(80,()=>{

console.log('80端口正在启动中....');

})
```

很明显上面的代码，当只要有一个请求路径就需要进行判断，显然这种方式不够完美，那么我们需要封装

```js
require('http').createServer((request,response)=>{
	//获取请求的方法已经路径
	let {url,method} = request;
	//文件夹路径  根路径
	let rootDir = dirname + '/public';
	//拼接文件路径
	let filePath = rootDir + url;
	//读取文件内容
    fs.readFile(filePath,(err,data)=>{
		//判断
        if(err){
			//如果出现错误，响应404状态码
            response.statusCode = 404; 
            response.end('<h1>404 Not Found</h1>');
		}else{
			//响应文件内容
            response.end(data);
		}
	})
}).listen(80,()=>{
	console.log('80端口正在启动中....');
})
```



### 12. GET **和** POST **请求场景小结**

GET 请求的情况：

- 在地址栏直接输入 url 访问
- 点击 a 链接
- link 标签引入 css
- script 标签引入 js
- img 标签引入图片
- form 标签中的 method 为 get （不区分大小写）
- ajax 中的 get 请求

POST 请求的情况：

- form 标签中的 method 为 post（不区分大小写）

- AJAX 的 post 请求



### 13. **GET**和**POST**请求的区别（实现层面）

`GET` 和 `POST` 是 HTTP 协议请求的两种方式。

- `GET` 主要用来获取数据，`POST` 主要用来提交数据
- `GET` 带参数请求是将参数缀到 URL 之后，在地址栏中输入 url 访问网站就是 GET 请求，`POST` 带参数请求是将参数放到请求体中
- `POST` 请求相对 `GET` 安全一些，因为在浏览器中参数会暴露在地址栏
- `GET` 请求大小有限制，一般为 2K，而 POST 请求则没有