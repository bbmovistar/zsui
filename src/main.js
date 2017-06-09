import Vue from 'vue'
import App from './App'
import './libs/reset.css'
import ZSUI from '../dist/zsui.min.js'
import '../dist/style.css'

Vue.use(ZSUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
