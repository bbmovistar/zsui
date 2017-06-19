<template>
    <div id='main'>
        <zs-header></zs-header>
        <div id='content'>
            <zs-leftMenu :list='leftMenuList' :propConfig='leftMenuConfig'></zs-leftMenu>
            <zs-mainRouter></zs-mainRouter>
        </div>
    </div>
</template>
<script>
    import header from '../header/header.vue'
    import leftMenu from '../leftMenu/leftMenu.vue'
    import mainRouter from '../mainRouter/mainRouter.vue'
    export default {
        props: {
            leftMenuList: {
                type: Array,
                require: true
            },
            leftMenuConfig: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        components: {
            'zs-header': header,
            'zs-leftMenu': leftMenu,
            'zs-mainRouter': mainRouter
        }
    }

</script>
<style lang="less" scoped>
    @import './main.less';
</style>