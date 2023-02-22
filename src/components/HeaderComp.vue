<script>
  import Search from './SearchField.vue'

  export default {
    components: {
      Search
    }
  }
</script>

<template>
  <header>
    <div id="logo">
      <img
        src="/assets/Logo.png"
        srcset="assets/Logo.png 200w, assets/Logo.png 100w"
        sizes="(max-width: 600px) 200px, 150px"
        alt="Crazy Gaming logo."
      />
    </div>
    <div class="search-bar">
      <Search />
    </div>
    <div id="category">
      <RouterLink to="/products/Xbox">Xbox</RouterLink>
      <RouterLink to="/products/Playstation">Playstation</RouterLink>
      <RouterLink to="/products/Nintendo">Nintendo</RouterLink>
      <RouterLink to="/products/PC">PC</RouterLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  #logo {
    display: flex;
    justify-content: center;
    margin: 1em 0;
  }
  #category {
    visibility: hidden;
  }
  @media (min-width: 600px) {
    header {
      border-bottom: solid 2px rgba(255, 255, 255, 0.5);
    }
    #logo {
      display: flex;
      justify-content: left;
      margin-left: 1em;
    }

    #category {
      visibility: visible;
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 0.3em;
    }
    a {
      padding: 0 10%;
      color: #fff;
      text-decoration: none;
    }
    a:hover {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
</style>
