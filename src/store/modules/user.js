export default () => {
    return {
        actions: {
            // Работа из api
            setUser( {commit} , user) {
                commit('SET_USER', user)
                commit("SET_ROLE", user.role_id)
                

                // console.log(user)
            },
            logout({ commit }) {
                commit("LOGOUT");
            },
        },

        mutations: {
            // добавление в стате
            SET_USER(state, user) {
                state.user = user
            },
            SET_ROLE(state, role_id) {
                // localStorage.setItem("role_id", role_id),
                state.role_id = role_id;
            },
            LOGOUT(state) {
                state.user = "";
                state.role_id = "";
            },
        },

        state: {
            // переменные
            user: [],
            role_id: "",
        },

        getters: {
            // получение из переменных
            getUser(state) {
                return state.user
            },

            isAdmin: (state) => state.role_id > 1,
        },
    };
};
