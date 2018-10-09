<template>
    <div class="bg-green-flat p-2">
        <button :type="type" class="border border-dotted border-white-dark py-2 px-4 bg-green-flat text-2xl text-brown-darkest hover:text-black hover:border-black" :class="classes">
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
      props: ["type", "classes"],
      beforeMount() {
        // this.setAttr(`button`, "data-splitting", "");
      },
      methods: {
        // setAttr(el, attr, val) {
        //   return document.querySelectorAll(el)[0].setAttribute(attr, val);
        // }
      }
    };
</script>

<style scoped>
    button {
      transition: all 0.4s ease-in-out;
    }

    button:focus {
      outline: 1px dashed yellow;
    }
</style>
