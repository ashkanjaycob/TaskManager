<template>
  <div>
    <div class="bodytxt">
      <h1 class="fw-bolder">Vuex Taskmanager Project - By Ashkan Yaghobi</h1>
        <br>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
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
    const count = computed(() => store.state.count);

    return { count };
  },
};
</script>

<style scoopd>
.bodytxt {
  text-align: center;
  padding : 75px;
  font-family:"Arial"
}
</style>
