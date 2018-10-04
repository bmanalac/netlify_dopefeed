<template>
	<div class="side-menu__link-list fixed pin-t flex flex-col justify-center pt-0 w-full h-screen z-10" :class="{ 'active': active, 'not-active': !sideNavActive }" @click="sideNavActive = false">
		
		<nuxt-link class="font-oswald text-4xl text-red-light pl-4 py-4 hover:bg-grey-lightest hover:shadow" to="/">Home</nuxt-link>

		<nuxt-link class="font-oswald text-4xl text-red-light pl-4 py-4 hover:bg-grey-lightest hover:shadow" to="/about">About</nuxt-link>

		<nuxt-link class="font-oswald text-4xl text-red-light pl-4 py-4 hover:bg-grey-lightest hover:shadow" to="/gallery">Gallery</nuxt-link>

	</div>
</template>

<script>
	export default {
	  props: ["active"],
	  data() {
	    return {
	      sideNavActive: false
	    };
	  }
	};
</script>

<style scoped>
	.side-menu__link-list {
	  transition: 0.4s;
	  background-color: rgba(224, 224, 224, 0.95);
	}

	.side-menu__link-list.not-active {
	  left: -100%;
	}

	.side-menu__link-list.active {
	  left: 0;
	}
</style>

