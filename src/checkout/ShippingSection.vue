<template>
  <div id="shipping-section">
    <h2>Shipping Information</h2>
    <form @submit.prevent="submitShipping">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" v-model="phone" required />

      <label for="address">Shipping Address:</label>
      <textarea id="address" v-model="address" required />

      <label>Shipping Options:</label>
      <ul>
        <li v-for="option in shippingOptions" :key="option.id">
          <input
            type="radio"
            :id="option.id"
            :value="option"
            v-model="selectedOption"
          />
          <label :for="option.id">{{ option.name }} - {{ option.price }}</label>
        </li>
      </ul>

      <button type="submit">Next</button>
    </form>
  </div>
</template>

<script>
  export default {
    emits: ['next-section'],
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        address: '',
        shippingOptions: [
          { id: 'option1', name: 'Standard', price: '$5.00' },
          { id: 'option2', name: 'Express', price: '$10.00' }
        ],
        selectedOption: null
      }
    },
    methods: {
      submitShipping() {
        // Validate shipping information
        // ...

        // Notify parent component that shipping information is complete
        this.$emit('next-section', 'payment')
      }
    }
  }
</script>

<style scoped>
  #shipping-section {
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
