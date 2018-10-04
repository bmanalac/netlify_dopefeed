<template>

    <form @submit.prevent="handleSubmit" class="login-form__container border border-black rounded-l-sm rounded-r-sm flex flex-col p-4">

        <input class="border border-grey my-1 p-1" type="text" v-model="user.name" placeholder="Name" required>

        <input class="border border-grey my-1 p-1" type="password" v-model="user.password" placeholder="Password" required>

        <button-helper text="Submit" type="submit" />

    </form>

</template>

<script>
    import Button from "./common/Button.vue";
    
    export default {
      data() {
        return {
          user: {
            name: '',
            password: ''
          }
        }
      },
      components: {
        ButtonHelper: Button
      },
      methods: {
        handleSubmit() {
          let userNameMatch = this.$store.state.user.name === this.user.name.toLowerCase();
          let userPasswordMatch = this.$store.state.user.password === this.user.password.toLowerCase();
          (userNameMatch && userPasswordMatch) ? this.$store.commit('changeMode', false) : console.log('fuck no')
        }
      }
    };
</script>

<style scoped>
    .login-form__container {
      background: rgba(255, 234, 167, 0.95);
    }
</style>
