<template>
    <div class="featured1">
        <nuxt-link 
            class="title-card__image-link grid" 
            v-bind:style="{ 'background-image': `url(${featured.img})` }" 
            to="/gallery">
            <div class="title-card__details-container">
                <h1 class="title-card__details-group">{{ featured.category }}</h1>
                <h1 class="title-card__head-link grid">{{ featured.title }}</h1>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
      featured: {
        category: "My Pick",
        title: "featured title that doesn't make any sense",
        summary: "Lorem ipsum dolor amet tote bag tilde butcher hammock.",
        img: "http://via.placeholder.com/600x300",
        alt: "alt-text"
      }
    };
  }
};
</script>

<style lang="scss">
.featured1 {
  border-bottom: 1px solid black;
  position: relative;
  width: 100%;
}

.title-card__image-link {
  display: block;
  min-height: 480px;
  
  grid-template-columns: repeat(2, 1fr);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

}

.title-card__details-container {
  display: block;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  color: #fff;
  overflow: hidden;
  padding: 0 20px 20px;

  .title-card__details-group {
    display: table;
    font-size: 28px;
    background-color: #FF6B6B;
    padding: 0 10px;
    margin-bottom: 1px;
    margin-left: -10px;
  }

  .title-card__head-link {
    display: inline;
    line-height: 48px;
    background: #000;
    box-shadow: 10px 0 0 #000, -10px 0 0 #000;
    font-family: "Titling Gothic Narrow Medium", sans-serif;
  }
}


.span-col-2 {
  grid-column: span 2 / auto;
}

.title-card-summary {
  display: inline;
  background: #000;
  box-shadow: 10px 0 0 #000, -10px 0 0 #000;
  margin: 0;
  line-height: 48px;
  margin: 0;
}

img {
  margin: auto;
}
</style>

