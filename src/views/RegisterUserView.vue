<script>
  import SignUp from '../membership-forms/SignUp.vue'

  export default {
    components: {
      SignUp
    }
  }
</script>

<template>
  <div>
    <h1>Oh! how fun that you have decided to join us!</h1>
    <p>
      We just need a bit of information from you, this is to make the costumer
      experience flawless and give you exclusive offers. Just for you.
    </p>
  </div>
  <SignUp />
</template>

<style scoped>
  div {
    text-align: center;
    margin: 20px;
  }
</style>
