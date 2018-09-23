<template>
	<div class="siderail-posts__container relative w-full md:w-2/3">

		<div class="w-full text-center p-4 my-4">Something goes here</div>

		<div class="sep__zigzag relative w-5/6 mx-auto h-4"></div>

		<div class="flex flex-col" v-for="(post, index) in latestpost" :key="index">

			<div class="flex flex-row justify-center items-center p-4">

				<img class="placeholder rounded-full mr-2" src="https://via.placeholder.com/150x150" alt="placeholder image">

				<div class="siderail-posts__list__container ml-2">

					<h1 class="text-base">{{ post.title }}</h1>

					<span class="text-sm text-grey">{{ post.summary }}</span>

					<span class="text-sm text-grey">{{ post.timestamp }}</span>

				</div>

			</div>

			<div class="sep__line relative bg-grey-light w-5/6 mx-auto"></div>

		</div>

		<div class="view-post__container w-full text-center pt-8 px-4">

			<h2 class="text-sm">View More Posts --></h2>

		</div>

	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      latestpost: this.$store.state.lateststore
	    };
	  }
	};
</script>

<style scoped>
	.siderail-posts__container {
	  top: 60%;
	}
	.placeholder {
	  width: 80px;
	  height: 80px;
	}
	.sep__line {
	  height: 1px;
	}
	.sep__zigzag {
	  background-color: #f1f5f8;
	}
	.sep__zigzag::before,
	.sep__zigzag::after {
	  background-repeat: repeat-x;
	  background-size: 10px 10px;
	  content: "";
	  display: block;
	  height: 10px;
	  position: absolute;
	  width: 100%;
	}
	.sep__zigzag::before {
	  background-image: linear-gradient(-135deg, #e5e5e5 5px, transparent 0),
	    linear-gradient(135deg, #e5e5e5 5px, transparent 0);
	  top: 1px;
	}
	.sep__zigzag::after {
	  background-image: linear-gradient(-135deg, #f1f5f8 5px, transparent 0),
	    linear-gradient(135deg, #f1f5f8 5px, transparent 0);
	  top: 0;
	}
</style>