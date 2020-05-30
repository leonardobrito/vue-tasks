import axios from "axios";

const HOST = "http://edimossilva-task-manager.herokuapp.com";
const LOGIN_URL = `${HOST}/auth/login`;

export const doLoginApi = (username, password) => {
  const params = { username, password };

  return axios.post(LOGIN_URL, params);
};
