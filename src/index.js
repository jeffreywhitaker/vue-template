import Vue from 'vue'

import App from './App.vue'
import router from './utils/routes'
import store from './utils/store/store'

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#root')
