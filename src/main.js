import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'

Vue.use(VueRouter)

import '@/assets/css/style.css'
import '@/assets/css/media.css'

new Vue({
  render: h => h(App),
  el: '#app',
  router
})
