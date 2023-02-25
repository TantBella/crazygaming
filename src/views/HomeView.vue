<script>
  import NewsCarousel from '../products/NewsCarousel.vue'
  import ProductPage from '../products/ProductPage.vue'

  export default {
    components: {
      NewsCarousel,
      ProductPage
    },
    data() {
      return {}
    }
  }
</script>

<template>
  <ProductPage />
  <NewsCarousel />
  <h1>Hem</h1>

  <!-- display top products in categoriers -->
  <div class="topcontainer">
    <div class="row">
      <h2 class="topprod">Top produkter</h2>
      {{}}
    </div>
  </div>
</template>
