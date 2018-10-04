<template>
    <div class="w-full" 
        @mouseover="choiceHover = true" 
        @mouseleave="choiceHover = false">

        <nuxt-link class="choice-image__container flex items-center justify-center text-white-dark bg-black w-full md:h-screen" to="/gallery">

            <div class="choice-image__details absolute bg-black p-4 opacity-0" :class="{ 'active' : choiceHover }">
                <h1 class="font-oswald">{{ details.title }}</h1>
                <h1 class="font-cookie">{{ details.grammer }}</h1>
                <p class="font-quat mt-4">{{ details.definition }}</p>
            </div>

            <img class="w-full h-full"
            :src="details.img"
            :alt="details.alt" />

        </nuxt-link>
    </div>
</template>

<script>
    export default {
      props: ["details"],
      data() {
        return {
          choiceHover: false
        };
      }
    };
</script>

<style>
    .choice-image__details.active {
      transition: 0.4s;
      opacity: 1;
    }

    img {
      object-fit: cover;
    }

    @media (max-width: 767px) {
      .choice-image__container {
        height: 50vh;
      }
      .choice-image__details {
        opacity: 1;
      }
    }
</style>
