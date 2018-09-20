<template>
	<section class="section pt-4">

		<div class="something flex justify-center items-center w-full border border-grey p-16 my-8">AD or Video</div>

		<div class="hero__container flex flex-col md:flex-row my-8">

			<Hero class="bundle-feature-1 md:mr-2 mb-4" />

			<Latestposts class="bundle-feature-3 bg-grey-lighter mb-4 md:ml-2" />

		</div>

		<Utility class="bundle-feature-2 my-8" />

		<div class="gallery__container flex justify-center border border-black p-8 my-8">

			<h1>Gallary Feed</h1>

		</div>

		<Footer />

	</section>
</template>

<script>
	import Hero from "~/components/Hero.vue";
	import Utility from "~/components/Utility.vue";
	import Latestposts from "~/components/Latestposts.vue";
	import Footer from "~/components/Footer.vue";

	export default {
	  components: {
	    Hero,
	    Utility,
	    Latestposts,
	    Footer
	  }
	};
</script>

<style scoped>
	.something {
	  height: 250px;
	}
</style>
