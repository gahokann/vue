import VueRouter from 'vue-router'
import Vue from 'vue';
import router from '../../router/index'
// ! ПОПРОБОВАТЬ ИЗМЕНИТЬ!
Vue.use(VueRouter)
export default (api) => {
    return {
        actions: {
            // Работа из api
            async authUser( {commit} , user) {
                await api.auth.auth(user)
                .then(res => {
                    commit("SET_TOKEN", res.data.token)
                    commit("SET_ERROR", "")
                    router.push({ name: 'profileMain' })
                })
                .catch(err => {
                    commit("SET_ERROR", err.response.data.message)
                    commit("LOGOUT");
                });
            },

            async regUser({commit}, user) {
                await api.auth.reg(user)
                .then(res => {
                    commit("SET_TOKEN", res.data.token)
                    commit("SET_ERROR", "")
                    router.push({ name: 'profileMain' })
                })
                .catch(err => {
                    commit("SET_ERROR", err.response.data.message)
                    commit("LOGOUT")
                });
            },
            
            logout({ commit }) {
                commit("LOGOUT");
            },
        },

        mutations: {
            // добавление в стате
            SET_TOKEN(state, token) {
                state.token = token;
                localStorage.setItem("token", token);
                
            },

            SET_ERROR(state, error) {
                state.error = error
            },

            LOGOUT(state) {
                localStorage.removeItem("token");
                localStorage.removeItem("role_id");
                state.token = "";
            },
        },

        state: {
            // переменные
            token: localStorage.getItem("token") || "",
            error: ""
        },

        getters: {
            // получение из переменных
            getError(state) {
                return state.error
            },

            isAuthenticated: (state) => !!state.token,
        },
    };
};
