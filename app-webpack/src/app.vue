<template>
    <div class="demo">
        <div class="text">count:{{ state.count }}</div>
        <button class="btn" @click="onClick">Add</button>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'

    const state = reactive({
        count: 0
    })

    const onClick = ()=>{
        state.count++
    }
</script>
<style lang="less">
.demo{
    width: 200px;
    padding: 10px;
    box-shadow: 0 0 9px #000006;
    text-align: center;

    .text{
        font-size: 28px;
        font-weight: bolder;
        color: red;
    }

    .btn{
        font-size: 20px;
        padding: 0 10px;
        height: 32px;
        min-width: 80px;
    }
}
</style>
