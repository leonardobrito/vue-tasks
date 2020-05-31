<template>
  <div>
    <h1>New Taskitem - id: {{ id }}</h1>

    <label for="name">Title</label>
    <input type="text" name="name" id="name" v-model="title" />
    <br />

    <br />
    <label for="description">Description</label>
    <input type="text" v-model="description" />
    <br />
    <button @click="back()">Cancelar</button>
    <button @click="saveTaskitem(title, description)">Salvar</button>
  </div>
</template>

<script>
import { storeTaskInTaskgroup } from "../../../services/api";

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

      storeTaskInTaskgroup(mountedTaskitem).then(
        response => {
          this.$router.push({ name: "showTaskgroup", params: { id: this.id } });
        },
        error => console.log(error.response.data.error_message)
      );
    }
  }
};
</script>

<style></style>
