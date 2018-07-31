<template>
    <div class="feature-2__container">
        <div 
            class="feature-card-item__container"
            v-for="post in latestPosts"
            :key="post.index">
            
            <nuxt-link 
                class="feature-card__image-link"
                to="/gallery">
                <div class="feature-card-image">
                    <img :src="post.image" :alt="post.title">
                </div>
            </nuxt-link>

            <div class="feature-card__details">
                <nuxt-link
                    class="feature-card__title-link"
                    to="/gallery">
                    <h2>{{ post.title }}</h2>
                    <p>Author Title</p>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      latestPosts: [
        {
          image: "https://images.unsplash.com/photo-1518095311381-8dce8cfe3ab4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af800e993b447f2058772e005facf7fb&auto=format&fit=crop&w=1950&q=80",
          title: "Best Kitchen Knives",
          summary: "lorem ipsum text that matters",
          timestamp: "1 hour ago"
        },
        {
          image: "https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83e5d3e676230de77a2c78f9563d1933&auto=format&fit=crop&w=1868&q=80",
          title: "Summer Cocktails",
          summary: "lorem ipsum text that matters",
          timestamp: "1 hour ago"
        },
        {
          image: "https://images.unsplash.com/photo-1469533802599-76ee5be68f7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eb20b626fbff1065f1e7402e7675d9d2&auto=format&fit=crop&w=1950&q=80",
          title: "Upcoming Vineyards To Try",
          summary: "lorem ipsum text that matters",
          timestamp: "1 hour ago"
        },
        // {
        //   image: "https://images.unsplash.com/photo-1523567940912-9a9b9788f863?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a80753a0b7c2711ff6ccfef562a77021&auto=format&fit=crop&w=1050&q=80",
        //   title: "gentleman's Pubs To Scout",
        //   summary: "lorem ipsum text that matters",
        //   timestamp: "1 hour ago"
        // },
        // {
        //   image: "https://images.unsplash.com/photo-1506833345857-935a8275b07a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d87985046dd0bc1e9b738ecc4cc4985&auto=format&fit=crop&w=1950&q=80",
        //   title: "Your First Date Dinner Here",
        //   summary: "lorem ipsum text that matters",
        //   timestamp: "1 hour ago"
        // }
      ]
    };
  }
};
</script>

<style lang="scss">
.feature-2__container {
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
}

.feature-card-item__container {
    display: flex;
    flex-direction: column;
    width: 100%;
}

// styles post-card-content
.feature-card__image-link {
    position: relative;
    padding: 0;
    overflow: hidden;
    width: 100%;

    
    .feature-card-image {

        img {
            // position: absolute;
            // top: 0;
            // left: 0;
            height: 200px;
            width: 100%;
            object-fit: cover;
        }
    }
}

.feature-card__details {
    padding: 30px 25px;

    .feature-card__title-link {
        color: #000;
        padding: 0;
        
        h2 {
            border-bottom: 1px solid transparent;
            transition: border-bottom ease-in-out 1s;

            &:hover {
                border-color: #000;
                border-bottom: 1px solid #000;
            }
        }
    }
}

@media only screen and (max-width: 600px) {
    .feature-2__container {
        flex-direction: column;
    }

    .feature-card-item__container {
        flex-direction: row;
    }

    .feature-card__image-link {
        width: 120px;
        max-width: 160px;
        min-width: 120px;
        height: 160px;  
        max-height: 220px;
    }

    .feature-card__details {
        width: 100%;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
    }

    h2 {
        font-size: 1.25rem;
    }
}

@media only screen and (min-width: 768px) {
    .feature-card__details {
        border-right: 1px solid #e5e5e5;
    }
}
</style>

