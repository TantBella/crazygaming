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
    <button v-if="previousSection" @click="goToPreviousSection">Go back</button>
    <button v-if="nextSection" @click="goToNextSection">Next</button>
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
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  .btn {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    background-color: #fff;
    color: #000000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: large;
    width: 7rem;
  }
  .btn:hover {
    transform: scale(1.1);
  }
</style>
