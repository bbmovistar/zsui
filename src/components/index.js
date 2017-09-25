import topTips from '@/components/topTips/'
import confirm from '@/components/confirm/'
import alert from '@/components/alert/'

import button from '@/components/button/button.vue'
import dialog from '@/components/dialog/dialog.vue'
import input from '@/components/input/input.vue'
import select from '@/components/select/select.vue'
import paging from '@/components/paging/paging.vue'
import main from '@/components/main/main.vue'
import cascader from '@/components/cascader/cascader.vue'
import breadcrumb from '@/components/breadcrumb/breadcrumb.vue'
import breadcrumbItem from '@/components/breadcrumb/breadcrumb-item.vue'
import checkbox from '@/components/checkbox/checkbox.vue'
import picshow from '@/components/picShow/picShow.vue'
import tabBar from '@/components/tabBar/tabBar.vue'
import radio from '@/components/radio/radio.vue'
import radioGroup from '@/components/radioGroup/radioGroup.vue'

import '@/assets/less/transition.less'

if (document.head) {
    let link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', '//at.alicdn.com/t/font_qvsoqsapn2whr529.css')
    document.head.appendChild(link)
}


const componentList = [
    button,
    dialog,
    input,
    select,
    paging,
    main,
    cascader,
    breadcrumb,
    breadcrumbItem,
    checkbox,
    picshow,
    tabBar,
    radio,
    radioGroup
]

const install = (Vue, options) => {
    for (let index of componentList) {
        Vue.component(index.name, index)
    }
    Vue.prototype.$toast = topTips
    Vue.prototype.$confirm = confirm
    Vue.prototype.$alert = alert
}
export default { install }
