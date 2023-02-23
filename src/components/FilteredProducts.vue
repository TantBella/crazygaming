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
    <router-link
      v-for="game in filteredProducts"
      :key="game.id"
      :to="`/product/${game.id}`"
    >
      <img :src="game.image" :alt="game.name" />
    </router-link>
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
