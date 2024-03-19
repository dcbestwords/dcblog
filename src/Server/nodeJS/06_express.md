# express

## 一、express 介绍

> express 是一个基于 Node.js 平台的极简、灵活的 WEB 应用开发框架，官方网址： https://www.expressjs.com.cn/

简单来说，express 是一个封装好的工具包，封装了很多功能，便于我们开发 WEB 应用(HTTP 服务)

## 二、express 使用

### 1. express 下载

express 本身是一个 npm 包，所以可以通过 npm 安装

```shell
npm init
npm i express
```

### 2. express 初体验

大家可以按照这个步骤进行操作：

1. 创建 JS 文件，键入如下代码

  ```js
  //1. 导入 express
  const express = require('express');
  //2. 创建应用对象
  const app = express();
  
  //3. 创建路由规则
  app.get('/home', (req, res) => {
  	res.end('hello express server');
  });
  //4. 监听端口 启动服务
  app.listen(3000, () =>{
  	console.log('服务已经启动, 端口监听为 3000...');
  });
  ```

2. 命令行下执行该脚本

```sh
node <文件名>
# 或者
nodemon <文件名>
```

3. 然后在浏览器就可以访问 http://127.0.0.1:3000/home 👌

## 三、express 路由

### 1. 什么是路由

> 官方定义： <span style="color:red">路由确定了应用程序如何响应客户端对特定端点的请求</span>

### 2. 路由的使用

一个路由的组成有 `请求方法`， `路径` 和 `回调函数` 组成

express 中提供了一系列方法，可以很方便的使用路由，使用格式如下：

```js
app.<method>(path，callback)
```

代码示例：
```js
//导入 express
const express = require('express');

//创建应用对象
const app = express();

//创建 get 路由
app.get('/home', (req, res) => {
	res.send('网站首页');
});

//首页路由
app.get('/', (req,res) => {
	res.send('我才是真正的首页');
});

//创建 post 路由
app.post('/login', (req, res) => {
	res.send('登录成功');
});

//匹配所有的请求方法
app.all('/search', (req, res) => {
	res.send('1 秒钟为您找到相关结果约 100,000,000 个');
});

//自定义 404 路由
app.all("*", (req, res) => {
	res.send('<h1>404 Not Found</h1>')
});

//监听端口 启动服务
app.listen(3000, () =>{
	console.log('服务已经启动, 端口监听为 3000');
});
```

- 路径的匹配可以使用正则表达式

### 3. 获取请求参数

express 框架封装了一些 API 来方便获取请求报文中的数据，并且兼容原生 HTTP 模块的获取方式

```js
//导入 express
const express = require('express');

//创建应用对象
const app = express();

//获取请求的路由规则
app.get('/request', (req, res) => {
	// 1. 获取报文的方式与原生 HTTP 获取方式是兼容的
	console.log(req.method);
	console.log(req.url);
	console.log(req.httpVersion);
	console.log(req.headers);
	
    // 2. express 独有的获取报文的方式
    // 获取路径
	console.log(req.path)
    //获取查询字符串
	console.log(req.query); // 『相对重要』对象形式返回所有的查询字符串
	// 获取指定的请求头
	console.log(req.get('host'));
	res.send('请求报文的获取');
});
//启动服务
app.listen(3000, () => {
	console.log('启动成功....')
})
```

### 4. 获取路由参数

路由参数指的是 <span style="color:red">URL 路径中的参数（数据）</span>

```js
app.get('/:id.html', (req, res) => {
	res.send('商品详情, 商品 id 为' + req.params.id);
});
```



## 四、express 响应设置

express 框架封装了一些 API 来方便给客户端响应数据，并且兼容原生 HTTP 模块的获取方式

| 方法                                                         | 描述                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------ |
| [res.download()](http://www.expressjs.com.cn/en/4x/api.html#res.download) | 提示要下载的文件。                                     |
| [res.end（）](http://www.expressjs.com.cn/en/4x/api.html#res.end) | 结束响应过程。                                         |
| [res.json（）](http://www.expressjs.com.cn/en/4x/api.html#res.json) | 发送JSON响应。                                         |
| [res.jsonp（）](http://www.expressjs.com.cn/en/4x/api.html#res.jsonp) | 发送带有JSONP支持的JSON响应。                          |
| [res.redirect（）](http://www.expressjs.com.cn/en/4x/api.html#res.redirect) | 重定向请求。                                           |
| [res.render（）](http://www.expressjs.com.cn/en/4x/api.html#res.render) | 渲染视图模板。                                         |
| [res.send（）](http://www.expressjs.com.cn/en/4x/api.html#res.send) | 发送各种类型的响应。                                   |
| [res.sendFile（）](http://www.expressjs.com.cn/en/4x/api.html#res.sendFile) | 将文件作为八位字节流发送。                             |
| [res.sendStatus（）](http://www.expressjs.com.cn/en/4x/api.html#res.sendStatus) | 设置响应状态代码，并将其字符串表示形式发送为响应正文。 |

```js
//获取请求的路由规则
app.get("/response", (req, res) => {
  	//1. express 中设置响应的方式兼容 HTTP 模块的方式
  	res.statusCode = 404;
  	res.statusMessage = 'xxx';
  	res.setHeader('abc','xyz');
  	res.write('响应体');
  	res.end('xxx');
  
    //2. express 的响应方法
  	res.status(500); //设置响应状态码
  	res.set('xxx','yyy');//设置响应头
  	res.send('中文响应不乱码');//设置响应体
  	//连贯操作
  	res.status(404).set('xxx','yyy').send('你好朋友')
  	
    //3. 其他响应
  	res.redirect('http://atguigu.com')//重定向
  	res.download('./package.json');//下载响应
  	res.json();//响应 JSON
  	res.sendFile(__dirname + '/home.html') //响应文件内容
});
```



## 五、express 中间件

### 1. 什么是中间件

`中间件（Middleware）本质是一个回调函数`，一个中间件处理完，再传递给下一个中间件。App实例在运行过程中，会调用一系列的中间件。每个中间件可以从App实例，接收三个参数，依次为`request对象（代表HTTP请求）`、`response对象（代表HTTP回应）`，`next回调函数（代表下一个中间件）`。每个中间件都可以对HTTP请求（request对象）进行加工，并且决定是否调用next方法，将request对象再传给下一个中间件。

### 2. 中间件的作用

`中间件的作用` 就是 `使用函数封装公共操作，简化代码`

### 3. 中间件的类型

- 全局中间件
-  路由中间件

### 4. 定义全局中间件

`每一个请求` 到达服务端之后 `都会执行全局中间件函数`

#### 声明中间件函数

```js
let recordMiddleware = function(request,response,next){
  //实现功能代码
  //.....
    
  //执行next函数(当如果希望执行完中间件函数之后，仍然继续执行路由中的回调函数，必须调用next)
  next();
}
```

![08_express框架](./images/Middleware.jpg)

应用中间件

```js
app.use(recordMiddleware)
```

声明时可以直接将匿名函数传递给 `use`

```js
app.use(function (request, response, next) {
  	console.log('定义第一个中间件');
    next();
})
```



#### 多个全局中间件

express 允许使用 app.use() 定义多个全局中间件

```js
app.use(function (request, response, next) {
  	console.log('定义第一个中间件');
    next();
})
app.use(function (request, response, next) {
  	console.log('定义第二个中间件');
    next();
})
```



#### 定义路由中间件

如果<span style="color:red">只需要对某一些路由进行功能封装</span>，则就需要路由中间件

调用格式如下：

```js
app.get('/路径',`中间件函数`,(request,response)=>{

});

app.get('/路径',`中间件函数1`,`中间件函数2`,(request,response)=>{

});
```



### 5. 静态资源中间件

express 内置处理静态资源的中间件

```js
//引入express框架
const express = require('express');
//创建服务对象
const app = express();

//静态资源中间件的设置，将当前文件夹下的public目录作为网站的根目录
//当然这个目录中都是一些静态资源
app.use(express.static('./public')); 

//如果访问的内容经常变化，还是需要设置路由
//但是，在这里有一个问题，如果public目录下有index.html文件，单独也有index.html的路由
//则谁书写在前，优先执行谁
app.get('/index.html',(request,response)=>{
	respsonse.send('首页');
});
//监听端口
app.listen(3000,()=>{
	console.log('3000 端口启动....');
});
```

> 注意事项:
>
> 1. index.html 文件为默认打开的资源
> 2. 如果静态资源与路由规则同时匹配，谁先匹配谁就响应
> 3. 路由响应动态资源，静态资源中间件响应静态资源

### 6. 获取请求体数据

Express 自从 4.16.0 版本开始，内置了 body 解析，我们只需要将内置的中间件引入，就可以在req的对象上添加body。

**使用方法:**

```js
const express = require('express');

const app = express();
// 解析 JSON 格式的请求体的中间件
app.use(express.json())
// 解析 querystring 格式请求体的中间件
app.use(express.urlencoded({ extended: false }))
```

使用 `request.body` 来获取请求体数据

```js
app.post('/login', (request,response)=>{
	//获取请求体数据
	//console.log(request.body);
	//用户名
	console.log(request.body.username);
 	//密码
  	console.log(request.body.userpass);
  	response.send('获取请求体数据');
});
```

获取到的请求体数据：

```js
[Object: null prototype] { username: 'admin', userpass: '123456' }
```



## 六、Router

### 1. 什么是 Router

express 中的 Router 是一个完整的中间件和路由系统，可以看做是一个小型的 app 对象。

### 2. Router 作用

对路由进行模块化，更好的管理路由

### 3. Router 使用

创建独立的 JS 文件（homeRouter.js）

```js
//1. 导入 express
const express = require('express');

//2. 创建路由器对象
const router = express.Router();

//3. 在 router 对象身上添加路由
router.get('/', (req, res) => {
	res.send('首页');
})

router.get('/cart', (req, res) => {
	res.send('购物车');
});

//4. 暴露
module.exports = router;
```

主文件

```js
const express = require('express');

const app = express();
//5.引入子路由文件
const homeRouter = require('./routes/homeRouter');
//6.设置和使用中间件
app.use(homeRouter);

app.listen(3000,()=>{
	console.log('3000 端口启动....');
})
```

  

## 七、EJS 模板引擎

<strong style="color: red">在服务端进行网页与数据的拼接</strong>

### 1. 什么是模板引擎

模板引擎是分离 <span style="color:red">用户界面和业务数据</span> 的一种技术

### 2. 什么是 EJS

EJS 是一个高效的 Javascript 的模板引擎
官网: https://ejs.co/
中文站： https://ejs.bootcss.com/

### 3. EJS 初体验

#### 下载安装EJS

```shell
npm i ejs 
```

#### 代码示例

```js
//1.引入ejs
const ejs = require('ejs');

//2.定义数据
let person = ['张三','李四','王二麻子'];

//3.ejs解析模板返回结构
//<%= %> 是ejs解析内容的标记，作用是输出当前表达式的执行结构
//"<%= %>"可以直接输出变量或表达式的值，变量或表达式的值将作为一个字符串在浏览器中输出。
let html = ejs.render(‘<%= person.join(",") %>’, {person:person});
//4.输出结果
console.log(html);
```



### 4. EJS 常用语法

执行JS代码

```ejs
<% code %>
```

输出转义的数据到模板上

```js
<%= code %>
```

输出非转义的数据到模板上

```js
<%- code %>
```

```ejs
<% '脚本' 标签，用于流程控制，无输出。
<%_ 删除其前面的空格符
<%= 输出数据到模板（输出是转义 HTML 标签）
<%- 输出非转义的数据到模板
<%# 注释标签，不执行、不输出内容
<%% 输出字符串 '<%'
%> 一般结束标签
-%> 删除紧随其后的换行符
_%> 将结束标签后面的空格符删除
```

### 5. 在express中使用ejs

```js
// 导入 express
const express = require('express')
const path = require('path')
// 创建应用对象
const app = express()

// 1. 设置模板引擎
app.set('view engine', 'ejs')  // pug  twing
// 2. 设置模板文件的存放位置
// 模板文件: 具有模板语法内容的文件
app.set('views', path.resolve(__dirname, './views'))

// 创建路由
app.get('/home', (req, res) => {
  // 3. render 响应
  // res.render('模板的文件名','数据')
  let title = 'Hello World'
  res.render('home', { title })
  // 4. 会去找views目录下的home.ejs文件
})

// 监听端口，启动服务
app.listen(3000, () => {
  console.log('服务器已启动~~~~')
})
```

`views/home.ejs`

```ejs
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <h2>
    <%=title %>
  </h2>
</body>

</html>
```

## 八、express脚手架

### 1. 安装express-generator

```sh
npm i -g express-generator
```

可通过express -h查看命令行的指令含义

```sh
express -h
```

```sh
Options:
    --version        输出版本号
-e, --ejs            添加对 ejs 模板引擎的支持
    --pug            添加对 pug 模板引擎的支持
    --hbs            添加对 handlebars 模板引擎的支持
-H, --hogan          添加对 hogan.js 模板引擎的支持
-v, --view <engine>  添加对视图引擎（view） <engine> 的支持 (ejs|hbs|hjs|jade|pug|twig|vash) （默认是 jade 模板引擎）
    --no-view        创建不带视图引擎的项目
-c, --css <engine>   添加样式表引擎 <engine> 的支持 (less|stylus|compass|sass) （默认是普通的 css 文件）
    --git            添加 .gitignore
-f, --force          强制在非空目录下创建
-h, --help           输出使用方法
```

### 2. 创建应用

```sh
express -e myapp
```

进入app，并安装依赖

```sh
cd myapp
npm i
```

此时，myapp文件夹下的结构如下所示：

```
myapp
 ├── bin
 │   └── www
 │
 ├── node_modules
 │
 ├── public
 │   ├── images
 │   ├── javascripts
 │   └── stylesheets
 │       └── style.css
 ├── routes
 │   ├── index.js
 │   └── users.js
 ├── views
 │   ├── error.ejs
 │   └── index.ejs
 ├── package.json
 └── app.js
```

- bin: 启动目录，里面包含了一个启动文件www ，默认监听端口是 3000 (直接node www执行即可)
- node_modules：依赖的模块包
- public：存放静态资源
- routes：路由操作
- views：存放ejs模板引擎
- app.js：主文件
- package.json：项目描述文件

我们后续主要对`routes（路由）、views（模板）、public（静态资源）`作修改。