<template>
  <div>
    <h1>New Taskgroup</h1>

    <label for="name">Title</label>
    <input type="text" name="name" id="name" v-model="title" />
    <br />

    <label for="frequenceType">Frequencia</label>
    <select v-model="frequenceType">
      <option value="daily">Diário</option>
      <option value="weekly">Semanal</option>
      <option value="monthly">Mensal</option>
      <option value="yearly">Anual</option>
    </select>
    <br />

    <label for="description">Description</label>
    <input type="text" v-model="description" />
    <br />

    <button @click="back()">Cancel</button>
    <button @click="saveTaskgroup(title, description, frequenceType)">
      Save
    </button>
  </div>
</template>

<script>
import { storeTaskgroupApi } from "../../../services/api";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      title: "",
      description: "",
      frequenceType: ""
    };
  },
  methods: {
    ...mapMutations('taskGroup', ['addTaskgroups']),
    back() {
      this.$router.back();
    },
    saveTaskgroup(title, description, frequenceType) {
      if (!title || !frequenceType) {
        return window.alert("Fields empty");
      }

      const mountedTaskgroup = {
        name: title,
        description,
        frequence_type: frequenceType
      };

      storeTaskgroupApi(mountedTaskgroup).then(
        response => {
          this.$router.back({ name: "listTaskgroup" });
        },
        error => console.log(error.response.data.error_message)
      );
    }
  }
};
</script>

<style></style>
