<template>
  <div class="relative">
    
    <Landing v-if="this.$store.state.dev" />
    
    <div v-else class="bg-grey-light px-4 lg:px-16">
    
      <Nav />
    
      <nuxt />
    
    </div>
  
  </div>
</template>

<script>
  import Nav from "../components/Nav.vue";
  import Landing from "../components/Landing.vue";
  
  export default {
    components: {
      Nav,
      Landing
    },
    transition: "page",
  };
</script>


<style>
</style>
