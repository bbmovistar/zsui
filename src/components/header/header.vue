<template>
    <div id='header'>
        <div class='logo'>
            <span class='iconfont icon-logo'></span>
            <span class='logo-text'>浙江正实科技</span>
            <span class='line logo-line'></span>
        </div>
        <div class='system' @mouseenter='systemListFlag=true' @mouseleave='systemListFlag=false'>
            <div class='current'>
                {{currentSystem}}
                <span class='iconfont' :class='[systemListFlag?"icon-select-arrow-up":"icon-select-arrow-down"]'></span>
            </div>
            <ul class='system-list' v-show='systemListFlag'>
                <li v-for='item in systemList' @click='link(item)'>{{item[config.name]}}</li>
            </ul>
        </div>
        <a :href='exitUrl' class='exit'>
            退出系统
            <span class='line left-line'></span>
        </a>
        <div class='role'>
            角色：管理员
            <ul>
                <!--<li v-for=''></li>-->
            </ul>
        </div>
        <div class='name'>
            欢迎您,陈华卿
            <span class='line right-line'></span>
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