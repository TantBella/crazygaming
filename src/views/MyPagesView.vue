<template>
  <div class="mypages">
    <h1>Welcome Testsson!</h1>
    <div class="userbtn">
      <RouterLink to="/user"> My Wishlist </RouterLink>
      <img
        src="/assets/arrow_right.png"
        alt="buttonpng"
        border="0"
        class="arrowside"
      />
    </div>
    <div class="userbtn">
      <RouterLink to="/user"> My Purchases </RouterLink>
      <img
        src="/assets/arrow_right.png"
        alt="buttonpng"
        border="0"
        class="arrowside"
      />
    </div>
    <div class="userbtn">
      <RouterLink to="/user"> Track My Order </RouterLink>
      <img
        src="/assets/arrow_right.png"
        alt="buttonpng"
        border="0"
        class="arrowside"
      />
    </div>
    <div class="userbtn">
      <RouterLink to="/user"> My Discounts </RouterLink>
      <img
        src="/assets/arrow_right.png"
        alt="buttonpng"
        border="0"
        class="arrowside"
      />
    </div>
    <div class="userbtn">
      <RouterLink to="/user"> Customer Support </RouterLink>
      <img
        src="/assets/arrow_right.png"
        alt="buttonpng"
        border="0"
        class="arrowside"
      />
    </div>
    <div class="userbtn">
      <RouterLink to="/user"> Log Out </RouterLink>
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
