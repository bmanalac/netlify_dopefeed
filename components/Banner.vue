<template>
    <div class="banner w-full h-full">
        <div class="relative h-full">

            <div class="banner-details absolute z-10">
                <h1 class="font-ost text-white text-3xl md:text-5xl">Dopefeed feeding basics</h1>
                <p class="font-ost text-white text-xl md:text-4xl">Lorem ipsum thats sucks!</p>
            </div>

            <div class="banner-image-grid relative h-full">
                <div class="absolute w-full h-full bg-transparent-50"></div>
                <div class="banner-image__container overflow-hidden">
                    <!-- <img class="w-full h-full" :src="bannerStore.image" :alt="bannerStore.alt" /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    };
</script>

<style scoped>
    img {
      object-fit: cover;
    }

    .banner-image-grid {
        display: grid;
        /* grid-template-columns: repeat(3, 1fr);  */
    }

    .banner-details {
      top: 25%;
      left: 10%;
    }
</style>
