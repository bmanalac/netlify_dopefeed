<template>
    <div class="hero-banner__container flex flex-row overflow-hidden">
        <div class="choice-image__container w-1/2 h-screen">
            <img class="w-full h-full" :src="choice.carnivore.img" :alt="choice.carnivore.alt" />
        </div>
        <div class="choice-image__container w-1/2 h-screen">
            <img class="w-full h-full" :src="choice.herbivore.img" :alt="choice.herbivore.alt" />
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          choice: this.$store.state.choices
        };
      }
    };
</script>

<style scoped>
    .choice-image__container > img {
        object-fit: cover;
    }
</style>
