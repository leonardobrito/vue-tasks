<template>
  <div>
    <h1>Login</h1>
    <div>
      <label>Username:</label>
      <input type="text" @input="username = $event.target.value" />
    </div>
    <div>
      <label>password:</label>
      <input
        type="password"
        autocomplete="new-password"
        @input="password = $event.target.value"
      />
    </div>
    <button>Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>

<style></style>
