import VueRouter from "vue-router";

import { routes } from "./routes";

const router = new VueRouter({ routes, mode: "history" });
const isAuthRequired = record => record.meta.requiresAuth;

router.beforeEach((to, from, next) => {
  const isLogged = localStorage.getItem("token");

  if (isLogged && to.name == "login") {
    next({ name: "listTaskgroup" });
    return;
  }

  if (to.matched.some(isAuthRequired)) {
    if (!isLogged) {
      next({ name: "login" });
      return;
    }
  }
  next();
});

export default router;
