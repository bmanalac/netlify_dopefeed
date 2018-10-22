<template>
    <section class="foodie">
        <div class="wrapper relative flex flex-col justify-center bg-white pt-32 pb-16">

            <div class="gallery-food-header">
                <h1 class="font-ost">Posts</h1>
            </div>

            <div class="post-card-comp__container">
                <Post-card />
            </div>

        </div>
    </section>
</template>

<script>
    import PostCard from "@/components/PostCard.vue";

    export default {
      head: {
        title: "Dopefeed foodie Page"
      },
      components: {
        PostCard,
      },
    };
</script>

<style scoped>
</style>

