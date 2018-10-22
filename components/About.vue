<template>
    <section class="about bg-black">

        <div class="about__container relative flex flex-col justify-center md:flex-row pt-16 z-20">
            <div class="about-header__details text-right w-full h-full md:pr-4 rounded-tl-lg rounded-tr-lg">
                <h1 class="font-playfair relative text-5xl text-black bg-yellow z-10">ABOUT ME</h1>
                <h1 class="font-playfair relative text-base text-yellow-light leading-loose mt-4 mx-4 md:mx-0 z-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque perspiciatis dolorum obcaecati eius, adipisci, nemo quos recusandae vel eveniet voluptatum quaerat? Delectus error rem tenetur suscipit fuga qui voluptatem voluptate.</h1>
            </div>

            <div class="about-header-exp w-full md:pl-32">
                <h1 class="font-playfair text-3xl text-yellow">Hobbies</h1>
                <h1 class="font-playfair text-yellow-light">Hobbies</h1>
            </div>

            <div class="about-header-image__container absolute pin-t pin-l w-full h-full z-0">
                <div class="about-image-shadow absolute bg-transparent-75 pin-t pin-l w-full h-full z-10"></div>
                <img class="about-header-image-img w-full h-full" :src="image" :alt="text">
            </div>
        </div>

        <div class="contact w-full h-full">
            <h1 class="font-hind">Send an Email</h1>
        </div>

    </section>
</template>

<script>
    import gql from "graphql-tag";

    export default {
      head: {
        title: "Dopefeed About Page"
      },
      data() {
        return {
          image:
            "https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e730fb540ec2179da6b26b94e4ddd9b&auto=format&fit=crop&w=1951&q=80",
          text: "some text here",
          loading: 0
        };
      }
    };
</script>

<style scoped>
    .grid-shadow {
      display: grid;
      grid-template: auto / repeat(3, 1fr);
      grid-gap: 1px;
    }

    img {
      object-fit: cover;
    }
</style>

