<!-- referenser/inspiration -->
<!-- 1.https://vuelidate-next.netlify.app/validators.html#macaddress
2.https://vuelidate-next.netlify.app/
3.https://www.youtube.com/watch?v=2BR6Vvjw3wQ&t=15s
4.https://router.vuejs.org/guide/essentials/navigation.html -->

<script>
  import useVuelidate from '@vuelidate/core'
  import { required, email, sameAs } from '@vuelidate/validators'
  import Confirmation from '../views/ConfirmationView.vue'

  export default {
    components() {
      Confirmation
    },
    data() {
      return {
        v$: useVuelidate(),
        firstname: '',
        lastname: '',
        email: '',
        message: '',
        check: false,
        errors: false
      }
    },
    methods: {
      formcheck() {
        this.v$.$validate()
        console.log(this.v$)
        console.log(this.firstname)
        if (!this.v$.$error) {
          this.errors = false
          this.$router.push({ path: '/confirmation' })
        } else {
          this.errors = true
        }
      }
    },
    validations() {
      return {
        firstname: { required },
        lastname: { required },
        email: { required, email },
        message: { required },
        check: { required, sameAS: sameAs(true) }
      }
    }
  }
</script>

<template>
  <div>
    <p class="question">
      Do you have any questions? Don't hesitate to call us, or send us a email
      down below!
    </p>
  </div>

  <form>
    <h2>Send us a email!</h2>
    <p>
      <label for="first-name"> Your firstname:</label>
      <input v-model="firstname" name="first-name" />
      <span id="inline-errors" v-if="v$.firstname.$error"
        >Firstname required.</span
      >
    </p>
    <p>
      <label for="last-name"> Your lastname:</label>
      <input v-model="lastname" name="last-name" />
      <span id="inline-errors" v-if="v$.lastname.$error"
        >Lastname required.</span
      >
    </p>
    <p>
      <label for="email"> Your emailadress:</label>
      <input v-model="email" name="email" />
      <span id="inline-errors" v-if="v$.email.$error">Email required.</span>
    </p>
    <p>
      <label for="message"> Your message:</label>
      <textarea
        v-model="message"
        name="message"
        id="message"
        placeholder="Describe your problems or ask us about anything!"
        cols="30"
        rows="10"
      />
    </p>
    <span id="inline-errors" v-if="v$.message.$error">Message required</span>
    <p>
      <label for="check">
        I understand that Crazy Gaming only uses my emailadress for contact
        purposes only</label
      >
      <input v-model="check" id="check" type="checkbox" />
      <span id="inline-errors" v-if="v$.check.$error"
        >Please check the checkbox</span
      >
    </p>
    <button @click.prevent="formcheck">Send</button>

    <div class="errors" v-show="errors">
      <h3>
        Oh no! Looks like you missed a few steps in the form, please correct the
        mistakes.
      </h3>
      <ul>
        <li v-if="v$.firstname.$error">Please fill out your firstname</li>
        <li v-if="v$.lastname.$error">Please fill out your lastname</li>
        <li v-if="v$.email.$error">Please fill out your emailadress</li>
        <li v-if="v$.message.$error">You need to write a message for us!</li>
        <li v-if="v$.check.$error">Please check the checkbox</li>
      </ul>
    </div>
  </form>
  <div>
    <h2>Call us!</h2>
    <p>
      Feel more like talking? you can call us on: <u>070 000 000.</u> Monday to
      Friday from 08am to 14pm
    </p>
  </div>
</template>

<!-- v-on submit på knappen -->

<!-- en ny sida dyker upp -->
<!-- nya sidan innehåller en knapp som går tillbaka till hemsidan -->

<style lang="scss" scoped>
  form {
    margin: 10px;
    color: white;
    box-sizing: border-box;
  }
  #inline-errors {
    text-decoration: underline;
    color: rgb(112, 13, 13);
    font-weight: bold;
  }
  .errors {
    display: block;
    color: rgb(112, 13, 13);
    background-color: rgb(252, 245, 245);
    width: 450px;
    border: 2px solid rgb(112, 13, 13);
    margin: 10px;
    padding: 10px;
  }
  .errors li {
    list-style-type: disc;
    text-decoration: underline;
    font-weight: bolder;
  }
  .errors h3 {
    text-decoration: none;
    font-size: 20px;
  }
  .question,
  h1,
  div {
    color: white;
    margin: 10px;
    white-space: break-spaces;
  }
  input,
  textarea {
    border-radius: 5px;
    background-color: rgba(50, 50, 93, 0.25);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px;
    font-size: 16px;
    color: white;
    border: none;
    font-family: inherit;
    font-size: inherit;
    margin: 10px;
  }
  textarea {
    height: 100px;
    width: 300px;
  }
  button {
    background-color: rgb(50, 50, 93);
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px;
    border: none;
    color: white;
    padding: 5px;
  }
  button:hover {
    background-color: rgb(102, 102, 153);
  }
  a {
    text-decoration: none;
    color: white;
  }

  @media (min-width: 400px) {
    form,
    p,
    .question,
    div,
    h1 {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin: 10px;
    }
    input,
    textarea {
      display: inline-block;
    }
    textarea {
      width: 400px;
    }
    button,
    h1 {
      margin-bottom: 30px;
    }
  }
</style>
