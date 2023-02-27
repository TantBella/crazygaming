<script>
  import FormEmail from '../contact/FormEmail.vue'
  import Maps from '../contact/GoogleMaps.vue'

  export default {
    components: {
      FormEmail,
      Maps
    }
  }
</script>

<template>
  <h1>Contact</h1>
  <main>
    <FormEmail />
    <Maps />
  </main>
</template>

<style>
  h1 {
    color: white;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
</style>
