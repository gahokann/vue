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
                    localStorage.setItem('number__column', res.data.number__column)
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

            async fioChange({commit, dispatch}, data) {
                await api.user.fioChange(data)
                .then(res => {
                    dispatch('setUser')
                    commit('SET_SUCCESS', res.data)
                    commit("SET_ERROR_SETTINGS", '')
                    setTimeout(() => {
                        commit('SET_SUCCESS', '')
                    }, 2500);
                })
                .catch(err => {
                    commit("SET_ERROR_SETTINGS", err.response.data.message)
                })
            },

            async emailChange({commit, dispatch}, data) {
                await api.user.emailChange(data)
                .then(res => {
                    dispatch('setUser')
                    commit('SET_SUCCESS', res.data)
                    commit("SET_ERROR_SETTINGS", '')
                    setTimeout(() => {
                        commit('SET_SUCCESS', '')
                    }, 2500);
                })
                .catch(err => {
                    console.log(err);
                    commit("SET_ERROR_SETTINGS", err.response.data.message)
                })
            },

            async phoneChange({commit, dispatch}, data) {
                await api.user.phoneChange(data)
                .then(res => {
                    dispatch('setUser')
                    commit('SET_SUCCESS', res.data)
                    commit("SET_ERROR_SETTINGS", '')
                    setTimeout(() => {
                        commit('SET_SUCCESS', '')
                    }, 2500);
                })
                .catch(err => {
                    commit("SET_ERROR_SETTINGS", err.response.data.message)
                })
            },

            async passwordChange({commit, dispatch}, data) {
                await api.user.passwordChange(data)
                .then(res => {
                    dispatch('setUser')
                    commit('SET_SUCCESS', res.data)
                    commit("SET_ERROR_SETTINGS", '')
                    setTimeout(() => {
                        commit('SET_SUCCESS', '')
                    }, 2500);
                })
                .catch(err => {
                    console.log(err)
                    commit("SET_ERROR_SETTINGS", err.response.data.message)
                })
            },

            async companyAdd({ commit, dispatch }, data) {
                await api.user.companyAdd(data)
                await api.user.companyAdd(data)
                .then(() => {
                    // commit('SET_SUCCESS', res.data.message)
                    dispatch('setUser');

                    setTimeout(() => {
                        commit('SET_SUCCESS', '')
                    }, 5000);
                })
                .catch(err => {
                    console.log(err)
                    commit("SET_ERROR_SETTINGS", err.response.data.message)
                })
            },

            logout({ commit, dispatch }) {
                commit("LOGOUT");
                dispatch("LOGOUT")
            },
        },

        mutations: {
            // добавление в стате
            SET_TOKEN(state, token) {
                state.token = token;
                localStorage.setItem("token", token);
                
            },

            SET_SUCCESS(state, success) {
                state.success = success
            },

            SET_ERROR(state, error) {
                state.error = error
            },

            SET_ERROR_SETTINGS(state, error) {
                state.errorSettings = error
            },

            LOGOUT(state) {
                localStorage.removeItem("token");
                localStorage.removeItem("number__column");
                state.token = "";
                state.orders = "";
                state.users = "";
                state.roles = "";
                state.employee = "";
            },
        },

        state: {
            // переменные
            token: localStorage.getItem("token") || "",
            error: "",
            errorSettings: '',
            success: '',
        },

        getters: {
            // получение из переменных
            getError(state) {
                return state.error
            },

            getErrorSettings(state) {
                return state.errorSettings
            },

            getSuccess(state) {
                return state.success
            },

            isAuthenticated: (state) => !!state.token,
        },
    };
};
