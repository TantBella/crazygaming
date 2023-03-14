<template>
  <div id="upbtn">
    <button @click="moveUp">
      <img src="/assets/upward_arrow.png" alt="buttonpng" border="0" />
    </button>
  </div>
</template>

<script>
  // funktion som skickar en högst upp på sidan?
  export default {
    methods: {
      moveUp() {
        scrollTo(0, 0)
      }
    }
  }
</script>

<style lang="scss" scoped>
  img {
    width: 25px;
  }
  button {
    background-color: #d9d9d931;
    border: solid 3px rgb(88, 86, 86);
    border-radius: 20px;
    bottom: 65px;
    right: 50px;
    padding: 3px;
    position: fixed;
  }
</style>
