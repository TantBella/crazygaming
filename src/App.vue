<script>
  import Header from './components/HeaDer.vue'
  import Search from './components/SearchField.vue'
  import Navbar from './components/NavBar.vue'

  export default {
    components: {
      Header,
      Search,
      Navbar
    }
  }
</script>

<template>
  <Header />
  <Navbar />
  <Search />
  <main>
    <RouterView />
  </main>
</template>
