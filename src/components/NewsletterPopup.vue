<template>
  <div class="newsletter-popup" v-show="showPopup">
    <div class="newsletter-popup-content">
      <span class="close-btn" @click="hidePopup">&times;</span>
      <img id="logo" src="/assets/Logo.png" alt="Crazy Gaming logo." />
      <h2>Subscribe to our Newsletter to get 10% off your next purchase!</h2>
      <form action="#" method="post">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email@Crazygaming.com"
          required
        />
        <input type="submit" value="Subscribe" />
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showPopup: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.showPopup = true
      }, 60000)
    },
    methods: {
      hidePopup() {
        this.showPopup = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  $base-font-size: 16px;

  .newsletter-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .newsletter-popup-content {
    background-image: linear-gradient(#9857c2, #4361ee, #9857c2);
    padding: 1.25rem;
    border-radius: 0.3rem;
    position: relative;
    max-width: 500px;
  }

  .close-btn {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: #fffdfa;
  }
  #logo {
    display: flex;
    margin: 0 auto;
  }
  h2 {
    margin-top: 0.5rem;
    font-size: 1rem;
    text-align: center;
    color: #fffdfa;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.25rem;
  }

  input[type='email'] {
    padding: 0.6rem;
    border-radius: 0.3rem;
    border: 0.0625rem solid #fffdfa;
    margin-bottom: 0.6rem;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
  }

  input[type='submit'] {
    background-color: #3a0ca3;
    color: white;
    border: none;
    border-radius: 0.3rem;
    padding: 0.6rem;
    cursor: pointer;
  }

  input[type='submit']:hover {
    background-color: #4361ee;
    border: #fffdfa;
    border-color: #fffdfa;
  }

  @media (max-width: 599px) {
    .newsletter-popup-content {
      width: 95vw;
    }
  }
</style>
