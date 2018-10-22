<template>
    <div class="flex justify-center items-center relative cursor-pointer">
        <div class="nav-icon__container relative w-full h-full">
            <div class="nav-icon-dot absolute bg-white rounded-full" 
                 :class="`nav-icon-dot-${i}`" 
                 :style="`${styleObject(i)}`" 
                 v-for="(dot, i) in 9" :key="i"></div>
        </div>
    </div>
</template>

<script>
    export default {
      props: ["active"],
      data() {
        return {
          styleIcon: {
            width: "4px",
            height: "4px;"
          }
        };
      },
      methods: {
        styleObject(index) {
          if (index < 3) {
            return `top:0%; left: calc(${index * 50}% - 2px);`;
          } else if (index >= 3 && index <= 5) {
            return `top:calc(50% - 1px); left: calc(${(index - 3) * 50}% - 2px);`;
          } else {
            return `top:calc(100% - 2px); left: calc(${(index - 6) * 50}% - 2px);`;
          }
        }
      }
    };
</script>

<style scoped>
    .nav-icon-dot {
      width: 4px;
      height: 4px;
    }

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