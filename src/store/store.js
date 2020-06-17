import Vue from "vue";
import Vuex from "vuex";
import login from './modules/login';
import taskGroup from './modules/taskGroup';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    taskItems: [],
    taskitem: {}
  },
  modules: {
    login,
    taskGroup,
  },
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
    removeTaskitem(state, id) {
      const stateTaskitem = state.taskItems.find(e => e.id == id);
      const index = state.taskItems.indexOf(stateTaskitem);

      state.taskItems.splice(index);
    }
  }
});
