import axios from "axios";

const HOST = "http://edimossilva-task-manager.herokuapp.com";
const LOGIN_URL = `${HOST}/auth/login`;
const TASKGROUPS_URL = `${HOST}/task_lists`;

export const getRequestConfig = () => {
  const token = localStorage.getItem("token");
  const requestConfig = {
    headers: {
      Authorization: `Basic ${token}`
    }
  };
  return requestConfig;
};

export const doLoginApi = (username, password) => {
  const params = { username, password };

  return axios.post(LOGIN_URL, params);
};

export const getTaskgroupsApi = () => {
  return axios.get(TASKGROUPS_URL, getRequestConfig());
};

export const getTaskgroupApi = id => {
  const getTaskgroupApiURL = `${TASKGROUPS_URL}/${id}`;

  return axios.get(getTaskgroupApiURL, getRequestConfig());
};
