<template>
  <div>
    <h2>Task index</h2>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "HomeComp",
  setup() {
    const store = useStore();

    function fetchTask() {
      store.dispatch("fetchTasks");
    }
    fetchTask();

    return { fetchTask };
  },
};
</script>
