import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/index'



import userModule from './modules/user'
import formProfileModule from './modules/formProfile'
import orderModule from './modules/order'
import adminModule from './modules/admin'


Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        userModule: userModule(api), 
        formProfileModule: formProfileModule(api),
        orderModule: orderModule(api),
        adminModule: adminModule(api),
    },
    actions: {
        logout({commit}) {
            commit('LOGOUT')
        }
    },
})