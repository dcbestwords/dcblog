---
title: 进度条
order: 2
---

::: vue-demo 进度条

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
        name: 'Progress-Steps',
        data() {
            return {
                length:4,
                activeIndex:0
            }
        },
        computed: {
            progressWidth(){
                this.activeIndex = this.activeIndex > (this.length - 1)?(this.length - 1):this.activeIndex
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

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container{
        background-color: #1f1f1f;
        margin:0 auto;
        text-align: center;
        height:250px;
        width:740px;
    }

    .progress-container{
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        width: 100%;
        position: relative;
        padding-top: 6rem;
        //蓝色进度条
        .progress{
            background-color: #3498db;
            position: absolute;
            top: 7rem;
            left: 0;
            transform: translateY(-50%);

            height: 4px;
            width: 0%;
            //底色
            z-index: 0;
            transition: 0.4s ease;
        }
        //圆形边框
        .circle{
            //边框设置
            border: 3px solid #383838;
            height: 30px;
            width: 30px;
            border-radius: 50%;//将边框显示为圆形
            //更改背景色，隐藏中间横线
            background-color: #1f1f1f;
            color:#e2e2e2;
            //居中
            display: flex;
            align-items: center;
            justify-content: center;
            //过渡效果
            transition: 0.4s ease;
            z-index:1;
            &.active{//交集选择器
                border-color: #3498db;
            }
        }
    }
    //灰色进度条
    .progress-container::before{
        content: '';
        background-color: #383838;
        position: absolute;
        top: 7rem;
        left: 0;
        width: 100%;
        height: 4px;
        transform: translateY(-50%);
        z-index: 0;
    }

    .btn{
        width: 100px;
        height: 35px;
        color: #fff;
        font-size: 14px;
        margin: 5px;
        border: 0;
        border-radius: 6px;
        background-color: #3498db;
        cursor: pointer;
        &:disabled{
            background-color: #383838;
            cursor: not-allowed;
        }
        &:active{
            //点击显示button缩小一下
            transform: scale(0.98);
        }
    }

</style>
```



:::