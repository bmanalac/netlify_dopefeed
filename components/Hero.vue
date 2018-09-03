<template>
	<div class="relative w-full">

		<div class="filter absolute z-10 pin-t pin-l w-full h-screen"></div>

		<div class="block">

			<div class="styled-responsive-image__custom block">

				<img class="styled-responsive-image__img" :src="featured.img" :alt="featured.alt">

			</div>

			<nuxt-link to="/gallery" class="block absolute z-20 pin-b pin-l pin-r-custom text-white pt-0 pl-8 md:pl-16 pb-20 overflow-hidden">

				<span class="title-card__details-group table bg-red-light font-noto text-base mb-px -ml-4 p-2">{{ featured.category }}</span>

				<h1 class="title-card__head-link inline font-oswald text-2xl sm:text-3xl md:text-4xl leading-loose">{{ featured.title }}</h1>

				<ContentTypeBtn class="title-card__content-type-btn table mt-px py-2" />

			</nuxt-link>

		</div>

	</div>
</template>

<script>
	import ContentTypeBtn from "../components/common/ContentTypeBtn.vue";

	export default {
	  components: {
	    ContentTypeBtn
	  },
	  data: () => {
	    return {
	      featured: {
	        category: "New Arrivals",
	        title: "Hipster Ipsum Junk food that fucks back",
	        summary: "Lorem ipsum dolor amet tote bag tilde butcher hammock.",
	        img:
	          "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3a0347e68dba64f130c186dc3f396ea&auto=format&fit=crop&w=1969&q=80",
	        alt: "alt-text"
	      }
	    };
	  }
	};
</script>

<style scoped>
	.filter {
	  /* background-color: rgba(0,0,0,0.6); */
	  background: radial-gradient(
	    circle at 100%,
	    rgba(0, 0, 0, 0.8),
	    rgba(0, 0, 0, 0.1) 50%,
	    rgba(0, 0, 0, 0.1) 50%,
	    rgba(0, 0, 0, 0.8) 75%
	  );
	}

	.pin-r-custom {
	  right: 12%;
	}

	.styled-responsive-image__custom {
	  padding-top: 100vh;
	}

	.title-card__head-link {
	  background: rgba(0, 0, 0, 0.8);
	  box-shadow: 1rem 0 0 rgba(0, 0, 0, 0.8), -1rem 0 0 rgba(0, 0, 0, 0.8);
	  box-decoration-break: clone;
	}

	/* ContentTypeBtn Component Styles */
	.title-card__content-type-btn {
	  background-color: rgba(0, 0, 0, 0.8);
	  box-shadow: 1rem 0 0 rgba(0, 0, 0, 0.8), -1rem 0 0 rgba(0, 0, 0, 0.8);
	}

	@media (max-width: 578px) {
	  .title-card__head-link {
	    line-height: 1.6;
	  }
	}
</style>

