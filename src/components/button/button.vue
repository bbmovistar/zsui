<template>
    <div class='zs-button' :class='computedClass' @click='click'>
        <span class='iconfont' :class='icon' v-if='icon!==""&&widthType!=="mini"'></span>
        <span class='text'>{{text}}</span>
    </div>
</template>
<script>
    import button from './button.js'
    export default button

</script>
<style lang="less" scoped>
    @import './button.less';
</style>