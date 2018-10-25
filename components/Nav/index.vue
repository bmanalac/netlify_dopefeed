<template>
    <nav id="nav relative">
        <div class="nav-left-section fixed pin-t pin-l flex flex-row items-center z-30"
            @click="sideNavActive = !sideNavActive">
            <div class="nav-icon__container relative m-2 overflow-hidden" 
                    @mouseover="navHover = true" 
                    @mouseout="navHover = false">
                <div class="nav-icon-shadow absolute pin-t pin-l bg-yellow w-full h-full" 
                    :class="{ 'active': navHover }"></div>
                <Nav-icon class="nav-icon bg-transparent-25 border p-2"
                    :class="{ 'active p-4': navHover }"
                    :active="sideNavActive" />
            </div>

            <div class="nav-icon-menu__header invisible md:visible opacity-0 mt-1"
                :class="{ 'active opacity-100': navHover }">
                <h1 class="font-ost text-4xl text-white-dark">Menu</h1>
            </div>
        </div>

        <!-- logo -->
        <div class="nav-right-section">
            <div class="nav-logo__container fixed pin-t pin-r m-2 z-20"
                @mouseover="navLogoLink = true" 
                @mouseout="navLogoLink = false">
                <div class="nav-logo-icon__container">
                    <nuxt-link class="nav-logo-icon__link flex flex-row items-center text-white text-center z-20 h-full"
                        to="/about">
                        <div class="nav-logo__header relative flex flex-col content-end text-right">
                                <div class="nav-logo__header-details-1 hidden"
                                    :class="{ 'active': navLogoLink }">
                                <h2 class="font-playfair text-xl text-white-dark">ME</h2>
                                </div>
                                <div class="nav-logo__header-details-2"
                                    :class="{ 'active': navLogoLink }">
                                <h1 class="font-playfair text-2xl md:text-3xl text-white leading-none">DOPEFEED</h1>
                                <h2 class="font-playfair text-base text-white-dark leading-none">FOOD &amp; DESTINATION</h2>
                                </div>
                        </div>
                    </nuxt-link>
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
          navHover: false,
          navLogoLink: false,
          sideNavActive: false,
        };
      },
      components: {
        NavIcon,
        NavSideMenu
      }
    };
</script>

<style scoped>
    .nav-icon {
      width: 3rem;
    }

    .nav-icon,
    .nav-logo__header {
        height: 3rem;
    }

    .nav-icon {
        border-color: rgba(100,100,100,0.25);
    }

    .nav-icon-shadow,
    .nav-icon,
    .nav-icon-menu__header {
      transition-property: transform, background-color, padding, opacity;
      transition-duration: 0.4s, 1s, 0.4s, 0.4s;
    }

    .nav-icon-menu__header {
        transform: translateX(25%);
    }

    .nav-icon-menu__header.active {
        transform: translateX(0);
    }

    .nav-icon-shadow {
      transform: scale(0);
    }

    .nav-icon-shadow.active {
      background: linear-gradient(0deg, #f4db5e, #00cec9); 
      transform: scale(1);
    }
</style>
