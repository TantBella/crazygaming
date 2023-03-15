<template>
  <div id="cartSection">
    <h2>Customer Cart</h2>
    <p id="emptyCart" v-if="productCount < 1">Cart is empty</p>
    <div v-for="product in this.$store.state.products" :key="product.id">
      <div class="productBox">
        <img :src="product.image" :alt="product.name" />
        <p class="productPrice">{{ product.quantity }}</p>
        <h3>{{ product.name }}</h3>

        <p class="productPrice" v-if="product.sale_price">
          <span class="sale">{{ product.sale_price * product.quantity }}€</span>
          <span class="line">{{ product.price * product.quantity }}€</span>
        </p>
        <p class="productPrice" v-else>
          {{ product.price * product.quantity }}€
        </p>
      </div>
    </div>
    <p id="totalPrice" v-if="productCount > 0">
      Total price: {{ getTotalPrice() }} €
    </p>
  </div>
</template>

<script>
  export default {
    computed: {
      productsInCart() {
        return this.$store.state.products
      },

      productCount() {
        return Object.keys(this.$store.state.products).length
      }
    },

    methods: {
      getTotalPrice() {
        let total = 0
        const products = this.$store.state.products
        for (const productId in products) {
          const product = products[productId]
          const productQuantity = product.quantity
          if (product.sale_price) {
            total += product.sale_price * productQuantity
          } else {
            total += product.price * productQuantity
          }
        }

        return total
      }
    }
  }
</script>

<style lang="scss" scoped>
  #cartSection {
    width: 75vw;
    max-width: 1000px;
    margin: 0 auto;

    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: #000;
  }
  .productBox {
    background-color: #fff;
    border-radius: 9px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    min-width: 400px;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 0.8rem;
    margin-top: 0.8rem;
  }

  .productPrice {
    text-align: right;
    margin: 0;
  }
  #productPrice {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  img {
    max-width: 60px;
  }

  h2 {
    font-weight: normal;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
  }
  h3 {
    font-size: 1rem;
    padding: 1.5rem;
    text-align: center;
  }
  #totalPrice {
    text-align: center;
    max-width: 75vw;
    margin: 0 auto;
    margin-top: 0.5rem;
    color: #fff;
  }
  #emptyCart {
    color: #fff;
    text-align: center;
  }
  @media (max-width: 599px) {
    #cartSection {
      width: 95vw;
    }

    .productPrice {
      text-align: center;
    }
  }
</style>
