<template>
    <div id='main-router'>
        <keep-alive>
            <router-view v-if='$route.meta.keepAlive'></router-view>
        </keep-alive>
        <router-view v-if='!$route.meta.keepAlive'></router-view>
    </div>
</template>
<style lang="less" scoped>
    @import './mainRouter.less';
</style>