<template>
    <nav id="nav">

        <div class="fixed pin-l pin-t flex w-16 h-16 cursor-pointer z-50" v-on:click="isActive = !isActive">

            <div class="m-auto w-8">

                <!-- <div class="text-red-light mx-0 my-1" v-bind:class="{ 'opacity-0': isActive }">Menu</div> -->

                <div class="bar1 h-1 bg-red-light mx-0 my-1" v-bind:class="{ active: isActive }"></div>

                <div class="bar2 h-1 bg-red-light mx-0 my-1" v-bind:class="{ active: isActive, 'opacity-0': isActive }"></div>

                <div class="bar3 h-1 bg-red-light mx-0 my-1" v-bind:class="{ active: isActive }"></div>

            </div>

        </div>

        <nuxt-link class="logo absolute pin-t cursor-pointer pt-1 z-50" to="/">

            <div class="styled-responsive-image block w-full h-full">

                <img class="styled-responsive-image__img h-full" src="~/assets/svg/empire-brands.svg" alt="star wars empire">

            </div>

        </nuxt-link>

        <div class="side-menu__link-list fixed flex flex-col justify-center pt-0 w-full h-screen z-40" v-bind:class="{ 'not-active': !isActive, 'active': isActive }" v-on:click="isActive = !isActive">

            <nuxt-link class="font-oswald text-4xl text-red-light pl-4 py-4 hover:bg-grey-lightest hover:shadow" to="/">Home</nuxt-link>

            <nuxt-link class="font-oswald text-4xl text-red-light pl-4 py-4 hover:bg-grey-lightest hover:shadow" to="/about">About</nuxt-link>

            <nuxt-link class="font-oswald text-4xl text-red-light pl-4 py-4 hover:bg-grey-lightest hover:shadow" to="/gallery">Gallery</nuxt-link>

        </div>

    </nav>
</template>

<script>
    export default {
      data() {
        return {
          isActive: false
        };
      }
    };
</script>

<style scoped>
    .logo {
      width: 50px;
      height: 50px;
      left: calc(50% - 25px);
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
    .bar1,
    .bar2,
    .bar3 {
      transition: 0.3s;
    }

    .active.bar1 {
      transform: rotate(-45deg) translate(-7px, 5px);
    }

    .active.bar3 {
      transform: rotate(45deg) translate(-6px, -5px);
    }
</style>