<template>
  <div>
    <button @click="nextSection('payment')">Next</button>
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
