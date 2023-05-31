<template>
  <div>

    <div class="container">
      <CreateTask class="mt-5" />
      <div class="row d-flex justify-content-center" v-if="isHide">
      <div class="spinner-border mt-5 text-danger"  style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      </div>  
      <div class="row g-3 mt-4" v-else>

        <filterTask />

        <div v-for="task in tasks" :key="task.id" class="col-md-4">

          <div class="card" :class="{ 'bg-danger': task.completed }">

            <div class="card-body ">
              <del v-if="task.completed">{{ task.title }} </del>
              <div v-else>{{ task.title }}</div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed , ref } from "vue";
import filterTask from "../filterTask.vue";
import CreateTask from "../Tasks/CreateTask.vue";

export default {
  name: "HomeComp",
  components:{
    filterTask , 
    CreateTask
  } , 
  setup() {
    const store = useStore();
    const tasks = computed(() => {
      return store.getters.allTasks
    })

    const isHide = ref(false) ; 

    async function fetchTask() {
      isHide.value = true ;
      await store.dispatch('fetchTasks');
      isHide.value = false;
    }
    fetchTask();

    return { fetchTask, tasks , isHide };
  },
};
</script>
