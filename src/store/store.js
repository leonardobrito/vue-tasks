import Vue from "vue";
import Vuex from "vuex";
import login from './modules/login';
import taskGroup from './modules/taskGroup';
import taskItem from './modules/taskItem';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    login,
    taskGroup,
    taskItem,
  },
});
