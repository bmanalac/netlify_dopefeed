<template>
	<section class="section">

		<Hero class="bundle-feature-1" />

		<div class="bundle__container">

			<Utility class="bundle-feature-2" />

			<LatestPosts class="bundle-feature-3 bg-grey-lighter" />

		</div>

		<Footer />

	</section>

</template>

<script>
	import Hero from "~/components/Hero.vue";
	import Utility from "~/components/Utility.vue";
	import LatestPosts from "~/components/LatestPosts.vue";
	import Footer from "~/components/Footer.vue";

	export default {
	  components: {
	    Hero,
	    Utility,
	    LatestPosts,
	    Footer
	  }
	};
</script>

<style scoped>
	@media (min-width: 768px) {
	  .bundle__container {
	    display: grid;
	    grid-template: auto / 2fr minmax(200px, 1fr);
	    grid-template-areas: "left-util right-util";
	  }
	  .bundle-feature-2 {
	    grid-area: left-util;
	  }

	  .bundle-feature-3 {
	    grid-area: right-util;
	  }
	}
</style>
