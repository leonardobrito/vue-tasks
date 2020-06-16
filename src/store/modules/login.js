import { doLoginApi } from '../../services/api';

const login = {
  namespaced: true,
  state: {
    token: null
  },
  getters: {},
  mutations: {},
  actions: {
    doLogin({ commit }, value) {
      const { username, password } = value;

      doLoginApi(username, password)
        .then(response => {
          const { data: { token }} = response;

          localStorage.token = token;

        }).catch(error => {
          console.error(error.response.data.error_message);
        });
    },
  },
};

export default login;
