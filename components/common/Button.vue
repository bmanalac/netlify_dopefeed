<template>
	<button :type="type" class="border border-black rounded-l-full rounded-r-full py-1 px-8 m-4 hover:bg-green-light border-grey text-xs text-grey hover:text-black hover:border-black">{{ text }}</button>
</template>

<script>
	export default {
	  props: ["text", "type"]
	};
</script>

<style scoped>
	button,
	button:focus {
	  outline: none;
	  transition: 0.4s;
	}
</style>
