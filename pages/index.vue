<template>
    <div>
        <section class="section hero-section__container">
            <div class="features-section__container grid">
                <Featured1 class="featured1-component" />
                <Featured2 class="featured2-component" />
            </div>
        </section>
        <section class="section section-latest-post__container">
            <h1>this is the home page</h1>
        </section>
    </div>
</template>

<script>
import Featured1 from "../components/Featured-1.vue";
import Featured2 from "../components/Featured-2.vue";

export default {
  components: {
    Featured1,
    Featured2
  }
};
</script>

<style lang="scss">
.features-section__container {
//   grid-template-columns: repeat(6, 1fr);
//   break-inside: avoid;
//   grid-gap: 10px;
}

// .span-col-3 {
//   grid-column: span 4 / auto;
// }

.span-col-2 {
  grid-column: span 2 / auto;
}
</style>
