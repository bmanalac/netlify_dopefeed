<template>
    <section class="foodie">
        <div class="wrapper relative flex flex-col justify-center">

            <div class="paginate-btn__container sticky flex justify-around w-full lg:w-5/6 mx-auto z-10">
                <Paginate-button @click.prevent="prevPage" 
                                 :disabled="pageNumber === 0">PrevPage</Paginate-button>
                <Paginate-button @click.prevent="nextPage" 
                                 :disabled="pageNumber >= pageCount-1">NextPage</Paginate-button>
            </div>

            <div class="photo__wrapper flex flex-col justify-center w-full lg:w-5/6 mx-auto">
                <div class="photo-card__container flex flex-col bg-yellow" v-for="photo in paginatedData" :key="photo.id">
                    <a :href="photo.url">
                        <div class="photo-card__image relative w-full h-full">
                            <img class="w-full h-full" :src="photo.thumbnailUrl" :alt="photo.title">
                        </div>
                    </a>
                    <div class="photo-card__details p-4 w-full h-full">
                        <h1 class="font-oswald text-xl md:text-2xl tracking-wide">{{ photo.title }}</h1>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    import axios from "axios";
    import ButtonHelper from "@/components/common/Button.vue";

    export default {
      layout: "gallery",
      head: {
        title: "Dopefeed foodie Page"
      },
      components: {
          'PaginateButton': ButtonHelper
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
    .paginate-btn__container {
      top: 50px;
    }

    .photo__wrapper {
      display: grid;
      grid: auto-flow dense / repeat(auto-fill, minmax(300px, 1fr));
      grid-gap: 1rem;
    }

    img {
      object-fit: cover;
    }
</style>

