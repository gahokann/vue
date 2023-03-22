export default {
    actions: { // Работа из api
        setOrder({commit}, payload) {
            commit('SET_ORDER', payload)
        }
    },

    mutations: { // добавление в стате
        SET_ORDER(state, payload) {
            state.orders = payload
        }
    },

    state: { // переменные
        orders: []
    },

    getters: { // получение из переменных
        allOrders(state) {
            return state.orders
        }
    },
  }
  