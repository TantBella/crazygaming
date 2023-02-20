<script>
  import Headern from './components/HeaderComp.vue'
  import Search from './components/SearchField.vue'
  import Navbar from './components/NavBar.vue'
  import Footern from './components/FooterComp.vue'

  export default {
    components: {
      Headern,
      Search,
      Navbar,
      Footern
    }
  }
</script>

<template>
  <div id="wrapper">
    <Headern />
    <Navbar />
    <Search />
    <main>
      <RouterView />
    </main>
    <Footern />
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  body {
    background-image: linear-gradient(#9857c2, #4361ee, #9857c2);
  }
  #wrapper {
    margin: 0 auto;
    font-family: 'Inter', sans-serif;
  }
  li a {
    color: white;
  }
</style>
