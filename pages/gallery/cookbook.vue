<template>
    <section class="gallery">

        <div v-if="posts" class="wrapper relative flex flex-col justify-center bg-white pt-32 pb-16">
            <div class="gallery-posts">
                <ul class="p-0">
                    <li class="list-reset"
                        v-for="post in posts" :key="post.id">
                            <Post-card :post="post" />
                    </li>
                </ul>
                <button v-if="postCount && postCount > posts.length" @click="loadMorePosts">
                    {{loading ? 'Loading...' : 'Show more'}}
                </button>
            </div>
        </div>

        <div v-else class="loading">
            <h1>Loading...</h1>
        </div>

    </section>
</template>

<script>
    import gql from "graphql-tag";
    import PostCard from "~/components/PostCard.vue";

    const POSTS_PER_PAGE = 5;

    const GET_ALLPOSTS = gql`
      query posts($first: Int!, $skip: Int!) {
        posts(orderBy: dateAndTime_DESC, first: $first, skip: $skip) {
          id
          slug
          title
          dateAndTime
          coverImage {
            handle
          }
        }
      }
    `;

    export default {
      head: {
        title: "Dopefeed Cook Book"
      },
      data: () => ({
        loading: 0,
        posts: null,
        postCount: null
      }),
      components: {
        PostCard
      },
      apollo: {
        $loadingKey: "loading",
        posts: {
          query: GET_ALLPOSTS,
          variables: {
            skip: 0,
            first: POSTS_PER_PAGE
          }
        },
        postCount: {
          query: gql`
            {
              postsConnection {
                aggregate {
                  count
                }
              }
            }
          `,
          update: ({ postsConnection }) => postsConnection.aggregate.count
        }
      },
      methods: {
        loadMorePosts() {
          this.$apollo.queries.posts.fetchMore({
            variables: {
              skip: this.posts.length
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              if (!fetchMoreResult) {
                return previousResult;
              }
              return Object.assign({}, previousResult, {
                posts: [...previousResult.posts, ...fetchMoreResult.posts]
              });
            }
          });
        }
      }
    };
</script>

<style scoped>
    .gallery-posts > ul {
        display: grid;
        grid-template: auto / repeat(auto-fill, minmax(250px, 1fr));
    }
</style>

