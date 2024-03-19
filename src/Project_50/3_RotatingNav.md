---
title: 旋转导航动画
order: 3
---

::: vue-demo 旋转导航动画

```vue
<template>
    <div class="bc">
        <div class="container" :class="{'show-nav':isActive}">
            <div class="circle-container">
                <div class="circle">
                    <button @click="isActive=false" id="close">
                        <i class="fas fa-times"></i>
                    </button>
                    <button @click="isActive=true" id="open">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>

            <div class="content">
                <h1>Amazing Article</h1>
                <small>Florin Pop</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores
                    cupiditate,
                    maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus,
                    illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia
                    harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non,
                    tempore
                    cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor
                    dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe
                    voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias
                    fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.</p>

                <h3>My Dog</h3>
                <img src="../assets/img/dog.png"
                    alt="doggy" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel
                    consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid.
                    Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit
                    deserunt
                    qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus
                    asperiores
                    explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum
                    odio,
                    magnam esse. Aperiam?</p>
            </div>
        </div>

        <nav>
            <ul>
                <li><i class="fas fa-home"></i><a href="#"> Home</a></li>
                <li><i class="fas fa-user-alt"></i><a href="#"> About</a></li>
                <li><i class="fas fa-envelope"></i><a href="#"> Contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'RotatingNav',
    data() {
        return {
            isActive:false,
        }
    },
}
</script>

<style  lang="less"  scoped>
* {
    box-sizing: border-box;
    // margin: 0;
    // padding: 0;
}

.bc {
    background-color: #333;
    color: #222;
    overflow: hidden;
    position:relative;
}

.container {
    background-color: #fafafa;
    // 更改变形的原点(当前元素控件的原点)
    transform-origin: top left;
    transition: transform 0.5s linear;
    
    width: 100%;
    min-height: 70vh;
    padding: 50px;

    position:relative;
    //点击ui时将整个页面旋转
    &.show-nav{
        transform: rotate(-20deg);
        .circle{
            //将ui切换为close
            transform: rotate(-70deg);
        }
        & + nav li {
            transform: translateX(0);
            transition-delay: 0.3s;
        }
    }
}

.circle-container {
    position: absolute;
    top: -100px;
    left: -100px;
    .circle {
        // 圆形ui
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #ff7979;
        position: relative;
        transition: transform 0.5s linear;

        button {
            cursor: pointer;
            position: absolute;
            top: 50%;
            left: 50%;

            //等同于圆的半径长度 
            height: 100px;
            border: 0;
            background: transparent;
            font-size: 26px;
            color: #fff;

            &#open {
                left: 63%;
            }

            &#close {
                top: 60%;
                transform-origin: top left;
                // 将关闭ui移除视野
                transform: rotate(90deg);
            }
        }
    }
}

nav{
    //固定定位是一种特殊的 绝对定位，会脱离文档流
    position: absolute;
    bottom: 40px;
    left: 0;
    z-index: 100;
    ul{
        list-style-type: none;
        padding-left: 30px;
        li{
            //文字全部显示大写
            text-transform: uppercase;
            //图标颜色 
            color:#fff;
            margin: 40px 0;
            transform: translateX(-100%);
            //淡入淡出效果
            transition: transform 0.4s ease-in;
            i{
                font-size: 20px;
                margin-right: 10px;
            }
            &:nth-child(2){
                margin-left: 15px;
                transform: translateX(-150%);
            }
            &:nth-child(3){
                margin-left: 30px;
                transform: translateX(-200%);
            }
            a{
                color:#fafafa;
                text-decoration: none;
                transition: all 0.5s;
                &:hover{
                    color:#ff7979;
                    font-weight: bold;
                }
            }
        }
    }
}

//文本区 
.content {
    max-width: 1000px;
    margin: 50px auto;
    img{
        max-width: 100%;
    }
    small {
        color: #555;
        font-style: italic;
    }
    p {
        color: #333;
        line-height: 1.5;
    }
}
</style>
```



:::
