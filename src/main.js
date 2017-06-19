import Vue from 'vue'
import App from './App'
import router from './router/'
import '../lib/reset.css'
import ZSUI from './components/'

Vue.use(ZSUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
