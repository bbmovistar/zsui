import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../views/index.vue'
import main from '../views/main.vue'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: 'bbb',
            path: '/bbb',
            component: index
        },
        {
            name: 'aaa',
            path: '/mySignIn',
            component: main
        }, {
            name: 'classMassage',
            path: '/classMassage',
            component: index
        }
    ]
})
