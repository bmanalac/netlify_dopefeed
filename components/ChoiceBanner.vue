<template>
    <div class="w-full" 
        >
        <!-- @mouseover="choiceHover = true" 
        @mouseleave="choiceHover = false" -->

        <nuxt-link 
                class="choice-image__link relative flex items-center justify-center text-white-dark bg-black w-full overflow-hidden" 
                to="/gallery">

            <div class="choice-image__details absolute p-4 opacity-0 z-10" 
                :class="[ {'active' : choiceHover}, classes ]">
                <h1 class="font-oswald text-4xl">{{ details.title }}</h1>
                <!-- <h1 class="font-cookie">{{ details.grammer }}</h1>
                <p class="font-quat mt-4">{{ details.definition }}</p> -->
            </div>

            <div class="choice-image__container relative w-full h-full">
                <img class="w-full h-full"
                :src="details.img"
                :alt="details.alt" />
            </div>
        </nuxt-link>
    </div>
</template>

<script>
    export default {
      props: ["details", "classes"],
      data() {
        return {
          choiceHover: true
        };
      }
    };
</script>

<style>
    .choice-image__details.active {
      transition: 0.4s;
      opacity: 1;
    }

    .choice-image__details.margins {
        bottom: 8rem;
    }

    .choice-image__link {
      height: 50vh;
    }

    .choice-image__container {
        transition: all 0.4s;
        top: 0;
    }

    .choice-image__container.active {
        top: -100%;
    }

    img {
      object-fit: cover;
    }

    @media (max-width: 767px) {
      .choice-image__details {
        opacity: 1;
      }
    }
</style>
