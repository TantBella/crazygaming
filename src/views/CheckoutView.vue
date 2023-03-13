<template>
  <div>
    <div v-if="currentSection === 'cart'">
      <CartSection @next-section="setCurrentSection" />
    </div>
    <div v-else-if="currentSection === 'details'">
      <DetailsSection @next-section="setCurrentSection" />
    </div>
    <div v-else-if="currentSection === 'shipping'">
      <ShippingSection @next-section="setCurrentSection" />
    </div>
    <div v-else-if="currentSection === 'payment'">
      <PaymentSection @next-section="setCurrentSection" />
    </div>
    <div class="buttons">
      <button
        id="leftBtn"
        class="btn"
        v-if="previousSection"
        @click="goToPreviousSection"
      >
        Go back
      </button>
      <button
        id="rightBtn"
        class="btn"
        v-if="nextSection"
        @click="goToNextSection"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
  import CartSection from '../checkout/CartSection.vue'
  import DetailsSection from '../checkout/DetailsSection.vue'
  import ShippingSection from '../checkout/ShippingSection.vue'
  import PaymentSection from '../checkout/PaymentSection.vue'

  export default {
    components: {
      CartSection,
      DetailsSection,
      ShippingSection,
      PaymentSection
    },
    data() {
      return {
        currentSection: 'cart',
        previousSection: null,
        nextSection: 'details'
      }
    },
    methods: {
      setCurrentSection(sectionName) {
        this.previousSection = this.currentSection
        this.currentSection = sectionName
        if (sectionName === 'cart') {
          this.nextSection = 'details'
        } else if (sectionName === 'details') {
          this.nextSection = 'shipping'
        } else if (sectionName === 'shipping') {
          this.nextSection = 'payment'
        } else {
          this.nextSection = null
        }
      },
      goToPreviousSection() {
        const tempSection = this.currentSection
        this.currentSection = this.previousSection
        this.previousSection = tempSection
        if (this.currentSection === 'cart') {
          this.nextSection = 'details'
        } else if (this.currentSection === 'details') {
          this.nextSection = 'shipping'
        } else if (this.currentSection === 'shipping') {
          this.nextSection = 'payment'
        }
      },
      goToNextSection() {
        this.previousSection = this.currentSection
        this.currentSection = this.nextSection
        if (this.currentSection === 'cart') {
          this.nextSection = 'details'
        } else if (this.currentSection === 'details') {
          this.nextSection = 'shipping'
        } else if (this.currentSection === 'shipping') {
          this.nextSection = 'payment'
        } else {
          this.nextSection = null
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #cart-section,
  #details-section,
  #shipping-section,
  #payment-section {
    padding: 20px;
    margin-bottom: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  .buttons {
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }
  .btn {
    background-color: #3a0ca3;
    color: #fffdfa;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    padding: 10px 20px;
    text-transform: uppercase;
    border: none;
    width: 35vw;
    max-width: 450px;
    border-radius: 30px;
    font-weight: bold;
    transition: transform 0.2s ease;
    border: 2px solid transparent;
  }
  #rightBtn {
    margin-left: 0.5rem;
  }
  .btn:hover {
    border: 2px solid #ccc;
  }
  @media (max-width: 399px) {
  }
</style>
