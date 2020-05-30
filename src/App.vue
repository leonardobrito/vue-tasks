<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <login></login>
  </div>
</template>

<script>
import Login from "./components/login/Login";

export default {
  name: "app",
  components: {
    login: Login
  },
  data() {
    return {
      msg: "Hello World"
    };
  }
};
</script>
