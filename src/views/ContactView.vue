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
  <div id="title">
    <div>
      <RouterLink to="/my-pages">
        <img src="/assets/arrowBack.png" alt="White arrow pointing left" />
      </RouterLink>
    </div>

    <h1>SUPPORT</h1>
  </div>
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
  #title {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
</style>
