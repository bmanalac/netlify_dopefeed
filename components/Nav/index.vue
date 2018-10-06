<template>
    <nav id="nav" class="flex justify-center w-full cursor-pointer">
        <div class="fixed pin-t flex items-center w-full lg:w-5/6">

            <!-- nav-bar(s) -->
            <div class="nav-left-section flex-1 flex items-center bg-yellow md:bg-transparent" @click="sideNavActive = !sideNavActive">
                <Nav-icon class="nav-bar flex items-center justify-center bg-yellow md:bg-rgba-black md:hover:bg-yellow border-r border-b border-l border-yellow w-full" 
                    :active="sideNavActive" />

                <!-- subscribe-btn -->
                <div class="nav-subscribe flex-1 flex items-center justify-center border-b border-yellow bg-yellow md:bg-rgba-black md:hover:bg-yellow">
                    <h1 class="font-oswald text-2xl text-yellow tracking-wide">Subscribe!</h1>
                </div>
            </div>

            <!-- logo -->
            <div class="nav-logo flex-none flex items-center justify-center bg-yellow md:bg-rgba-black md:hover:bg-yellow text-white text-center border-r border-b border-l border-yellow z-20 h-full px-4">
                <h1 class="font-pacifico text-2xl">DOPEFEED</h1>
            </div>

            <!-- search-bar -->
            <div class="nav-right-section flex-1 flex items-center bg-yellow md:bg-transparent">
                <div class="social-media md:flex justify-around hidden border-b border-yellow bg-yellow md:bg-rgba-black md:hover:bg-yellow w-full">
                    <a class="media__container relative my-auto p-1" v-for="(media, index) in socialMedia" :key="index" :href="`http://www.${media}.com/`" target="_blank">
                        <i class="text-yellow hover:text-grey-dark text-2xl" :class="`fab fa-${media}`"></i>
                    </a>
                </div>

                <div class="nav-bar flex items-center justify-center bg-yellow md:bg-rgba-black md:hover:bg-yellow  border-r border-b border-l border-yellow cursor-pointer w-full ml-auto">
                    <input class="hidden absolute border border-grey rounded-full pl-2 pr-1 py-1 opacity-0" placeholder="Search" :class="{ 'active opacity-100': searchActive }" />
                    <div @click="searchActive = !searchActive">
                        <i class="relative text-2xl text-brown-darkest md:text-yellow fas fa-search z-40"></i>
                    </div>
                </div>
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
        text-shadow: -1px 0 1px black, 0px 1px 1px black, 1px 0px 1px black, 0 1px 1px black;
    }

    .nav-bar {
      width: 80px;
    }
</style>
