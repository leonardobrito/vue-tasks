const taskItem = {
  namespaced: true,
  state: {
    taskItems: [],
    taskitem: {}
  },
  getters: {},
  mutations: {
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
    },
    assign(state, value) {
      Object.assign(state, value);
    },
  },
  actions: {
    getTaskitem({ commit, state }, id) {
      const stateTaskitem = state.taskItems.find(item => item.id == id);

      commit('assign', { taskitem: stateTaskitem.task });
    },
    setTaskitems({ commit }, taskItems) {
      commit('updateTaskItems', taskItems);
    }
  },
};

export default taskItem;
