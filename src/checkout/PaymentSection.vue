<template>
  <div id="payment-section">
    <h2>Payment Information</h2>
    <form @submit.prevent="submitPayment">
      <label for="card-number">Card Number:</label>
      <input type="text" id="card-number" v-model="cardNumber" required />

      <label for="expiration-date">Expiration Date:</label>
      <input
        type="text"
        id="expiration-date"
        v-model="expirationDate"
        required
      />

      <label for="security-code">Security Code:</label>
      <input type="text" id="security-code" v-model="securityCode" required />

      <button type="submit">Submit Payment</button>
    </form>

    <div v-if="paymentSuccess">
      Payment successful! Thank you for your order.
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        cardNumber: '',
        expirationDate: '',
        securityCode: '',
        paymentSuccess: false
      }
    },
    methods: {
      submitPayment() {
        // Send payment information to server
        axios
          .post('/api/payment', {
            cardNumber: this.cardNumber,
            expirationDate: this.expirationDate,
            securityCode: this.securityCode
          })
          .then(() => {
            // Payment successful
            this.paymentSuccess = true
            // Update order status or navigate to confirmation page
          })
          .catch((error) => {
            // Payment failed
            console.error(error)
            // Show error message to user
          })
      }
    }
  }
</script>

<style scoped>
  #payment-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #3a0ca370;
    border-radius: 25px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: #fff;
  }
</style>
