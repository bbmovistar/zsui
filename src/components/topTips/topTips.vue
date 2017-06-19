<template>
    <div class='zs-topTips'>
        <span class='icon iconfont' :class='typeClass'></span>
        <span class='msg'>{{msg}}</span>
    </div>
</template>
<script>
    import topTips from './topTips.js'
    export default topTips

</script>
<style lang="less" scoped>
    @import './topTips.less';
</style>