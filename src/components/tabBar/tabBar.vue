<template>
    <div class="tabbar">
        <div class="tabs">
            <div class="tab " :class="{ 'active' : item.click === true}" v-for="(item,index) in tab" :key="item.value" @click="change(item)" >
                {{item.label}}
                {{item.click}}
            </div>
        </div>
    </div>
</template>

<script>
    import tabBar from './tabBar.js'
    export default tabBar
</script>

<style lang='less' scoped>
    @import './tabBar.less';
</style>
