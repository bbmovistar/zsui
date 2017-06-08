import topTips from './src/components/topTips/'
import confirm from './src/components/confirm/'
import button from './src/components/button/button.vue'
import dialog from './src/components/dialog/dialog.vue'

const componentList = [
    button,
    dialog
]

const install = (Vue, options) => {
    for (let index of componentList) {
        Vue.component(index.name, index)
    }
    Vue.prototype.$toast = topTips
    Vue.prototype.$confirm = confirm
}
export default { install }