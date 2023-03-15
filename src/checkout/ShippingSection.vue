<template>
  <div id="shippingSection">
    <div>
      <h2>Shipping Options</h2>
      <div class="line" />
    </div>
    <div class="shippingOptions">
      <form @submit.prevent="submitShipping">
        <ul>
          <li
            :class="{ 'shipping-option-selected': isSelected(option) }"
            class="list"
            v-for="option in shippingOptions"
            :key="option.id"
          >
            <input
              type="radio"
              :id="option.id"
              :value="option"
              v-model="selectedOption"
              required
            />
            <label :for="option.id">
              <img :src="option.src" alt="" class="optionImage" />
              <span>{{ option.name }}</span> -
              <span v-if="getTotalPrice <= 75"> {{ option.price }}</span>
              <span v-if="getTotalPrice >= 75">Free shipping!</span>
            </label>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    emits: ['next-section'],
    data() {
      return {
        shippingOptions: [
          {
            id: 'option1',
            name: '  Instabox',
            price: '5 £',
            src: 'assets/instabox.png'
          },
          {
            id: 'option2',
            name: '  Postnord Ombud',
            price: '5 £',
            src: 'assets/postnord.png'
          },
          {
            id: 'option3',
            name: 'Postnord Express',
            price: '10 £',
            src: 'assets/postnord.png'
          },
          {
            id: 'option4',
            name: 'DHL',
            price: '5 £',
            src: 'assets/dhl.png'
          },
          {
            id: 'option5',
            name: 'Email',
            price: 'Free!',
            src: 'assets/email-icon.png'
          }
        ],
        selectedOption: null
      }
    },
    methods: {
      submitShipping() {
        this.$emit('next-section', 'payment')
      }
    },
    computed: {
      isSelected() {
        return (option) => this.selectedOption === option
      },
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

<style scoped>
  #shippingSection {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 75vw;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #3a0ca370;
    border-radius: 25px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .shippingOptions {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .list {
    padding: 0.4rem;
    font-size: 1rem;
  }
  label {
    margin-left: 0.5rem;
  }
  .optionImage {
    width: 60px;
    height: 60px;
    margin-right: 0.5rem;
    border-radius: 10px;
  }
  .shipping-option-selected {
    border: 2px solid #ccc;
    border-radius: 10px;
    width: 100%;
    max-width: 936px;
    padding: 0.25rem;
  }
  ul {
    padding-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  h2 {
    font-weight: normal;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
  }
  .line {
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 1rem 0;
  }
  @media (max-width: 599px) {
    #shippingSection {
      width: 90vw;
    }
    h2 {
      font-size: 1.8rem;
    }
    .list {
      font-size: 0.75rem;
    }
    label {
      margin-left: 0.2rem;
    }
    .optionImage {
      width: 40px;
      height: 40px;
      margin-right: 0.2rem;
      border-radius: 10px;
    }
    .shipping-option-selected {
      padding: 0.25rem;
      width: 100%;
    }
  }
</style>
