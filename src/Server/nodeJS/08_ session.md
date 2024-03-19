# 会话控制

## 一、介绍

> 所谓会话控制就是 ==对会话进行控制==

HTTP 是一种无状态的协议，它没有办法区分多次的请求是否来自于同一个客户端， ==无法区分用户== 

而产品中又大量存在的这样的需求，所以我们需要通过  ==会话控制== 来解决该问题

常见的会话控制技术（授权）有三种：

- `cookie`
- `session`
- `token`

> **什么是授权（Authorization）**

用户授予第三方应用访问该用户某些资源的权限

- 你在安装手机应用的时候，APP 会询问是否允许授予权限（访问相册、地理位置等权限）
- 你在访问微信小程序时，当登录时，小程序会询问是否允许授予权限（获取昵称、头像、地区、性别等个人信息）

> **什么是凭证（Credentials）**

**实现认证和授权的前提是需要一种媒介（证书） 来标记访问者的身份**

在互联网应用中，一般网站（如掘金）会有两种模式，游客模式和登录模式。游客模式下，可以正常浏览网站上面的文章，一旦想要点赞/收藏/分享文章，就需要登录或者注册账号。当用户登录成功后，服务器会给该用户使用的浏览器颁发一个令牌（`token`），这个令牌用来表明你的身份，每次浏览器发送请求时会带上这个令牌，就可以使用游客模式下无法使用的功能。

## 二、cookie

### 1. cookie 是什么

- **cookie 存储在客户端**： cookie 是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。
- **cookie 是不可跨域的**： 每个 cookie 都会绑定单一的域名，无法在别的域名下获取使用，**一级域名和二级域名之间是允许共享使用的**（靠的是 domain）

| 域名             | cookie                        |
| ---------------- | ----------------------------- |
| www.baidu.com    | a=100; b=200                  |
| www.bilibili.com | xid=1020abce121; hm=112411213 |
| jd.com           | x=100; ocw=12414cce           |

| 属性                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name=value`                                                 | 键值对，设置 `Cookie` 的名称及相对应的值，都必须是字符串类型。如果值为 Unicode 字符，需要为字符编码。如果值为二进制数据，则需要使用 `BASE64` 编码。 |
| `domain`                                                     | 指定 `cookie` 所属域名，默认是当前域名                       |
| `path`                                                       | 指定 cookie 在哪个路径（路由）下生效，默认是 '/'。           |
| 如果设置为 /abc，则只有 /abc 下的路由可以访问到该 cookie，如：/abc/read。 |                                                              |
| `maxAge`                                                     | cookie 失效的时间，单位秒。如果为整数，则该 cookie 在 maxAge 秒后失效。如果为负数，该 cookie 为临时 cookie ，关闭浏览器即失效，浏览器也不会以任何形式保存该 cookie 。如果为 0，表示删除该 cookie 。默认为 -1。- 比 expires 好用。 |
| `expires`                                                    | 过期时间，在设置的某个时间点后该 cookie 就会失效。           |
| 一般浏览器的 cookie 都是默认储存的，当关闭浏览器结束这个会话的时候，这个 cookie 也就会被删除 |                                                              |
| `secure`                                                     | 该 cookie 是否仅被使用安全协议传输。安全协议有 HTTPS，SSL等，在网络上传输数据之前先将数据加密。默认为false。 |
| 当 secure 值为 true 时，cookie 在 HTTP 中是无效，在 HTTPS 中才有效 |                                                              |
| `httpOnly`                                                   | 如果给某个 cookie 设置了 httpOnly 属性，则无法通过 JS 脚本 读取到该 cookie 的信息，但还是能通过 Application 中手动修改 cookie，所以只是在一定程度上可以防止 XSS 攻击，不是绝对的安全 |

### 2. cookie 的特点

浏览器向服务器发送请求时，会自动将 `当前域名下` 可用的 cookie 设置在请求头中，然后传递给服务器,这个请求头的名字也叫 `cookie` ，所以将  ==cookie 理解为一个 HTTP 的请求头也是可以的==

![11_会话控制](./images/cookie_1.jpg)

- cookie保存在浏览器本地，只要不过期关闭浏览器也会存在。
- 正常情况下cookie不加密，用户可轻松看到
- 用户可以删除或者禁用cookie
- cookie可以被篡改
- cookie可用于攻击
- cookie存储量很小，大小一般是4k

### 3. cookie 的运行流程

填写账号和密码校验身份，校验通过后下发 cookie

![image-20230327214116490](./images/cookie_2.png)
有了 cookie 之后，后续向服务器发送请求时，就会 ==自动携带 cookie==

![image-20230327214554199](./images/cookie_3.png)

### 4. 浏览器操作 cookie

浏览器操作 cookie 的操作，使用相对较少，大家了解即可

1. 禁用所有 cookie
2. 删除 cookie
3. 查看 cookie

### 5. cookie 的代码操作

express 中可以使用 `cookie-parser` 进行处理

**安装 cookie-parser**

```sh
npm i cookie-parser
```

**使用**

```js
const express =require('express');

//2. 引入 cookieParser 包
const cookieParser = require('cookie-parser');
  
const app = express();

//3. 设置 cookieParser 中间件
app.use(cookieParser());
  
//4-1 设置 cookie
app.get('/set-cookie', (request, response) => {
	// 不带时效性，会在浏览器关闭的时候，销毁
	response.cookie('username','wangwu');
  	// 带时效性
  	response.cookie('email','23123456@qq.com', {maxAge: 5*60*1000 });
  	//响应
  	response.send('Cookie的设置');
});

//4-2 读取 cookie
app.get('/get-cookie', (request, response) => {
    //读取 cookie
    console.log(request.cookies);
  	//响应体
  	response.send('Cookie的读取');
});

//4-3 删除cookie
app.get('/delete-cookie', (request, response) => {
	//删除
	response.clearCookie('username');
	//响应
	response.send('cookie 的清除');
});

//4. 启动服务
app.listen(3000, () => {
	console.log('服务已经启动....');
});
```

> 不同浏览器中的 cookie 是相互独立的，不共享

### 6. cookie加密

cookie 的值是通过加密( ==签名== )而不是加密(加密算法)得到的。签名仅仅是在原始的值基础上用一个密钥计算得到的一段字符串，用来防止cookie被篡改。即对原始值进行哈希签名后，再将签名信息拼接在原始值后面形成一个新的值作为cookie的值。例如：`name=s%3Azhangshan.6YpZuibNaHr0Ye827gn%2FZsWJ7y18MzB6gEWkFgCJCDc`，其中包含的签名信息是：`.6YpZuibNaHr0Ye827gn%2FZsWJ7y18MzB6gEWkFgCJCDc`。当客户端主动更改了cookie值时，例如将`name`的值从`zhangshan`改为`lisi`，那么此时得到的cookie的值为`name=s%3Alisi.6YpZuibNaHr0Ye827gn%2FZsWJ7y18MzB6gEWkFgCJCDc`，但此时**签名信息并没有发生任何改变**。而服务端内部根据原始的值和签名密钥重新计算出来的签名信息是针对老的原始值计算得到的。因此，服务端在解析这个cookie时会重新计算一遍签名信息，如果这个计算结果与原cookie中的签名信息不一样，就说明这个cookie已经被篡改过了。因此，签名信息的目的就是`为了防止cookie被篡改导致的安全问题`。

`cookie-parser` 提供了签名功能，我们只需要在`res.cookie`中对`option`对象的`signed`属性设置设置成`true`即可。

```js
const express = require("express");
const cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser('secret'));//签名 （加密） 要指定秘钥 ，什么名字都行，列如："xiaoxuesheng"

app.get("/",function(req,res){
	res.send("主页");
});

//获取cookie
//当设置signed为true时，获取cookie时使用req.signedCookies
app.use(function(req,res,next){
	console.log(req.signedCookies.name);
	next();
});

//设置cookie
app.use(function(req,res,next){
	console.log(res.cookie("name","zhangsan",{httpOnly: true,maxAge: 200000,signed: true}));
	res.end("cookie为："+req.signedCookies.name);
});

app.listen(3000);
```

> 使用 cookie 时需要考虑的问题

- 因为存储在客户端，容易被客户端篡改，使用前需要验证合法性
- 不要存储敏感数据，比如用户密码，账户余额
- 使用 `httpOnly` 在一定程度上提高安全性
- 尽量减少 cookie 的体积，能存储的数据量不能超过 4kb
- 设置正确的 domain 和 path，减少数据传输
- cookie 无法跨域（默认，通过设置SameSite属性可以实现跨域）
- 一个浏览器针对一个网站最多存 20 个Cookie，浏览器一般只允许存放 300 个Cookie
- 移动端对 cookie 的支持不是很好，而 session 需要基于 cookie 实现，所以移动端常用的是 token

## 三、session

### 1. session 是什么

 `Session`是另一种记录客户状态的机制，不同的是`Cookie`保存在 ==客户端浏览器== 中，而`Session`保存在 ==服务器上== 。客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上。这就是Session。客户端浏览器再次访问时只需要从该Session中查找该客户的状态就可以了。==session是一种特殊的cookie== 。cookie是保存在客户端的，而session是保存在服务端。

### 2. 为什么要用session?

由于cookie 存在客户端，而且它本身存储的尺寸大小也有限，最关键是用户可以是可见的，并可以随意的修改，很不安全。那如何又要安全，又可以方便的全局读取信息呢？于是，这个时候，一种新的存储会话机制：session 诞生了。

![](./images/session.png)

> 不在`cookie`中存取敏感信息，转而在服务器端建立映射表，将生成的`key`在`cookie`中传输，服务器拿到key后在映射表中查找来确定用户的登录状态。

### 3. session 运行流程

填写账号和密码校验身份，校验通过后创建 `session 信息`，然后将 `session_id` 的值通过响应头返回给浏览器

![image-20230327222810111](./images/session_2.png)

有了cookie，下次发送请求时会自动携带cookie，服务器通过 `cookie` 中的 `session_id` 的值确定用
户的身份

![image-20230327223550720](./images/session_3.png)

### 4. session 的代码操作

express 中可以使用 `express-session` 对 session 进行操作

**安装express-session包**

```sh
npm i express-session
```

**使用**

```js
const express = require('express');
 
//2. 引入 express-session connect-mongo
const session = require("express-session");
const MongoStore = require('connect-mongo');

const app = express();

//3. 设置 session 的中间件
//app.use(session(options));
app.use(session({
	name: 'sid', //设置cookie的name，默认值是：connect.sid
  	genid: req => genuuid(),  // 默认使用uid-safe这个库自动生成id
	secret: 'atguigu', //参与加密的字符串（又称签名）  加盐
	saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
	resave: true, //是否在每次请求时重新保存session
    //自动在mongodb中创建一个数据库存储session，并且过期时间也会同步刷新
	store: MongoStore.create({
		mongoUrl: 'mongodb://127.0.0.1:27017/project' //数据库的连接配置
        ttl: 1000 * 60 * 10 // 过期时间
	}),
	cookie: {
		httpOnly: true, // 开启后前端无法通过 JS 操作
		maxAge: 1000 * 300 // 这一条 是控制 sessionID 的过期时间的！！！
	},
}))

// 授权中间件，在这个之后的路由，除了错误处理，都是需要授权的。
app.use((req, res, next) => {
  //排除login相关的路由和接口（因为login就不需要重定向到login了）
  if (req.url.includes("login")) {
    next()
    return
  }
  if (req.session.user) {
    //重新设置以下sesssion
    req.session.mydate = Date.now()//加这个设置才能访问刷新过期时间
    next()
  } else {
    //是接口, 就返回错误码
    //不是接口，就重定向（因为ajax请求是不能重定向的，只能前端接收错误码做处理）
    req.url.includes("api")
      ? res.status(401).json({ ok: 0 }) : res.redirect("/login")
  }
})

//创建 session  session的设置
app.get('/login', (req, res) => {
    //设置session
    req.session.username = 'zhangsan';
    req.session.email = 'zhangsan@qq.com'
    res.send('登录成功');
})

//获取 session
app.get('/home', (req, res) => {
    console.log(req.session.username);
    // 检测 session 是否存在用户数据
    if (req.session.username) {
    	res.send(`你好 ${req.session.username}`);
    }else{
    	res.send('登录 注册');
    }
})

//销毁 session
app.get('/logout', (req, res) => {
    //销毁session
    // res.send('设置session');
    req.session.destroy(() => {
    	res.send('成功退出');
	});
});
app.listen(3000, () => {
	console.log('服务已经启动, 端口 ' + 3000 + ' 监听中...');
});
```

![](./images/session_1.png)

### 5. session 和 cookie 的区别

cookie 和 session 的区别主要有如下几点：

1. 存在的位置
  - cookie：浏览器端
  - session：服务端
2. 安全性
  - cookie 是以明文的方式存放在客户端的，安全性相对较低
  - session 存放于服务器中，所以安全性 `相对` 较好
3. 网络传输量
  - cookie 设置内容过多会增大报文体积， 会影响传输效率
  - session 数据存储在服务器，只是通过 cookie 传递 id，所以不影响传输效率
4. 存储限制
  - 浏览器限制单个 cookie 保存的数据不能超过 `4K` ，且单个域名下的存储数量也有限制，只支持存字符串数据
  - session 数据存储在服务器中，所以没有这些限制，它可以存任意数据类型

5. 有效期

- Cookie 可设置为长时间保持，比如我们经常使用的默认登录功能。

- Session 一般失效时间较短，客户端关闭（默认情况下）或者 Session 超时都会失效。

## 四、token

### 1. token 是什么

`token` 是服务端生成并返回给 HTTP 客户端的一串加密字符串， `token` 中保存着`用户信息`

token 不属于 http 标准，完全由前后端协商而定，但 cookie 属于 http 标准

### 2. token 的作用

实现会话控制，可以识别用户的身份，主要用于移动端 APP

### 3. token 的工作流程

填写账号和密码校验身份，校验通过后响应 token，token 一般是在响应体中返回给客户端的

![image-20230328135106885](./images/token_1.png)
后续发送请求时，需要`手动`将 token 添加在请求报文中( ==cookie是自动携带的== )，一般是放在请求头中
![image-20230328135122945](./images/token_2.png)

1. 客户端使用用户名跟密码请求登录
2. 服务端收到请求，去验证用户名与密码
3. 验证成功后，服务端会签发一个 `token` 并把这个 `token` 发送给客户端
4. 客户端收到 token 以后，会把它存储起来，比如放在 cookie 里或者 localStorage 里
5. 客户端每次向服务端请求资源的时候需要带着服务端签发的 token。
6. 服务端收到请求，然后去验证客户端请求里面带着的 token ，如果验证成功，就向客户端返回请求的数据

- 每一次请求都需要携带 token，需要把 token 放到 HTTP 的 Header 里
- 基于 token 的用户认证是一种 ==服务端无状态== 的认证方式，服务端不用存放 token 数据。用解析 token 的计算时间换取 session 的存储空间，从而减轻服务器的压力，减少频繁的查询数据库
- token 完全由应用管理，所以它可以避开同源策略

### 4. token 的特点

- 服务端压力更小

  - 数据存储在客户端

- 相对更安全
  - 数据加密
  - 可以避免 CSRF（跨站请求伪造）

- 扩展性更强
  - 服务间可以 ==共享== （session存在服务端，集群中不同服务器之间的session不共享）
  - 增加服务节点更简单

### 5. Token 和 Session 的区别

- `Session` 是一种记录服务器和客户端会话状态的机制，使服务端有状态化，可以记录会话信息。而 Token 是令牌，访问资源接口（API）时所需要的资源凭证。`Token` 使服务端无状态化，不会存储会话信息。
- `Session` 和 `Token` 并不矛盾，作为身份认证 Token 安全性比 Session 好，因为每一个请求都有签名还能防止监听以及重放攻击，而 Session 就必须依赖链路层来保障通讯安全了。如果你需要实现有状态的会话，仍然可以增加 Session 来在服务器端保存一些状态。
- 所谓 Session 认证只是简单的把 User 信息存储到 Session 里，因为 SessionID 的不可预测性，暂且认为是安全的。而 Token ，如果指的是 OAuth Token 或类似的机制的话，提供的是 认证 和 授权 ，认证是针对用户，授权是针对 App 。其目的是让某 App 有权利访问某用户的信息。这里的 Token 是唯一的。不可以转移到其它 App上，也不可以转到其它用户上。Session 只提供一种简单的认证，即只要有此 SessionID ，即认为有此 User 的全部权利。是需要严格保密的，这个数据应该只保存在站方，不应该共享给其它网站或者第三方 App。所以简单来说：如果你的用户数据可能需要和第三方共享，或者允许第三方调用 API 接口，用 Token 。如果永远只是自己的网站，自己的 App，用什么就无所谓了。

## 五、JWT

JWT（JSON Web Token ）是目前最流行的跨域认证解决方案，可用于基于 `token` 的身份验证。

JWT 是为了在网络应用环境间传递声明而执行的一种基于 JSON 的开放标准（RFC 7519）。JWT 的声明一般被用来在身份提供者和服务提供者间传递被认证的- 用户身份信息，以便于从资源服务器获取资源。比如用在用户登录上。

可以使用 HMAC 算法或者是 RSA 的公/私秘钥对 JWT 进行签名。因为数字签名的存在，这些传递的信息是可信的。

### 1. JWT的构成

JWT是由三段信息构成的，将这三段信息文本用.链接一起就构成了Jwt字符串。就像这样:

```gcode
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

第一部分我们称它为头部（header),第二部分我们称其为载荷（payload, 类似于飞机上承载的物品)，第三部分是签证（signature).

#### header

jwt的头部承载两部分信息：

- 声明类型，这里是jwt
- 声明加密的算法 通常直接使用 `HMAC SHA256`

完整的头部就像下面这样的JSON：

```json
{  
    'typ': 'JWT',  
    'alg': 'HS256'
}
```

然后将头部进行base64加密（该加密是可以对称解密的),构成了第一部分.

```gcode
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
```

#### playload

载荷就是存放有效信息的地方。这个名字像是特指飞机上承载的货品，这些有效信息包含三个部分

- 标准中注册的声明
- 公共的声明
- 私有的声明

**标准中注册的声明 (建议但不强制使用) ：**

- iss: jwt签发者
- sub: jwt所面向的用户
- aud: 接收jwt的一方
- exp: jwt的过期时间，这个过期时间必须要大于签发时间
- nbf: 定义在什么时间之前，该jwt都是不可用的.
- iat: jwt的签发时间
- jti: jwt的唯一身份标识，主要用来作为一次性token,从而回避重放攻击。

**公共的声明 ：** 公共的声明可以添加任何的信息，一般添加用户的相关信息或其他业务需要的必要信息.但不建议添加敏感信息，因为该部分在客户端可解密.

**私有的声明 ：** 私有声明是提供者和消费者所共同定义的声明，一般不建议存放敏感信息，因为base64是对称解密的，意味着该部分信息可以归类为明文信息。

定义一个payload:

```json
{  
    "sub": "1234567890",  
    "name": "John Doe",  
    "admin": true
}
```

然后将其进行base64加密，得到Jwt的第二部分。

```gcode
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9
```

#### signature

jwt的第三部分是一个签证信息，这个签证信息由三部分组成：

- header (base64后的)
- payload (base64后的)
- secret

这个部分需要base64加密后的header和base64加密后的payload使用.连接组成的字符串，然后通过header中声明的加密方式进行加盐secret组合加密，然后就构成了jwt的第三部分。

将这三部分用.连接成一个完整的字符串,构成了最终的jwt:

```gcode
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

**注意：secret是保存在服务器端的，jwt的签发生成也是在服务器端的，secret就是用来进行jwt的签发和jwt的验证，所以，它就是你服务端的私钥，在任何场景都不应该流露出去。一旦客户端得知这个secret, 那就意味着客户端是可以自我签发jwt了。**

### 2. JWT 认证流程

首先，前端通过Web表单将自己的用户名和密码发送到后端的接口，这个过程一般是一个POST请求。建议的方式是通过SSL加密的传输(HTTPS)，从而避免敏感信息被嗅探 后端核对用户名和密码成功后，将包含用户信息的数据作为JWT的Payload，将其与JWT Header分别进行Base64编码拼接后签名，形成一个JWT Token，形成的JWT Token就是一个如同lll.zzz.xxx的字符串 后端将JWT Token字符串作为登录成功的结果返回给前端。前端可以将返回的结果保存在浏览器中，退出登录时删除保存的JWT Token即可 前端在每次请求时将JWT Token放入HTTP请求头中的Authorization属性中(解决XSS和XSRF问题) 后端检查前端传过来的JWT Token，验证其有效性，比如检查签名是否正确、是否过期、token的接收方是否是自己等等 验证通过后，后端解析出JWT Token中包含的用户信息，进行其他逻辑操作(一般是根据用户信息得到权限等)，返回结果。

![](./images/JWT.png)

我们可以使用 `jsonwebtoken 包` 来操作 token

```js
//导入 jsonwebtoken
const jwt = require('jsonwebtoken');

//创建 token
// jwt.sign(数据, 加密字符串, 配置对象)
let token = jwt.sign({
    username: 'zhangsan'
}, 'atguigu', {
    expiresIn: 60 //单位是 秒
})

//解析 token
// jwt.verify(token,加密字符串，回调函数)
jwt.verify(token, 'atguigu', (err, data) => {
    if(err){
    	console.log('校验失败~~');
	    return
	}
	console.log(data);// { username: '张三', iat: (创建时间), exp:(过期时间)}
})
```

> 扩展阅读： https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html

### 3. Token 和 JWT 的区别

**相同：**

- 都是访问资源的令牌
- 都可以记录用户的信息
- 都是使服务端无状态化
- 都是只有验证成功后，客户端才能访问服务端上受保护的资源

**区别：**

- **Token**：服务端验证客户端发送过来的 Token 时，还需要查询数据库获取用户信息，然后验证 Token 是否有效。
- **JWT**： 将 Token 和 Payload 加密后存储于客户端，服务端只需要使用密钥解密进行校验（校验也是 JWT 自己实现的）即可，不需要查询或者减少查询数据库，因为 JWT 自包含了用户信息和加密的数据。

## 六、附录

### 1. 本地域名

所谓本地域名就是 <span style="color:red">只能在本机使用的域名</span>，一般在开发阶段使用

#### 操作流程

编辑文件 `C:\Windows\System32\drivers\etc\hosts`

```
127.0.0.1   www.baidu.com
```

如果修改失败，<span style="color:red">可以修改该文件的权限</span>

![11_会话控制](./images/local.jpg)

#### 原理

在地址栏输入 `域名` 之后，浏览器会先进行 DNS（Domain Name System）查询，获取该域名对应的 IP 地
址
请求会发送到 DNS 服务器，可以 `根据域名返回 IP 地址`

可以通过 `ipconfig /all` 查看本机的 DNS 服务器

`hosts` 文件也可以设置域名与 IP 的映射关系，在发送请求前，可以通过该文件获取域名的 IP 地址