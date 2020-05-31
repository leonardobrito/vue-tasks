<template>
  <div>
    <label>{{ taskItemsOverview }}</label>
    <br />
    <ul>
      <li v-for="taskItem in formattedTaskItems" :key="taskItem.id">
        <div>
          <label>checkbox:</label>
          <input type="checkbox" v-model="taskItem.checked" />
        </div>
        <label>name: {{ taskItem.name }}</label>
        <br />
        <label>description: {{ taskItem.description }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["taskItems"],
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
