<template>
	<div class="landing__container relative overflow-hidden h-screen">

		<div class="landing-shadow border-4 border-black p-4 md:mr-1 z-10">

			<div class="landing-details text-center p-4 border-4 border-black">

				<h1 class="font-cookie text-5xl text-brown-darkest border-grey-lightest">We're cooking something worth your salt</h1>

				<span class="font-cookie text-4xl text-brown-darkest border-grey-lightest">Good things come to thoughs who wait.</span>
			</div>

		</div>

		<img class="absolute pin-t pin-l w-full h-full z-0" :src="image" :alt="alt">

	</div>
</template>

<script>
	export default {
	  data: () => {
	    return {
	      image:
	        "https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1e392896fc645f9fc3797c9bb7dab4d3&auto=format&fit=crop&w=1950&q=80",
	      alt: "prepped food on yellow table"
	    };
	  },
	  layout: "default"
	};
</script>

<style scoped>
	.landing__container {
	  display: grid;
	  grid-template-areas: "a";
	}

	.landing-shadow {
	  grid-area: a;
	  align-self: center;
	  justify-self: center;
	  background-color: rgba(0, 0, 0, 0.05);
	}

	.landing-details {
	  text-shadow: 0 0 1rem white;
	}

	img {
	  object-fit: cover;
	}
</style>
