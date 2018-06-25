<template>
  <nav id="nav">
    <div class="nav__container nav__grid grid">
      <nuxt-link class="logo" to="/">LOGO</nuxt-link>
      <div class="nav-links__container">
        <ul class="nav-links grid grid-links">
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
  data() {
    return {
      navData: 'This is Nav data'
    }
  }
}
</script>

<style>
  nav {
    box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.2);
    max-width: var(--max-width);
    width: 100%;
    overflow: hidden;
    background: var(--dark-bg);
    z-index: 999;
  }

  .nav__container {
    width: 100%;
  }

  .logo {
    margin: auto 0;
    padding-left: 10px;
  }

  .nav__grid {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
  }

  .nav-links__container {
    float: left;
    color: #000;
    text-align: center;
    text-decoration: none;
    font-size: 17px;
  }

  .grid-links {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
  }

  .nav-links a:hover {
    background-color: #ddd;
    color: black;
  }
</style>