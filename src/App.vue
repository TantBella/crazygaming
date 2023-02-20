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
  <Headern />
  <Navbar />
  <Search />
  <main>
    <RouterView />
  </main>
  <Footern />
</template>
