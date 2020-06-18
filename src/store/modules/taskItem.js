const taskItem = {
  namespaced: true,
  state: {
    taskItems: [],
    taskitem: {}
  },
  getters: {},
  mutations: {
    getTaskitem(state, id) {
      const stateTaskitem = state.taskItems.find(e => e.id == id);
      state.taskitem = stateTaskitem.task;
    },
    setTaskitem(state, taskitem) {
      const stateTaskitem = state.taskItems.find(e => e.id == taskitem.id);

      const mutableTaskitem = {
        ...stateTaskitem,
        checked: taskitem.checked
      };

      const index = state.taskItems.indexOf(stateTaskitem);
      Object.assign(state.taskItems[index], mutableTaskitem);
    },
    updateTaskItems(state, taskItems) {
      state.taskItems = taskItems;
    },
    removeTaskitem(state, id) {
      const stateTaskitem = state.taskItems.find(e => e.id == id);
      const index = state.taskItems.indexOf(stateTaskitem);

      state.taskItems.splice(index);
    }
  },
  actions: {
    setTaskitems({ commit }, taskItems) {
      commit('updateTaskItems', taskItems);
    }
  },
};

export default taskItem;
