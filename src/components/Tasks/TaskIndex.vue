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

          <div class="card d-flex flex-row align-items-center justify-content-between" :class="{ 'bg-danger': task.completed }">

            <div class="card-body">
              <del v-if="task.completed">{{ task.title }} </del>
              <div v-else>{{ task.title }}</div>
            </div>
            <div class="d-flex flex-row align-items-center">
            <UpdateTask  :task="task"/>
            <DeleteTask  :id="task.id"/>
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
import UpdateTask from "../Tasks/UpdateTask.vue";
import DeleteTask from "../Tasks/DeleteTask.vue";

export default {
  name: "HomeComp",
  components:{
    filterTask , 
    CreateTask , 
    UpdateTask , 
    DeleteTask
  } , 
  setup() {
    const store = useStore();
    const tasks = computed(() => {
      return store.getters['task/allTasks']
    })

    const isHide = ref(false) ; 

    async function fetchTask() {
      isHide.value = true ;
      await store.dispatch('task/fetchTasks');
      isHide.value = false;
    }
    fetchTask();

    return { fetchTask, tasks , isHide };
  },
};
</script>
