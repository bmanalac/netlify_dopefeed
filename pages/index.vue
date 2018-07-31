<template>
    <div>
        <section class="section hero-section__container">
            <div class="features__container">
                <Feature1 class="feature-1-component" />
                <div class="sub-feature">
                    <h2>This is a sub-feature</h2>
                </div>
                <Feature2 class="feature-2-component" />
            </div>
        </section>
    </div>
</template>

<script>
import Feature1 from "../components/Feature-1.vue";
import Feature2 from "../components/Feature-2.vue";

export default {
  components: {
    Feature1,
    Feature2
  }
};
</script>

<style lang="scss">
    .sub-feature {
        height: 200px;
        margin: auto;
        text-align: center;
        padding: 70px;
    }
</style>
