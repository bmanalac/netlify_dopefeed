<template>
	<section class="section">

		<div class="bundle__container md:border-b border-solid border-white-dark">

			<div class="left-utility">

				<Hero class="bundle-feature-1" />

				<HeroRelated class="bundle-sub-feature my-4" />

				<Utility class="bundle-feature-2" />

			</div>

			<LatestPosts class="right-utility bundle-feature-3 bg-grey-lighter" />

		</div>

		<Footer />

	</section>


</template>

<script>
	import Hero from "~/components/Hero.vue";
	import HeroRelated from "~/components/HeroRelated.vue";
	import Utility from "~/components/Utility.vue";
	import LatestPosts from "~/components/LatestPosts.vue";
	import Footer from "~/components/Footer.vue";

	export default {
	  components: {
			Hero,
			HeroRelated,
	    Utility,
	    LatestPosts,
	    Footer,
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
	  .left-utility {
	    grid-area: left-util;
	  }

	  .right-utility {
	    grid-area: right-util;
	  }
	}
</style>
