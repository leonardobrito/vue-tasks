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
      const url = "http://edimossilva-task-manager.herokuapp.com/auth/login";
      const params = { username, password };

      this.$http.post(url, params).then(
        response => console.log(response.data),
        error => console.log(error.response.data.error_message)
      );
    }
  }
};
</script>

<style></style>
