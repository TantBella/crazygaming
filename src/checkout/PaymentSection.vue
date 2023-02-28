<template>
  <div>
    <button @click="nextSection('cart')">Back</button>
  </div>
</template>

<script>
  export default {
    methods: {
      nextSection(section) {
        this.$emit('next-section', section)
      }
    }
  }
</script>
