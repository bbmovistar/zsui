import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../views/index.vue'
import main from '../views/main.vue'
import detail from '../views/detail.vue'
import detail2 from '../views/detail2.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: 'departmentsMassage',
            path: '/schoolManage',
            component: index,
            meta: { keepAlive: true }
        },
        {
            name: 'gradeMassage',
            path: '/classInfo',
            component: main
        },
        {
            name: 'classMassage',
            path: '/teacherInfo',
            component: index
        },
        {
            name: 'detail',
            path: '/detail',
            component: detail
        },
        {
            name: 'detail2',
            path: '/detail2',
            component: detail2
        }
    ]
})
