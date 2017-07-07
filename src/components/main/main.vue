<template>
    <div id='main'>
        <!--头部-->
        <zs-header :systemList='systemList' :systemConfig='systemConfig' :currentSystem='currentSystem' :roleList='roleList' :roleConfig='roleConfig'
            :currentRole='currentRole' @roleClick='roleClick' :homeUrl='homeUrl' :exitUrl='exitUrl' :username='username' @exit='exit'></zs-header>
        <div id='content'>
            <!--侧边栏-->
            <zs-leftMenu :list='leftMenuList' :leftMenuConfig='leftMenuConfig' :filterRouteName='filterRouteName'></zs-leftMenu>
            <!--主路由-->
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
            //当前系统
            currentSystem: {
                type: String,
                required: true
            },
            //系统列表
            systemList: {
                type: Array,
                required: true
            },
            //系统字段配置
            systemConfig: {
                type: Object,
                default() {
                    return {}
                }
            },
            //当前角色
            currentRole: {
                type: String,
                required: true
            },
            //角色列表
            roleList: {
                type: Array,
                required: true
            },
            /*角色字段配置*/
            roleConfig: {
                type: Object,
                default() {
                    return {}
                }
            },
            //侧边栏列表
            leftMenuList: {
                type: Array,
                required: true
            },
            //侧边栏字段配置
            leftMenuConfig: {
                type: Object,
                default() {
                    return {}
                }
            },
            //路由多匹配
            filterRouteName: {
                type: Object,
                default() {
                    return {}
                }
            },
            username: {
                type: String,
                required: true
            },
            exitUrl: {
                type: String,
                required: true
            },
            homeUrl: {
                type: String,
                required: true
            }
        },
        methods: {
            roleClick($event) {
                this.$emit('roleClick', $event)
            },
            exit() {
                this.$emit('exit')
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