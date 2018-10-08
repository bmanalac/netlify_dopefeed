<template>
    <div class="relative bg-black">
        <Nav class="relative z-50" />

        <nuxt class="pt-16" />
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
