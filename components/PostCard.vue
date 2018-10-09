<template>
    <div class="photo__wrapper flex flex-col justify-center rounded w-full lg:w-5/6 px-4 lg:px-0 mx-auto">
        <div
             class="photo-card__container flex flex-col bg-white shadow-lg rounded-sm" 
             v-for="photo in data" 
             :key="photo.id"
             @mouseover="show = true" 
             @mouseleave="show = false">


            <div class="photo-card-info__header flex flex-col p-4">
                <h1 class="self-end font-oswald text-base tracking-wide">Author - 25 mins ago</h1>
                <h1 class="font-oswald text-xl md:text-2xl tracking-wide">Title</h1>
            </div>
            <a :href="photo.url">
                <div class="photo-card__image relative w-full h-full">
                    <img class="w-full h-full" :src="photo.thumbnailUrl" :alt="photo.title">
                    <h1 class="font-cookie absolute pin-l pin-b text-base md:text-xl text-white-dark tracking-wide p-4"
                        :class="{ 'active': show }">{{ photo.title }}</h1>
                </div>
            </a>

            <div class="photo-card-info__details flex flex-row items-center justify-between p-4">
                <div class="clock-icon flex flex-row items-center">
                    <i class="far fa-clock text-black text-3xl"></i>
                    <div class="font-oswald text-black ml-2">{{ time }}</div>
                </div>
                <div class="share flex justify-around w-2/5">
                    <i class="fas fa-heart text-2xl text-grey hover:text-red-light cursor-pointer"></i>
                    <i class="fas fa-cannabis text-2xl text-grey hover:text-green-light cursor-pointer"></i>
                    <i class="fas fa-bookmark text-2xl text-grey hover:text-brown-darkest cursor-pointer"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      props: ["load","data"],
      data() {
        return {
          loading: this.load,
          time: "1hr 35min",
          show: false
        };
      }
    };
</script>

<style scoped>
    .show {
      opacity: 1;
    }

    .photo__wrapper {
      transition: all 0.4s ease-in;
    }

    img {
      object-fit: cover;
    }

    i {
      transition: all 0.4s ease;
    }
</style>
