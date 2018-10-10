<template>
    <div class="w-full h-full">
        <!-- @mouseover="choiceHover = true" 
        @mouseleave="choiceHover = false" -->


        <div class="choice-image__link relative flex items-center justify-center text-white-dark bg-black w-full h-full overflow-hidden">
            
            
            <div class="absolute bg-transparent-50 w-full h-screen z-10"></div>

            <div class="choice-image__details absolute flex flex-col items-center text-center p-4 opacity-0 z-10" 
                :class="{ 'active' : choiceHover }">

                <!-- .title.absolute? -->
                <div class="fuck z-20">
                    <!-- <h1 class="font-cast-iron text-3xl lg:text-5xl my-8">{{ details.title }}</h1> -->
                </div>

                <nuxt-link :to="`/gallery/${id}`">
                    <Button-Gallery classes="font-cast-iron text-2xl md:text-4xl tracking-wide">
                        {{ details.title }}
                    </Button-Gallery>
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
          id: '',
          choiceHover: true
        };
      },
      computed: {
          lowerCase() {
              return this.details.id.toLowerCase();
          }
      },
      methods: {
          getId() {
              this.id = this.lowerCase;
          }
      },
      beforeMount() {
          this.getId();
      }
    };
</script>

<style>
   .title {
        top: 1rem;
        left: 1.5rem;
        transform: rotate(90deg);
        transform-origin: 0;
    }

    /* .title > h1 {
        top: 0;
    } */

    .choice-image__details.active {
      transition: 0.4s;
      opacity: 1;
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
