export default (api) => {
    return {
        actions: {
            async allUsers( {commit} ) {
                await api.admin.allUsers()
                .then(res => {
                    commit('SET_USERS', res.data)
                })
                .catch(err => {
                    // console.log(err)
                    commit("SET_ERROR", err.response.data.message)
                });
            },

            async allRoles( {commit} ) {
                await api.admin.roles()
                .then(res => {
                    commit('SET_ROLES', res.data)
                })
                .catch(err => {
                    // console.log(err)
                    commit("SET_ERROR", err.response.data.message)
                });
            },

            async employees( {commit} ) {
                await api.admin.employees()
                .then(res => {
                    commit('SET_EMPLOYEE', res.data)
                })
                .catch(err => {
                    // console.log(err)
                    commit("SET_ERROR", err.response.data.message)
                });
            },

            async setOrderAll({commit}) {
                await api.admin.orderAll()
                .then(res => {
                    commit('SET_ORDER' ,res.data)
                }).catch(err => {
                    commit("SET_ERROR", err.response.data.message)
                })
            },

            async setCompanyAll({commit}) {
                await api.admin.companyAll()
                .then(res => {
                    commit('SET_COMPANY' ,res.data)
                }).catch(err => {
                    commit("SET_ERROR", err.response.data.message)
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

            SET_ORDER(state, orders) {
                state.orders = orders
            },

            SET_COMPANY(state, companies) {
                state.companies = companies
            }
        },

        state: {
            users: [],
            infoRoles: [],
            employees: [],
            orders: [],
            companies: []
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

            getOrders(state) {
                return state.orders
            },
            
            getCompanies(state) {
                return state.companies
            }
        },
    };
};
