<template>
    <span :class='computedClass' @click='click'>{{text}}</span>
</template>
<script>
    import button from './button.js'
    export default button

</script>
<style lang="less" scoped>
    @import './button.less';
</style>