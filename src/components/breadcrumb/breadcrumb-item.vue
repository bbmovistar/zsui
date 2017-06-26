<template>
    <span class="zs-breadcrumb-item">
        <span class="zs-breadcrumb-item_inner" ref="link"><slot></slot></span><span class="zs-breadcrumb-item_separator iconfont icon-select-arrow-right"></span>
    </span>
</template>
<script>
    export default {
        name: 'zsBreadcrumbItem',
        props: {
            to: {},
            replace: Boolean
        },
        data() {
            return {

            }
        },
        mounted() {
            var self = this
            if (this.to) {
                let link = this.$refs.link
                link.addEventListener('click', () => {
                    let to = this.to
                    if (to.go) {
                        self.$router.go(to.go)
                        return false
                    }
                    self.replace ? self.$router.replace(to) : self.$router.push(to)
                })
            }
        }
    }

</script>
<style lang="less" scoped>
    @import 'breadcrumb';
</style>