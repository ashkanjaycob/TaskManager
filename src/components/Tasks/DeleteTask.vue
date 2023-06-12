 <template>
    <div>
        <span @click="DeleteTask" class="bi bi-trash-fill fs-5 p-2 col"></span>
        <span v-if="loading" class="spinner-border spinner-border-sm mx-2"></span>
    </div>
</template>

<script>

import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
    props: [
        'id'
    ]
    ,
    setup(props ) {

        const store = useStore();
        const loading = ref(false)

        async function DeleteTask () {

            loading.value = true; 
            await store.dispatch("task/DeleteTask", props.id );
            loading.value = false;
        }


        return {
            DeleteTask,
            loading
        }
    }

}





</script>
<style></style>