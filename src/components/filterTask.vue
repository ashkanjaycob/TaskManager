<template>
    <div>
        <h3>Filter Tasks</h3>
        <div class="row">
            <div class="col-md-2 mb-4">
                <select @change="filterTasks()" class="form-select form-select-sm">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>

            </div>

        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore();
        function filterTasks() {
            store.dispatch('filterTasks');
        }

        return { filterTasks }
    }
}
</script>
<style></style>