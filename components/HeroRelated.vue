<template>
    <div class="quote relative w-3/4 mx-auto my-6">

        <div class="quote__contain6er relative border-4 border-black rounded-sm">

            <span class="block quote-icon quote-icon__left relative pin-l">

                <img class="bg-white" src="../assets/svg/format_quote-24px.svg" alt="quote icon">

            </span>

            <h1 class="text-center text-xs md:text-sm leading-loose px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit corporis repellendus, temporibus necessitatibus placeat hic in reiciendis soluta deleniti et voluptatum quaerat at eum aut corrupti, consequuntur commodi? Neque, cumque!</h1>
            <br>
            <h1 class="text-right text-xs md:text-sm pr-6">- Remember This</h1>

            <span class="block quote-icon quote-icon__right relative">

                <img class="bg-white" src="../assets/svg/format_quote-24px.svg" alt="quote icon">

            </span>

        </div>

    </div>
</template>

<script>
    export default {};
</script>

<style scoped>
    .quote-icon {
        width: 50px;
    }

    .quote-icon__left {
        left: -25px;
        top: -25px;
    }

    .quote-icon__right {
        right: calc(-100% + 25px);
        bottom: -25px;
    }

    img {
        width: 100px;
    }

    @media (min-width: 676px) {
        .quote-icon {
        width: 100px;
    }

    .quote-icon__left {
        left: -50px;
        top: -25px;
    }

    .quote-icon__right {
        right: calc(-100% + 50px);
        bottom: -25px;
    }
    }
</style>
