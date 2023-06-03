<template>
    <div>
        <span v-if="task.completed" @click="UpdateTask(task)" class="bi bi-check-all fs-3 p-2 col"></span>
        <span v-else @click="UpdateTask(task)" class="bi bi-check fs-3 p-2 col"></span>
        <span v-if="loading" class="spinner-border spinner-border-sm mx-2"></span>
    </div>
</template>

<script>

import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
    props: [
        'task'
    ]
    ,
    setup() {

        const store = useStore();
        const loading = ref(false)

        async function UpdateTask(task) {

            loading.value = true;
            await store.dispatch("UpdateTask", task);
            loading.value = false;
        }


        return {
            UpdateTask,
            loading
        }
    }

}





</script>
<style></style>