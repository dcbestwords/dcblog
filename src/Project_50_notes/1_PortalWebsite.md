---
title: 门户网站记录
---

## 一、HTML

### 1.img标签

`<img>`标签为行盒，但同时可以设置`width`和`height`，因为它属于可替换元素，可替换元素一般具有内在尺寸，当不指定`width`和`height`，就按照其内在尺寸进行显示。

因为`<img>`是一种类似text的标签元素，在结束的时候，会在末尾加上一个空白符（匿名文本），而其为行盒，默认的`vertical-align`为`baseline` ，会导致图片与父元素下边界并没有对齐，当下面的元素接着排列时会出现白边。

![image-20221217175826457](./images/img.png)

解决方式如下：

- `vertical-align`设置为除`baseline`以外的任意属性（常用）
- `display: block`（常用），但同时因为变为块盒，`text-align:center；`不再生效。

我们常常设置`<a>`和`<img>`为`display：inline-block`，比起默认的行盒，它会**保留垂直方向上的布局**（行盒设置的垂直方向上的padding和margin不起作用），可以设置其宽高；比起块盒，**它不会独占一行**。我们常使用这种方式去完成**导航**的布局。

> html

```html
<ul class="nav">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About Us</a></li>
  <li><a href="#clients">Our Clients</a></li>  
  <li><a href="#contact">Contact Us</a></li>
</ul>
```

> css

```css
.nav {
  background-color: yellow; 
  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0;
}

.nav li {
  display: inline-block;
  font-size: 20px;
  padding: 20px;
}
```

> 效果

![image-20221217183814698](./images/inline-block.png)

## 二、CSS

### 1. 100%和auto的区别

当我们对一个元素设置`width:100%`或`height:100%`时，实际渲染的宽高为**包含块内容区**的宽高，当元素开启绝对定位后，它的包含块为离它最近的开启了定位的父元素，如果没有定位父元素会直接相对于body进行设置。

而根据css的盒模型可知，当不设置`width`时，`width`默认值为auto ，其值会自动调整以使其满足水平布局的要求，即：width=父元素内容区域-margin(左右)-border(左右)-padding(左右)。

### 2. 光标类型cusor

cusor属性设置光标的类型，在鼠标指针悬停在元素上时显示相应样式。

<iframe width="680" height="375" src="https://interactive-examples.mdn.mozilla.net/pages/css/cursor.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

- 除上述外，常用的属性值还有pointer，显示为小手状，或者也可以自行指定图片进行显示。

  ```css
  cursor:  url(cursor2.png) 2 2, pointer;
  ```

### 3. 3D效果的实现

- `transform-style`设置元素的子元素是位于 3D 空间中还是平面中。
  - 可选值：flat、preserve-3d
  - 如果选择平面，元素的子元素将不会有 3D 的遮挡关系。
- `perspective`指定观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果`。`
- `backface-visibility` 指定当元素背面朝向观察者时是否可见。
  - 可选值：visible、hidden

## 三、JS

### 1. 节流

> 节流策略

```js
const throttle = (fn, time) => {
    let flag = true;
    return function () {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            flag = true;
        }, time);
    }
}
```

### 2. 与位置有关的属性

> 宽、高属性

- `clientWidth、clientHeight`
  - 这两个属性可以获取元素的可见宽度和高度
  - 这些属性都是不带px的，返回都是一个数字，可以直接进行计算
  - 会获取元素宽度和高度，包括内容区和内边距
  - 这些属性都是只读的，不能修改
  - `Width = width + padding`
- `offsetWidth、offsetHeight`
  - 获取元素的整个的宽度和高度，包括内容区、内边距和边框（border-box的宽度）

> 定位元素与偏移

- `offsetParent`

  - 可以用来获取当前元素的定位父元素

  - 会获取到离当前元素最近的开启了定位的祖先元素,如果所有的祖先元素都没有开启定位，则返回body

  - 当前元素的定位为fixed

    - offsetParent:null（非火狐）
    - offsetParent:body（火狐）

    当前元素的定位不为fixed

    - 父级没有定位 ==> offsetParent:body
    - 父级有定位 ==> offsetParent:定位父级

- `offsetLeft、offsetTop`

  - 当前元素相对于其**定位父元素**的水平(垂直)偏移量

> 滚动条属性

- `scrollWidth、scrollHeight`
  - 可以获取元素整个滚动区域的宽度和高度
- `scrollLeft、scrollTop`
  - 可以获取水平滚动条(垂直滚动条)滚动的距离
  - 当满足`scrollHeight - scrollTop == clientHeight`,说明垂直滚动条滚动到底了
  - 当满足`scrollWidth - scrollLeft == clientWidth`,说明水平滚动条滚动到底

> 鼠标在页面中的位置

- `clientX、clientY`
  - 可以获取鼠标相对于视口的x、y坐标
- `pageX、pageY`
  - 可以获取元素相对于当前页面的x、y坐标
- `screenX、screenY`
  - 可以获取元素相对于屏幕的x、y坐标

> 元素在页面中的位置

- `getBoundingClientRect()`
  - 元素的大小及其相对于**视口**的位置
- `getBoundingClientRect + 滚动条滚动时元素滚动的距离(window.scrollX)`
  - 元素相对于body的**绝对位置**

### 3. 事件

#### 鼠标的移入移出事件

- `mouseover`与`mouseout`
  - 当鼠标离开元素整体和内部部分都会触发
- `mouseenter`与`mouseleave` 
  - 只有整体移入移出会触发

#### ontransitionend

- `transitionend` 事件的事件处理函数，在某个 [CSS transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions) 完成时触发。