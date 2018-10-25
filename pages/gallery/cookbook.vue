<template>
	<section class="foodie">
		<div class="wrapper relative flex flex-col justify-center">
			<Post-card />
		</div>
	</section>
</template>

<script>
	import PostCard from "~/components/PostCard.vue";

	export default {
	  head: {
	    title: "Dopefeed foodie Page"
	  },
	  data: () => ({
	    loading: 0
	  }),
	  components: {
	    PostCard
	  }
	};
</script>

<style scoped>
	.paginate-btn__container {
	  top: 50px;
	  right: 0;
	}

	.photo__wrapper {
	  display: grid;
	  grid: auto-flow / repeat(auto-fill, minmax(250px, 1fr));
	  grid-gap: 1rem;
	}

	img {
	  object-fit: cover;
	}
</style>

