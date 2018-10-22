<template>
    <div class="banner w-full h-full">
        <div class="relative h-full">

            <div class="banner-details absolute z-10">
                <h1 class="font-ost text-white text-3xl md:text-5xl">Dopefeed feeding basics</h1>
                <p class="font-ost text-white text-xl md:text-4xl">Lorem ipsum thats sucks!</p>
            </div>

            <div class="banner-image-grid relative h-full">
                <div class="absolute w-full h-full bg-transparent-50"></div>
                <div class="banner-image__container overflow-hidden">
                    <img class="w-full h-full" :src="asset.url" :alt="asset.fileName" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import gql from "graphql-tag";

    const GET_ASSET_IMAGE = gql`
      query GetAssetImageQuery($where: AssetWhereInput) {
        assets(where: $where) {
          id
          fileName
          url
        }
      }
    `;

    export default {
      data() {
        return {
          asset: {}
        };
      },
      apollo: {
        assetsGraphQL: {
          query: GET_ASSET_IMAGE,
          variables() {
            return {
              where: {
                status: "PUBLISHED",
                id: "cjnfk1s073it00914glti4cl6"
              }
            };
          },
          update({ assets }) {
            return (this.asset = assets[0]);
          }
        }
      }
    };
</script>

<style scoped>
    img {
      object-fit: cover;
    }

    .banner-image-grid {
      display: grid;
    }

    .banner-details {
      top: 25%;
      left: 10%;
    }
</style>
