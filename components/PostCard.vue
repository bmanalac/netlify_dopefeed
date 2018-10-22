<template>
    <div class="post-card__wrapper mx-4">
        <div v-if="$apollo.loading" class="loading">Loading...</div>

        <nuxt-link v-else class="post-card__container relative bg-white shadow-lg rounded w-full h-full z-0 overflow-hidden" to="/gallery/cookbook" v-for="photo in data" :key="photo.id">

            <div class="photo-card-info__header absolute pin-t pin-l text-black w-full p-4 z-10">
                <h1 class="hidden md:block self-end font-oswald text-base tracking-wide">Author - 25 mins ago</h1>
                <h1 class="font-oswald text-xl md:text-2xl tracking-wide">Title</h1>
            </div>

            <div class="bg-red photo-card__image relative w-full h-full">
                <img class="w-full h-full" :src="photo.thumbnailUrl" :alt="photo.title" />
            </div>

            <div class="photo-card-info__details absolute pin-b pin-l flex flex-row justify-between items-center w-full p-4 z-10 rounded">
                <div class="hidden clock-icon md:flex flex-row items-center text-black">
                    <i class="far fa-clock text-black text-3xl"></i>
                    <div class="font-oswald text-black ml-2">{{ time }}</div>
                </div>
                <div class="share flex justify-around w-1/2 md:w-2/5">
                    <i class="fas fa-heart text-2xl text-grey hover:text-red-light cursor-pointer"></i>
                    <i class="mx-1 fas fa-cannabis text-2xl text-grey hover:text-green-light cursor-pointer"></i>
                    <i class="fas fa-bookmark text-2xl text-grey hover:text-brown-darkest cursor-pointer"></i>
                </div>
            </div>

        </nuxt-link>
    </div>
</template>

<script>
    export default {
      props: ["load", "data"],
      data() {
        return {
          loading: this.load,
          time: "1hr 35min",
          post: []
        };
      }
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

    @media (min-width: 399px) {
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
        /* align-content: xcenter; */
        justify-content: center;
        grid-gap: 3rem;
        grid-template: auto / repeat(auto-fill, minmax(150px, 300px));
      }
    }
</style>
