<script>
  import Maps from '../components/GoogleMaps.vue'

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
  <Maps />
</template>

<style scoped>
  div {
    display: block;
    text-align: center;
    color: white;
    margin: 30px;
  }
</style>
