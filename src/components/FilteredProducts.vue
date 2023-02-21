<script>
  import axios from 'axios'
  export default {
    computed: {
      filteredProducts() {
        if (this.products === null) {
          return []
        }
        return this.products.filter(
          (brands) => brands.brand === this.$route.params.brand
        )
      }
    },
    created() {
      axios.get('/products.json').then((result) => {
        this.products = result.data.products
      })
    },
    data() {
      return {
        products: null
      }
    }
  }
</script>

<template>
  <h1>{{ $route.params.brand }}</h1>
  <div>
    <img
      v-for="game in filteredProducts"
      :key="game.id"
      :src="game.image"
      alt="alt text"
    />
  </div>
</template>

<style scoped>
  div {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-left: 20px;
    margin-right: 20px;
  }

  img {
    max-width: 300px;
    max-height: 300px;
    margin-bottom: 10px;
  }

  h1 {
    text-align: center;
    color: #fff;
  }
</style>
