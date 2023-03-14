<script>
  import useVuelidate from '@vuelidate/core'
  import { required, email } from '@vuelidate/validators'

  export default {
    data() {
      return {
        tabIndex: 0,
        v$: useVuelidate(),
        inputMail: null
      }
    },

    validations() {
      return {
        inputMail: {
          required,
          email
        }
      }
    },

    methods: {
      submitMail() {
        alert("Thanks for Joining! You're in good company.")
      },

      // Nedan är för att brevet ska snurra
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      }
    },

    watch: {
      inputMail(t) {
        console.log(`Användaren har angett denna mail: ${t}, för nyhetsbrev.`)
      }
    }
  }
</script>

<template>
  <div class="mail">
    <h2>Subscribe To Our Newsletter</h2>
    <form action="#" method="post" class="mailinputbtn">
      <input
        @keyup.enter="submitMail()"
        type="email"
        class="email"
        v-model="inputMail"
        name="email"
        placeholder="example@mail.com"
        required
      />
      <button
        @click="($event) => submitMail()"
        type="submit"
        :disabled="!inputMail"
      >
        <img src="/assets/email-icon.png" alt="buttonpng" border="0" />
      </button>
    </form>
    <p>Subscribe to our newsletter to get exclusive offers!</p>
  </div>
</template>

<style lang="scss" scoped>
  .mail {
    padding: 20px;
    margin: 20px auto;
    text-align: center;
  }

  .mailinputbtn {
    display: flex;
    flex-direction: row;
  }

  .email {
    color: #fff;
    text-align: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border: none;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.172) no-repeat 15px center;
    background-size: 15px 15px;
    display: block;
    font-size: 16px;
    padding: 10px 35px;
    width: 300px;
    margin: 10px;
  }

  .mail button {
    border: none;
    cursor: pointer;
    appearance: none;
    background-color: inherit;
    transition: transform 0.7s ease-in-out;
  }

  .mail button:hover {
    transform: rotate(360deg);
  }

  img {
    width: 20px;
    height: 20px;
  }

  p {
    font-size: smaller;
    padding: 10px 10px 3px 10px;
  }

  h2 {
    font-size: medium;
  }

  @media (min-width: 600px) {
    .mail {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
