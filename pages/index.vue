<template>
    <section class="section bg-black">

        <!-- <Loading /> -->

        <div class="wrapper">
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

    export default {
      data() {
        return {
          choiceDetails: this.$store.state.choices,
          events: false
        };
      },
      components: {
        Loading,
        ChoiceBanner
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
