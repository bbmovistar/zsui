<template>
    <div class='mask' id='zs-alert'>
        <div class='zs-alert' ref='alert'>
            <div class='title'>
                <i class='line'></i> {{title}}
                <i class='iconfont icon-close' v-show="canClose" @click='close'></i>
            </div>
            <div class='mainContent-wrapper'>
                <div class='mainContent'>
                    <div class='msg-title' :class='colorAndClass.color'>{{msgTitle}}</div>
                    <div class='msg'>{{msg}}</div>
                    <span class='iconfont alert-icon' :class='[colorAndClass.class,colorAndClass.color]'></span>
                </div>
            </div>
            <div class='btns' :style='{textAlign:enterAlign}'>
                <zs-button :text='enterText' @click='enter'></zs-button>
            </div>
        </div>
    </div>
</template>
<script>
    import alert from './alert.js'
    export default alert

</script>
<style lang="less" scoped>
    @import './alert.less';
</style>