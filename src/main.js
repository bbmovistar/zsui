import Vue from 'vue'
import App from './App'
import './libs/reset.css'
import ZSUI from './components/'

Vue.use(ZSUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
