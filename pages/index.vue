<template>
    <section class="landing bg-black">

        <!-- <Loading /> -->

        <div class="wrapper">
            <div class="flex flex-col md:flex-row bg-black w-full h-screen md:overflow-hidden">

                <Choice-banner :details="choiceDetails.foodie">{{ choiceDetails.foodie.id }}</Choice-banner>

                <Choice-banner :details="choiceDetails.destination">{{ choiceDetails.destination.id }}</Choice-banner>

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
