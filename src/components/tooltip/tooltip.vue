<template>
    <div class="zs-tooltip">
        <div class="zs-tooltip-rel" ref="reference" >
            <slot></slot>
        </div>
        <transition name="fade">
            <div class="zs-tooltip-popper"
                 ref="popper"
                 v-show="!disabled && visible"
            >
                <div class="zs-tooltip-arrow"></div>
                <div class="zs-tooltip-inner"><slot name="content">{{content}}</slot></div>
            </div>
        </transition>
    </div>
</template>
<script>
    import toolTip from './tooltip.js'
    export default toolTip
</script>
<style lang="less" scoped>
    @import "tooltip";
</style>
