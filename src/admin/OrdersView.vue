<script>
  import axios from 'axios'

  export default {
    created() {
      axios.get('/products.json').then((result) => {
        this.products = result.data.products
      })
    },
    data() {
      return { products: null }
    }
  }
</script>

<template>
  <h1>Orders</h1>
  <div v-if="products !== null" class="cOrders">
    <div class="express">
      <h2>Express delivery</h2>
      <div class="order">
        <p class="orderDate">
          Order made 23-03-16 (In progress
          <img src="/assets/x.png" alt="X icon" /> )
        </p>
        <p>1. {{ products[2].name }}</p>
        <p>2. {{ products[13].name }}</p>
        <p>3. {{ products[26].name }}</p>
      </div>
      <div class="order">
        <p class="orderDate">
          Order made 23-03-13 (Sent
          <img src="/assets/check.png" alt="Check mark" /> )
        </p>
        <p>1. {{ products[37].name }}</p>
        <p>2. {{ products[32].name }}</p>
        <p>3. {{ products[12].name }}</p>
      </div>
    </div>
    <div class="other">
      <h2>Other orders</h2>
      <div class="order">
        <p class="orderDate">
          Order made 23-03-15 (In progress
          <img src="/assets/x.png" alt="X icon" /> )
        </p>
        <p>1. {{ products[50].name }}</p>
        <p>2. {{ products[6].name }}</p>
        <p>3. {{ products[17].name }}</p>
        <p>4. {{ products[24].name }}</p>
      </div>
      <div class="order">
        <p class="orderDate">
          Order made 23-03-15 (In progress
          <img src="/assets/x.png" alt="X icon" /> )
        </p>
        <p>1. {{ products[49].name }}</p>
        <p>2. {{ products[9].name }}</p>
        <p>3. {{ products[28].name }}</p>
        <p>4. {{ products[24].name }}</p>
      </div>
      <div class="order">
        <p class="orderDate">
          Order made 23-03-14 (In progress
          <img src="/assets/x.png" alt="X icon" /> )
        </p>
        <p>1. {{ products[33].name }}</p>
        <p>2. {{ products[11].name }}</p>
        <p>3. {{ products[43].name }}</p>
        <p>4. {{ products[5].name }}</p>
      </div>
      <div class="order other">
        <p class="orderDate">
          Order made 23-03-13 (Sent
          <img src="/assets/check.png" alt="Check mark" /> )
        </p>
        <p>1. {{ products[38].name }}</p>
        <p>2. {{ products[46].name }}</p>
        <p>3. {{ products[21].name }}</p>
        <p>4. {{ products[5].name }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .cOrders {
    display: grid;
    justify-content: center;
  }
  .order {
    color: #000;
    background-color: #fff;
    width: 325px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  .other {
    margin-top: 20px;
  }
  p {
    margin: 0;
  }
  .orderDate {
    font-weight: bold;
  }
  @media (min-width: 700px) {
    .cOrders {
      display: flex;
      justify-content: center;
      align-content: space-around;
    }
    .express {
      margin-right: 30px;
    }
    .other {
      margin-top: 0;
    }
  }
</style>
