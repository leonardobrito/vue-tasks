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
import { getTaskgroupsApi, deleteTaskgroupApi } from "../../../services/api";
import { mapState, mapMutations } from "vuex";

export default {
  mounted: function() {
    getTaskgroupsApi().then(
      result => {
        this.storeTaskgroups(result.data.data);
      },
      error => console.log(error.response.data.error_message)
    );
  },
  computed: {
    ...mapState(["taskgroups"])
  },
  methods: {
    ...mapMutations(["storeTaskgroups", "removeTaskgroup"]),
    doLogout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
    newTaskgroup() {
      this.$router.push({ name: "newTaskgroup" });
    },
    deleteTaskgroup(taskgroupId) {
      deleteTaskgroupApi(taskgroupId).then(
        result => this.removeTaskgroup(taskgroupId),
        error => console.log("error")
      );
    }
  }
};
</script>
