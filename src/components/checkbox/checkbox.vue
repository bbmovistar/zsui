<template>
    <span :class='[check?"iconfont icon-check check":"uncheck"]' @click='click'></span>
</template>
<script>
    export default {
        name: 'zs-checkbox',
        props: {
            check: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            click() {
                this.$emit('click', this.check)
            }
        }
    }

</script>
<style lang="less" scoped>
    @import './checkbox.less';
</style>