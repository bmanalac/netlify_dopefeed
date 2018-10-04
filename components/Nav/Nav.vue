<template>
    <nav id="nav">
        <div class="nav__container relative">

            <!-- hamburger-menu -->
            <div class="hamburger__container cursor-pointer p-4">

                <div class="hamburger relative w-8 z-20">

                    <div class="bar1 pin-t h-1 bg-red-light" :class="{ 'active': active }"></div>

                    <div class="bar2 h-1 bg-red-light my-1" :class="{ 'active opacity-0': active }">
                        <h2 v-show="mobile" class="absolute text-red-light text-center z-0">Menu</h2>
                    </div>

                    <div class="bar3 h-1 bg-red-light" :class="{ 'active': active }"></div>

                </div>

            </div>

            <!-- logo -->
            <nuxt-link class="hidden logo cursor-pointer" to="/">

                <div class="styled-responsive-image block w-full h-full">

                    <img class="styled-responsive-image__img h-full" src="~/assets/svg/empire-brands.svg" alt="star wars empire">

                </div>

            </nuxt-link>

            <!-- search bar -->
            <div class="hidden search-bar__container relative">

                <input class="absolute border border-grey rounded-full pl-2 pr-1 py-1 opacity-0" placeholder="Search" :class="{ 'active opacity-100': searchActive }" />

                <button @click="searchActive = !searchActive">

                    <i class="relative text-2xl text-grey-dark fas fa-search z-40"></i>

                </button>

            </div>

        </div>

    </nav>
</template>

<script>
    export default {
      props: ["active"],
      data() {
        return {
          searchActive: false,
          scrollNavActive: false
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
            this.scrollNavActive = true;
          } else if (scrolled <= 10) {
            this.scrollNavActive = false;
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

    .hamburger__container {
      transition: 0.4s;
    }

    .hamburger__container.active {
      transform: translateX(100%);
    }

    .logo {
      width: 80px;
      /* left: calc(50% - 40px); */
    }

    .search-bar__container > input {
      top: -2px;
      right: 36px;
      transform: translateY(-100%);
    }

    .search-bar__container > input.active {
      transform: translateY(0);
    }

    a,
    .search-bar__container > input,
    .bar-menu,
    .bar1,
    .bar2,
    .bar3 {
      transition: 0.4s;
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