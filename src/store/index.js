import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/index'


import user from './modules/user'
import order from './modules/order'
import formProfile from './modules/formProfile'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user: user(api), 
        formProfile: formProfile(api),
        order,
    }
})