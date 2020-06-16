<template>
  <div>
    <h1>Login</h1>
    <div>
      <label>Username:</label>
      <input type="text" v-model="username" />
    </div>
    <div>
      <label>password:</label>
      <input type="password" autocomplete="new-password" v-model="password" />
    </div>
    <button @click="handleDoLogin(username, password)">Login</button>
  </div>
</template>

<script>
import { doLoginApi } from "../../services/api";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions('login', ['doLogin']),
    handleDoLogin(username, password) {
      const payload = { username, password };

      this.doLogin(payload);
    },
  }
};
</script>

<style></style>
