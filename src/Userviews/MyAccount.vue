<script>
  export default {
    data() {
      return {
        unSubscribe: false
      }
    }
  }
</script>

<template>
  <div>
    <h1>
      Welcome {{ this.$store.state.registeredUser.firstname }}
      {{ this.$store.state.registeredUser.lastname }}!
    </h1>

    <h5>Menu:</h5>
    <div>
      <RouterLink to="/wishlist"> My Wishlist </RouterLink>
    </div>
    <div>
      <RouterLink to="/Purchases"> My Purchases </RouterLink>
    </div>
    <div>
      <RouterLink to="/Trackorder"> Track My Order </RouterLink>
    </div>
    <div>
      <RouterLink to="/Memberdiscount"> My Discounts </RouterLink>
    </div>
    <div>
      <a href="">Delete account</a>
    </div>
    <div>
      <RouterLink to="/Logout"> Log Out </RouterLink>
    </div>
    <div class="unsubscribe">
      <h5>Unsubscribe from Newsletter</h5>
      <label v-if="unSubscribe === false">Are you sure?</label>
      <label v-else>Click again to subscribe</label>
      <input type="checkbox" v-model="unSubscribe" />
      <p v-if="unSubscribe !== false">
        You have successfuly unsubscribed and will no longer receive any emails
        from us.
      </p>
    </div>
  </div>
</template>

<style scoped>
  a {
    color: white;
  }

  input[type='checkbox'] {
    height: 16px;
    width: 16px;
  }
  label {
    margin-right: 5px;
  }

  .unsubscribe {
    margin-top: 20px;
  }
</style>
