<template>
    <div id='header'>
        <div class='logo' @click.stop='home'>
            <img :src='logoUrl'>
            <span class='logo-text'>{{logoName.length>6?logoName.substring(0,7):logoName}}</span>
            <span class='line logo-line'></span>
        </div>
        <div 
            class='system' 
            @mouseenter='systemListFlag=true' 
            @mouseleave='systemListFlag=false' 
            v-if='systemListShow'>
            <div class='current'>
                {{currentSystem}}
                <span class='iconfont' :class='[systemListFlag?"icon-select-arrow-up":"icon-select-arrow-down"]'></span>
            </div>
            <ul class='system-list' v-show='systemListFlag'>
                <li v-for='item in systemList' @click='link(item)'>{{item[config.systemConfig.name]}}</li>
            </ul>
        </div>
        <div class='school-name' v-if='schoolNameShow'>{{schoolName}}</div>
        <a href='javascript:;' class='exit' @click='exit'>
            退出系统
        </a>
        <div 
            class='role' 
            @mouseenter='roleListFlag=true' 
            @mouseleave='roleListFlag=false' 
            v-if='roleListShow'>
            角色：{{currentRole}}
            <ul v-show='roleListFlag'>
                <li v-for='item in roleList' @click.stop='roleListClick(item)'>
                    切换：{{item[config.roleConfig.name]}}
                </li>
            </ul>
            <span class='line right-line'></span>
        </div>
        <div class='name'>
            欢迎您，{{username}}
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