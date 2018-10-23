<template>
    <div class="post-card__wrapper mx-4">
        <!-- <div v-if="$apollo.loading" class="loading">Loading...</div> -->

        <div class="post-card__container relative bg-white shadow-lg rounded w-full h-full z-0 overflow-hidden">

            <div class="photo-card-info__header absolute pin-t pin-l bg-transparent-50 text-white w-full p-4 z-10">
                <h1 class="hidden md:block self-end font-oswald text-base tracking-wide">Author - 25 mins ago</h1>
                <h1 class="font-oswald text-xl md:text-2xl tracking-wide">{{post.title}}</h1>
            </div>

            <nuxt-link class="bg-red post-card-coverImage relative w-full h-full" :to="`/post/${post.id}`">
                <img class="w-full h-full" :src="`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${post.coverImage.handle}`" :alt="post.title" />
            </nuxt-link>

            <div class="photo-card-info__details absolute pin-b pin-l flex flex-row justify-between items-center bg-transparent-50 w-full p-4 z-10">
                <div class="hidden clock-icon md:flex flex-row items-center text-white">
                    <i class="far fa-clock text-3xl"></i>
                    <div class="font-oswald ml-2">{{ post.dateAndTime }}</div>
                </div>
                <div class="share flex justify-around w-1/2 md:w-2/5">
                    <i class="fas fa-heart text-2xl text-grey hover:text-red-light cursor-pointer"></i>
                    <i class="mx-1 fas fa-cannabis text-2xl text-grey hover:text-green-light cursor-pointer"></i>
                    <i class="fas fa-bookmark text-2xl text-grey hover:text-brown-darkest cursor-pointer"></i>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
      name: "PostCardComponent",
      props: ["load", "post"],
      data: () => ({
        loading: 0
      })
    };
</script>

<style scoped>
    .post-card__wrapper,
    i {
      transition: all 0.4s ease;
    }

    .post-card__wrapper {
      display: grid;
      grid-gap: 1rem;
    }

    img {
      object-fit: cover;
    }

    /* @media (min-width: 399px) {
                  .post-card__wrapper {
                    grid-template: auto / 1fr;
                  }
                }

                @media (max-width: 767px) and (min-width: 400px) {
                  .post-card__wrapper {
                    grid-gap: 2rem;
                    grid-template: auto / repeat(2, minmax(150px, 1fr));
                  }
                }

                @media (min-width: 768px) {
                  .post-card__wrapper {
                    align-content: xcenter;
                    justify-content: center;
                    grid-gap: 3rem;
                    grid-template: auto / repeat(auto-fill, minmax(150px, 300px));
                  }
                } */
</style>
