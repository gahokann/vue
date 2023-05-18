import VueRouter from 'vue-router'
import Vue from 'vue';
import router from '../../router/index'
import { LoadingStatuses } from '@/types'; // TODO: Статусы загрузки данных
// ! ПОПРОБОВАТЬ ИЗМЕНИТЬ!
Vue.use(VueRouter)
export default (api) => {
    return {
        actions: {
            // Работа из api
            async setUser({commit}) {
                commit('SET_LOAD_STATUS_USER', LoadingStatuses.Loading)
                await api.user.userInfo()
                .then(res => {
                    if(res.data.data == null) commit('SET_LOAD_STATUS_USER', LoadingStatuses.Empty)
                    else commit('SET_LOAD_STATUS_USER', LoadingStatuses.Ready)
                    commit('SET_USER' ,res.data.data)
                    commit('SET_ROLE' ,res.data.data.role_id)
                }).catch(err => {
                    commit('SET_LOAD_STATUS_USER', LoadingStatuses.Error)
                    commit('LOGOUT')
                    commit('SET_HTTPCODE', err.response.status)
                    commit('SET_ERROR_STATUS', err.response.data.message)
                    router.push({ name: 'main' })
                })
            },

            async updateUser({commit}) {
                await api.user.userInfo()
                .then(res => {
                    commit('SET_USER' ,res.data.data)
                }).catch(err => {
                    commit('LOGOUT')
                    commit('SET_HTTPCODE', err.response.status)
                    router.push({ name: 'main' })
                })
            },

            async showUser({commit}, id) {
                commit('SET_LOAD_STATUS_USER_SHOW', LoadingStatuses.Loading)
                await api.user.showUser(id)
                .then(res => {
                    if(res.data == null) commit('SET_LOAD_STATUS_USER_SHOW', LoadingStatuses.Empty)
                    else commit('SET_LOAD_STATUS_USER_SHOW', LoadingStatuses.Ready)
                    commit('SET_USER_PAGE' ,res.data)
                }).catch(err => {
                    commit('SET_HTTPCODE', err.response.status)
                    commit('SET_ERROR_STATUS', err.response.data.message)
                    commit('SET_LOAD_STATUS_USER_SHOW', LoadingStatuses.Error)
                    // router.push({ name: 'profileMain' })
                })
            },

            async showEmployee({commit}, id) {
                commit('SET_LOAD_STATUS_USER_SHOW', LoadingStatuses.Loading)
                await api.user.showEmployee(id)
                .then(res => {
                    if(res.data == null) commit('SET_LOAD_STATUS_USER_SHOW', LoadingStatuses.Empty)
                    else commit('SET_LOAD_STATUS_USER_SHOW', LoadingStatuses.Ready)
                    commit('SET_EMPLOYEE_PAGE' ,res.data)
                }).catch(err => {
                    commit('SET_HTTPCODE', err.response.status)
                    commit('SET_ERROR_STATUS', err.response.data.message)
                    commit('SET_LOAD_STATUS_USER_SHOW', LoadingStatuses.Error)
                    // router.push({ name: 'profileMain' })
                })
            },




            // async setNotifications({commit}) {
            //     commit('SET_LOAD_STATUS_USER', LoadingStatuses.Loading)
            //     await api.user.notification()
            //     .then(res => {
            //         if(res.data.data == null) commit('SET_LOAD_NOTIFICATION', LoadingStatuses.Empty)
            //         else commit('SET_LOAD_NOTIFICATION', LoadingStatuses.Ready)
            //         commit('SET_NOTIFICATION', res.data)
            //     }).catch(() => {
            //         commit('SET_LOAD_STATUS_USER', LoadingStatuses.Error)
            //         router.push({ name: 'profileMain' })
            //     })
            // },

            // async setNotificationsRead({dispatch}, data) {
            //     await api.user.notifIsRead({
            //         id: data,
            //     })
            //     .then(() => {
            //         dispatch('setNotifications')
            //     }).catch(() => {
            //         router.push({ name: 'profileMain' })
            //     })
            // },

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

            SET_ERROR_STATUS(state, status) {
                state.error_status = status
            },

            SET_HTTPCODE(state, httpcode) {
                state.http_code = httpcode
            },

            NULLHTTP(state, httpcode) {
                state.http_code = httpcode
            },

            NULLSTATUS(state) {
                state.status = null
            },

            SET_LOAD_STATUS_USER(state, status) {
                state.loadPageStatus = status
            },

            SET_LOAD_STATUS_USER_SHOW(state, status) {
                state.loadPageStatusShow = status
            },
            
            SET_USER_PAGE(state, user) {
                state.showUserPage = user
            },

            SET_EMPLOYEE_PAGE(state, user) {
                state.showEmployeePage = user
            },

            // SET_LOAD_NOTIFICATION(state, status) {
            //     state.loadNotificationStatus = status
            // },

            // SET_NOTIFICATION(state, data) {
            //     state.notifications = data
            // }
        },

        state: {
            // переменные
            user: [],
            role_id: localStorage.getItem('number__column'),
            status: null,
            http_code: null,
            error_status: null,
            loadPageStatus: null,
            loadPageStatusShow: null,
            showUserPage: null,
            showEmployeePage: null,
            // loadNotificationStatus: null,
            // notifications: []
        },

        getters: {
            // получение из переменных
            getUser(state) {
                return state.user
            },

            getStatus(state) {
                return state.status
            },

            getErrorStatus(state) {
                return state.error_status
            },

            getShowUserPage(state) {
                return state.showUserPage
            },

            getShowEmployeePage(state) {
                return state.showEmployeePage
            },

            // getNotification(state) {
            //     return state.notifications
            // },

            // getNotificationActivity(state) {
            //     return state.notifications.filter(o => {
            //         return o.is_read == 0 
            //     })
            // },

            getLoadPageStatus(state) {
                return state.loadPageStatus
            },

            getLoadPageShow(state) {
                return state.loadPageStatusShow
            },
            // getLoadNotificationStatus(state) {
            //     return state.loadNotificationStatus
            // },

            getHttpCode(state) {
                return state.http_code
            },

            isUser: (state) => state.role_id == 1,
            isСustomer: (state) => state.user.company_status == 2,
            isEmployee: (state) => state.role_id > 1,
            isChief: (state) => state.role_id > 3,
        },
    };
};
