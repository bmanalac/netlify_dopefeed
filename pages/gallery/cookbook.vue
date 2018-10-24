<template>
    <section class="foodie">
        <div class="wrapper relative flex flex-col justify-center">

            <form @submit.prevent="handleSubmit" class="flex flex-row justify-center my-4">
                <input type="text" placeholder="Search" v-model="search">
                <button type="submit">
                    <i class="relative text-2xl text-brown-darkest fas fa-search z-40"></i>
                </button>
            </form>

            <div class="paginate-btn__container fixed flex flex-col items-center mx-auto z-10">
                <button class="bg-green-flat flex-1 p-4 cursor-pointer" 
                        @click="prevPage" 
                        :disabled="pageNumber === 0">
                    <i class="fas fa-arrow-left"></i>
                </button>

                <div class="flex-1 text-center p-2 w-full">
                    <h1 class="page-number font-ost text-3xl text-black bg-green-flat p-4">{{ pageNumber }}</h1>
                </div>

                <button class="flex-1 bg-green-flat p-4 cursor-pointer" 
                        @click="nextPage" 
                        :disabled="pageNumber >= pageCount - 1">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>

            <Post-card :data="paginatedData" />

        </div>
    </section>
</template>

<script>
    import axios from "axios";
    import ButtonHelper from "@/components/common/Button.vue";
    import PostCard from "@/components/PostCard.vue";

    export default {
      layout: "gallery",
      head: {
        title: "Dopefeed foodie Page"
      },
      data() {
        return {
          search: "",
          pageNumber: 0,
          photoData: [],
          size: 10
        };
      },
      components: {
        PostCard,
        ButtonHelper
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
      created() {
        this.asyncData((this.search = "photos"));
      },
      methods: {
        async asyncData(slug) {
          try {
            const { data } = await axios.get(
              `https://jsonplaceholder.typicode.com/${slug}`
            );
            return (this.photoData = data);
          } catch (e) {
            this.errors.push(e);
          }
        },
        handleSubmit() {
          this.asyncData(this.search);
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
      right: 0;
    }

    .photo__wrapper {
      display: grid;
      grid: auto-flow / repeat(auto-fill, minmax(250px, 1fr));
      grid-gap: 1rem;
    }

    img {
      object-fit: cover;
    }
</style>

