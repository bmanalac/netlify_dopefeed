<template>
    <section class="landing bg-black">
        <div class="wrapper">

            <Banner />

            <div class="bg-white-dark w-full">
                <Latestposts />
            </div>

            <div class="flex flex-col md:flex-row bg-black w-full h-screen md:overflow-hidden">

                <Choice-banner :details="choiceDetails.foodie" />

                <Choice-banner :details="choiceDetails.destination" />

            </div>

        </div>
    </section>
</template>

<script>
    import Loading from "@/components/Loading.vue";
    import ChoiceBanner from "@/components/ChoiceBanner.vue";
    import Banner from "@/components/Banner.vue";
    import Latestposts from "@/components/Latestposts.vue";

    export default {
      data() {
        return {
          choiceDetails: this.$store.state.choices,
          events: false
        };
      },
      components: {
        Loading,
        Banner,
        ChoiceBanner,
        Latestposts
      }
    };
</script>

<style scoped>
    @media (max-width: 767px) {
      .choice-image__container {
        height: 50vh;
      }
    }
</style>
