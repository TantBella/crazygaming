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
  <div class="flex-container">
    <div v-for="game in filteredProducts" :key="game.id">
      <router-link :to="`/product/${game.id}`">
        <img :src="game.image" :alt="game.name" />
      </router-link>
      <p>
        {{ game.name }} <span>{{ game.price }}€</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
  .flex-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  img {
    width: 290px;
    height: 290px;
    margin-bottom: 10px;
    margin-right: 40px;
    margin-bottom: 20px;
  }

  h1 {
    text-align: center;
    color: #fff;
    margin-bottom: 10px;
  }

  p {
    color: #fff;
  }
</style>
