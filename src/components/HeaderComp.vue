<script>
  import Search from './SearchField.vue'

  export default {
    components: {
      Search
    }
  }
</script>

<template>
  <div id="logo">
    <img src="/assets/Logo.png" alt="Crazy Gaming logo." />
  </div>
  <Search />
  <!-- <RouterLink to=""> -->
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
  #logo {
    display: flex;
    justify-content: center;
    margin: 1em 0;
  }
  @media (min-width: 600px) {
  }
</style>
