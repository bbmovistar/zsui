import topTips from '@/components/topTips/'
import confirm from '@/components/confirm/'
import button from '@/components/button/button.vue'
import dialog from '@/components/dialog/dialog.vue'
import input from '@/components/input/input.vue'
import select from '@/components/select/select.vue'
import pagination from '@/components/pagination/pagination.vue'

const componentList = [
    button,
    dialog,
    input,
    select,
    pagination
]

const install = (Vue, options) => {
    for (let index of componentList) {
        Vue.component(index.name, index)
    }
    Vue.prototype.$toast = topTips
    Vue.prototype.$confirm = confirm
}
export default { install }