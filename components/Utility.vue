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
	      utilitypost: [
	        {
	          image:
	            "https://images.unsplash.com/photo-1518095311381-8dce8cfe3ab4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af800e993b447f2058772e005facf7fb&auto=format&fit=crop&w=1950&q=80",
	          title: "Best Kitchen Knives",
	          summary: "lorem ipsum text that matters",
	          timestamp: "1 hour ago"
	        },
	        {
	          image:
	            "https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83e5d3e676230de77a2c78f9563d1933&auto=format&fit=crop&w=1868&q=80",
	          title: "Summer Cocktails",
	          summary: "lorem ipsum text that matters",
	          timestamp: "1 hour ago"
	        },
	        {
	          image:
	            "https://images.unsplash.com/photo-1469533802599-76ee5be68f7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eb20b626fbff1065f1e7402e7675d9d2&auto=format&fit=crop&w=1950&q=80",
	          title: "Upcoming Vineyards To Try",
	          summary: "lorem ipsum text that matters",
	          timestamp: "1 hour ago"
	        },
	        {
	          image:
	            "https://images.unsplash.com/photo-1523567940912-9a9b9788f863?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a80753a0b7c2711ff6ccfef562a77021&auto=format&fit=crop&w=1050&q=80",
	          title: "gentleman's Pubs To Scout",
	          summary: "lorem ipsum text that matters",
	          timestamp: "1 hour ago"
	        },
	        {
	          image:
	            "https://images.unsplash.com/photo-1506833345857-935a8275b07a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d87985046dd0bc1e9b738ecc4cc4985&auto=format&fit=crop&w=1950&q=80",
	          title: "Your First Date Dinner Here",
	          summary: "lorem ipsum text that matters",
	          timestamp: "1 hour ago"
	        },
	        {
	          image:
	            "https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83e5d3e676230de77a2c78f9563d1933&auto=format&fit=crop&w=1868&q=80",
	          title: "Summer Cocktails",
	          summary: "lorem ipsum text that matters",
	          timestamp: "1 hour ago"
	        }
	      ]
	    };
	  }
	};
</script>

<style scoped>
	.box-shadow-black {
		background: rgba(0, 0, 0, .8);
	  box-shadow: 0.25rem 0 0 rgba(0, 0, 0, 0.8), -0.25rem 0 0 rgba(0, 0, 0, 0.8);
	  box-decoration-break: clone;
	}

	.box-shadow-red {
	  box-shadow: 0.25rem 0 0 rgba(239, 87, 83, 0.8), -0.25rem 0 0 rgba(239, 87, 83, 0.8);
	  box-decoration-break: clone;
	}

	.utility__container {
	  display: grid;
	  /* grid-gap: 0.25rem; */
	}

	/* @media (max-width: 358px) {
		  .styled-responsive-image {
		    padding-top: 120px;
		  }
		} */

	@media (max-width: 767px) {
	  .utility__container {
	    grid-template: auto / repeat(2, minmax(100px, 1fr));
	    grid-auto-flow: row;
	  }

	  .styled-responsive-image {
	    padding-top: 100%;
	  }
	}

	@media (min-width: 768px) {
	  .utility__container {
	    grid-template: auto / repeat(2, minmax(100px, 1fr));
	    grid-auto-flow: row;
	  }
	}

	@media (min-width: 992px) {
	  .utility__container {
	    grid-template: auto / repeat(3, 1fr);
	  }
	}
</style>

