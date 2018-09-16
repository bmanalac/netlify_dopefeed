<template>
	<button class=" border border-black rounded-l-full rounded-r-full py-2 px-8 m-4 hover:bg-red-light hover:border-grey-light hover:text-grey-light">{{ text }}</button>
</template>

<script>
	export default {
	  props: ['text']
	};
</script>

<style scoped>
	button {
		transition: 0.4s;
	}
</style>
