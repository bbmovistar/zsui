<template>
    <div class='mask' v-if='show'>
        <div class='zs-dialog' ref='dialog'>
            <div class='title'>
                {{title}}
                <i class='close' @click='close'></i>
            </div>
            <div class='mainContent'>
                <slot name='main'></slot>
            </div>
            <div class='btns'>
                <zs-button :style='{marginRight:"10px"}' :text='enterText' @click='enter'></zs-button>
                <zs-button color='white' :text='closeText' @click='close'></zs-button>
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