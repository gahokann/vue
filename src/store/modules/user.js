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

            nullStatus({commit}) {
                commit('NULLSTATUS')
            },

            nullHttpCode({commit}) {
                commit('NULLHTTP')
            },
        },

        mutations: {
            // добавление в стате
            SET_USER(state, user) {
                state.user = user
            },

            SET_ROLE(state, role_id) {
                localStorage.setItem("number__column", role_id),
                state.role_id = role_id;
            },

            LOGOUT(state) {
                localStorage.removeItem("number__column"),
                state.user = "";
                state.role_id = "";
            },

            SET_STATUS(state, status) {
                state.status = status
            },

            SET_HTTPCODE(state, httpcode) {
                state.http_code = httpcode
            },

            NULLHTTP(state, httpcode) {
                state.http_code = httpcode
            },

            NULLSTATUS(state) {
                state.status = null
            }
        },

        state: {
            // переменные
            user: [],
            role_id: localStorage.getItem('number__column'),
            status: null,
            http_code: null,
        },

        getters: {
            // получение из переменных
            getUser(state) {
                return state.user
            },

            getStatus(state) {
                return state.status
            },

            getHttpCode(state) {
                return state.http_code
            },

            isUser: (state) => state.role_id == 1,
            isСustomer: (state) => state.user.company_status == 2,
            isEmployee: (state) => state.role_id > 2,
            isChief: (state) => state.role_id > 4,
        },
    };
};
