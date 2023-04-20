import { LoadingStatuses } from "@/types";
export default (api) => {
    return {
        actions: {
            // ! Извлечение данных из апи
            async allUsers( {commit} ) {
                commit('SET_LOADING_ADMIN', LoadingStatuses.Loading)
                await api.admin.allUsers()
                .then(res => {
                    if(!res.data.length) commit('SET_LOADING_ADMIN', LoadingStatuses.Empty)
                    else commit('SET_LOADING_ADMIN', LoadingStatuses.Ready)
                    commit('SET_USERS', res.data)
                })
                .catch(err => {
                    commit('SET_LOADING_ADMIN', LoadingStatuses.Error)
                    commit("SET_ERROR_STATUS", err.response.data.message)
                    commit('SET_HTTPCODE', err.response.status)
                });
            },

            async allRoles( {commit} ) {
                await api.admin.roles()
                .then(res => {
                    commit('SET_ROLES', res.data)
                })
                .catch(err => {
                    commit("SET_ERROR_STATUS", err.response.data.message)
                    commit('SET_HTTPCODE', err.response.status)
                });
            },

            async employees( {commit} ) {
                commit('SET_LOADING_ADMIN', LoadingStatuses.Loading)
                await api.admin.employees()
                .then(res => {
                    if(!res.data.length) commit('SET_LOADING_ADMIN', LoadingStatuses.Empty)
                    else commit('SET_LOADING_ADMIN', LoadingStatuses.Ready)
                    commit('SET_EMPLOYEE', res.data)
                })
                .catch(err => {
                    commit('SET_LOADING_ADMIN', LoadingStatuses.Error)
                    commit("SET_ERROR_STATUS", err.response.data.message)
                    commit('SET_HTTPCODE', err.response.status)
                });
            },

            async setOrderAll({commit}) {
                commit('SET_LOADING_ADMIN', LoadingStatuses.Loading)
                await api.admin.orderAll()
                .then(res => {
                    if(!res.data.length) commit('SET_LOADING_ADMIN', LoadingStatuses.Empty)
                    else commit('SET_LOADING_ADMIN', LoadingStatuses.Ready)
                    commit('SET_ORDERS' ,res.data)
                }).catch(err => {
                    commit('SET_LOADING_ADMIN', LoadingStatuses.Error)
                    commit("SET_ERROR_STATUS", err.response.data.message)
                    commit('SET_HTTPCODE', err.response.status)
                })
            },

            async setCompanyAll({commit}) {
                commit('SET_LOADING_ADMIN', LoadingStatuses.Loading)
                await api.admin.companyAll()
                .then(res => {
                    if(!res.data.length) commit('SET_LOADING_ADMIN', LoadingStatuses.Empty)
                    else commit('SET_LOADING_ADMIN', LoadingStatuses.Ready)
                    commit('SET_COMPANY' ,res.data)
                }).catch(err => {
                    commit('SET_LOADING_ADMIN', LoadingStatuses.Error)
                    commit("SET_ERROR_STATUS", err.response.data.message)
                    commit('SET_HTTPCODE', err.response.status)
                })
            },

            async setPartnersAll({commit}) {
                commit('SET_LOADING_ADMIN', LoadingStatuses.Loading)
                await api.admin.partnerAll()
                .then(res => {
                    if(!res.data.length) commit('SET_LOADING_ADMIN', LoadingStatuses.Empty)
                    else commit('SET_LOADING_ADMIN', LoadingStatuses.Ready)
                    commit('SET_PARTNER' ,res.data)
                }).catch(err => {
                    commit('SET_LOADING_ADMIN', LoadingStatuses.Error)
                    commit("SET_ERROR_STATUS", err.response.data.message)
                    commit('SET_HTTPCODE', err.response.status)
                })
            },

            async setOrderEmployee({commit}) {
                commit('SET_LOADING_ADMIN', LoadingStatuses.Loading)
                await api.admin.orderEmployee()
                .then(res => {
                    if(!res.data.length) commit('SET_LOADING_ADMIN', LoadingStatuses.Empty)
                    else commit('SET_LOADING_ADMIN', LoadingStatuses.Ready)
                    commit('SET_ORDER_EMPLOYEE' ,res.data)
                }).catch(err => {
                    commit('SET_LOADING_ADMIN', LoadingStatuses.Error)
                    commit("SET_ERROR_STATUS", err.response.data.message)
                    commit('SET_HTTPCODE', err.response.status)
                })
            },
            // !=================================================================


            async companyStatus({commit, dispatch}, data) {
                await api.admin.companyStatus(data)
                .then(res => {
                    dispatch('setCompanyAll')
                    commit("SET_STATUS", res.data)
                }).catch(err => {
                    commit("SET_ERROR_STATUS", err.response.data.message)
                    commit('SET_HTTPCODE', err.response.status)
                })
            },

            async partnerAdd({ commit, dispatch }, data) {
                await api.admin.addPartner(data)
                .then(res => {
                    dispatch('setPartnersAll');
                    commit("SET_STATUS", res.data)
                })
                .catch(err => {
                    commit("SET_ERROR_STATUS", err.response.data.message)
                    commit('SET_HTTPCODE', err.response.status)
                })
            },

            async partnerDel({ commit, dispatch }, data) {
                await api.admin.delPartner({
                    id: data
                })
                .then(res => {
                    dispatch('setPartnersAll');
                    commit("SET_STATUS", res.data)
                })
                .catch(err => {
                    commit("SET_ERROR_STATUS", err.response.data.message)
                    commit('SET_HTTPCODE', err.response.status)
                })
            },

            async chagneRoleUser({ commit, dispatch }, data) {
                await api.admin.changeRole({
                    value: data.value,
                    id: data.userID
                })
                .then(res => {
                    dispatch('employees');
                    dispatch('allUsers');
                    commit("SET_STATUS", res.data)
                })
                .catch(err => {
                    commit("SET_ERROR_STATUS", err.response.data.message)
                    commit('SET_HTTPCODE', err.response.status)
                })
            },

            // TODO Обновление заказа

            async updateOrderUser({commit}, id) {
                await api.order.getOrderFirst(id)
                .then(res => {
                    commit('SET_ORDER_USER' ,res.data)
                }).catch(err => {
                    commit('SET_HTTPCODE', err.response.status)
                    commit('SET_ERROR_STATUS', err.response.data.message)
                })
            },

            // Todo ===

            async orderWorkChange({ commit, dispatch }, data) {
                await api.admin.orderWork({
                    orderID: data
                })
                .then(res => {
                    dispatch('updateOrderUser', data)
                    commit("SET_STATUS", res.data)
                })
                .catch(err => {
                    commit("SET_ERROR_STATUS", err.response.data.message)
                    commit('SET_HTTPCODE', err.response.status)
                })
            },
            async orderWorkRemove({ commit, dispatch }, data) {
                await api.admin.removeEmployeeOrder({
                    orderID: data
                })
                .then(res => {
                    dispatch('updateOrderUser', data)
                    commit("SET_STATUS", res.data)
                })
                .catch(err => {
                    commit("SET_ERROR_STATUS", err.response.data.message)
                    commit('SET_HTTPCODE', err.response.status)
                })
            },

            async changeOrderStatus({ commit, dispatch }, data) {
                await api.admin.changeStatusOrder({
                    orderID: data.orderID,
                    status: data.status
                })
                .then(res => {
                    dispatch('updateOrderUser', data.orderID)
                    commit("SET_STATUS", res.data)
                })
                .catch(err => {
                    commit("SET_ERROR_STATUS", err.response.data.message)
                    commit('SET_HTTPCODE', err.response.status)
                })
            },

            

            
        },

        mutations: {
            SET_USERS(state, users) {
                state.users = users
            },

            SET_ROLES(state, role) {
                state.infoRoles = role
            },

            SET_EMPLOYEE(state, employee) {
                state.employees = employee
            },
            SET_ORDER_EMPLOYEE(state, orders) {
                state.orderEmployee = orders
            },

            SET_ORDERS(state, orders) {
                state.ordersAll = orders
            },

            SET_COMPANY(state, companies) {
                state.companies = companies
            },

            SET_PARTNER(state, partners) {
                state.partners = partners
            },

            SET_LOADING_ADMIN(state, status) {
                state.loadStatusAdmin = status
            },

            LOGOUT(state) {
                state.users = ''
                state.infoRoles = ''
                state.employees = ''
                state.ordersAll = ''
                state.companies = ''
                state.partners = ''
            }

        },

        state: {
            users: [],
            infoRoles: [],
            employees: [],
            ordersAll: [],
            companies: [],
            partners: [],
            orderEmployee: [],
            loadStatusAdmin: null,
        },

        getters: {
            getUsers(state) {
                return state.users
            },

            getRoles(state) {
                return state.infoRoles
            },

            getEmployees(state) {
                return state.employees
            },

            getloadStatusAdmin(state) {
                return state.loadStatusAdmin
            },

            

            getOrdersAll(state) {
                return state.ordersAll
            },

            getOrdersEmployee(state) {
                return state.orderEmployee
            },
            
            getCompanies(state) {
                return state.companies
            },

            getPartners(state) {
                return state.partners
            }
        },
    };
};