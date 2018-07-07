<template>
    <ul class="featured-2-cards__container">
        <li class="featured-2-cards-list-details grid"
            v-for="latest in latestPosts"
            :key="latest.index">

            <img class="img img--span-row-3" 
                :src="latest.img" 
                alt="alt text" />
            <h1>{{ latest.title }}</h1>
            <p>{{ latest.summary }}</p>
            <p>{{ latest.timestamp }}</p>
        </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      latestPosts: [
        {
          img: "http://via.placeholder.com/600x300",
          title: "latest title",
          summary: "lorem ipsum text that matters",
          timestamp: "1 hour ago"
        },
        {
          img: "http://via.placeholder.com/600x300",
          title: "latest title",
          summary: "lorem ipsum text that matters",
          timestamp: "1 hour ago"
        },
        {
          img: "http://via.placeholder.com/600x300",
          title: "latest title",
          summary: "lorem ipsum text that matters",
          timestamp: "1 hour ago"
        },
        {
          img: "http://via.placeholder.com/600x300",
          title: "latest title",
          summary: "lorem ipsum text that matters",
          timestamp: "1 hour ago"
        },
        {
          img: "http://via.placeholder.com/600x300",
          title: "latest title",
          summary: "lorem ipsum text that matters",
          timestamp: "1 hour ago"
        }
      ]
    };
  }
};
</script>

<style>
.featured-2-cards-list__container {
  border: 1px solid black;
  list-style-type: none;
}

.featured-2-cards-list-details {
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.featured-2-cards-list-details > img {
  width: 8em;
  height: 100%;
  border-radius: 100%;
}

.img--span-row-3 {
  grid-row: span 3 / auto;
}
</style>

