<template>
    <section class="landing bg-black">
        <div class="wrapper h-screen">
            <Banner />
        </div>
    </section>
</template>

<script>
    import Loading from "@/components/Loading.vue";
    import Banner from "@/components/Banner.vue";

    export default {
      data() {
        return {
          events: false
        };
      },
      components: {
        Loading,
        Banner
      }
    };
</script>

<style scoped>
</style>
