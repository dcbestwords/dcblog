---
title: 进度条记录
---

## 一、伪元素画图 

除了用于清除浮动，伪元素还可以简化页面的html标签，使用也很方便，善于使用伪元素可以使页面更加地简洁优雅。

对于那些无关紧要的分隔线、点之类的小元素，我们通常使用伪元素进行绘制，比如本案例中的进度条底色。

- 插入的元素在默认情况下是内联元素。因此，为了给插入的元素赋予高度，填充，边距等等，通常必须显式地定义它是一个块级元素。

> 案例中没有进行设置是因为父元素设置了`display:flex`,其内部元素默认以类块盒排列

我们无法用js获取到这个伪元素，或者增、删、改一个伪元素，所以伪元素的优点体现在——可以用伪元素制造视觉上的效果，但是不会增加JS查DOM的负担，它对JS是透明的。所以即使给页面添加了很多伪元素，也不会影响查DOM的效率。同时，它不是一个实际的html标签，可以加快浏览器加载html文件，对SEO也有帮助。

## 二、vue版

```vue
<template>
    <div class="container">
        <div class="progress-container">
            <div class="progress" :style="{width:progressWidth}"></div>
            <div class="circle"
             :class="{active:index <= activeIndex}"
             v-for="(num, index) in length" :key="index"
            >
                {{num}}
            </div>
        </div>

        <button ref="prev" @click="control(-1)" class="btn" disabled>Prev</button>
        <button ref="next" @click="control(1)" class="btn">Next</button>
    </div>
</template>

<script>
    export default {
        name: 'ProgressSteps',
        data() {
            return {
                length:4,
                activeIndex:0
            }
        },
        computed: {
            progressWidth(){
                return this.activeIndex/(this.length-1)*100+'%'
            }
        },
        methods: {
            control(value){
                this.activeIndex += value
                if (this.activeIndex <= 0) {
                    this.$refs.prev.disabled = true
                }else if(this.activeIndex >= this.length-1){
                    this.$refs.next.disabled = true
                }else{
                    this.$refs.prev.disabled = false
                    this.$refs.next.disabled = false
                }
            }
        },
    }
</script>
```

## 三、jquery版

```js
let currentActive = 1
$('#prev').click(()=>{
    currentActive--;
    if(currentActive<1){
        currentActive=1;
    }
    update();
})

$('#next').click(()=>{
    currentActive++;
    if(currentActive>$('.circle').length){
        currentActive=$('.circle').length;
    }
    update();
})

function update() {
    $('.circle').each((i,circle)=>{
        if(i < currentActive) {
            $(circle).addClass('active')
        } else {
            $(circle).removeClass('active')
        }
    })

    const acLen = $('.active').length

    $(progress).width((acLen - 1) / ($('.circle').length - 1) * 100 + '%') 

    if(currentActive === 1) {
        $('#prev').attr('disabled', true);
    } else if(currentActive === $('.circle').length) {
        $('#next').attr('disabled', true);
    } else {
        $('#prev').attr('disabled', false);
        $('#next').attr('disabled', false);
    }
}
```

