<template>
    <div id='header'>
        <div class='logo'>
            <span class='iconfont icon-logo'></span>
            <span class='logo-text'>浙江正实科技</span>
            <span class='line logo-line'></span>
        </div>
        <div class='system'>
            <div class='current' @click.stop='systemListFlag=!systemListFlag'>
                学籍管理系统
                <span class='iconfont' :class='[systemListFlag?"icon-select-arrow-up":"icon-select-arrow-down"]'></span>
            </div>
            <ul class='system-list' v-show='systemListFlag'>
                <li>学籍管理系统</li>
                <li>学籍管理系统</li>
                <li>学籍管理系统</li>
                <li>学籍管理系统</li>
                <li>学籍管理系统</li>
            </ul>
        </div>
        <div class='name'>
            <span class='line left-line'></span>陈华卿<span class='line right-line'></span>
        </div>
    </div>
</template>
<script>
    import header from './header.js'
    export default header

</script>
<style lang="less" scoped>
    @import './header.less';
</style>