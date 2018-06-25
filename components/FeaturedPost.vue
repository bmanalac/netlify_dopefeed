<template>
    <div id="featured" class="featured__grid grid">
        <nuxt-link class="featured-card-link__container grid span-col-2" v-bind:style="{ 'background-image': `url(${featured.img})` }" to="/gallery">
            <div class="featured-card-details__container">
                <h1 class="featured-card-title grid">{{ featured.title }}</h1>
                <h1 class="featured-card-summary">{{ featured.summary }}</h1>
            </div>
        </nuxt-link>
        <h1>Another component</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            featured: {
                title: 'featured title',
                summary: 'Lorem ipsum dolor amet tote bag tilde butcher hammock.',
                img: 'http://via.placeholder.com/600x300',
                alt: 'alt-text'
            }
        }
    }
}
</script>

<style>
    #featured {
        border-bottom: 1px solid black;
    }

    .featured__grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .featured-card-link__container {
        grid-template-columns: repeat(2, 1fr);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        height: 500px;
    }

    .featured-card-details__container {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        position: absolute;
        left: 0;
        bottom: 0;
        color: #fff;
        display: block;
        overflow: hidden;
        padding: 0 15px;
    }

    .featured-card-title {
        display: table;
        background: #000;
        box-shadow: 10px 0 0 #000, -10px 0 0 #000;
    }

    .span-col-2 {
        grid-column: span 2 / auto;
    }

    .featured-card-summary {
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

