<template>
  <div>
    <h1>
      Welcome {{ this.$store.state.registeredUser.firstname }}
      {{ this.$store.state.registeredUser.lastname }}!
    </h1>

    <div>
      <RouterLink to="/favorites"> My Wishlist </RouterLink>
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
  </div>
</template>

<style>
  a {
    color: white;
  }
</style>
<!-- länk till my account rutnät med alla uppgifter man lagt ini formuläret vid registrering  reisterd user som sparas i ett object i store -->
