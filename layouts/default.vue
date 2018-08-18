<template>
  <div>
    <Nav/>
    <nuxt/>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";

export default {
  components: {
    Nav
  },
  transition: "page"
};
</script>


<style>
/* 
font-family: 'Questrial', sans-serif;
font-family: 'Quattrocento Sans', sans-serif;
font-family: 'Caveat', cursive;
font-family: 'Noto Sans', sans-serif; 
*/

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  max-width: 1600px;
  width: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a,
a:visited,
a:focus {
  color: initial;
  text-decoration: none;
}

.inline {
  display: inline;
}

/* span {
  font-family: "Noto Sans", sans-serif;
  font-stretch: normal;
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
} */

.styled-responsive-image {
  overflow: hidden;
  position: relative;
  padding-top: 120%;
}

.styled-responsive-image__img {
  position: absolute;
  object-fit: cover;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  max-width: 100%;
  width: 100%;
  pointer-events: none;
}

@media (min-width: 640px) {
  .styled-responsive-image {
    padding-top: 100%;
  }
}

@media (min-width: 768px) {
  .styled-responsive-image {
    padding-top: 66.666666%;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>
