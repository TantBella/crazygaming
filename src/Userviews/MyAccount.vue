<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    methods: {
      myPage() {
        this.$router.push('/myaccount')
      },
      homePage() {
        this.$router.push('/')
      }
    }
  }
</script>

<template>
  <div>
    <h1>
      Welcome {{ this.$store.state.registeredUser.firstname }}
      {{ this.$store.state.registeredUser.lastname }}!
    </h1>

    <div>
      <RouterLink to="/favorites"> My Wishlist </RouterLink>
    </div>
    <div>
      <RouterLink to="/Purchases"> My Purchases </RouterLink>
    </div>
    <div>
      <RouterLink to="/Trackorder"> Track My Order </RouterLink>
    </div>
    <div>
      <RouterLink to="/Memberdiscount"> My Discounts </RouterLink>
    </div>
    <div>
      <b-button class="deleteBtn" @click="show = !show"
        >Delete account</b-button
      >
      <b-modal
        @ok="homePage()"
        @cancel="myPage()"
        ok-title="Confirm"
        v-model="show"
        >Are you sure you want to leave us? :[
      </b-modal>
    </div>
    <div>
      <RouterLink to="/Logout"> Log Out </RouterLink>
    </div>
  </div>
</template>

<style>
  a {
    color: white;
  }
  .deleteBtn {
    background-color: #550001;
  }
  .deleteBtn:hover {
    background-color: rgba(69, 1, 1, 0.5);
  }
</style>
