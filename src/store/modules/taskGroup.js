import {
  getTaskgroupApi,
  getTaskgroupsApi,
  deleteTaskgroupApi
} from '../../services/api';

const taskGroup = {
  namespaced: true,
  state: {
    taskgroups: [],
    taskgroup: {},
  },
  getters: {},
  mutations: {
    storeTaskgroups(state, taskgroups) {
      state.taskgroups = taskgroups;
    },
    removeTaskgroup(state, id) {
      const stateTaskgroup = state.taskgroups.find(e => e.id == id);

      state.taskgroups = state.taskgroups.filter(task => {
        return task !== stateTaskgroup;
      });
    },
    updateTaskGroup(state, taskgroup) {
      state.taskgroup = taskgroup;
    },
  },
  actions: {
    fetchTaskGroups({ commit }) {
      getTaskgroupsApi().then(
        result => {
          commit('storeTaskgroups', result.data.data);
        },
        error => console.log(error.response.data.error_message)
      );
    },
    deleteTaskgroup({ commit }, taskgroupId) {
      deleteTaskgroupApi(taskgroupId).then(
        _result => commit('removeTaskgroup', taskgroupId),
        error => console.log("error", error)
      );
    },
    setTaskgroup({ commit }, taskgroupId) {
      return getTaskgroupApi(taskgroupId).then(response => {
        commit('updateTaskGroup', response.data.data);
        return response.data.data;
      }).catch(error => console.log(error.response));
    }
  },
};

export default taskGroup;
