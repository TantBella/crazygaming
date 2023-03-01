<template>
  <div>
    <button @click="nextSection('shipping')">Next</button>
  </div>
</template>

<script>
  export default {
    emits: ['next-section'],
    methods: {
      nextSection(section) {
        this.$emit('next-section', section)
      }
    }
  }
</script>
