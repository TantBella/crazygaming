<template>
  <div class="shippingContainer">
    <img
      class="shippingIcon"
      src="/assets/Shipping-icon.png"
      alt="Shipping truck icon."
    />
    <p>Free shipping when your purchase is over 75 €</p>
  </div>
</template>

<style scoped>
  .shippingContainer {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.2);
    height: 45px;
    display: flex;
    justify-content: center;
    align-content: space-around;
    padding-top: 10px;
    margin-bottom: 0.5em;
  }
  .shippingIcon {
    width: 28px;
    height: 20px;
    margin-right: 5px;
  }
</style>
