import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 关联 store 仓库
import store from './store'

import './assets/styles/base.scss'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
