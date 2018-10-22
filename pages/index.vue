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
    import About from "@/components/About.vue";

    export default {
      data() {
        return {
          events: false
        };
      },
      components: {
        Loading,
        Banner,
        About
      }
    };
</script>

<style scoped>
</style>
