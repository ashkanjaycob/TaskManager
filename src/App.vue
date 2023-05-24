<template>

  <headerComp />
  

  <router-view></router-view>
  
</template>

<script>
import headerComp from './components/headerComp.vue'

export default {
  name: 'App',
  components: {
    headerComp
  }
}
</script>

<style>

</style>
