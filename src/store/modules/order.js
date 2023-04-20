import VueRouter from 'vue-router'
import Vue from 'vue';
import router from '../../router/index'
import { LoadingStatuses } from '@/types';
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
                    commit("SET_ERROR_STATUS", err.response.data.message)
                });
            },

            async setOrder({commit}) {
                commit('SET_LOADING_ORDER', LoadingStatuses.Loading)
                await api.order.orderUser()
                .then(res => {
                    if(!res.data.length) commit('SET_LOADING_ORDER', LoadingStatuses.Empty)
                    else commit('SET_LOADING_ORDER', LoadingStatuses.Ready)
                    commit('SET_ORDER' ,res.data)
                }).catch(err => {
                    commit('SET_HTTPCODE', err.response.status)
                    commit('SET_ERROR_STATUS', err.response.data.message)
                    commit('SET_LOADING_ORDER', LoadingStatuses.Error)
                    router.push({ name: 'profileMain' })
                })
            },

            async setOrderUser({commit}, id) {
                commit('SET_LOADING_ORDER', LoadingStatuses.Loading)
                await api.order.getOrderFirst(id)
                .then(res => {
                    commit('SET_ORDER_USER' ,res.data)
                    if(res.data == null) commit('SET_LOADING_ORDER', LoadingStatuses.Empty)
                    else commit('SET_LOADING_ORDER', LoadingStatuses.Ready)
                }).catch(err => {
                    commit('SET_HTTPCODE', err.response.status)
                    commit('SET_ERROR_STATUS', err.response.data.message)
                    router.push({ name: 'profileMain' })
                    commit('SET_LOADING_ORDER', LoadingStatuses.Error)
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
            },
            SET_LOADING_ORDER(state, status) {
                state.loadOrder = status
            }
        },

        state: {
            // переменные
            orders: [],
            order: [],
            loadOrder: null
        },

        getters: {
            // получение из переменных
            getOrder(state) {
                return state.orders
            },

            getActiveOrder(state) {
                if(state.orders != '') {
                    return state.orders.filter(o => {
                        return o.status_id != 4
                    })
                }
                else
                {
                    return ''
                }
                
            },

            getLoadOrder(state) {
                return state.loadOrder
            },

            getOrderUser(state) {
                return state.order
            },
        },
    };
};
