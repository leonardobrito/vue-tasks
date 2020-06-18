import { deleteTaskitemApi } from "../../services/api";

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
      commit('assign', { taskItems });
    },
    removeTaskitem({ commit, state }, id) {
      deleteTaskitemApi(id).then(
        _result => {
          const newTaskItems = state.taskItems.filter(item => item.id !== id);

          commit('assign', { taskItems: newTaskItems });
        },
        error => console.error(error)
      );
    },
  },
};

export default taskItem;
