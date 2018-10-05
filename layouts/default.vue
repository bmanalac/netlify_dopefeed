<template>
    <div class="relative">

        <!-- logo -->
        <div class="logo absolute pin-t text-white text-center p-4 z-20">
            <h1 class="font-pacifico text-xl">The</h1>
            <h1 class="font-ost text-2xl">DOPEFEED</h1>
            <p class="font-oswald text-base">What Tickles Your Tummy?</p>
        </div>

        <!-- nav-bar(s) -->
        <div class="sep__container absolute flex items-center justify-center" :class="{ 'active' : navActive }">
            <div class="sep-line absolute z-20" :class="{ 'active': navActive, 'bg-black': !navActive }"></div>

            <div @click="navActive = true; sideNavActive = !sideNavActive">
                <Nav :active="sideNavActive" />
            </div>
        </div>

        <!-- side-menu -->
        <div @click="sideNavActive = !sideNavActive">
            <Nav-side-menu :active="sideNavActive" />
        </div>

        <Landing v-if="this.$store.state.dev" />

        <nuxt v-else />
    </div>
</template>

<script>
    import Landing from "../components/Landing.vue";
    import Nav from "@/components/Nav/Nav.vue";
    import NavSideMenu from "@/components/Nav/NavSideMenu.vue";

    export default {
      data() {
        return {
          navActive: false,
          sideNavActive: false
        };
      },
      components: {
        Landing,
        Nav,
        NavSideMenu
      }
    };
</script>


<style scoped>
    .logo {
      text-shadow: black -5px 5px 5px;
      left: 50%;
    }

    .sep__container,
    .sep-line {
      transition: all 0.4s cubic-bezier(0.86, 0.61, 0.36, 0.88);
    }

    .sep__container {
      top: calc(50% - 25.5px);
      left: calc(50% - 32px);
    }

    .sep__container.active {
      top: 1.5%;
      left: 0.5%;
    }

    .sep-line {
      width: 50px;
      height: 50px;
      transform: rotate(45deg);
    }

    .sep-line.active {
      background-color: rgba(0, 0, 0, 0.5);
      transform: rotate(90deg);
    }

    @media (max-width: 767px) {
      .logo {
        left: calc(50% - (192px / 2));
      }
    }
</style>
