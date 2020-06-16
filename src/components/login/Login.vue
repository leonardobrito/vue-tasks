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
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters('login', ['getToken']),
  },
  watch: {
    getToken(newToken) {
      if(newToken) this.redirectToList()
    }
  },
  methods: {
    ...mapActions('login', ['doLogin']),
    handleDoLogin(username, password) {
      const payload = { username, password };

      this.doLogin(payload);
    },
    redirectToList(){
      this.$router.push({ name: "listTaskgroup" });
    }
  }
};
</script>

<style></style>
