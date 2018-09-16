<template>
    <div>

        <div class="login-btn__container">

            <Button text="Login" />
        </div>

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
    button {
        transition: 0.4s;
    }
</style>
