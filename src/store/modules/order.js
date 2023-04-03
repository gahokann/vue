import VueRouter from 'vue-router'
import Vue from 'vue';
import router from '../../router/index'
Vue.use(VueRouter)
// ! ПОПРОБОВАТЬ ИЗМЕНИТЬ!
export default (api) => {
    return {
        actions: {
            // Работа из api
            async createOrder( {commit, dispatch} , data) {
                await api.order.createOrder(data)
                .then(() => {
                    dispatch('setOrder')
                    router.push({name: 'profileMain'})
                })
                .catch(err => {
                    commit("SET_ERROR", err.response.data.message)
                });
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
            
        },

        mutations: {
            // добавление в стате
            SET_ORDER(state, orders) {
                state.orders = orders
            },

            LOGOUT(state) {
                state.orders = ""
            }
        },

        state: {
            // переменные
            orders: [],
        },

        getters: {
            // получение из переменных
            getOrder(state) {
                return state.orders
            },
        },
    };
};
