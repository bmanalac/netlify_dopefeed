<template>
    <div class="banner__container overflow-hidden">
        <div class="image__container relative">

            <div class="absolute w-full h-full bg-transparent-50"></div>

            <div class="banner-details absolute z-10">
                <h1 class="font-ost text-white text-3xl md:text-5xl">Dopefeed feeding basics</h1>
                <p class="font-ost text-white text-xl md:text-4xl">Lorem ipsum thats sucks!</p>
            </div>

            <img class="w-full" :src="banner.img" :alt="banner.alt" />
        
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          banner: this.$store.state.bannerstore
        };
      }
    };
</script>

<style scoped>
    .image__container > img {
        max-height: 90vh;
        min-height: 75vh;
        object-fit: cover;
    }

    .banner-details {
        top: 25%;
        left: 10%;
    }
</style>
