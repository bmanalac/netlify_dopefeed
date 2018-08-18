<template>
    <section class="section">

        <div class="utility-bundle__container md:border-b border-solid border-white-dark">

            <div class="left-utility">

                <Hero class="utility-bundle-feature-1" />

                <Senaryutility class="utility-bundle-feature-2" />

            </div>

            <Latestposts class="right-utility utility-bundle-feature-3" />

        </div>

        <Footer />

    </section>
</template>

<script>
    import Hero from "../components/Hero.vue";
    import Senaryutility from "../components/Senaryutility.vue";
    import Latestposts from "../components/Latestposts.vue";
    import Footer from "../components/Footer.vue";

    export default {
      components: {
        Hero,
        Senaryutility,
        Latestposts,
        Footer
      }
    };
</script>

<style lang="scss">
    @media (min-width: 768px) {
      .utility-bundle__container {
        display: grid;
        grid-template: auto / 2fr minmax(200px, 1fr);
        grid-template-areas: "left-util right-util";

        .left-utility {
          grid-area: left-util;
        }

        .right-utility {
          grid-area: right-util;
        }
      }
    }
</style>
