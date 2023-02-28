<template>
  <div>
    <button class="btn" @click="nextSection('details')">Next</button>
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

<style lang="scss" scoped>
  .btn {
    background-color: #3a0ca3;
    color: #fffdfa;
    margin: 0 auto;
    display: flex;
  }
  .btn:hover {
    background-color: #3a0ca395;
    border-color: #fffdfa;
  }
</style>
