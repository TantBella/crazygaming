<template>
  <div class="delete">
    <b-button class="deleteBtn" @click="show = !show">Delete account</b-button>
    <b-modal
      @ok="homePage()"
      @cancel="myPage()"
      ok-title="Confirm"
      v-model="show"
      >Are you sure you want to leave us? :[
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    methods: {
      myPage() {
        this.$router.push('/settings')
      },
      homePage() {
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .delete {
    margin: 10px auto;
  }
  .deleteBtn {
    background-color: #550001;
  }
  .deleteBtn:hover {
    background-color: rgba(69, 1, 1, 0.5);
  }
</style>
