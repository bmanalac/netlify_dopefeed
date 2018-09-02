<template>
    <footer class="footer">

        <div class="footer__container text-white-dark bg-black p-4 h-48">

            <div class="language-utility">Translations</div>

            <div class="resources-menu text-xs">

                <h2 class="mb-4">Resources</h2>

                <span>Subscription Services</span>

                <span>Site Map</span>

                <span>Writers</span>

                <span>Accessibility Help</span>

            </div>

        </div>

    </footer>
</template>

<script>
    export default {
    };
</script>

<style scoped>
    .footer__container {
      display: grid;
      grid-template: auto / 1fr 1fr;
      height: 70vh;
    }

    .resources-menu {
      display: grid;
      grid-template: auto / minmax(100px, 1fr);
      grid-gap: 10px;
    }
</style>
