<script>
  import axios from 'axios'
  import StockPopup from './StockPopup.vue'

  export default {
    components: {
      StockPopup
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
  <h1>Products in stock:</h1>
  <StockPopup />
  <div class="adminstock">
    <div v-for="product in products" :key="product.id">
      <router-link :to="`/product/${product.id}`">
        <img :src="product.image" :alt="product.name" />
      </router-link>
      <p
        v-if="product.items_available < 10"
        style="color: red; background-color: white"
      >
        {{
          product.items_available +
          ' items in stock. Restock as soon as possible!'
        }}
      </p>
      <p v-else style="background-color: white; color: black">
        {{ product.items_available + ' items in stock.' }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    margin: 25px;
    text-decoration: underline;
  }
  .adminstock {
    margin-left: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 5px;
  }
  p {
    font-size: small;
    margin: 2px 15px 10px 10px;
    padding: 0;
  }

  @media (min-width: 600px) {
    img {
      width: 200px;
      height: 200px;
      object-fit: contain;
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 20px;
      width: 48%;
      text-align: center;
    }

    .adminstock {
      margin: 10px auto 10px 50px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      overflow: scroll;
    }
  }
</style>
