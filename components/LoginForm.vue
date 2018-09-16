<template>
    <div class="login-form__container border border-white-dark rounded-l-lg rounded-r-lg">

        <form action="" class="login-form flex flex-col bg-white p-16">

            <input type="submit" placeholder="Email">

            <input type="submit" placeholder="Password">

            <Button text="Submit" />

        </form>

    </div>
</template>

<script>
    import Button from "./common/Button.vue";

    export default {
        components: {
            Button
        }
    };
</script>

<style scoped>
</style>
