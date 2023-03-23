export default {
    actions: {
        // Работа из api
        setUser({ commit }, user) {
            commit("SET_USER", user);
            commit('SET_ROLE', user.role_id)
            localStorage.setItem('role_id', user.role_id)
        },
        setToken({ commit }, token) {
            localStorage.setItem("token", token);
            commit("SET_TOKEN", token);
        },

        logout({ commit }) {
            localStorage.removeItem("token");
            localStorage.removeItem("role_id");

            commit("LOGOUT");
        },
    },

    mutations: {
        // добавление в стате
        SET_USER(state, user) {
            state.user = user;
            state.status = true;
        },

        SET_TOKEN(state, token) {
            state.token = token;
        },

        SET_ROLE(state, role_id) {
            state.role_id = role_id
        },

        LOGOUT(state) {
            state.status = "";
            state.token = "";
            state.role_id = ''
            state.user = [];
        },
    },

    state: {
        // переменные
        user: [],
        token: localStorage.getItem("token"),
        status: "",
        role_id: ''
    },

    getters: {
        // получение из переменных
        getUser(state) {
            return state.user;
        },

        isAuthenticated: (state) => !!state.token,
        isStatus: (state) => state.status,
        isAdmin: (state) => state.role_id > 1
    },
};
