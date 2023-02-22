<script>
  import useVuelidate from '@vuelidate/core'
  import { required, email } from '@vuelidate/validators'

  export default {
    setup() {
      return { v$: useVuelidate() }
    },
    data() {
      return {
        firstname: '',
        lastname: '',
        email: '',
        message: '',
        check: true,
        error: ''
      }
    },
    methods: {
      formcheck() {
        console.log(this.firstname)
      }
    },
    validations() {
      return {
        firstname: { required },
        lastname: { required },
        email: { required, email },
        message: { required },
        check: true
      }
    }
  }
</script>

<template>
  <p class="question">
    Do you have any questions? Don't hesitate to call us, or send us a email
    down below!
  </p>
  <form @submit="validations">
    <p>
      <label for="first-name"> Your firstname:</label>
      <input v-model="firstname" name="first-name" />
    </p>
    <p>
      <label for="last-name"> Your lastname:</label>
      <input v-model="lastname" name="last-name" />
    </p>
    <p>
      <label for="email"> Your emailadress:</label>
      <input v-model="email" name="email" />
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
    <p>
      <label for="check">
        I understand that Crazy Gaming only uses my emailadress for contact
        purposes only</label
      >
      <input v-model="check" name="check" type="checkbox" />
    </p>
    <button type="submit">Send</button>
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
