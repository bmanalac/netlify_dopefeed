<template>
    <div class="relative">

        <Landing v-if="this.$store.state.dev" />

        <nuxt v-else />

    </div>
</template>

<script>
    import Landing from "../components/Landing.vue";

    export default {
      components: {
        Landing
      },
      transition: "page"
    };
</script>


<style>
</style>
