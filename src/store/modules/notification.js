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
            async setNotifications({commit}) {
                commit('SET_LOAD_NOTIFICATION', LoadingStatuses.Loading)
                await api.user.notification()
                .then(res => {
                    if(!res.data.length) commit('SET_LOAD_NOTIFICATION', LoadingStatuses.Empty)
                    else commit('SET_LOAD_NOTIFICATION', LoadingStatuses.Ready)
                    commit('SET_NOTIFICATION', res.data)
                }).catch(err => {
                    commit('SET_LOAD_STATUS_USER', LoadingStatuses.Error)
                    commit('SET_HTTPCODE', err.response.status)
                    commit('SET_ERROR_STATUS', err.response.data.message)
                    router.push({ name: 'profileMain' })
                })
            },

            async updateNotifications({commit}) {
                await api.user.notification()
                .then(res => {
                    commit('SET_NOTIFICATION', res.data)
                }).catch(() => {
                    router.push({ name: 'profileMain' })
                })
            },

            async setNotificationsRead({dispatch}, data) {
                // commit('SET_NOTIFICATION_READ', data)
                await api.user.notifIsRead({
                    id: data,
                })
                .then(() => {

                    dispatch('updateNotifications')
                }).catch(() => {
                    router.push({ name: 'profileMain' })
                })
            },

            async notificationDelete({commit}, data) {
                commit('SET_NOTIFICATION_DELETE', data)
                await api.user.notDelete({
                    id: data,
                })
                .then(() => {
                    // dispatch('setNotifications')
                }).catch(() => {
                    router.push({ name: 'profileMain' })
                })
            },
        },

        mutations: {
            // добавление в стате
            SET_LOAD_NOTIFICATION(state, status) {
                state.loadNotificationStatus = status
            },

            SET_NOTIFICATION(state, data) {
                state.notifications = data
            },

            SET_NOTIFICATION_DELETE(state, data) {
                const i = state.notifications.map(item => item.id).indexOf(data);
                state.notifications.splice(i, 1);
            },

            // SET_NOTIFICATION_READ(state, data) {
            //     const i = state.notifications.map(item => item.id).indexOf(data);
            //     state.notifications.splice(i.is_read, 1);
            // },
            
        },

        state: {
            // переменные
            loadNotificationStatus: null,
            notifications: []
        },

        getters: {
            // получение из переменных
            getNotification(state) {
                return state.notifications
            },
            getNotificationActivity(state) {
                return state.notifications.filter(o => {
                    return o.is_read == 0 
                })
            },
            getLoadNotificationStatus(state) {
                return state.loadNotificationStatus
            },

        },
    };
};
