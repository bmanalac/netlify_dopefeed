<template>
    <section class="section">

        <div class="hero__container sm:pt-8">

            <Hero class="bundle-feature-1 mb-8 md:mb-32" />

        </div>

        <div class="latest-post__container">

            <Latest-posts class="bundle-feature-3 mb-8 md:mb-32" />

        </div>

        <div class="utility-bundle__container">

            <Utility class="bundle-feature-2 mb-8 md:mb-32" />

        </div>

        <div class="gallery__container flex justify-center border border-black p-8 mb-8 md:mb-32">

            <h1>Gallary Feed</h1>

        </div>

    </section>
</template>

<script>
    import Hero from "~/components/Hero.vue";
    import Utility from "~/components/Utility.vue";
    import Latestposts from "~/components/Latestposts.vue";

    export default {
      components: {
        Hero,
        Utility,
        "Latest-posts": Latestposts
      }
    };
</script>

<style scoped>
    .something {
      height: 250px;
    }
</style>
