<template>
	<nav class="nav">

		<div class="nav__container">

			<nuxt-link class="logo" to="/">LOGO</nuxt-link>

			<div class="nav-links__container">

				<ul class="nav-links__list">

					<nuxt-link class="nav-link" to="/">Home</nuxt-link>

					<nuxt-link class="nav-link" to="/about">About</nuxt-link>

					<nuxt-link class="nav-link" to="/gallery">Gallery</nuxt-link>

				</ul>

			</div>

		</div>

	</nav>
</template>

<script>
	export default {
	  data: () => {
	    return {
	      navData: "This is Nav data"
	    };
	  }
	};
</script>

<style scoped>
	nav {
	  /* position: fixed; */
	  /* top: 0;
	  left: 0; */
	  background: white;
	  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
	  width: 100%;
	  overflow: hidden;
	  z-index: 999;
	}

	.logo {
	  margin: auto 0;
	  padding-left: 10px;
	  font-size: 1.5rem;
	}

	.nav__container {
	  display: grid;
	  grid-template: 50px / 1fr 3fr 1fr;
	  grid-gap: 5px;
	  width: 100%;
	}

	.nav-links__container {
	  float: left;
	  color: #000;
	  text-align: center;
	  text-decoration: none;
	  font-size: 1.25rem;
	  margin: auto 0;
	}

	.nav-links__list {
	  display: grid;
	  grid-template-columns: repeat(3, 1fr);
	}

	a.nav-link {
	  padding: 5px 10px;
	}

	a:hover {
	  color: red;
	}

	@media (min-width: 768px) {
	  .nav__container {
	    grid-template-rows: 70px;
	  }
	}
</style>