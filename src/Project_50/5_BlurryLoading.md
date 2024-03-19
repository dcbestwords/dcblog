---
title: 模糊载入
order: 5
---

::: vue-demo 模糊载入

```vue
<template>
    <div class="bc">
        <div class="search" :class="{active:isActive}">
            <input type="text" class="input" placeholder="Search...">
            <button @click="changeState" class="btn">
                <i class="fas fa-search"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HiddenSearch',
    data() {
        return {
            isActive:false
        }
    },
    methods: {
        changeState(){
            this.isActive = !this.isActive
        }
    },
}
</script>

<style lang="less" scoped>
@import url('https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.bc{
    height: 50vh;
    background-color: #7158e2;
    /* 居中 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.search{
    height: 50px;
    position: relative;
    input{
        background-color: #fff;
        border: 0;
        padding: 15px;
        height: 50px;
        width: 50px;
        font-size: 18px;
        transition: width 0.3s ease;
    }
    .btn{
        background-color: #fff;
        border: 0;
        cursor: pointer;
        font-size: 24px;
        position: absolute;
        top: 0;
        left: 0;
        height: 50px;
        width: 50px;
        transition: transform 0.3s ease;
    }
    &.active{
        .input{
            width: 200px;
        }
        .btn{
            transform: translateX(198px);
        }
    }
}

.btn:focus,
.input:focus {
  outline: none;
}

</style>
```



:::