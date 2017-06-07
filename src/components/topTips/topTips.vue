<template>
    <div class='zs-topTips'>
        <img :src="imgSrc">
        <span>{{msg}}</span>
    </div>
</template>
<script>
    import topTips from './topTips.js'
    export default topTips

</script>
<style lang="less" scoped>
    @import './topTips.less';
</style>