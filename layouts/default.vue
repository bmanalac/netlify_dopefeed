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
  --button-bg: #58BC82;
  --button-light: #8befb2;
  --button-dark: #208b55;
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
  max-width: 1200px;
  width: 100%;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
}

.grid {
    display: grid;
}

.button--green {
  display: inline-block;
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  border: 1px solid var(--button-dark);
  background: var(--button-bg);
  color: var(--primary-bg);
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: var(--button-dark);
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
