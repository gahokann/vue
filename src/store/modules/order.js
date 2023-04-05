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
                    commit("SET_STATUS", 'Заказ успешно оформлен')
                    setTimeout(() => {
                        router.push({name: 'profileAllOrders'})
                        commit("SET_STATUS", '')
                    }, 2500)
                })
                .catch(err => {
                    commit("SET_STATUS", err.response.data.message)
                });
            },

            async setOrder({commit}) {
                await api.order.orderUser()
                .then(res => {
                    commit('SET_ORDER' ,res.data)
                }).catch(() => {
                    router.push({ name: 'main' })
                })
            },

            async setOrderUser({commit}, id) {
                await api.order.getOrderFirst(id)
                .then(res => {
                    commit('SET_ORDER_USER' ,res.data)
                }).catch(() => {
                    router.push({ name: 'main' })
                })
            },

        },

        mutations: {
            // добавление в стате
            SET_ORDER(state, orders) {
                state.orders = orders
            },

            SET_ORDER_USER(state, order) {
                state.order = order
            },
            
            LOGOUT(state) {
                state.orders = ""
                state.order = ""
            }
        },

        state: {
            // переменные
            orders: [],
            order: []
        },

        getters: {
            // получение из переменных
            getOrder(state) {
                return state.orders
            },

            getOrderUser(state) {
                return state.order
            },
        },
    };
};
