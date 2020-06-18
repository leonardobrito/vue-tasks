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
    <br />
    <button @click="back()">Back</button>
    <button @click="newTaskitem(taskgroup.id)">New Taskitem</button>
    <br />
    <br />

    <list-taskitem></list-taskitem>
  </div>
</template>

<script>
import ListTaskitem from "../../taskitem/list-taskitem/ListTaskitem";
import { mapActions, mapState } from "vuex";

export default {
  props: ["id"],
  components: {
    "list-taskitem": ListTaskitem
  },
  computed: {
    ...mapState('taskGroup', ['taskgroup'])
  },
  mounted: function() {
    this.setTaskgroup(this.id).then(response => {
      this.setTaskitems(response.task_in_lists);
    });
  },
  methods: {
    ...mapActions('taskGroup', ['setTaskgroup']),
    ...mapActions('taskItem', ['setTaskitems']),
    back() {
      this.$router.back();
    },
    newTaskitem(id) {
      this.$router.push({ name: "newTaskitem", params: { id: this.id } });
    }
  }
};
</script>

<style></style>
