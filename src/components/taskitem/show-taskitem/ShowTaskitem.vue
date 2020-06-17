<template>
  <div>
    <h1>Update Taskitem - id: {{ taskitem.id }}</h1>

    <label for="name">Title</label>
    <input type="text" name="name" id="name" v-model="taskitem.name" />
    <br />

    <br />
    <label for="description">Description</label>
    <input type="text" v-model="taskitem.description" />
    <br />
    <button @click="back()">Cancel</button>
    <button @click="saveTaskitem(taskitem)">Update</button>
  </div>
</template>

<script>
import { updateTaskApi } from "../../../services/api";
import { mapState, mapMutations } from "vuex";

export default {
  props: ["id"],
  mounted: function() {
    this.getTaskitem(this.id);
  },
  computed: {
    ...mapState('taskItem', ['taskitem'])
  },
  methods: {
    ...mapMutations('taskItem', ['getTaskitem']),
    back() {
      this.$router.back();
    },
    saveTaskitem(taskitem) {
      const mountedTaskitem = {
        id: taskitem.id,
        name: taskitem.name,
        description: taskitem.description
      };

      updateTaskApi(mountedTaskitem).then(
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
