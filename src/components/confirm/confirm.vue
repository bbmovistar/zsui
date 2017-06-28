<template>
    <transition name='fade'>
        <div class='mask' id='zs-confirm' v-if='show' @after-leave='afterleave' @click='close'>
            <div class='confirm zs-fade' @click.stop>
                <div class='title'>
                    <i class='line'></i> {{title}}
                    <i class='iconfont icon-close' @click='close'></i>
                </div>
                <div class='mainContent'>{{msg}}</div>
                <div class='btns'>
                    <zs-button type='white' :text='closeText' @click='close' :style='{marginRight:"10px"}'></zs-button>
                    <zs-button :text='enterText' @click='enter'></zs-button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import confirm from './confirm.js'
    export default confirm

</script>
<style lang="less" scoped>
    @import './confirm.less';
</style>