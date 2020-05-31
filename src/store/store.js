import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    taskgroups: [],
    taskgroup: {},
    taskItems: [],
    taskitem: {}
  },
  mutations: {
    storeTaskgroups(state, taskgroups) {
      state.taskgroups = taskgroups;
    },
    removeTaskgroup(state, id) {
      const stateTaskgroup = state.taskgroups.find(e => e.id == id);
      const index = state.taskgroups.indexOf(stateTaskgroup);

      state.taskgroups.splice(index);
    },
    setTaskgroup(state, taskgroup) {
      state.taskgroup = taskgroup;
      state.taskItems = taskgroup.task_in_lists;
    },
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
