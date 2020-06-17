<template>
  <div>
    <button @click="doLogout()">Logout</button>
    <h1>List Taskgroup</h1>
    <button @click="newTaskgroup()">New Taskgroup</button>
    <ul>
      <li v-for="taskgroup in taskgroups" :key="taskgroup.id">
        <router-link
          :to="{ name: 'showTaskgroup', params: { id: taskgroup.id } }"
        >
          {{ taskgroup.name }}
        </router-link>
        <button @click="deleteTaskgroup(taskgroup.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  mounted: function() {
    this.fetchTaskGroups();
  },
  computed: {
    ...mapState('taskGroup', ['taskgroups'])
  },
  methods: {
    ...mapActions('taskGroup', ['fetchTaskGroups', 'deleteTaskgroup']),
    doLogout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
    newTaskgroup() {
      this.$router.push({ name: "newTaskgroup" });
    },
  }
};
</script>
