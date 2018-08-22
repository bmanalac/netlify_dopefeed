<template>
  <div>
    
    <Landing />
    
    <!-- <div>
    
      <Nav/>
    
      <nuxt/>
    
    </div> -->
  
  </div>
</template>

<script>
  import Nav from "../components/Nav.vue";
  import Landing from "../components/Landing.vue";

  export default {
    data: () => {
      return {
        devMode: true
      };
    },
    components: {
      Nav,
      Landing
    },
    transition: "page"
  };
</script>


<style>
</style>
