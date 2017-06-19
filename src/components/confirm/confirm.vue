<template>
    <div class='mask' id='zs-confirm'>
        <div class='confirm' ref='confirm'>
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
</template>
<script>
    import confirm from './confirm.js'
    export default confirm

</script>
<style lang="less" scoped>
    @import './confirm.less';
</style>