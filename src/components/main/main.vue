<template>
    <div id='main'>
        <zs-header :systemList='systemList' :systemConfig='systemConfig' :currentSystem='currentSystem'></zs-header>
        <div id='content'>
            <zs-leftMenu :list='leftMenuList' :leftMenuConfig='leftMenuConfig' :filterRouteName='filterRouteName'></zs-leftMenu>
            <zs-mainRouter></zs-mainRouter>
        </div>
    </div>
</template>
<script>
    import header from '../header/header.vue'
    import leftMenu from '../leftMenu/leftMenu.vue'
    import mainRouter from '../mainRouter/mainRouter.vue'
    export default {
        name: 'zs-main',
        props: {
            currentSystem: {
                type: String,
                require: true
            },
            systemList: {
                type: Array,
                require: true
            },
            systemConfig: {
                type: Object,
                default() {
                    return {}
                }
            },
            roleList: {
                type: Array,
                require: true
            },
            leftMenuList: {
                type: Array,
                require: true
            },
            leftMenuConfig: {
                type: Object,
                default() {
                    return {}
                }
            },
            filterRouteName: {
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