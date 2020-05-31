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
    <label for="taskItemsOverview">{{ taskItemsOverview }}</label>
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
    },
    isTaskItemChecked({ checked }) {
      return checked;
    }
  },
  computed: {
    formattedTaskItems: function() {
      const { taskgroup, formatTaskItem } = this;

      if (!taskgroup.task_in_lists) {
        return [];
      }

      const { task_in_lists: taskItems } = taskgroup;

      return taskItems.map(formatTaskItem);
    },
    taskItemsOverview: function() {
      const { formattedTaskItems, isTaskItemChecked } = this;
      const length = formattedTaskItems.length;
      const checkedLength = formattedTaskItems.filter(isTaskItemChecked).length;
      return `${checkedLength} of ${length} are checked`;
    }
  }
};
</script>

<style></style>
