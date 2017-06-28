import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router/'
import '@/assets/less/transition.less'
import '../lib/reset.css'
import ZSUI from './components/'
import axios from 'axios'


Vue.use(ZSUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
