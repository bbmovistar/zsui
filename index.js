import topTips from './src/components/topTips/'

const install = (Vue, options) => {
    Vue.prototype.$toast = topTips
}
export default { install }