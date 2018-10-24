<template>
    <div class="relative">
        <Nav class="relative z-50" />

        <Landing v-if="this.$store.state.dev" />

        <nuxt v-else />
    </div>
</template>

<script>
    import Landing from "../components/Landing.vue";
    import Nav from "@/components/Nav/index.vue";

    export default {
      components: {
        Landing,
        Nav
      }
    };
</script>


<style scoped>
</style>
