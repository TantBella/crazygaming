<script></script>

<template>
  <div class="mypages">
<<<<<<< HEAD
    <RouterLink to="/settings">
      <img
        src="/assets/settings.png"
        alt="buttonpng"
        border="0"
        class="arrowside"
    /></RouterLink>
    <h1>Welcome Testsson!</h1>
=======
    <div class="welcome">
      <h1>
        Welcome {{ this.$store.state.registeredUser.firstname }}
        {{ this.$store.state.registeredUser.lastname }}! Ready to game?
      </h1>
      <p>
        Here you can find personalised links to your account, your wishlist,
        your purchases, track your order and many other things! See this as
        <u>your</u>
        personalised space.
      </p>
      <p>
        You can log in to your account using the emailadress that you used when
        you registered the account.
      </p>
    </div>
    <!-- Kanske hade varit bra att ha "mitt konto" typ också som en länk? -->
>>>>>>> 14e288c4e775eff52159c61705232ac4aaa6285b
    <div class="userbtn">
      <RouterLink to="/favorites"> My Wishlist </RouterLink>
      <img
        src="/assets/arrow_right.png"
        alt="buttonpng"
        border="0"
        class="arrowside"
      />
    </div>
    <div class="userbtn">
      <RouterLink to="/Purchases"> My Purchases </RouterLink>
      <img
        src="/assets/arrow_right.png"
        alt="buttonpng"
        border="0"
        class="arrowside"
      />
    </div>
    <div class="userbtn">
      <RouterLink to="/Trackorder"> Track My Order </RouterLink>
      <img
        src="/assets/arrow_right.png"
        alt="buttonpng"
        border="0"
        class="arrowside"
      />
    </div>
    <div class="userbtn">
      <RouterLink to="/Memberdiscount"> My Discounts </RouterLink>
      <img
        src="/assets/arrow_right.png"
        alt="buttonpng"
        border="0"
        class="arrowside"
      />
    </div>
    <div class="userbtn">
      <RouterLink to="/contact"> Customer Support </RouterLink>
      <img
        src="/assets/arrow_right.png"
        alt="buttonpng"
        border="0"
        class="arrowside"
      />
    </div>
    <div class="userbtn">
      <RouterLink to="/Logout"> Log Out </RouterLink>
      <img
        src="/assets/arrow_right.png"
        alt="buttonpng"
        border="0"
        class="arrowside"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .welcome {
    margin: 10px;
    text-align: center;
  }
  .mypages {
    background-color: #a180f698;
    padding: 5px 0 20px 0;
  }
  .userbtn {
    background-color: #a27cfb71;
    border-radius: 17px;
    padding: 10px;
    margin: 5px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .arrowside {
    display: flex;
    // justify-self: flex-end;
    // align-self: flex-end;
  }
</style>
