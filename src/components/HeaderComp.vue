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
    <div id="container">
      <div id="logo">
        <RouterLink to="/">
          <img
            src="/assets/Logo.png"
            srcset="/assets/Logo.png 200w, /assets/Logo.png 100w"
            sizes="(max-width: 600px) 200px, 150px"
            alt="Crazy Gaming logo."
        /></RouterLink>
      </div>
      <div id="search">
        <Search />
      </div>
      <div id="icons">
        <RouterLink to="/checkout">
          <img
            id="basket"
            src="/assets/basket-icon-white.png"
            alt="basket icon"
          />
        </RouterLink>
        <RouterLink to="/user">
          <img id="user" src="/assets/user-icon-white.png" alt="User icon" />
        </RouterLink>
      </div>
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
  #container {
    height: 150px;
  }
  #logo {
    display: flex;
    justify-content: center;
    margin: 1em 0;
  }
  #icons {
    visibility: hidden;
  }
  #category {
    visibility: hidden;
  }
  @media (min-width: 600px) {
    header {
      margin-bottom: 0.5em;
      border-bottom: solid 2px rgba(255, 255, 255, 0.5);
    }
    #logo {
      float: left;
      width: 200px;
      height: 80px;
      margin-left: 1em;
      // margin-right: 10vw;
    }
    #container {
      display: flex;
      justify-content: left;
    }
    #search {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-self: flex-start;
      margin-top: 30px;
    }
    #icons {
      width: 140px;
      display: flex;
      justify-items: right;
      align-items: flex-start;
      visibility: visible;
      margin-top: 35px;
    }
    #user {
      width: 30px;
      margin-left: 1.6em;
      margin-right: 5em;
    }
    #basket {
      width: 30px;
      margin-left: 1em;
    }
    #category {
      visibility: visible;
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 0.3em;
    }
    #category a {
      padding: 0 10%;
      color: #fff;
      text-decoration: none;
    }
    #category a:hover {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
</style>
