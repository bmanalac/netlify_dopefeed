<template>
    <nav id="nav" class="flex justify-center w-full">
        <div class="fixed pin-t flex items-center w-full">

            <!-- nav-bar(s) -->
            <div class="nav-left-section flex-1 flex items-center bg-yellow md:bg-transparent-25" @click="sideNavActive = !sideNavActive">
                <Nav-icon class="nav-bar flex items-center justify-center bg-yellow md:bg-transparent-25 border-r border-b border-l border-yellow-darker w-full" :active="sideNavActive" />

                <!-- subscribe-btn -->
                <div class="nav-subscribe flex-1 flex items-center justify-center border-b border-yellow-darker bg-yellow md:bg-transparent-25">
                    <h1 class="md:flex hidden font-oswald text-base text-yellow tracking-wide">Subscribe!</h1>
                </div>
            </div>

            <!-- logo -->
            <nuxt-link to="/" class="nav-logo flex-none flex items-center justify-center bg-yellow md:bg-transparent-25 text-white text-center md:border-r border-b md:border-l border-yellow-darker z-20 h-full px-4">
                <i class="fas fa-bong text-4xl text-brown-darkest md:text-yellow"></i>
            </nuxt-link>

            <!-- search-bar -->
            <div class="nav-right-section flex-1 flex items-center bg-yellow md:bg-transparent-25">
                <div class="social-media flex justify-around border-b border-yellow-darker bg-yellow md:bg-transparent-25 w-full">
                    <a class="media__container relative md:flex hidden my-auto p-1" v-for="(media, index) in socialMedia" :key="index" :href="`http://www.${media}.com/`" target="_blank">
                        <i class="text-yellow hover:text-grey-dark text-xl" :class="`fab fa-${media}`"></i>
                    </a>
                </div>

                <!-- <div class="nav-bar flex items-center justify-center bg-yellow md:bg-transparent-25 md:hover:bg-yellow  border-r border-b border-l border-yellow-darker cursor-pointer w-full ml-auto">
                    <input class="hidden absolute border border-grey rounded-full pl-2 pr-1 py-1 opacity-0" placeholder="Search" :class="{ 'active opacity-100': searchActive }" />
                    <div @click="searchActive = !searchActive">
                        <i class="relative text-xl text-brown-darkest md:text-yellow fas fa-search z-40"></i>
                    </div>
                </div> -->
            </div>

        </div>

        <!-- side-menu -->
        <div @click="sideNavActive = !sideNavActive">
            <Nav-side-menu :active="sideNavActive" />
        </div>
    </nav>
</template>

<script>
    import NavIcon from "@/components/Nav/NavIcon.vue";
    import NavSideMenu from "@/components/Nav/NavSideMenu.vue";

    export default {
      data() {
        return {
          socialMedia: ["facebook", "instagram", "pinterest", "twitter"],
          searchActive: false,
          sideNavActive: false
        };
      },
      components: {
        NavIcon,
        NavSideMenu
      }
    };
</script>

<style scoped>
    .nav-subscribe,
    .social-media,
    .nav-bar,
    .nav-logo {
      height: 50px;
      transition: all 0.4s ease-out;
    }

    .nav-logo > h1 {
      text-shadow: -1px 0 1px black, 0px 1px 1px black, 1px 0px 1px black,
        0 1px 1px black;
    }

    .nav-bar {
      width: 80px;
    }
</style>
