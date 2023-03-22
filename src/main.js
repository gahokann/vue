import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'

import ApiPlugin from './plugins/api'
import LoadPlugin from './plugins/load'


Vue.use(VueRouter)
Vue.use(ApiPlugin)
Vue.use(LoadPlugin)

import '@/assets/css/style.css'
import '@/assets/css/media.css'

const token = localStorage.getItem('user-token')
if (token) {
  ApiPlugin.defaults.headers.common[`Bearer ${localStorage.getItem('token')}`] = token
}

new Vue({
  render: h => h(App),
  el: '#app',
  router,
  store
})
