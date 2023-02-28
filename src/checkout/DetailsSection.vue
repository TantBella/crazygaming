<template>
  <div>
    <button @click="nextSection('shipping')">Next</button>
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
