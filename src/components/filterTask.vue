<template>
    <div>
        <h3>Filter Tasks</h3>
        <div class="row">
            <div class="col-md-2 mb-4">
                <select v-model="number" @change="filterTasks()" class="form-select form-select-sm">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="200">all</option>
                </select>

            </div>

        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';
export default {
    setup() {
        const store = useStore();
        const number = ref();
        function filterTasks() {
            store.dispatch('filterTasks' , number.value);
        }

        return { filterTasks , number }
    }
}
</script>
<style></style>