<template>
	<div class="relative w-full">

		<nuxt-link class="block" to="/gallery">

			<div class="styled-responsive-image block">

				<img class="styled-responsive-image__img" :src="featured.img" :alt="featured.alt">

			</div>

			<div class="block absolute pin-b pin-l pin-r-custom text-white pt-0 px-8 pb-8 overflow-hidden">

				<span class="title-card__details-group table bg-red-light font-Noto text-base mb-px -ml-4 p-2">{{ featured.category }}</span>

				<h1 class="title-card__head-link inline font-Oswald text-3xl md:text-4xl leading-normal">{{ featured.title }}</h1>

				<ContentTypeBtn class="title-card__content-type-btn table mb-px py-2" />

			</div>

		</nuxt-link>

	</div>
</template>

<script>
	import ContentTypeBtn from "../components/common/ContentTypeBtn.vue";

	export default {
	  components: {
	    ContentTypeBtn
	  },
	  data() {
	    return {
	      featured: {
	        category: "New Arrivals",
	        title: "Hipster Ipsum Junk food that fucks back",
	        summary: "Lorem ipsum dolor amet tote bag tilde butcher hammock.",
	        img:
	          "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4fa061122a5ce899fcb5454dae8dbe99&auto=format&fit=crop&w=1950&q=80",
	        alt: "alt-text"
	      }
	    };
	  }
	};
</script>

<style lang="scss">
	.pin-r-custom {
	  right: 12%;
	}

	.title-card__head-link {
	  background: rgba(0, 0, 0, 0.8);
	  box-shadow: 1rem 0 0 rgba(0, 0, 0, 0.8), -1rem 0 0 rgba(0, 0, 0, 0.8);
	  box-decoration-break: clone;
	}

	//ContentTypeBtn Component Styles
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

