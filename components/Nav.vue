<template>
	<nav id="nav">

		<div class="hamburger-icon__container fixed pt-0 pl-0 w-16 h-16 z-50 cursor-pointer" v-on:click="isActive = !isActive">

			<div class="hamburger-icon">

				<div class="text-red-light mx-0 my-1" v-bind:class="{ 'opacity-0': isActive }">Menu</div>

				<div class="bar1 h-1 bg-red-light mx-0 my-1" v-bind:class="{ active: isActive }"></div>

				<div class="bar2 h-1 bg-red-light mx-0 my-1" v-bind:class="{ active: isActive, 'opacity-0': isActive }"></div>

				<div class="bar3 h-1 bg-red-light mx-0 my-1" v-bind:class="{ active: isActive }"></div>

			</div>

		</div>

		<div class="side-menu__links fixed flex flex-col justify-center pt-0 w-4/5 md:w-1/2 h-screen z-40" v-bind:class="{ 'not-active': !isActive, 'active': isActive }" v-on:click="isActive = !isActive">

			<nuxt-link class="text-black pl-4 py-4 hover:bg-grey-lightest hover:shadow" to="/">Home</nuxt-link>

			<nuxt-link class="text-black pl-4 py-4 hover:bg-grey-lightest hover:shadow" to="/about">About</nuxt-link>

			<nuxt-link class="text-black pl-4 py-4 hover:bg-grey-lightest hover:shadow" to="/gallery">Gallery</nuxt-link>

		</div>

	</nav>
</template>

<script>
	export default {
	  data: function() {
	    return {
	      isActive: false
	    };
	  }
	};
</script>

<style scoped>
	.hamburger-icon__container {
	  display: grid;
	}

	.hamburger-icon {
	  place-self: center;
	}

	.side-menu__links {
	  background-color: rgba(224, 224, 224, 0.95);
	}

	.not-active.side-menu__links {
	  left: -80%;
	}

	.active.side-menu__links {
	  left: 0;
	}

	a,
	.side-menu__links,
	.bar1,
	.bar2,
	.bar3 {
	  transition: 0.3s;
	}

	.active.bar1 {
	  transform: rotate(-45deg) translate(-7px, 5px);
	}

	.active.bar3 {
	  transform: rotate(45deg) translate(-6px, -5px);
	}
</style>