<template>
    <div class="siderail-posts__container relative">

        <div class="siderail__header w-full p-10 text-center border-b">
            Something goes here
        </div>

        <div class="siderail__hero p-4 border-b">
            
            <h1>{{ latestposthero.title }}</h1>
            
            <span>{{ latestposthero.summary }}</span>
            
            <span>{{ latestposthero.timestamp }}</span>
        </div>

        <div class="sidreail-posts__list p-4 border-b" v-for="post in latestpostlist" :key="post.index">
            
            <h1>{{ post.title }}</h1>
            
            <span>{{ post.summary }}</span>
            
            <span>{{ post.timestamp }}</span>
        </div>

    </div>
</template>

<script>
    export default {
      data: () => {
        return {
          latestposthero: {
            image:
              "https://images.unsplash.com/photo-1518095311381-8dce8cfe3ab4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af800e993b447f2058772e005facf7fb&auto=format&fit=crop&w=1950&q=80",
            title: "Best Kitchen Knives",
            summary: "lorem ipsum text that matters",
            timestamp: "1 hour ago"
          },
          latestpostlist: [
            {
              image:
                "https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83e5d3e676230de77a2c78f9563d1933&auto=format&fit=crop&w=1868&q=80",
              title: "Summer Cocktails",
              summary: "lorem ipsum text that matters",
              timestamp: "1 hour ago"
            },
            {
              image:
                "https://images.unsplash.com/photo-1469533802599-76ee5be68f7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eb20b626fbff1065f1e7402e7675d9d2&auto=format&fit=crop&w=1950&q=80",
              title: "Upcoming Vineyards To Try",
              summary: "lorem ipsum text that matters",
              timestamp: "1 hour ago"
            }
          ]
        };
      }
    };
</script>

<style>
</style>