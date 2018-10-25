<template>
    <div class="bg-black-dark flex flex-col md:flex-row w-full h-full">
        <div class="featured-list relative flex justify-center text-white-dark bg-black-dark w-full h-full" 
             v-for="(featured, index) in featuredStore" 
             :key="index">

            <nuxt-link :to="`/gallery/${featured.slug}`" 
                       class="featured-list__link absolute w-5/6 lg:w-auto z-20">
                <Button-Gallery classes="font-cast-iron text-xl lg:text-4xl tracking-wide">
                    {{ featured.title }}
                </Button-Gallery>
            </nuxt-link>

            <div class="featured-list-image__container relative flex items-center justify-center w-full h-full p-4 md:p-8 lg:p-16">
                <div class="absolute bg-transparent-50 rounded-lg w-full h-full z-10"></div>
                <img class="rounded-lg w-full" :src="featured.image" :alt="featured.alt" />
            </div>
        
        </div>
    </div>
</template>

<script scoped>
    import ButtonGallery from "@/components/common/Button.vue";

    export default {
      components: {
        ButtonGallery
      },
    };
</script>

<style scoped>
    .featured-list__link {
        top: 50%;
    }

    .featured-image__details.active {
      transition: 0.4s;
      opacity: 1;
    }

    .featured-list-image__container {
      transition: all 0.4s;
      top: 0;
    }

    .featured-list-image__container.active {
      top: -100%;
    }

    img {
      height: 75vh;
      object-fit: cover;
    }

    @media (min-width: 767px) {
      img {
        height: 75vh;
      }
    }
</style>
