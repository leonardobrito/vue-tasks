<template>
  <div>
    <h1>Show Taskgroup - id: {{ id }}</h1>

    <label for="id">Id: {{ taskgroup.id }}</label>
    <br />

    <label for="name">name: {{ taskgroup.name }}</label>
    <br />

    <label for="description">Description: {{ taskgroup.description }}</label>
    <br />

    <label for="frequence_type"
      >Frequence Type: {{ taskgroup.frequence_type }}</label
    >
    <br />
    <list-taskitem v-bind:taskItems="taskgroup.task_in_lists"></list-taskitem>
  </div>
</template>

<script>
import { getTaskgroupApi } from "../../../services/api";
import ListTaskitem from "../../taskitem/list-taskitem/ListTaskitem";

export default {
  props: ["id"],
  components: {
    "list-taskitem": ListTaskitem
  },
  data() {
    return {
      taskgroup: {}
    };
  },
  mounted: function() {
    getTaskgroupApi(this.id).then(response => {
      this.taskgroup = response.data.data;
    });
  }
};
</script>

<style></style>
