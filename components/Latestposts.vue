<template>
    <div @scroll.prevent="handleScroll($event)" class="siderail-posts__container relative w-full border border-black">

        <div class="w-full text-center p-4 mb-4">Something goes here</div>

        <div class="sep__zigzag relative w-5/6 mx-auto h-4 bg-transparent"></div>

        <div class="post">

            <div :class="`post-${index}__container`" v-for="(post, index) in latestpost" :key="index">

                <div :class="`post-${index} flex flex-row justify-center items-center p-4`">

                    <img class="placeholder rounded-full mr-2" src="https://via.placeholder.com/150x150" alt="placeholder image">

                    <div class="siderail-posts__list__container ml-2">

                        <h1 class="text-base">{{ post.title }}</h1>

                        <span class="text-sm text-grey">{{ post.summary }}</span>

                        <span class="text-sm text-grey">{{ post.timestamp }}</span>

                    </div>

                </div>

                <!-- <div class="sep__line relative bg-grey-light w-5/6 mx-auto"></div> -->

            </div>

        </div>

        <div class="view-post__container w-full text-center pt-8 px-4">

            <Button-helper class="text-sm" text="View More Posts" type="submit" />

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
      components: { ButtonHelper: Button }
    };
</script>

<style scoped>
    .siderail-posts__container {
      top: 60%;
    }

    .post {
      display: grid;
      grid-template: repeat(2, 1fr) / repeat(2, 1fr);
      grid-template-areas:
        "p0 p1"
        "p0 p2";
      align-items: center;
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

    .post-0 > img {
      width: 80%;
      max-width: 250px;
    }

    .placeholder {
      width: 50%;
      max-width: 150px;
    }

    @media (min-width: 992px) {
    }

    .sep__line {
      height: 1px;
    }

    .sep__zigzag::before,
    .sep__zigzag::after {
      background-repeat: repeat-x;
      background-size: 10px 10px;
      content: "";
      display: block;
      height: 10px;
      position: absolute;
      width: 100%;
    }

    .sep__zigzag::before {
      background-image: linear-gradient(-135deg, #000 5px, transparent 0),
        linear-gradient(135deg, #000 5px, transparent 0);
      top: 1px;
    }
    .sep__zigzag::after {
      background-image: linear-gradient(-135deg, #e5e5e5 5px, transparent 0),
        linear-gradient(135deg, #e5e5e5 5px, transparent 0);
      top: 0;
    }
</style>