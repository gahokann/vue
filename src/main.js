import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'

import ApiPlugin from './plugins/api'
import DebugPlugin from './plugins/debug'
import LoadPlugin from './plugins/load'
import SearchPlugin from './plugins/searchTable'


Vue.use(VueRouter)

// TODO: PLUGINS ========
Vue.use(ApiPlugin)
Vue.use(LoadPlugin)
Vue.use(DebugPlugin)
Vue.use(SearchPlugin)
Vue.prototype.$url_photo = 'http://localhost:8000/'

// TODO: =======

// Vue.config.devtools = false
// Vue.config.productionTip = false

import '@/assets/css/style.css'
import '@/assets/css/media.css'

// Vue.prototype.$debug = true // Включить дебаггер чтобы показывались ошибки

new Vue({
  render: h => h(App),
  el: '#app',
  router,
  store,
})
