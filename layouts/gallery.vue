<template>
    <div class="relative">
        <Nav class="relative z-50" />

        <nuxt />
    </div>
</template>

<script>       
    import Nav from "@/components/Nav/index.vue";

    export default {
      components: {
        Nav
      }
    };
</script>


<style scoped>
</style>
