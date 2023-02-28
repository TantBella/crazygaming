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
        currentSection: 'cart'
      }
    },
    methods: {
      setCurrentSection(section) {
        this.currentSection = section
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
</style>
