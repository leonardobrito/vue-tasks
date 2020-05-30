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

    <ul>
      <li v-for="taskItem in formattedTaskItems" :key="taskItem.id">
        {{ taskItem }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getTaskgroupApi } from "../../../services/api";
export default {
  props: ["id"],
  data() {
    return {
      taskgroup: {}
    };
  },
  mounted: function() {
    getTaskgroupApi(this.id).then(response => {
      this.taskgroup = response.data.data;
    });
  },
  methods: {
    formatTaskItem(taskItem) {
      return {
        id: taskItem.task.id,
        checked: taskItem.checked,
        name: taskItem.task.name,
        description: taskItem.task.description
      };
    }
  },
  computed: {
    formattedTaskItems: function() {
      if (!this.taskgroup.task_in_lists) {
        return [];
      }

      const { task_in_lists: taskItems } = this.taskgroup;

      return taskItems.map(this.formatTaskItem);
    }
  }
};
</script>

<style></style>
