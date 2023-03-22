export default {
    actions: {
        // Работа из api
        setUser({ commit }, user) {
            // localStorage.setItem('token', token)
            // console.log(token);

            commit("SET_USER", user);
        },

        setToken({ commit }, token) {
            localStorage.setItem("token", token);
            commit("SET_TOKEN", token);
        },

        logout({ commit }) {
            localStorage.removeItem("token");

            commit("LOGOUT");
        },
    },

    mutations: {
        // добавление в стате
        SET_USER(state, user) {
            state.user = user;
            // state.token = token;
            state.status = true;
        },

        SET_TOKEN(state, token) {
            state.token = token;
        },

        LOGOUT(state) {
            state.status = "";
            state.token = "";
            state.user = [];
        },
    },

    state: {
        // переменные
        user: [],
        token: localStorage.getItem("token"),
        status: "",
    },

    getters: {
        // получение из переменных
        getUser(state) {
            return state.user;
        },

        isAuthenticated: (state) => !!state.token,
    },
};
