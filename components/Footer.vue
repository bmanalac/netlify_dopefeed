<template>
    <footer class="flex flex-col md:flex-row items-center bg-white-dark border-t-2 border-grey-light p-4">
        
        <h1 class="title text-black text-center">Logo</h1>

        <div class="w-full">

            <div class="social-media flex flex-row text-black border border-black rounded-l-full rounded-r-full px-4 py-2 mx-4">

                <a class="media__container mx-4" v-for="(media, index) in socialMedia" :key="index" :href="`http://www.${media}.com/`" target="_blank">

                    <i class="text-black hover:text-grey-dark text-2xl" :class="`fab fa-${media}`"></i>

                </a>

            </div>

        </div>

        <div class="flex flex-row items-center justify-around text-black w-full p-4">

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
      }
    };
</script>

<style scoped>
    img {
      height: 25px;
    }

    a > i {
      transition: 0.4s;
    }

    i:hover {
      transform: scale(1.5);
    }
</style>
