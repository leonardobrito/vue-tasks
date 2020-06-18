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
        <br />
        <button @click="updateTaskitem(taskItem.id)">Update item</button>
        <br />
        <button @click="removeTaskitem(taskItem.id)">Delete item</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions('taskItem', ['removeTaskitem', 'setTaskitem']),
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

      this.setTaskitem(mutableTaskItem);
    },
    updateTaskitem(id) {
      this.$router.push({ name: "showTaskitem", params: { id } });
    },
  },
  computed: {
    ...mapState('taskItem', ['taskItems']),
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
