<template>
  <div>
    <Nav/>
    <nuxt/>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
  components: {
    Nav,
  }
}
</script>


<style>
:root {
  --primary-bg: #FCFCFC;
  --primary-light: #fff;
  --primary-dark: #c9c9c9;
  --secondary-bg: #ECF8F8;
  --dark-bg: #001427;
  --max-width: 1600px;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  max-width: var(--max-width);
  width: 100%;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  padding: 14px 16px;
}

h1, h2, h3 {
  font-size: 2.5em;
  font-family: "Titling Gothic Narrow Medium", sans-serif;
}

.grid {
    display: grid;
}
</style>
