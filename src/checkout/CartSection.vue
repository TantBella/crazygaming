<template>
  <div v-for="(product, index) in this.$store.state.products" :key="product.id">
    <div class="productBox">
      <div>
        <img :src="product.image" :alt="product.name" />
      </div>
      <div class="productInfo">
        <h3>{{ product.name }}</h3>
        <h3>
          <p class="productPrice">{{ product.price }} €</p>
          <p class="productPrice">{{ product.quantity }}</p>
        </h3>
        <button @click="increaseButton(index)">Increse</button>
        <button @click="decreaseButton(index)">Decrese</button>
        <img
          src="/assets/trash-icon.png"
          id="removeButton"
          @click="deleteButton(index)"
        />
      </div>
    </div>
  </div>
  <p v-if="productCount > 0">Total price: {{ getTotalPrice() }} €</p>
  <p v-if="productCount < 1">You have no items in your shopping cart.</p>
  <button id="continueButton" @click="closeCart">Continue Shopping</button>
</template>

<script>
  export default {
    computed: {
      productsInCart() {
        return this.$store.state.products
      },
      cartIsOpen() {
        return this.$store.state.cartIsOpen
      },
      productCount() {
        return Object.keys(this.$store.state.products).length
      }
    },

    methods: {
      closeCart() {
        this.$store.commit('closeCart')
      },
      deleteButton(index) {
        this.$store.commit('deleteProduct', index)
      },
      decreaseButton(index) {
        this.$store.commit('decreaseProduct', index)
      },
      increaseButton(index) {
        this.$store.commit('increaseProduct', index)
      },
      getTotalPrice() {
        let total = 0
        const products = this.$store.state.products
        for (const productId in products) {
          const product = products[productId]
          const productQuantity = product.quantity
          total += product.price * productQuantity
          console.log(product.quantity)
        }

        return total
      }
    }
  }
</script>

<style lang="scss" scoped>
  img {
    max-width: 500px;
    padding-right: 1rem;
  }

  .productPrice {
    text-align: right;
    margin: 0;
    color: #000;
  }
  .productInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .productBox {
    background-color: #fffdfa;
    border-radius: 9px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  p {
    color: #fffdfa;
  }
  h2 {
    font-weight: normal;
    color: #fffdfa;
    text-transform: uppercase;
  }

  #continueButton {
    background-color: #3a0ca3;
    color: #fffdfa;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    padding: 10px 20px;
    text-transform: uppercase;
    border: none;
    width: 100%;
    border-radius: 30px;
    font-weight: bold;
  }
  #continueButton:hover {
    cursor: pointer;
  }
</style>
