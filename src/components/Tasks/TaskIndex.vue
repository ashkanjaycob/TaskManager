<template>
  <div>
    <h2>Task index</h2>
    <p>{{tasks}}</p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "HomeComp",
  setup() {
    const store = useStore();
    const tasks = computed(() => {
      return store.getters.allTasks
    })

    function fetchTask() {
      store.dispatch('fetchTasks');
    }
    fetchTask();

    return { fetchTask , tasks};
  },
};
</script>
