<template>
    <section class="foodie">
        <div class="wrapper relative flex flex-col justify-center">

            <div class="paginate-btn__container flex justify-between w-full lg:w-5/6 mx-auto">
                <button class="p-4 bg-yellow text-brown-darkest" @click="prevPage" :disabled="pageNumber === 0">PrevPage</button>
                <button class="p-4 bg-yellow text-brown-darkest" @click="nextPage" :disabled="pageNumber >= pageCount-1">NextPage</button>
            </div>

            <div class="photo__wrapper flex flex-col justify-center w-full lg:w-5/6 mx-auto">
                <div class="photo-card__container flex flex-col bg-yellow" v-for="photo in paginatedData" :key="photo.id">
                    <a :href="photo.url">
                        <div class="photo-card__image relative w-full h-full">
                            <img class="w-full h-full" :src="photo.thumbnailUrl" :alt="photo.title">
                        </div>
                    </a>
                    <div class="photo-card__details p-4 w-full h-full">
                        <h1>{{ photo.title }}</h1>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    import axios from "axios";

    export default {
      layout: "gallery",
      head: {
        title: "Dopefeed foodie Page"
      },
      computed: {
        pageCount() {
          let l = this.photoData.length,
            s = this.size;
          return Math.floor(l / s);
        },
        paginatedData() {
          const start = this.pageNumber * this.size,
            end = start + this.size;
          return this.photoData.slice(start, end);
        }
      },
      data() {
        return {
          pageNumber: 0,
          photoData: [],
          size: 10
        };
      },
      created() {
        this.asyncData("https://jsonplaceholder.typicode.com/photos");
      },
      methods: {
        async asyncData(api) {
          try {
            const { data } = await axios.get(`${api}`);
            this.photoData = data;
          } catch (e) {
            this.errors.push(e);
          }
        },
        nextPage() {
          this.pageNumber++;
        },
        prevPage() {
          this.pageNumber--;
        }
      }
    };
</script>

<style scoped>
    .photo__wrapper {
      display: grid;
      grid: auto / repeat(auto, minmax(100px, 300px));
      grid-gap: 1rem;
    }
</style>

