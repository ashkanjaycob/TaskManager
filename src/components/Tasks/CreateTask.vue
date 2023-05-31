<template>
  <div>

    <h3>Create Task :</h3>
    <form @submit.prevent="storeTask" class="row">
      <div class="col-md-6">
        <input v-model="title" type="text" class="form-control">
        <div class="form-text text-danger">
          {{titleError}}
        </div>
      </div>
      <div class="col-md-6">
        <button type="submit" class="btn btn-dark">Create</button>
      </div>
    </form>

  </div>
</template>

<script>
// import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  name: "CreateTask",

  setup() {

    // const store = useStore();
    const title = ref("");
    const titleError = ref("");

    function storeTask(){
      if (title.value ==="") {
        titleError.value = "This title is Required";
      }else {
        titleError.value = "";
      }
    }
      
      return {
        storeTask , 
        title , 
        titleError
      }
    }

  }
</script>
