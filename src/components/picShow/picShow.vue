<template>
    <transition name='fade'>
        <div class="mask" v-if="visible">
            <div class="alertWarp">
                <span class='iconfont icon-close' @click='close'></span>
                <img :src='imgUrl' alt="">
            </div>
        </div>
    </transition>
</template>

<script>
    import picShow from './picShow.js'
    export default picShow
</script>
<style lang='less' scoped>
    @import './picShow.less';
</style>
