<script>
  import LogIn from '../membership-forms/LogIn.vue'

  export default {
    components: {
      LogIn
    }
  }
</script>

<template>
  <h1>Welcome to Crazy Gaming's clubhouse</h1>
  <p>You can log into your account and sign up for membership.</p>
  <div>
    <LogIn />
  </div>
  <div class="link">
    <p class="account">
      Don't have a account?
      <RouterLink to="/register-user">Register new user!</RouterLink>
    </p>
  </div>
</template>

<style lang="scss" scoped>
  h1,
  p {
    text-align: center;
  }
  a {
    color: white;
  }
  a:hover {
    color: rgb(69, 32, 202);
  }

  @media (min-width: 375px) and (max-width: 500px) {
    h1,
    p {
      text-align: left;
      margin: 10px;
    }
    .link {
      display: block;
      border-top: solid 2px white;
      margin: 0%;
    }
    .account {
      text-align: left;
      margin: 20px;
    }
  }
</style>
