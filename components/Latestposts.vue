<template>
    <div @scroll.prevent="handleScroll($event)" class="siderail-posts relative flex justify-center items-center w-full h-full">
        <div class="siderail-posts__container w-full">

            <div class="flex flex-col justify-center w-5/6 mx-auto py-4">
                <h1 class="font-oswald text-5xl">LATEST</h1>
                <div class="sep-line relative bg-grey-dark w-full my-4"></div>
            </div>

            <div class="post__wrapper">
                <div :class="`post-${index}__container flex flex-col items-center`" 
                     v-for="(post, index) in filteredPosts" 
                     :key="index">
                    <div class="flex flex-col md:flex-row justify-center items-center p-4"
                         :class="`post-${index}`">

                        <div class="styled-responsive-image rounded-full bg-black my-4 md:my-auto">
                            <img class="styled-responsive-image__img" :src="post.image" :alt="post.title">
                        </div>

                        <div class="siderail-posts__list__container p-4">
                            <h1 class="text-base">{{ post.title }}</h1>
                            <span class="text-sm text-grey">{{ post.summary }}</span>
                            <span class="text-sm text-grey">{{ post.timestamp }}</span>
                        </div>

                    </div>
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
      components: {
        ButtonHelper: Button
      },
      computed: {
          filteredPosts() {
              return this.$store.getters.getFilteredArrayImgStore;
          }
      }
    };
</script>

<style scoped>
    img {
      object-fit: cover;
    }

    .styled-responsive-image {
      width: 200px;
      height: 200px;
    }

    .sep-line {
      height: 1px;
    }
</style>