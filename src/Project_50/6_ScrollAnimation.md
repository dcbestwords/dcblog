---
title: 滚动动画
order: 6
---

::: vue-demo 滚动动画

```vue
<template>
    <div class="container">
        <h1>Scroll to see the animation</h1>
        <div ref="box" class="box" v-for="(Content, index) in contentNum" :key="index">
            <h2>Content{{index+1}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ScrollAnimation',
        data() {
            return {
                contentNum:10
            }
        },
        methods: {
            checkBoxes(){
                const triggerBottom = window.innerHeight / 5 * 4;
                this.$refs.box.forEach(box =>{
                    const boxTop = box.getBoundingClientRect().top
                    if(boxTop < triggerBottom) {
                        box.classList.add('show')
                    } else {
                        box.classList.remove('show')
                    }
                })
            }
        },
        mounted() {
            this.checkBoxes()
            window.addEventListener('scroll',this.checkBoxes)
        },
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    .container{
        font-family: 'Roboto', sans-serif;
        background-color: #efedd6;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;   
        overflow-x: hidden;    
    }
    h1{
        margin: 10px;
    }
    .box{
        width: 400px;
        height: 200px;
        background-color: steelblue;
        color: #fff;
        border-radius: 10px;
        text-align: center;
        margin: 10px;
        box-shadow: 2px 4px 5px rgba(0,0,0,.3);
        transform: translateX(400%);
        transition: transform 0.4s ease;
    }
    /* 将偶数的内容块设置为从左边出现 */
    .box:nth-of-type(even){
        transform: translateX(-400%);
    }

    .box.show{
        transform: translateX(0);
    }

    .box h2{
        font-size: 45px;
        line-height: 200px;
    }
</style>
```



:::