import topTips from './src/components/topTips/'
import confirm from './src/components/confirm/'

const install = (Vue, options) => {
    Vue.prototype.$toast = topTips
    Vue.prototype.$confirm = confirm
}
export default { install }