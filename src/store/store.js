import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    taskgroup: {},
    taskItems: []
  },
  mutations: {
    setTaskgroup(state, taskgroup) {
      state.taskgroup = taskgroup;
      state.taskItems = taskgroup.task_in_lists;
    }
  }
});
