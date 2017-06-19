<template>
    <div class='mask' v-if='show'>
        <div class='zs-dialog' ref='dialog'>
            <div class='title'>
                <i class='line'></i>
                {{title}}
                <i class='iconfont icon-close' @click='close'></i>
            </div>
            <div class='mainContent'>
                <slot name='main'></slot>
            </div>
            <div class='btns' :style='{textAlign:enterAlign}'>
                <zs-button :text='enterText' @click='enter'></zs-button>
            </div>
        </div>
    </div>
</template>
<script>
    import dialog from './dialog.js'
    export default dialog

</script>
<style lang="less" scoped>
    @import './dialog.less';
</style>