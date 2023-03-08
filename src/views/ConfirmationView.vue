<script>
  import Maps from '../contact/GoogleMaps.vue'

  export default {
    components: {
      Maps
    }
  }
</script>

<template>
  <div>
    <h1>Thank you for your message!</h1>
    <p>We will answer in 0-3 business days.</p>
    <p>
      Do you have a more urgent matter? You can call us at 070 000 000, Monday
      to Friday from 8am to 14pm!
    </p>
  </div>
  <div>
    <h2>Wanna continue shopping for games?</h2>
    <p>Click the button down below to go back to shopping</p>
    <button><RouterLink to="all-products">Click here</RouterLink></button>
  </div>
  <Maps />
</template>

<style scoped>
  div {
    display: block;
    text-align: center;
    color: white;
    margin: 30px;
  }
  button {
    background-color: rgb(50, 50, 93);
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px;
    border: none;
    color: white;
    padding: 7px;
    margin-top: 10px;
  }
  button:hover {
    background-color: rgb(102, 102, 153);
  }
  a {
    text-decoration: none;
    color: white;
  }
</style>
