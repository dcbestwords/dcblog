---
title: WebSocket
order: 4
---

##  一、WebSocket基础知识

在讲解WebSocket之前，大家首先考虑一下网页中如果出现以下的场景，应该怎么处理？

- 弹幕
- 在线教育
- 股票等金融产品实时报价股
- 体育实况更新
- 视频会议和聊天
- 基于位置的应用
- 抢座
- 抢购页面的库存
- ......

上述场景有一个共同特点——**实时性**

这种对实时性有要求的页面，会带来一些问题

比如下面的聊天场景

![img](./images/chat.jpg)

因为我们的HTTP协议是request(请求)-response(响应)模式,**请求必须在前，响应必须在后**，这就导致了服务器无法「主动」的把消息告诉客户端。

开发者想了很多办法来解决这一问题

当然终极解决方案自然是WebSocket，但了解过去的一些做法、参观前辈们经历的痛苦还是有益的。

### 1. 短轮询 short polling

短轮询是一种 **「话痨式」** 的方式

客户端每隔一小段时间就向服务器请求一次，询问有没有新消息

```
sequenceDiagram
客户端->>服务器: 有新消息吗？
服务器->>客户端: 没有
Note over 客户端,服务器: 一段时间后...
客户端->>服务器: 有新消息吗？
服务器->>客户端: 没有
Note over 客户端,服务器: 一段时间后...
客户端->>服务器: 有新消息吗？
服务器->>客户端: 有，user1对你说：你好
Note over 客户端,服务器: 一段时间后...
客户端->>服务器: 有新消息吗？
服务器->>客户端: 没
Note over 客户端,服务器: 一段时间后...
客户端->>服务器: 有新消息吗？
服务器->>客户端: 没
```

实现短轮询是非常简单的，客户端只需要设置一个计时器不断发送请求即可

这种方案的缺陷是非常明显的：

- 会产生大量无意义的请求
- 会频繁打开关闭连接
- 实时性并不高

### 2. 长轮询 long polling

http 长轮询是服务器收到请求后如果有数据, 立刻响应请求; 如果没有数据就会 hold 一段时间,这段时间内如果有数据立刻响应请求; 如果时间到了还没有数据, 则响应 http 请求;浏览器受到 http 响应后立在发送一个同样 http 请求查询是否有数据;

```
sequenceDiagram
客户端->>+服务器: 有新消息吗？
Note right of 服务器: 没有消息hold,不会响应
Note right of 服务器: 一段时间之后,有消息了
服务器->>-客户端: user1对你说：在吗?
客户端->>+服务器: 有新消息吗？
Note right of 服务器: 没有消息hold,不会响应
Note right of 服务器: 一段时间之后,有消息了
服务器->>-客户端: user1对你说：你好,我是韩梅梅
客户端->>服务器: ......
```

长轮询有效的解决了「话痨问题」，让每一次请求和响应都是有意义的

但长轮询仍然存在问题：

- 客户端长时间收不到响应会导致超时，从而主动断开和服务器的连接

  > 这种情况是可以处理的，在ajax请求因为超时而结束时，立即重新发送请求到服务器
  >
  > 虽然这种做法会让之前的请求变得无意义，但毕竟比短轮询好多了

- 由于客户端可能「过早的」请求了服务器，服务器不得不挂起这个请求直到新消息的出现。这会让服务器长时间的占用资源却没什么实际的事情可做。

### 3. WebSocket

WebSocket是HTML5中新协议、新API，在单个TCP连接上提供全双工的通讯模式。

WebSocket是独立的基于TCP的协议。

WebSocket和HTTP的关系是，WebSocket是基于Http协议的，或者说借用了Http协议来完成一部分握手。WebSocket的握手被翻译成HTTP的升级请求。

下图描述了HTTP与WebSocket之间的简单关系

![img](./images/websocket.jpg)

WebSocket从**协议**上赋予了服务器主动推送消息的能力

![img](./images/websocket_1.jpg)

从上图可以看出：

- WebSocket也是建立在TCP协议之上的，利用的是TCP全双工通信的能力
- 使用WebSocket，会经历两个阶段：握手阶段、通信阶段

虽然优于轮询方案，但WebSocket仍然是有缺点的：

- 兼容性

  WebSocket是HTML5新增的内容，因此古董版本的浏览器并不支持

- 维持TCP连接需要耗费资源

  对于那些消息量少的场景，维持TCP连接确实会造成资源的浪费

  > 为了充分利用TCP连接的资源，在使用了WebSocket的页面，可以放弃ajax，都用WebSocket进行通信，当然这会带来程序设计上的一些问题，需要权衡。

### 4. 握手

> WebSocket协议是一个高扩展性的协议，详细内容会比较复杂，这里仅讲解面试中会问到的握手协议

当客户端需要和服务器使用WebSocket进行通信时，首先会使用**HTTP协议**完成一次特殊的请求-响应，这一次请求-响应就是**WebSocket握手**

在握手阶段，首先由客户端向服务器发送一个请求，请求地址格式如下：

```undefined
# 使用HTTP
ws://yingside.com/path
# 使用HTTPS
wss://yingside.com/path
```

请求头如下：

```undefined
Connection: Upgrade /* hey，后续咱们别用HTTP了，升级吧 */
Upgrade: websocket /* 我们把后续的协议升级为websocket */
Sec-WebSocket-Version: 13 /* websocket协议版本就用13好吗？ */
Sec-WebSocket-Key: YWJzZmFkZmFzZmRhYw== /* 密钥：一二三四五 */
```

服务器如果同意，就应该响应下面的消息

```undefined
HTTP/1.1 101 Switching Protocols /* 换，马上换协议 */
Connection: Upgrade /* 协议升级了 */
Upgrade: websocket /* 升级到websocket */
Sec-WebSocket-Accept: ZzIzMzQ1Z2V3NDUyMzIzNGVy /* 密钥：上山打老虎 */
```

**握手完成，后续消息收发不再使用HTTP，任何一方都可以主动发消息给对方**

![img](./images/websocket_2.jpg)

## 二、面试题

1. webSocket 协议是什么，能简述一下吗？

   > 参考答案：
   >
   > websocket 协议 HTML5 带来的新协议，相对于 http，它是一个持久连接的协议，它利用 http 协议完成握手，然后通过 TCP 连接通道发送消息，使用 websocket 协议可以实现服务器主动推送消息。
   >
   > 首先，客户端若要发起 websocket 连接，首先必须向服务器发送 http 请求以完成握手，请求行中的 path 需要使用`ws:`开头的地址，请求头中要分别加入`upgrade、connection、Sec-WebSocket-Key、Sec-WebSocket-Version`标记
   >
   > 然后，服务器收到请求后，发现这是一个 websocket 协议的握手请求，于是响应行中包含`Switching Protocols`，同时响应头中包含`upgrade、connection、Sec-WebSocket-Accept`标记
   >
   > 当客户端收到响应后即可完成握手，随后使用建立的 TCP 连接直接发送和接收消息。

2. webSocket 与传统的 http 有什么优势

   > 参考答案：
   >
   > 当页面中需要观察实时数据的变化（比如聊天、k 线图）时，过去我们往往使用两种方式完成
   >
   > 第一种是短轮询，即客户端每隔一段时间就向服务器发送消息，询问有没有新的数据
   >
   > 第二种是长轮询，发起一次请求询问服务器，服务器可以将该请求挂起，等到有新消息时再进行响应。响应后，客户端立即又发起一次请求，重复整个流程。
   >
   > 无论是哪一种方式，都暴露了 http 协议的弱点，即响应必须在请求之后发生，服务器是被动的，无法主动推送消息。而让客户端不断的发起请求又白白的占用了资源。
   >
   > websocket 的出现就是为了解决这个问题，它利用 http 协议完成握手之后，就可以与服务器建立持久的连接，服务器可以在任何需要的时候，主动推送消息给客户端，这样占用的资源最少，同时实时性也最高。

3. 前端如何实现即时通讯？

   > 参考答案：
   >
   > 1. 短轮询。即客户端每隔一段时间就向服务器发送消息，询问有没有新的数据
   > 2. 长轮询，发起一次请求询问服务器，服务器可以将该请求挂起，等到有新消息时再进行响应。响应后，客户端立即又发起一次请求，重复整个流程。
   > 3. websocket，握手完毕后会建立持久性的连接通道，随后服务器可以在任何时候推送新消息给客户端

## 三、常用库

`socket.io`、`ws`