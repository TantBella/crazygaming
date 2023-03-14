<script>
  import Headern from './header/HeaderComp.vue'
  import Navbar from './components/NavBar.vue'
  import Footern from './footer/FooterComp.vue'
  import Shipping from './components/FreeShipping.vue'
  import ArrowUp from './components/ArrowUp.vue'
  import ShoppingCart from './shopping/ShoppingCart.vue'

  export default {
    components: {
      Headern,
      Navbar,
      Footern,
      Shipping,
      ArrowUp,
      ShoppingCart
    },

    data: function () {
      return {
        products: []
      }
    },

    methods: {
      addToCart(product) {
        this.products.push(product)
      }
    }
  }
</script>

<template>
  <div id="wrapper">
    <div class="first">
      <Headern />
      <Shipping />
    </div>

    <ShoppingCart />
    <Navbar />
    <main>
      <RouterView />
    </main>
    <ArrowUp />
    <Footern />
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  #wrapper {
    color: white;
    min-height: 100vh;
    background-image: linear-gradient(#6f2ba7, #4361ee 10%, #6f2ba7);
    overflow-x: hidden;
    margin: 0 auto;
    font-family: 'Inter', sans-serif;
  }

  li a {
    color: white;
  }

  li {
    list-style: none;
  }
</style>
