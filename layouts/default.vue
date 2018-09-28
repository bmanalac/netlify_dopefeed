<template>
    <div class="relative">

        <Landing v-if="this.$store.state.dev" />

        <div v-else>

            <Nav />

            <nuxt class="bg-white sm:pt-8 sm:mx-4 lg:mx-32" />

            <Footer />

        </div>

    </div>
</template>

<script>
    import Nav from "../components/Nav.vue";
    import Landing from "../components/Landing.vue";
    import Footer from "../components/Footer.vue";

    export default {
      components: {
        Nav,
        Landing,
        Footer
      },
      transition: "page"
    };
</script>


<style>
</style>
