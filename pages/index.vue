<template>
    <section class="section">

        <div class="hero__container flex flex-col pt-8">

            <Hero class="bundle-feature-1 mb-8 md:mb-32" />

            <Latest-posts class="bundle-feature-3 mb-8 md:mb-32" />

        </div>

        <Utility class="bundle-feature-2 mb-8 md:mb-32" />

        <div class="gallery__container flex justify-center border border-black p-8 mb-8 md:mb-32">

            <h1>Gallary Feed</h1>

        </div>

        <Footer />

    </section>
</template>

<script>
    import Hero from "~/components/Hero.vue";
    import Utility from "~/components/Utility.vue";
    import Latestposts from "~/components/Latestposts.vue";
    import Footer from "~/components/Footer.vue";

    export default {
      components: {
        Hero,
        Utility,
        "Latest-posts": Latestposts,
        Footer
      }
    };
</script>

<style scoped>
    .something {
      height: 250px;
    }
</style>
