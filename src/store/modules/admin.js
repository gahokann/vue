export default (api) => {
    return {
        actions: {
            // ! Извлечение данных из апи
            async allUsers( {commit} ) {
                await api.admin.allUsers()
                .then(res => {
                    commit('SET_USERS', res.data)
                })
                .catch(err => {
                    // console.log(err)
                    commit("SET_STATUS", err.response.data.message)
                });
            },

            async allRoles( {commit} ) {
                await api.admin.roles()
                .then(res => {
                    commit('SET_ROLES', res.data)
                })
                .catch(err => {
                    // console.log(err)
                    commit("SET_STATUS", err.response.data.message)
                });
            },

            async employees( {commit} ) {
                await api.admin.employees()
                .then(res => {
                    commit('SET_EMPLOYEE', res.data)
                })
                .catch(err => {
                    // console.log(err)
                    commit("SET_STATUS", err.response.data.message)
                });
            },

            async setOrderAll({commit}) {
                await api.admin.orderAll()
                .then(res => {
                    commit('SET_ORDERS' ,res.data)
                }).catch(err => {
                    commit("SET_STATUS", err.response.data.message)
                })
            },

            async setCompanyAll({commit}) {
                await api.admin.companyAll()
                .then(res => {
                    commit('SET_COMPANY' ,res.data)
                }).catch(err => {
                    commit("SET_STATUS", err.response.data.message)
                })
            },

            async setPartnersAll({commit}) {
                await api.admin.partnerAll()
                .then(res => {
                    commit('SET_PARTNER' ,res.data)
                }).catch(err => {
                    commit("SET_STATUS", err.response.data.message)
                })
            },
            // !=================================================================


            async companyStatus({commit, dispatch}, data) {
                await api.admin.companyStatus(data)
                .then(res => {
                    dispatch('setCompanyAll')
                    commit("SET_STATUS", res.data)
                }).catch(err => {
                    commit("SET_STATUS", err.response.data.message)
                })
            },

            async partnerAdd({ commit, dispatch }, data) {
                await api.admin.addPartner(data)
                .then(res => {
                    dispatch('setPartnersAll');
                    commit("SET_STATUS", res.data)
                })
                .catch(err => {
                    commit("SET_STATUS", err.response.data.message)
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
                    commit("SET_STATUS", err.response.data.message)
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

            SET_ORDERS(state, orders) {
                state.ordersAll = orders
            },

            SET_COMPANY(state, companies) {
                state.companies = companies
            },

            SET_PARTNER(state, partners) {
                state.partners = partners
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

            getOrdersAll(state) {
                return state.ordersAll
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
