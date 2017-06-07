<template>
    <span class='zs-button' :class='computedClass' @click='click' :style='buttonStyle'>{{text}}</span>
</template>
<script>
    import button from './button.js'
    export default button

</script>
<style lang="less" scoped>
    @import './button.less';
</style>