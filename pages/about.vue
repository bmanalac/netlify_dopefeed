<template>
    <section class="about">

        <div class="about__container">

            <div class="about-hero-image__container">

                <img :src="image" alt="text">

            </div>

            <h1>fuck this</h1>

        </div>

    </section>
</template>

<script>
    export default {
      head: {
        title: "Dopefeed About Page"
      },
      data: () => {
        return {
          image:
            "https://images.unsplash.com/photo-1515208104371-33f379f845a4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=987e2e76a1243ae562f7a9902f815813&auto=format&fit=crop&w=1950&q=80",
          text: "some text here"
        };
      }
    };
</script>

<style scoped>
    .about {
      position: relative;
    }

    .about__container {
      position: relative;
      width: 100%;
      height: 80vh;
      overflow: hidden;
    }
    
    .about-hero-image__container {
      display: block;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    h1 {
      background: pink;
    }
</style>

