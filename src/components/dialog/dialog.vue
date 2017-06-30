<template>
    <transition name='fade'>
        <div class='mask' v-if='visible' @click='close'>
            <div class='zs-dialog zs-fade' @click.stop>
                <div class='title'>
                    <i class='line'></i> {{title}}
                    <i class='iconfont icon-close' @click='close'></i>
                </div>
                <div class='mainContent'>
                    <slot name='main'></slot>
                </div>
                <slot name='btn'></slot>
            </div>
        </div>
    </transition>
</template>
<script>
    import dialog from './dialog.js'
    export default dialog

</script>
<style lang="less" scoped>
    @import './dialog.less';
</style>