<template>
  <div class="relative">
    
    <Landing v-if="this.$store.state.dev" />
    
    <div v-else>
    
      <Nav />
    
      <nuxt class="bg-white-dark pt-8 px-0 sm:px-8 md:px-16" />
    
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
