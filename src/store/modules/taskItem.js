import {
  deleteTaskitemApi,
  updateTaskItemApi
} from "../../services/api";

const taskItem = {
  namespaced: true,
  state: {
    taskItems: [],
    taskitem: {}
  },
  getters: {},
  mutations: {
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
    setTaskitem({ commit, state }, mutableTaskItem) {
      updateTaskItemApi(mutableTaskItem).then(
        _result => {
          const newTaskItems = state.taskItems.map(item => {
            if (item.id === mutableTaskItem.id) {
              return Object.assign({}, item, mutableTaskItem );
            }

            return item;
          })

          commit('assign', { taskItems: newTaskItems });
        },
        error => console.error(error)
      );
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
