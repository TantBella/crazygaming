<!-- <script>
  import GetProducts from './GetProducts.vue'

  export default {
    computed: {
      get() {
        return this.$store.state.products
      }
    },

    // data() {
    //   return {
    //     products: null
    //   }
    // },

    components: {
      GetProducts
    }
  }
</script>

<template>
  <GetProducts />
  <div class="showprod">
    <div v-for="product in products" :key="product">
      <ul>
        <li>
          {{ product.name }}
        </li>
      </ul>
    </div>
  </div>
</template> -->

<script>
  import axios from 'axios'

  export default {
    computed: {
      products: {
        get() {
          // return this.$store.state.products
          return this.limit
            ? this.$store.state.products.slice(0, this.limit)
            : this.$store.state.products
        }
        // set(value) {
        //   this.$store.commit('increment', value)
        // }
      }
    },

    data() {
      return {
        limit: 5
      }
    },

    created() {
      axios.get('/products.json').then((result) => {
        this.products = result.data.products
        console.log('Spel som finns')
      })
    },

    methods: {
      increment(e) {
        this.$store.commit('increment', e.target.value)
      }
    }
  }
</script>

<template>
  <div class="container">
    <h1>Products and Categories</h1>
    <ul v-for="product in products" :key="product">
      <li class="item">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>
