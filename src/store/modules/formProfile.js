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
                    console.log(res)
                    commit("SET_TOKEN", res.data.token)
                    localStorage.setItem('number__column', res.data.number__column)
                    commit("SET_STATUS", "Вы успешно авторизовались!")
                    setTimeout(() => {
                        commit("SET_STATUS", "")
                    }, 2500);
                    router.push({ name: 'profileMain' })
                })
                .catch(err => {
                    commit("SET_STATUS", err.response.data.message)
                    commit("SET_HTTPCODE", err.response.status)
                    commit("LOGOUT");
                });
            },

            async regUser({commit}, user) {
                await api.auth.reg(user)
                .then(res => {
                    commit("SET_TOKEN", res.data.token)
                    commit("SET_STATUS", "Вы успешно прошли регистрацию!")
                    setTimeout(() => {
                        commit("SET_STATUS", "")
                    }, 2500);
                    router.push({ name: 'profileMain' })
                })
                .catch(err => {
                    console.log(err)
                    commit("SET_STATUS", err.response.data.data)
                    commit("LOGOUT")
                });
            },

            async fioChange({commit, dispatch}, data) {
                await api.user.fioChange(data)
                .then(res => {
                    dispatch('updateUser')
                    commit('SET_STATUS', res.data)
                })
                .catch(err => {
                    commit("SET_STATUS", err.response.data.message)
                })
            },

            async emailChange({commit, dispatch}, data) {
                await api.user.emailChange(data)
                .then(res => {
                    dispatch('updateUser')
                    commit('SET_STATUS', res.data)
                })
                .catch(err => {
                    console.log(err);
                    commit("SET_STATUS", err.response.data.message)
                })
            },

            async phoneChange({commit, dispatch}, data) {
                await api.user.phoneChange(data)
                .then(res => {
                    dispatch('updateUser')
                    commit('SET_STATUS', res.data)
                    
                })
                .catch(err => {
                    commit("SET_STATUS", err.response.data.message)
                })
            },

            async passwordChange({commit, dispatch}, data) {
                await api.user.passwordChange(data)
                .then(res => {
                    dispatch('updateUser')
                    commit('SET_STATUS', res.data)
                })
                .catch(err => {
                    console.log(err)
                    commit("SET_STATUS", err.response.data.message)
                })
            },

            async companyAdd({ commit, dispatch }, data) {
                await api.user.companyAdd(data)
                .then(() => {
                    dispatch('setUser');
                    commit("SET_STATUS", 'Компания успешно оформлена')
                })
                .catch(err => {
                    console.log(err)
                    commit("SET_STATUS", err.response.data.message)
                })
            },

            async updateUserImage({ commit, dispatch }, data) {
                await api.user.changeImage(data)
                .then(() => {
                    dispatch('updateUser');
                    commit("SET_STATUS", 'Изображение успешно изменено')
                })
                .catch(err => {
                    console.log(err)
                    commit("SET_STATUS", err.response.data.message)
                })
            },

            
        },

        mutations: {
            // добавление в стате
            SET_TOKEN(state, token) {
                state.token = token;
                localStorage.setItem("token", token);
                
            },

            LOGOUT(state) {
                localStorage.removeItem("token");
                state.token = "";
            },
        },

        state: {
            // переменные
            token: localStorage.getItem("token") || "",
        },

        getters: {
            // получение из переменны


            isAuthenticated: (state) => !!state.token,
        },
    };
};
