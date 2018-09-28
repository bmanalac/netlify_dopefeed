<template>
    <footer class="flex flex-row items-center bg-black p-4">

        <div class="flex items-center w-full">

            <h1 class="title text-white-dark text-center">Logo</h1>

            <div class="social-media flex flex-row text-black px-4 py-2 border border-white-dark rounded-l-full rounded-r-full">

                <a class="media__container mx-4" v-for="(media, index) in socialMedia" :key="index" :href="`http://www.${media}.com/`" target="_blank">

                    <img class="w-full" :src="getImgUrl(media)" :alt="media">

                </a>

            </div>

        </div>

        <div class="flex flex-row items-center justify-around text-white-dark w-full p-4">

            <div class="resources-menu flex flex-col p-4 text-xs">

                <h2 class="mb-4">Resources</h2>

                <span>Subscription Services</span>

                <span>Site Map</span>

                <span>Writers</span>

                <span>Accessibility Help</span>

            </div>


        </div>

    </footer>
</template>

<script>
    export default {
      data: function() {
        return {
          socialMedia: ["facebook", "instagram", "pinterest", "twitter"]
        };
      },
      methods: {
        getImgUrl(name) {
          const images = require.context("../assets/svg/", false, /\.(png|svg)$/);
          return images("./" + name + "-brands.svg");
        }
      }
    };
</script>

<style scoped>
    .social-media {
      width: 14rem;
    }

    img {
      height: 25px;
    }
</style>
