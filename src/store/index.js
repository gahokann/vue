import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/index'

import VueRouter from 'vue-router'
import router from '../router/index'



import userModule from './modules/user'
import formProfileModule from './modules/formProfile'
import orderModule from './modules/order'
import adminModule from './modules/admin'
import notificationModule from './modules/notification'


Vue.use(Vuex)
Vue.use(VueRouter)
export default new Vuex.Store({
    modules: {
        userModule: userModule(api), 
        formProfileModule: formProfileModule(api),
        orderModule: orderModule(api),
        adminModule: adminModule(api),
        notificationModule: notificationModule(api),
    },
    actions: {
        logout({commit}) {
            commit('LOGOUT'),
            router.push({ name: 'main' })
        }
    },
})