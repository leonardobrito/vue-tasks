<template>
  <div>
    <h1>New Taskitem - in Taskgroup with id: {{ id }}</h1>

    <label for="name">Title</label>
    <input type="text" name="name" id="name" v-model="title" />
    <br />

    <br />
    <label for="description">Description</label>
    <input type="text" v-model="description" />
    <br />
    <button @click="back()">Cancel</button>
    <button @click="saveTaskitem(title, description)">Salve</button>
  </div>
</template>

<script>
import { storeTaskInTaskgroupApi } from "../../../services/api";

export default {
  props: ["id"],
  data() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    saveTaskitem(title, description) {
      if (!title) {
        return window.alert("Fields empty");
      }

      const mountedTaskitem = {
        name: title,
        description,
        task_list_id: this.id
      };

      storeTaskInTaskgroupApi(mountedTaskitem).then(
        response => {
          this.$router.back();
        },
        error => console.log(error.response.data.error_message)
      );
    }
  }
};
</script>

<style></style>
