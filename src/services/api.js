import axios from "axios";

import {
  LOGIN_URL,
  TASKGROUPS_URL,
  TASKITEM_URL,
  STORE_TASK_ITEM,
  TASK
} from '../constants/urls';

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

export const updateTaskItemApi = taskItem => {
  const getTaskgroupApiURL = `${TASKITEM_URL}/${taskItem.id}`;
  const params = { checked: taskItem.checked };

  return axios.put(getTaskgroupApiURL, params, getRequestConfig());
};

export const storeTaskgroupApi = newTaskgroup => {
  return axios.post(TASKGROUPS_URL, newTaskgroup, getRequestConfig());
};

export const deleteTaskgroupApi = id => {
  const deleteTaskgroupApiURL = `${TASKGROUPS_URL}/${id}`;

  return axios.delete(deleteTaskgroupApiURL, getRequestConfig());
};

export const storeTaskInTaskgroupApi = taskitem => {
  return axios.post(STORE_TASK_ITEM, taskitem, getRequestConfig());
};

export const deleteTaskitemApi = id => {
  const deleteTaskitemApiURL = `${TASKITEM_URL}/${id}`;

  return axios.delete(deleteTaskitemApiURL, getRequestConfig());
};

export const updateTaskApi = taskitem => {
  const getTaskitemApiURL = `${TASK}/${taskitem.id}`;

  return axios.put(getTaskitemApiURL, taskitem, getRequestConfig());
};
