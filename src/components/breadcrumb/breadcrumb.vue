<template>
    <div class="zs-breadcrumb">
        <div class="zs-breadcrumb-marker"></div>
        <span><slot></slot></span>
        <span class="right-option">
            <slot name="right-option"></slot>
        </span>
    </div>
</template>
<script>
    import './breadcrumb-item.vue'
    export default{
        name: 'zs-breadcrumb',
    }
</script>
<style lang="less" scoped>
    @import 'breadcrumb';
</style>
