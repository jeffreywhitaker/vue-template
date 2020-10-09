import Vue from 'vue'

import App from './App.vue'
import router from './utils/routes'
import store from './utils/store/store'

import './index.css'

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#root')
