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
    <button @click="doLogin(username, password)">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    doLogin(username, password) {
      window.alert(`${username}, ${password}`);
    }
  }
};
</script>

<style></style>
