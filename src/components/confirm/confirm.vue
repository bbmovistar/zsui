<template>
    <div class='mask' id='zs-confirm'>
        <div class='confirm' ref='confirm'>
            <div class='title'>{{title}}</div>
            <div class='mainContent'>{{msg}}</div>
            <div class='btns'>
                <zs-button :style='{marginRight:"10px"}' :text='enterText' @click='enter'></zs-button>
                <zs-button color='white' :text='closeText' @click='close'></zs-button>
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