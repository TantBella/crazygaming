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
  <RouterLink to="">
    <main>
      <RouterView />
    </main>
  </RouterLink>
  <div id="category">
    <RouterLink to="/products/Xbox">Xbox</RouterLink>
    <RouterLink to="/products/Playstation">Playstation</RouterLink>
    <RouterLink to="/products/Nintendo">Nintendo</RouterLink>
    <RouterLink to="/products/PC">PC</RouterLink>
  </div>
</template>

<style lang="scss">
  #logo {
    display: flex;
    justify-content: center;
    margin: 1em 0;
  }
  #category {
    visibility: hidden;
  }
  @media (min-width: 600px) {
    #category {
      visibility: visible;
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 1em;
    }
  }
</style>
