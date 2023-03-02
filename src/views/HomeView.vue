<script>
  import NewsCarousel from '../products/NewsCarousel.vue'
  import NewsletterPopup from '../components/NewsletterPopup.vue'
  import axios from 'axios'

  export default {
    components: {
      NewsCarousel,
      NewsletterPopup
    },

    created() {
      axios.get('/products.json').then((result) => {
        this.products = result.data.products
      })
    },
    computed: {
      xboxProducts() {
        if (this.products === null) {
          return []
        }
        return this.products.filter((brands) => brands.brand === 'Xbox')
      },
      playstationProduct() {
        return this.products.filter((brands) => brands.brand === 'Playstation')
      }
    },
    data() {
      return {
        products: []
      }
    }
  }
</script>

<template>
  <NewsCarousel />
  <NewsletterPopup />
  <div class="homepage">
    <h1>TOP BRANDS</h1>
    <div class="topbrands">
      <h2>Xbox</h2>
      <h3>
        <RouterLink to="/products/Xbox">Visa alla</RouterLink>
      </h3>
      <div class="links">
        <router-link
          v-for="game in xboxProducts"
          :key="game.id"
          :to="`/product/${game.id}`"
        >
          <img :src="game.image" :alt="game.name" />
        </router-link>
      </div>
      <h2>Playstation 5</h2>
      <h3>
        <RouterLink to="/products/Playstation">Visa alla</RouterLink>
      </h3>
      <div class="links">
        <router-link
          v-for="game in playstationProduct"
          :key="game.id"
          :to="`/product/${game.id}`"
        >
          <img :src="game.image" :alt="game.name" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .topbrands {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100px;
    padding: 10px;
  }

  h1 {
    text-align: center;
    color: #fff;
    margin-bottom: 10px;
  }
  .links {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    /* width: 29vw; */
    color: white;
    font-size: small;
    text-decoration: none;
  }

  .links:hover {
    text-decoration: underline;
  }

  h2 {
    color: white;
    font-size: large;
  }

  h3 {
    margin: 5px;
    text-align: end;
    padding: 7px;
    font-size: small;
  }
  a {
    color: #fff;
  }

  .homepage {
    background-color: #d9d9d93b;
    margin: 20px auto;
    padding: 10px;
  }

  @media (min-width: 560px) {
    img {
      width: 150px;
      padding: 5px 10px 15px 10px;
    }

    h2 {
      margin-bottom: 0;
      margin-top: 10px;
      padding: 10px 10px 0 10px;
    }

    h3 {
      margin-top: 0;
      padding-top: 0;
    }

    .links {
      overflow: hidden;
    }
  }
</style>
