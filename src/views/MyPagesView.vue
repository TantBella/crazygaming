<script></script>

<template>
  <div class="mypages">
    <RouterLink to="/settings">
      <img
        src="/assets/settings.png"
        alt="buttonpng"
        border="0"
        class="arrowside"
    /></RouterLink>
    <div class="welcome">
      <h1>
        Welcome {{ this.$store.state.registeredUser.firstname }}! Are you ready
        to enhance your gaming experience?
      </h1>
      <p>
        This is were you find personalised links to your account, your wishlist,
        your purchases, track your order and many other things! See this as
        <b>your</b>
        personalised space.
      </p>
    </div>

    <div class="userbtn">
      <RouterLink to="/wishlist"> My Wishlist </RouterLink>
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
    // background-color: #926afa98;
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
