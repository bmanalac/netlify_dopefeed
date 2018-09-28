<template>
    <nav id="nav">

        <div class="nav__container fixed flex justify-between items-center pin-l pin-t w-full z-50" 
        :class="{ 'active border-b-2 border-grey-lightest': navActive }">

            <div class="cursor-pointer m-4 z-50" v-on:click="isActive = !isActive">

                <div class="m-auto w-8">

                    <div class="bar1 h-1 bg-red-light mx-0 my-1" v-bind:class="{ active: isActive }"></div>

                    <div class="relative bar2 h-1 bg-red-light my-1" v-bind:class="{ 'active': isActive, 'opacity-0': isActive }">
                        <h2 v-show="mobile" class="absolute text-red-light text-center z-0">Menu</h2>
                    </div>

                    <div class="bar3 h-1 bg-red-light mx-0 my-1" v-bind:class="{ active: isActive }"></div>

                </div>

            </div>

            <nuxt-link class="hidden logo cursor-pointer" to="/">

                <div class="styled-responsive-image block w-full h-full">

                    <img class="styled-responsive-image__img h-full" src="~/assets/svg/empire-brands.svg" alt="star wars empire">

                </div>

            </nuxt-link>

            <div class="search-bar__container p-4">

                <span class="icon-search text-lg">Search Icon</span>

            </div>

            <div class="side-menu__link-list fixed pin-t flex flex-col justify-center pt-0 w-full h-screen z-40" v-bind:class="{ 'not-active': !isActive, 'active': isActive }" v-on:click="isActive = !isActive">

                <nuxt-link class="font-oswald text-4xl text-red-light pl-4 py-4 hover:bg-grey-lightest hover:shadow" to="/">Home</nuxt-link>

                <nuxt-link class="font-oswald text-4xl text-red-light pl-4 py-4 hover:bg-grey-lightest hover:shadow" to="/about">About</nuxt-link>

                <nuxt-link class="font-oswald text-4xl text-red-light pl-4 py-4 hover:bg-grey-lightest hover:shadow" to="/gallery">Gallery</nuxt-link>

            </div>

        </div>

    </nav>
</template>

<script>
    export default {
      data() {
        return {
          isActive: false,
          navActive: false,
          mobile: false
        };
      },
      methods: {
        handleScroll() {
          const scrollable =
            document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = window.scrollY;
          const navElHeight = document.getElementsByClassName("nav__container")[0]
            .scrollHeight;

          if (scrolled > 10) {
            this.navActive = true;
          } else if (scrolled <= 10) {
            this.navActive = false;
          }
        }
      },
      mounted() {
        window.addEventListener("scroll", this.handleScroll);
      },
      destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    };
</script>

<style scoped>
    .nav__container.active {
      background-color: rgba(255, 255, 255, 0.95);
      transition: 0.4s;
    }

    .logo {
      width: 80px;
      /* left: calc(50% - 40px); */
    }

    .side-menu__link-list {
      background-color: rgba(224, 224, 224, 0.95);
    }

    .not-active.side-menu__link-list {
      left: -100%;
    }

    .active.side-menu__link-list {
      left: 0;
    }

    a,
    .side-menu__link-list,
    .bar-menu,
    .bar1,
    .bar2,
    .bar3 {
      transition: 0.3s;
    }

    h2 {
        font-size: 1.75rem;
      top: -14px;
      left: 100%;
    }

    .active.bar1 {
      transform: rotate(-45deg) translate(-7px, 5px);
    }

    .active.bar3 {
      transform: rotate(45deg) translate(-6px, -5px);
    }
</style>