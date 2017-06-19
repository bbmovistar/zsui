<template>
    <div id='left-menu'>
        <ul class='menu-content'>
            <li v-for='item in list' v-if='item[config.permissionName]' @click='openMenu(item)' class='first-menu-list'>
                <div class='first-menu' :class='{"active":item.light}'>
                    <span class='iconfont item-icon' :class='item[config.iconName]'></span>
                    <span :class='{"blodFont":item.light}'>{{item[config.titleName]}}</span>
                    <span class='iconfont' :class='[item.click?"icon-menu-arrow-down":"icon-menu-arrow-up"]'></span>
                </div>
                <transition @before-enter='itemBeforeEnter' @enter='itemEnter' @leave='itemLeave'>
                    <ul v-show='item.click' class='second-item-list'>
                        <li v-for='childItem in item.items' class='secode-item' @click.stop='clickItem(childItem)'>
                            <span class='second-menu' :class='{"active":childItem.light}'>{{childItem[config.itemName]}}</span>
                        </li>
                    </ul>
                </transition>
            </li>
            <div class='footer-wrapper'>
                <div class='footer'>
                    <div>© 2016 - 2017</div>
                    <div>浙江正实科技有限公司</div>
                    <div>浙ICP备17000266号</div>
                </div>
            </div>
        </ul>
    </div>
</template>
<script>
    import leftMenu from './leftMenu.js'
    export default leftMenu

</script>
<style lang="less" scoped>
    @import './leftMenu.less';
</style>