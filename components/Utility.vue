<template>
	<div class="utility__container relative w-full">

		<div class="relative flex flex-row w-full md:flex-col" v-for="(post, index) in utilitypost" :key="index">

			<div class="block overflow-hidden w-full h-full">

				<div class="styled-responsive-image w-full h-full">

					<img class="styled-responsive-image__img" :src="post.image" :alt="post.title">

				</div>

			</div>

			<div class="utility-card__details absolute px-6 py-8 w-full h-full">

				<div class="block absolute pin-b text-black p-0">

					<h2 class="inline box-shadow-black leading-tight md:leading-normal text-white-dark text-base font-Noto border-b border-transparent hover:border-black hover:border-solid hover:border-0">{{ post.title }}
					</h2>

					<span class="box-shadow-red table bg-red-light font-normal font-Noto text-white text-sm">Category</span>

				</div>

			</div>

		</div>

	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      utilitypost: this.$store.state.utilitystore
	    };
	  }
	};
</script>

<style scoped>
	.utility__container {
	  display: grid;
	}
	
	.box-shadow-black {
		background: rgba(0, 0, 0, .8);
	  box-shadow: 0.25rem 0 0 rgba(0, 0, 0, 0.8), -0.25rem 0 0 rgba(0, 0, 0, 0.8);
	  box-decoration-break: clone;
	}

	.box-shadow-red {
	  box-shadow: 0.25rem 0 0 rgba(239, 87, 83, 0.8), -0.25rem 0 0 rgba(239, 87, 83, 0.8);
	  box-decoration-break: clone;
	}


	@media (max-width: 767px) {
	  .utility__container {
	    grid-template: repeat(auto-fit, minmax(100px, 1fr)) / repeat(2, minmax(100px, 1fr));
	  }

	  .styled-responsive-image {
	    padding-top: 100%;
	  }
	}

	@media (min-width: 768px) {
	  .utility__container {
	    grid-template: repeat(auto-fit, minmax(100px, 1fr)) / repeat(2, minmax(100px, 1fr));
	  }
	}

	@media (min-width: 992px) {
	  .utility__container {
	    grid-template: repeat(auto-fill, minmax(250px, 1fr)) / repeat(3, 1fr);
	  }
	}
</style>

