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
        products: 1,
        openCart: true
      }
    },
    methods: {
      closeCart() {
        this.openCart = false
      }
    }
  }
</script>
<template>
  <div id="cartBox" :class="{ cart: !openCart }">
    <div id="cart">
      <div id="cartTop">
        <h2>Your cart</h2>
        <button @click="closeCart">
          <svg
            width="59"
            height="59"
            viewBox="0 0 59 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.0615 45.1258C47.1886 45.2529 47.2894 45.4038 47.3582 45.5699C47.427 45.736 47.4624 45.914 47.4624 46.0938C47.4624 46.2735 47.427 46.4515 47.3582 46.6176C47.2894 46.7837 47.1886 46.9346 47.0615 47.0617C46.9344 47.1889 46.7835 47.2897 46.6174 47.3585C46.4513 47.4273 46.2733 47.4627 46.0935 47.4627C45.9138 47.4627 45.7357 47.4273 45.5697 47.3585C45.4036 47.2897 45.2527 47.1889 45.1256 47.0617L29.4998 31.459L13.874 47.0617C13.6173 47.3185 13.2691 47.4627 12.906 47.4627C12.543 47.4627 12.1948 47.3185 11.9381 47.0617C11.6813 46.805 11.5371 46.4568 11.5371 46.0938C11.5371 45.7307 11.6813 45.3825 11.9381 45.1258L27.5408 29.5L11.9381 13.8742C11.6813 13.6175 11.5371 13.2693 11.5371 12.9063C11.5371 12.5432 11.6813 12.195 11.9381 11.9383C12.1948 11.6816 12.543 11.5374 12.906 11.5374C13.2691 11.5374 13.6173 11.6816 13.874 11.9383L29.4998 27.541L45.1256 11.9383C45.3823 11.6816 45.7305 11.5374 46.0935 11.5374C46.4566 11.5374 46.8048 11.6816 47.0615 11.9383C47.3182 12.195 47.4624 12.5432 47.4624 12.9063C47.4624 13.2693 47.3182 13.6175 47.0615 13.8742L31.4588 29.5L47.0615 45.1258Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <p>You have 0 items in your cart</p>
      <div class="productBox">
        <div>
          <img :src="products[1].image" class="productPicture" />
        </div>
        <div>
          <h3>{{ products[1].name }}</h3>
          <p>{{ products[1].price }} €</p>
        </div>
      </div>
      <h3>Total Price: {{ products[1].price }} €</h3>
      <button>
        <RouterLink to="/checkout">Coutinue to checkout</RouterLink>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .cart {
    display: none;
  }
  .productPicture {
    width: 6rem;
    padding-right: 1rem;
  }
  .productPrice {
    text-align: right;
  }
  .productBox {
    background-color: rgb(211, 211, 211);
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
  }
  h3 {
    font-size: 15px;
  }
  h2 {
    font-size: 35px;
    font-weight: normal;
  }
  #cartTop {
    display: flex;
    justify-content: space-between;
  }
  #cartBox {
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
  }
  #cart {
    padding: 5%;
  }
  @media (min-width: 600px) {
    #cartBox {
      width: 400px;
    }
  }
</style>
