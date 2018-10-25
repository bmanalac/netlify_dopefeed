<template>
    <div class="side-menu__link-list fixed pin-t flex flex-col justify-center pt-0 w-full h-screen z-20" 
         :class="{ 'active': active, 'not-active': !sideNavActive }" 
         @click="sideNavActive = false">

        <nuxt-link class="font-oswald text-4xl text-red-light pl-4 py-4 hover:bg-grey-lightest hover:shadow" to="/" @click="handleClick">Home</nuxt-link>

        <div class="py-4">
            <div class="font-oswald text-4xl text-red-light pl-4 py-4">
                Gallery
            </div>
            <ul class="ml-4">
                <nuxt-link to="/gallery/cookbook">
                    <li class="font-oswald text-4xl text-red-light pl-4 py-4 hover:bg-grey-lightest hover:shadow">Cookbook</li>
                </nuxt-link>
                <nuxt-link to="/gallery/haven">
                    <li class="font-oswald text-4xl text-red-light pl-4 py-4 hover:bg-grey-lightest hover:shadow">Haven</li>
                </nuxt-link>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
      props: ["active"],
      data() {
        return {
          sideNavActive: false
        };
      },
      methods: {
        handleClick() {
          return false;
        }
      }
    };
</script>

<style scoped>
    .side-menu__link-list {
      transition: 0.4s;
      background-color: rgba(0,0,0,0.9);
    }

    .side-menu__link-list.not-active {
      left: -100%;
    }

    .side-menu__link-list.active {
      left: 0;
    }
</style>

