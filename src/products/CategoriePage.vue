<!-- <script>
  export default {
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu
      },
      hideMenu() {
        this.showMenu = false
      }
    }
  }
</script> -->

<template>
  <div id="menuBox">
    <h2>Categories</h2>
    <h3>
      <RouterLink class="links" to="/all-products">All Games</RouterLink>
    </h3>
    <h3>
      <RouterLink class="links" to="/products/Xbox">Xbox</RouterLink>
    </h3>
    <h3>
      <RouterLink class="links" to="/products/Playstation"
        >Playstation</RouterLink
      >
    </h3>
    <h3>
      <RouterLink class="links" to="/products/Nintendo">Nintendo</RouterLink>
    </h3>
    <h3>
      <RouterLink class="links" to="/products/PC">PC</RouterLink>
    </h3>
  </div>
</template>

<style scoped>
  #menuBox {
    color: #fff;
    text-align: center;
  }
  h2 {
    font-size: 35px;
    font-weight: normal;
    padding-bottom: 1.3rem;
  }

  h3 {
    padding: 1.3rem;
    font-size: 30px;
    font-weight: normal;
  }
</style>
