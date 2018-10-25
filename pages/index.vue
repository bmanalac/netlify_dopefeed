<template>
    <section class="landing bg-black">
        <div class="wrapper h-screen">
            <Banner />
        </div>
    </section>
</template>

<script>
    import Banner from "~/components/Banner.vue";

    export default {
      data: () => ({
        loading: 0
      }),
      components: {
        Banner
      }
    };
</script>

<style scoped>
</style>
