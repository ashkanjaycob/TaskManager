<template>
    <div>
        <span v-if="task.completed" class="bi bi-check-all fs-3 p-2 col"></span>
        <span v-else  class="bi bi-check fs-3 p-2 col"></span>

    </div>
</template>

<script>
export default {
    props: [
        'task'
    ]



}

</script>
<style></style>