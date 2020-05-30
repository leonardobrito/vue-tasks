import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import axios from "axios";

import { routes } from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: "history" });
Vue.prototype.$http = axios;

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
