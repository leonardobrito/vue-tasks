<template>
  <div>
    <label>{{ taskItemsOverview }}</label>
    <br />
    <ul>
      <li v-for="taskItem in formattedTaskItems" :key="taskItem.id">
        <div>
          <label>checkbox:</label>
          <input
            type="checkbox"
            v-model="taskItem.checked"
            @click="updateCheckTaskItem(taskItem)"
          />
        </div>
        <label>name: {{ taskItem.name }}</label>
        <br />
        <label>description: {{ taskItem.description }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { updateTaskItemApi } from "../../../services/api";

export default {
  methods: {
    formatTaskItem(taskItem) {
      return {
        id: taskItem.id,
        checked: taskItem.checked,
        name: taskItem.task.name,
        description: taskItem.task.description
      };
    },
    isTaskItemChecked({ checked }) {
      return checked;
    },
    updateCheckTaskItem(taskItem) {
      const mutableTaskItem = {
        id: taskItem.id,
        checked: !taskItem.checked
      };
      updateTaskItemApi(mutableTaskItem).then(
        result => console.log(result.data.data),
        error => console.log(error)
      );
      window.alert(taskItem.checked);
    }
  },
  computed: {
    taskItems() {
      return this.$store.state.taskItems;
    },
    formattedTaskItems: function() {
      const { taskItems, formatTaskItem } = this;

      if (!taskItems) {
        return [];
      }

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
