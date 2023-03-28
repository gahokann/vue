import VueRouter from 'vue-router'
import Vue from 'vue';
import router from '../../router/index'
// ! ПОПРОБОВАТЬ ИЗМЕНИТЬ!
Vue.use(VueRouter)
export default (api) => {
    return {
        actions: {

            // Работа из api
            async setUser({commit}) {
                await api.user.userInfo()
                .then(res => {
                    commit('SET_USER' ,res.data.data)
                    commit('SET_ROLE' ,res.data.data.role_id)
                }).catch(() => {
                    commit('LOGOUT')
                    router.push({ name: 'main' })
                })
            },

            async setOrder({commit}) {
                await api.order.orderUser()
                .then(res => {
                    commit('SET_ORDER' ,res.data)
                }).catch(() => {
                    commit('LOGOUT')
                    router.push({ name: 'main' })
                })
            },
            logout({ commit }) {
                commit("LOGOUT");
            },
        },

        mutations: {
            // добавление в стате
            SET_USER(state, user) {
                state.user = user
            },

            SET_ORDER(state, orders) {
                state.orders = orders
            },

            SET_ROLE(state, role_id) {
                // localStorage.setItem("role_id", role_id),
                state.role_id = role_id;
            },

            LOGOUT(state) {
                localStorage.removeItem("token");
                localStorage.removeItem("role_id");
                state.user = "";
                state.order = "";
                state.role_id = "";
            },
        },

        state: {
            // переменные
            user: [],
            role_id: "",
            orders: [],
        },

        getters: {
            // получение из переменных
            getUser(state) {
                return state.user
            },


            getOrder(state) {
                return state.orders
            },

            isAdmin: (state) => state.role_id > 1,
        },
    };
};
