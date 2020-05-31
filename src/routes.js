import Login from "./components/login/Login.vue";
import ListTaskgroup from "./components/taskgroup/list-taskgroup/ListTaskgroup.vue";
import ShowTaskgroup from "./components/taskgroup/show-taskgroup/ShowTaskgroup.vue";
import NewTaskgroup from "./components/taskgroup/new-taskgroup/NewTaskgroup.vue";
import NewTaskitem from "./components/taskitem/new-taskitem/NewTaskitem.vue";

export const routes = [
  {
    name: "login",
    path: "/login",
    component: Login
  },
  {
    name: "listTaskgroup",
    path: "/taskgroup/list",
    component: ListTaskgroup,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: "showTaskgroup",
    path: "/taskgroup/show/:id",
    props: true,
    component: ShowTaskgroup,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: "newTaskgroup",
    path: "/taskgroup/new",
    component: NewTaskgroup,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: "newTaskitem",
    path: "/taskitem/new/:id",
    props: true,
    component: NewTaskitem,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "*",
    component: Login
  }
];
