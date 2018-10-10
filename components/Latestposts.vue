<template>
    <div @scroll.prevent="handleScroll($event)" class="siderail-posts relative flex justify-center items-center w-full h-full md:h-screen">
        <div class="siderail-posts__container w-full">
           
            <div class="flex flex-col justify-center w-5/6 mx-auto py-4">
                <h1 class="font-oswald text-5xl">LATEST</h1>
                <div class="sep-line relative bg-grey-dark w-full my-4"></div>
            </div>

            <div class="post__wrapper">
                <div :class="`post-${index}__container`" v-for="(post, index) in latestpost" :key="index">
                    <div :class="`post-${index} flex flex-row justify-center items-center p-4`">

                        <div class="placeholder__container relative rounded-full w-full h-full overflow-hidden">
                            <img class="placeholder mr-2 w-full h-full" :src="post.image" :alt="post.title">
                        </div>

                        <div class="siderail-posts__list__container ml-2">
                            <h1 class="text-base">{{ post.title }}</h1>
                            <span class="text-sm text-grey">{{ post.summary }}</span>
                            <span class="text-sm text-grey">{{ post.timestamp }}</span>
                        </div>

                    </div>

                    <!-- <div class="sep__line relative bg-grey-light w-5/6 mx-auto"></div> -->

                </div>
            </div>

            <!-- <div class="view-post__container w-full text-center pt-8 px-4">
                <Button-helper class="text-sm" text="View More Posts" type="submit" />
            </div> -->
        </div>
    </div>
</template>

<script>
    import Button from "./common/Button.vue";

    export default {
      data() {
        return {
          latestpost: this.$store.state.lateststore
        };
      },
      components: { 
          ButtonHelper: Button 
    }
    };
</script>

<style scoped>
    .post__wrapper {
      display: grid;
      grid-template: repeat(2, 1fr) / repeat(2, 1fr);
      grid-template-areas:
        "p0 p1"
        "p0 p2";
      align-items: center;
    }

    img {
        object-fit: cover;
    }

    .post-0__container {
      grid-area: p0;
    }

    .post-1__container {
      grid-area: p1;
    }

    .post-2__container {
      grid-area: p2;
    }

    .post-0 > .placeholder__container {
      width: 250px;
      height: 250px;
    }

    .placeholder__container {
      width: 200px;
      height: 200px;
    }

    .sep-line {
      height: 1px;
    }

    @media (max-width: 768px) {
        .post__wrapper {
            grid-template-areas:
                "p0 p0"
                "p1 p1"
                "p2 p2";
        }
    }
</style>