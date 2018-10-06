<template>
    <div class="w-full h-full" 
        >
        <!-- @mouseover="choiceHover = true" 
        @mouseleave="choiceHover = false" -->


        <div class="choice-image__link relative flex items-center justify-center text-white-dark bg-black w-full h-full overflow-hidden">
            
            <div class="absolute bg-rgba-black w-full h-screen z-10"></div>

            <div class="choice-image__details absolute flex flex-col items-center p-4 opacity-0 z-10" 
                :class="{ 'active' : choiceHover }">
                <p class="font-quat text-xl">{{ details.definition }}</p>
                <h1 class="font-oswald text-4xl my-8">{{ details.title }}</h1>
        
                <nuxt-link :to="`/gallery/${id}`">
                    <Button-Gallery text="Gallery" />
                </nuxt-link>
            </div>

            <div class="choice-image__container relative w-full h-full">
                <img class="w-full h-full"
                :src="details.img"
                :alt="details.alt" />
            </div>
        </div>
    </div>
</template>

<script>
    import ButtonGallery from '@/components/common/Button.vue';

    export default {
      props: ["details"],
      components: {
          ButtonGallery
      },
      data() {
        return {
          id: this.details.id,
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
