<template>
    <section class="section">

        <!-- <Loading /> -->

        <div class="relative flex flex-col md:flex-row  h-screen">

            <Choice-banner :details="choiceDetails.carnivore"/>

            <div class="sep__container absolute flex items-center justify-center" :class="{ 'active' : sideNavActive }">
                
                <div class="sep-line absolute bg-black z-20"></div>

                <div
                    class="" 
                    @click="sideNavActive = !sideNavActive">
                    <Nav :active="sideNavActive" />
                </div>
            </div>

            <Choice-banner  :details="choiceDetails.herbivore"/>

            <div class="hidden page-arrow-down">V</div>

        </div>

        <!-- side-menu -->
        <div @click="sideNavActive = !sideNavActive">
            <Nav-side-menu :active="sideNavActive" />
        </div>

    </section>
</template>

<script>
    import Loading from "@/components/Loading.vue";
    import Nav from "@/components/Nav/Nav.vue";
    import NavSideMenu from "@/components/Nav/NavSideMenu.vue";
    import ChoiceBanner from "@/components/ChoiceBanner.vue";

    export default {
      data() {
        return {
          choiceDetails: this.$store.state.choices,
          sideNavActive: false
        };
      },
      components: {
        Loading,
        Nav,
        NavSideMenu,
        ChoiceBanner
      }
    };
</script>

<style scoped>
    .sep__container {
      transition: 0.4s;
      top: calc(50% - 25.5px);
      left: calc(50% - 32px);
    }

    .sep__container.active {
      transform: translate(50%, 50%);
    }

    .sep-line {
      width: 50px;
      height: 50px;
      transform: rotate(45deg);
    }

    @media (max-width: 767px) {
      .choice-image__container {
        height: 50vh;
      }
    }
</style>
