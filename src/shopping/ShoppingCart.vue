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

<template>
  <div id="cartBox" :class="{ cart: !cartIsOpen }">
    <div id="cart">
      <div id="cartTop">
        <h2>Your cart</h2>
        <button id="closeButton" @click="closeCart">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.5134 28.2993C29.5931 28.379 29.6563 28.4736 29.6995 28.5778C29.7426 28.682 29.7648 28.7936 29.7648 28.9063C29.7648 29.0191 29.7426 29.1307 29.6995 29.2348C29.6563 29.339 29.5931 29.4336 29.5134 29.5134C29.4336 29.5931 29.339 29.6563 29.2348 29.6995C29.1307 29.7426 29.0191 29.7648 28.9063 29.7648C28.7936 29.7648 28.682 29.7426 28.5778 29.6995C28.4736 29.6563 28.379 29.5931 28.2993 29.5134L18.5001 19.7286L8.70085 29.5134C8.53986 29.6744 8.3215 29.7648 8.09382 29.7648C7.86614 29.7648 7.64779 29.6744 7.48679 29.5134C7.3258 29.3524 7.23535 29.134 7.23535 28.9063C7.23535 28.6786 7.3258 28.4603 7.48679 28.2993L17.2716 18.5001L7.48679 8.70085C7.3258 8.53986 7.23535 8.3215 7.23535 8.09382C7.23535 7.86614 7.3258 7.64779 7.48679 7.48679C7.64779 7.3258 7.86614 7.23535 8.09382 7.23535C8.3215 7.23535 8.53986 7.3258 8.70085 7.48679L18.5001 17.2716L28.2993 7.48679C28.4603 7.3258 28.6786 7.23535 28.9063 7.23535C29.134 7.23535 29.3524 7.3258 29.5134 7.48679C29.6744 7.64779 29.7648 7.86614 29.7648 8.09382C29.7648 8.3215 29.6744 8.53986 29.5134 8.70085L19.7286 18.5001L29.5134 28.2993Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div
        id="shipping"
        v-if="Object.keys(this.$store.state.products).length >= 1"
      >
        <p id="untilText">
          <img
            id="shippingIcon"
            src="/assets/Shipping-icon.png"
            alt="Shipping truck icon"
          />
          {{ 75 - getTotalPrice() }} € left until free shipping
        </p>
      </div>
      <!-- <p>You have {{ this.$store.state.products.length }} items in your cart</p> -->

      <div
        v-for="(product, index) in this.$store.state.products"
        :key="product.id"
      >
        <div class="productBox">
          <div>
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="productInfo">
            <h3>{{ product.name }}</h3>
            <div id="cartBoxBottom">
              <div id="productButtons">
                <button class="creaseButtons" @click="increaseButton(index)">
                  +
                </button>
                <p class="productPrice">{{ product.quantity }}</p>
                <button class="creaseButtons" @click="decreaseButton(index)">
                  -
                </button>
                <img
                  src="/assets/trash-icon.png"
                  id="removeButton"
                  @click="deleteButton(index)"
                />
              </div>
              <p class="productPrice">{{ product.price }} €</p>
            </div>
          </div>
        </div>
      </div>
      <p v-if="productCount > 0">Total price: {{ getTotalPrice() }} €</p>
      <p v-if="productCount < 1">You have no items in your shopping cart.</p>
      <div id="buttons">
        <button v-if="productCount > 0" id="checkoutButton">
          <RouterLink @click="closeCart" to="/checkout">Checkout</RouterLink>
        </button>
        <button id="continueButton" @click="closeCart">
          Continue Shopping
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .cart {
    display: none;
  }
  #closeButton {
    border: none;
    background: none;
    padding: 0;
  }

  img {
    max-width: 100px;
    padding-right: 1rem;
  }

  .productPrice {
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
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  #cartTop {
    display: flex;
    justify-content: space-between;
  }
  #cart {
    padding: 5%;
  }
  #cartBoxBottom {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  #productButtons {
    display: flex;
    align-items: center;
  }
  .creaseButtons {
    border-radius: 16px;
    width: 29px;
    height: 29px;
    border: none;
    margin: 0rem 0.3rem;
  }

  #cartBox {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background-image: linear-gradient(#9857c2, #4361ee 60%);
    overflow-y: scroll;
  }
  #cartBox::-webkit-scrollbar {
    display: none;
  }
  p {
    color: #fffdfa;
  }

  h3 {
    font-size: 15px;
  }

  h2 {
    color: #fffdfa;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  #buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #checkoutButton {
    background-color: #fffdfa;
    color: #000;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    padding: 10px 20px;
    margin-bottom: 10px;
    border: none;
    text-transform: uppercase;
  }

  #continueButton {
    background-color: #3a0ca3;
    color: #fffdfa;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    padding: 10px 20px;
  }
  #checkoutButton,
  #continueButton {
    text-transform: uppercase;
    border: none;
    width: 100%;
    border-radius: 30px;
    font-weight: bold;
  }

  #checkoutButton:hover,
  #continueButton:hover {
    cursor: pointer;
  }
  #removeButton {
    width: 30px;
    cursor: pointer;
  }
  #untilText {
    font-size: 14px;
    height: 17px;
  }
  #shippingIcon {
    width: 14px;
    height: 14px;
    padding: 0;
  }

  @media (min-width: 600px) {
    #cartBox {
      width: 400px;
    }
    #untilText {
      height: 19px;
    }
  }
</style>
