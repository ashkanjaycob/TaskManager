<template>
  <div>
    <h1>Home</h1>
    <h1>{{count}}</h1>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "HomeComp",
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);

    return { count };
  },
};
</script>
