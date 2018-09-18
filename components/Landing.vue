<template>
	<div class="landing__container relative overflow-hidden h-screen">

		<div class="absolute pin-t pin-l z-20" v-on:click="isActive = !isActive">
			<Login-btn text="Login" />
		</div>

		<Login-form class="login-form absolute z-20" v-bind:class="{ active: isActive }" />

		<div class="landing-shadow border-4 border-black p-4 mx-8 sm:mx-4 z-10">

			<div class="landing-details text-center p-4 border-4 border-black">

				<h1 class="font-cookie text-5xl text-brown-darkest border-grey-lightest">We're cooking something worth your salt</h1>

				<span class="font-cookie text-4xl text-brown-darkest border-grey-lightest">Good things come to those who wait.</span>
			</div>

		</div>

		<img class="absolute pin-t pin-l w-full h-full z-0" :src="image" :alt="alt">

	</div>
</template>

<script>
	import LoginBtn from "./common/Button.vue";
	import LoginForm from "./LoginForm.vue";

	export default {
	  data: function() {
	    return {
	      isActive: false,
	      image:
	        "https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1e392896fc645f9fc3797c9bb7dab4d3&auto=format&fit=crop&w=1950&q=80",
	      alt: "prepped food on yellow table"
	    };
	  },
	  components: {
	    LoginBtn,
	    LoginForm
	  }
	};
</script>

<style scoped>
	.login-form {
	  display: grid;
	  grid-template: auto / auto;
	  align-self: center;
	  transform: translateX(-100%);
	  transition: 0.4s ease;
		opacity: 0;
	}

	.active.login-form {
		opacity: 1;
	  justify-self: center;
	  transform: translateX(0);
	}

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
	  text-shadow: 1px 1px 2px white;
	}

	img {
	  object-fit: cover;
	}
</style>
