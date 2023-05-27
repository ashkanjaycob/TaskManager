<template>
  <div>
    <div class="container">
      <div class="row g-3 mt-4">
        <div v-for="task in tasks" :key="task.id" class="col-md-4">

          <div class="card" :class="{'bg-danger' : task.completed }">

            <div class="card-body ">
             <del v-if="task.completed">{{ task.title }} </del>
             <div v-else >{{ task.title }}</div>
            </div>

          </div>

        </div>
      </div>
    </div>
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

    return { fetchTask, tasks };
  },
};
</script>
