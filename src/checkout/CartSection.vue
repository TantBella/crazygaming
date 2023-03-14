<template>
  <div id="cartSection">
    <h2>checkout</h2>
    <div class="line" />
    <div
      v-for="(product, index) in this.$store.state.products"
      :key="product.id"
    >
      <div class="productBox">
        <div class="imageBox">
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
            <div id="productPrice">
              <p class="productPrice">{{ product.price }} €</p>
            </div>
          </div>
        </div>
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
  #cartSection {
    width: 75vw;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #3a0ca370;
    border-radius: 25px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: #000;
  }
  .productBox {
    background-color: #fff;
    border-radius: 9px;
    padding: 1rem;
    display: flex;
    text-align: left;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    width: 50vw;
    min-width: 400px;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 0.8rem;
    margin-top: 0.8rem;
    overflow-wrap: break-word;
  }
  .productInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30vw;
    max-width: 250px;
    margin-left: 1.5rem;
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
  #cartBoxBottom {
    display: flex;
    justify-content: space-between;
  }
  img {
    width: 15vw;
    max-width: 100px;
  }
  #removeButton {
    width: 20px;
  }
  #productButtons {
    display: flex;
    align-items: center;
  }
  .creaseButtons {
    border-radius: 30px;
    width: 25px;
    height: 25px;
    border: none;
    margin: 0rem 0.3rem;
  }
  p {
    font-size: 1rem;
  }
  h2 {
    font-weight: normal;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
  }
  h3 {
    text-align: center;
    font-size: 1.2rem;
  }
  #totalPrice {
    text-align: center;
    max-width: 75vw;
    margin: 0 auto;
    margin-top: 0.5rem;
    color: #fff;
  }
  .line {
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 1rem 0;
  }
  @media (max-width: 599px) {
    #cartSection {
      width: 95vw;
    }
    .productBox {
      min-width: 0px;
      width: 70vw;
      max-width: 80vw;
      padding: 0.8rem;
    }
    .productInfo {
      width: 40vw;
      margin: 0.5rem;
    }
    .productPrice {
      text-align: center;
    }
    img {
      width: 20vw;
      max-width: 80px;
    }
    h3 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.8rem;
    }
    #totalPrice {
      max-width: 90vw;
    }
    #removeButton {
      width: 15px;
    }
    .creaseButtons {
      border-radius: 30px;
      width: 20px;
      height: 20px;
      border: none;
      margin: 0rem 0.3rem;
    }
  }
  @media (max-width: 299px) {
    #cartSection {
      padding: 1rem;
    }
    img {
      max-width: 40px;
    }

    p {
      font-size: 0.8rem;
    }
    h3 {
      font-size: 0.8rem;
    }
  }
</style>
