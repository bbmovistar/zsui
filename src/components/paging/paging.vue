<template>
    <ul class='paging' v-if='all>0'>
        <li @click='prev' class='iconfont icon-select-arrow-right rotate' :class='{"paging-disable":current===1}'></li>
        <li v-if='numberAble.start' @click='start'>1</li>
        <li v-if='numberAble.start' class='ellipses'>
            <span></span>
            <span></span>
            <span></span>
        </li>
        <li v-for='i in numberAble.able' :class='{"active":i===current}' @click='paging(i)'>{{i}}</li>
        <li v-if='numberAble.end' class='ellipses'>
            <span></span>
            <span></span>
            <span></span>
        </li>
        <li v-if='numberAble.end' @click='end'>{{all}}</li>
        <li @click='next' class='iconfont icon-select-arrow-right' :class='{"paging-disable":current===all}'></li>
    </ul>
</template>
<script>
    import paging from './paging.js'
    export default paging

</script>
<style lang="less" scoped>
    @import './paging.less';
</style>