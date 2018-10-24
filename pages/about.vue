<template>
    <section class="about bg-black-dark">
        <div class="about__container relative flex flex-row">

            <div class="about__header flex flex-col-reverse bg-yellow h-full shadow-lg">
                <h1 class="font-playfair text-4xl md:text-5xl w-16">ABOUT ME</h1>
            </div>

            <div class="about__details relative p-4">
                <div class="grid-shadow absolute pin-t pin-l bg-black w-full h-screen z-10">
                    <div class="about-image__container relative w-full h-screen z-10">
                        <div class="shadow absolute pin-t pin-l bg-transparent-75 w-full h-full z-20"></div>
                        <img class="h-full" :src="image" :alt="text">
                    </div>

                    <div class="logo">
                        <i class="fas fa-fire text-5xl text-white-dark"></i>                        
                    </div>
                </div>


                <h1 class="font-playfair relative text-base text-white mt-16 z-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque perspiciatis dolorum obcaecati eius, adipisci, nemo quos recusandae vel eveniet voluptatum quaerat? Delectus error rem tenetur suscipit fuga qui voluptatem voluptate.</h1>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
      head: {
        title: "Dopefeed About Page"
      },
      data() {
        return {
          image:
            "https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e730fb540ec2179da6b26b94e4ddd9b&auto=format&fit=crop&w=1951&q=80",
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
      width: 100%;
      height: 100vh;
    }

    .about__header > h1 {
        writing-mode: vertical-rl;
        text-orientation: upright;
    }

    .grid-shadow {
        display: grid;
        grid-template: auto / repeat(3, 1fr);
        grid-gap: 1px; 
    }

    img {
      object-fit: cover;
    }
</style>

