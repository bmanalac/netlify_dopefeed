<template>
    <section class="section bg-black">

        <!-- <Loading /> -->

        <div class="wrapper flex flex-col md:flex-row-reverse">
            <div class="absolute md:relative w-full md:w-1/2">
                <!-- <h1 class="text-white">Fuck</h1> -->
            </div>

            <div class="flex flex-col md:flex-row bg-black w-full md:w-1/2">

                <div class="flex flex-col w-full overflow-hidden">

                    <Choice-banner classes="mt-8" :details="choiceDetails.carnivore" />

                    <Choice-banner classes="margins" :details="choiceDetails.herbivore" />

                    <!-- page-down function -->
                    <div class="hidden page-arrow-down">V</div>
                </div>

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
