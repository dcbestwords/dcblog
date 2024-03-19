---
title: 展示图效果记录
---

## VUE中动态添加背景图

### 1. 动态添加类

- 数组的方式动态绑定类名

  ```vue
  <div class="container">
      <div 
           class="panel" 
           v-for="(pic, index) in picObj" :key="index" 
           :class="bgImg[index]"
           @click="changeState(index)"
           :class="{active: isActive === index}"
           >
          <h3>{{pic.title}}</h3>
      </div>
  </div>
  ```

- 定义类名映射数组

  ```js
  data() {
    return {
      bgImg: ['bg-img0', 'bg-img1', 'bg-img2','bg-img3','bg-img4'],
    };
  },
  ```

- 在style中设置背景图

  ```css
  .bg-img0 {
    background: url(../assets/images/card0.png) center no-repeat;
  }
  .bg-img1 {
    background: url(../assets/images/card1.png) center no-repeat;
  }
  .bg-img2 {
    background: url(../assets/images/card2.png) center no-repeat;
  }
  .bg-img3 {
    background: url(../assets/images/card3.png) center no-repeat;
  }
  .bg-img4 {
    background: url(../assets/images/card4.png) center no-repeat;
  }
  
  ```

### 2. style设置属性值

- 创建背景图模板

  ```vue
  <div class="container">
      <div 
           class="panel" 
           v-for="(pic, index) in picObj" :key="index" 
           :style="`background-image: url(${pic.url})`"
           @click="changeState(index)"
           :class="{active: isActive === index}"
           >
          <h3>{{pic.title}}</h3>
      </div>
  </div>
  ```

- 定义每幅图片的标题和路径

  ```js
  data() {
      return {
          picObj:[
              {title:'Explore The World',url:require('../assets/img/card1.png')},
              {title:'Wild Forest',url:require('../assets/img/card2.png')},
              {title:'Sunny Beach',url:require('../assets/img/card3.png')},
              {title:'City on Winter',url:require('../assets/img/card4.png')},
              {title:'Mountains - Clouds',url:require('../assets/img/card5.png')},
          ],
          // 用index来表明此时active的索引
          isActive: 0
      }
  },
  ```

  > 此处必须以`require`的方式引入，否则项目编译完渲染的时候路径有问题。
  >
  > ![image-20221221210238635](./images/path.png)

## 二、jquery版

```js
$('.panel').click(function() {
    $('.panel').removeClass('active');
    $(this).addClass('active');
});
```

