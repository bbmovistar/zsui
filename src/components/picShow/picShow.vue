<template>
    <transition name='fade'>
        <div class="mask" v-if="visible" @click='close'>
            <div class="alertWarp">
                <img :src='imgUrl' alt="" ref="imgSrc">
            </div>
            <span class='iconfont icon-close' @click='close'></span>
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
