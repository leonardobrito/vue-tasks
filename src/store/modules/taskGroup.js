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
    setTaskgroup(state, taskgroup) {
      state.taskgroup = taskgroup;
      state.taskItems = taskgroup.task_in_lists;
    },
  },
  actions: {},
};

export default taskGroup;
