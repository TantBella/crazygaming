<script>
  import LogIn from '../membership-forms/LogIn.vue'
  import SignUp from '../membership-forms/SignUp.vue'

  export default {
    components: {
      LogIn,
      SignUp
    }
  }
</script>

<template>
  <h1>Log In/ Register new membership</h1>
  <LogIn />
  <SignUp />
</template>
