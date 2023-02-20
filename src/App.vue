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
  #wrapper {
    background-color: linear-gradient(0deg, #9857c2, #4361ee 40%, #9857c2);
  }
</style>
