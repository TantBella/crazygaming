<template>
  <div class="stockpopup" v-show="poPup">
    <h1>Hi! Remember to restock the following items:</h1>
    <div class="stockcontent" v-for="product in products" :key="product.id">
      <p v-if="product.items_available < 11">
        {{
          product.name +
          ' has only ' +
          product.items_available +
          ' items in stock!'
        }}
      </p>
    </div>
    <input type="button" value="Ok, got it!" @click="closePopup" />
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    created() {
      axios.get('/products.json').then((result) => {
        this.products = result.data.products
      })
    },
    data() {
      return {
        products: null,
        poPup: true
      }
    },
    methods: {
      closePopup() {
        this.poPup = false
      }
    }
  }
</script>
<style lang="scss" scoped>
  h1 {
    color: rgb(169, 9, 9);
  }
  .stockpopup {
    width: 85%;
  }

  @media (min-width: 600px) {
  }
  .stockpopup {
    margin: auto;
    // align-self: center;
    padding: 25px;
    border-radius: 25px;
    overflow: scroll;
    width: 55%;
    background-color: rgba(255, 255, 255, 0.745);
  }
  .stockcontent {
    color: black;
    border-bottom: solid 1px rgba(0, 0, 0, 0.358);
  }

  input {
    border-radius: 10px;
    cursor: pointer;
    color: rgb(169, 9, 9);
    border-radius: 5px;
    background-color: rgba(50, 50, 93, 0.25);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px;
    font-size: 16px;
    margin: 10px;
  }
</style>
