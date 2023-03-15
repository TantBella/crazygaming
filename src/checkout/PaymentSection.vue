<template>
  <div id="paymentSection" v-if="!showConfirmation">
    <div>
      <h2>Payment Information</h2>
      <div class="line" />
    </div>
    <div class="paymentOptions">
      <form @submit.prevent="submitPayment">
        <ul>
          <li
            :class="{ 'payment-option-selected': isSelected(option) }"
            class="list"
            v-for="option in paymentOptions"
            :key="option.id"
          >
            <input
              type="radio"
              :id="option.id"
              :value="option"
              v-model="selectedOption"
            />
            <label :for="option.id">
              <img :src="option.src" alt="" class="optionImage" />
              <span>{{ option.name }}</span>
            </label>

            <div
              id="swishPayment"
              v-if="isSelected(option) && option.id === 'option1'"
            >
              <label for="swishNumber">Swish Number:</label>
              <input
                type="number"
                id="swishNumber"
                v-model="swishNumber"
                required
              />
            </div>

            <div
              id="qliroPayment"
              v-if="isSelected(option) && option.id === 'option2'"
            >
              <label for="idNumber">Id Number:</label>
              <input type="number" id="idNumber" v-model="idNumber" required />
            </div>

            <div
              id="cardPayment"
              v-if="isSelected(option) && option.id === 'option3'"
            >
              <label for="cardName">Name:</label>
              <input type="text" id="cardName" v-model="cardName" required />
              <label for="cardNumber">Card Number:</label>
              <input
                type="number"
                id="carNumber"
                v-model="cardNumber"
                required
              />
              <label for="expirationDate">Expiration Date:</label>
              <input
                type="number"
                id="expirationDate"
                v-model="expirationDate"
                required
              />
              <label for="securityCode">Security Code:</label>
              <input
                type="number"
                id="securityCode"
                v-model="securityCode"
                required
              />
            </div>
          </li>
        </ul>
        <button class="paymentButton" @click="submitPayment">
          place order
        </button>
      </form>
    </div>
  </div>
  <div id="confirmationSection" v-if="showConfirmation">
    <div>
      <h2>Purchase Confirmation</h2>
      <div class="line" />
      <p>
        Thank you for your purchase! Your order will be sent to you as soon as
        possible!
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    emits: ['next-section'],
    data() {
      return {
        paymentOptions: [
          {
            id: 'option1',
            name: 'Swish',
            src: 'assets/swish.png'
          },
          {
            id: 'option2',
            name: 'Qliro',
            src: 'assets/qliro.png'
          },
          {
            id: 'option3',
            name: 'Debit card',
            src: 'assets/kort.png'
          }
        ],
        selectedOption: null,
        swishNumber: '',
        idNumber: '',
        cardName: '',
        cardNumber: '',
        expirationDate: '',
        securityCode: '',
        showConfirmation: false
      }
    },
    computed: {
      isFormValid() {
        return (
          this.selectedOption &&
          ((this.selectedOption.id === 'option1' && this.swishNumber) ||
            (this.selectedOption.id === 'option2' && this.idNumber) ||
            (this.selectedOption.id === 'option3' &&
              this.cardName &&
              this.cardNumber &&
              this.expirationDate &&
              this.securityCode))
        )
      }
    },
    methods: {
      isSelected(option) {
        return this.selectedOption && this.selectedOption.id === option.id
      },
      submitPayment() {
        if (this.isFormValid) {
          this.showConfirmation = true
        }
      }
    }
  }
</script>

<style scoped>
  #swishPayment,
  #qliroPayment,
  #cardPayment {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  label {
    margin-top: 0.5rem;
  }
  input {
    border-radius: 10px;
    margin-bottom: 0.5rem;
    max-width: 300px;
  }
  #paymentSection,
  #confirmationSection {
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
  .paymentOptions {
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
  .payment-option-selected {
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
  .paymentButton {
    display: block;
    background-color: #fffdfa;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    padding: 10px 20px;
    text-transform: uppercase;
    border: none;
    width: 35vw;
    margin: 0 auto;
    max-width: 450px;
    border-radius: 30px;
    font-weight: bold;
    margin-top: 0.5rem;
    transition: transform 0.2s ease;
  }
  .paymentButton:hover {
    transform: scale(1.05);
  }
  .line {
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 1rem 0;
  }
  @media (max-width: 599px) {
    #paymentSection {
      width: 90vw;
    }
    h2 {
      font-size: 1.5rem;
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
    .payment-option-selected {
      padding: 0.25rem;
      width: 100%;
    }
  }
</style>
