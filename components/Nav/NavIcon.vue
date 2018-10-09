<template>
    <div class="nav__container cursor-pointer">
        <div class="w-8">

            <div class="bar1 pin-t bg-brown-darkest md:bg-yellow" :class="{ 'active': active }"></div>

            <div class="bar2 bg-brown-darkest md:bg-yellow my-1" :class="{ 'active opacity-0': active }"></div>

            <div class="bar3 bg-brown-darkest md:bg-yellow" :class="{ 'active': active }"></div>

        </div>
    </div>
</template>

<script>
    export default {
      props: ["active"],
    };
</script>

<style scoped>
    .bar1,
    .bar2,
    .bar3 {
      height: 0.1rem;
      transition: transform 0.4s ease-in-out;
    }

    .active.bar1 {
      transform: rotate(-45deg) translate(-7px, 5px);
    }

    .active.bar3 {
      transform: rotate(45deg) translate(-6px, -5px);
    }
</style>