<template>
    <div class="bg-green-flat p-2">
        <button :type="type" 
                class="font-oswald border border-dotted border-white py-2 px-4 bg-green-flat text-2xl text-brown-darkest hover:text-black hover:border-black">
                {{ textUpperCase }}
        </button>
    </div>
</template>

<script>
	export default {
      props: ["text", "type"],
      computed: {
          textUpperCase() {
              return this.text.toUpperCase();
          }
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
