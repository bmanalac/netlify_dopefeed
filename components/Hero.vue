<template>
    <div class="relative hero-bundle__container w-full">

        <!-- <div class=" absolute z-10 pin-t pin-l w-full h-full"></div> -->

        <div :class="`hero-post post-${index} relative shadow-md overflow-hidden`" v-for="(post, index) in featured" :key="index">

            <div class="styled-responsive-image block h-full">

                <img class="styled-responsive-image__img" :src="post.img" :alt="post.alt">

            </div>

            <nuxt-link to="/gallery" class="block absolute z-20 pin-b pin-l pin-r-custom text-white pt-0 pl-2 pb-2 ml-2 overflow-hidden">

                <span class="box-shadow-red table font-noto text-base py-1 md:py-1 md:mb-2">{{ post.category }}</span>

                <h1 class="box-shadow-black inline font-oswald text-2xl md:text-2xl">{{ post.title }}</h1>

                <ContentTypeBtn class="box-shadow-red table text-base py-1 md:mt-2" />

            </nuxt-link>

        </div>

    </div>
</template>

<script>
    import ContentTypeBtn from "../components/common/ContentTypeBtn.vue";

    export default {
      data() {
        return {
          featured: this.$store.state.herostore
        };
      },
      components: {
        ContentTypeBtn
      }
    };
</script>

<style scoped>
    .hero-bundle__container {
      display: grid;
      grid-template: repeat(6, minmax(auto, 200px)) / 1fr;
      grid-gap: 1rem;
      grid-template-areas:
        "p0"
        "p0"
        "p1"
        "p2"
        "p3"
        "p4";
    }

    .post-0 {
      grid-area: p0;
    }
    .post-1 {
      grid-area: p1;
    }
    .post-2 {
      grid-area: p2;
    }
    .post-3 {
      grid-area: p3;
    }
    .post-4 {
      grid-area: p4;
    }

    @media (min-width: 576px) and (max-width: 899px) {
      .hero-bundle__container {
        grid-template: repeat(3, minmax(auto, 200px)) / repeat(2, 1fr);
        grid-template-areas:
          "p0 p0"
          "p1 p2"
          "p3 p4";
      }
    }

    /* md */
    @media (min-width: 900px) {
      .hero-bundle__container {
        grid-template: repeat(4, minmax(100px, auto)) / repeat(7, 1fr);
        grid-template-areas:
          "p0 p0 p0 p1 p1 p2 p2"
          "p0 p0 p0 p1 p1 p4 p4"
          "p0 p0 p0 p1 p1 p4 p4"
          "p0 p0 p0 p3 p3 p4 p4"
          "p0 p0 p0 p3 p3 p4 p4";
      }
    }

    h1 {
      line-height: 1.75;
    }

    .filter {
      background: radial-gradient(
        circle at 100%,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.1) 50%,
        rgba(0, 0, 0, 0.1) 50%,
        rgba(0, 0, 0, 0.8) 75%
      );
    }

    .pin-r-custom {
      right: 12%;
    }

    .styled-responsive-image__custom {
      padding-top: 90%;
    }

    .box-shadow-black {
      background: rgba(0, 0, 0, 0.8);
      box-shadow: 1rem 0 0 rgba(0, 0, 0, 0.8), -1rem 0 0 rgba(0, 0, 0, 0.8);
      box-decoration-break: clone;
    }

    .box-shadow-red {
      background: rgba(239, 87, 83, 0.8);
      box-shadow: 1rem 0 0 rgba(239, 87, 83, 0.8), -1rem 0 0 rgba(239, 87, 83, 0.8);
      box-decoration-break: clone;
    }

    .title-card__head-link {
      background: rgba(0, 0, 0, 0.8);
      box-shadow: 1rem 0 0 rgba(0, 0, 0, 0.8), -1rem 0 0 rgba(0, 0, 0, 0.8);
      box-decoration-break: clone;
    }

    @media (max-width: 578px) {
      .title-card__head-link {
        line-height: 1.6;
      }
    }
</style>

