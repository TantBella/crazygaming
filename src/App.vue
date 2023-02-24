<script>
  import Headern from './components/HeaderComp.vue'
  import Navbar from './components/NavBar.vue'
  import Footern from './components/FooterComp.vue'
  import Shipping from './components/FreeShipping.vue'

  export default {
    components: {
      Headern,
      Navbar,
      Footern,
      Shipping
    }
  }
</script>

<template>
  <div id="wrapper">
    <div class="first">
      <Headern />
      <Shipping />
    </div>
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footern />
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  #wrapper {
    background-image: linear-gradient(#9857c2, #4361ee 10%, #9857c2);
    overflow-x: hidden;
    // max-width: 980px;
  }
  #wrapper {
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
