<script>
  export default {
    data() {
      return {
        firstname: '',
        lastname: '',
        email: '',
        message: '',
        check: true
      }
    },
    methods: {
      formcheck(event) {
        event.preventDefault()
        console.log(this.firstname)
      }
    }
  }
</script>

<template>
  <h1>Contact</h1>
  <p class="question">
    Do you have any questions? Don't hesitate to call us, or send us a email
    down below!
  </p>
  <form>
    <p>
      <label for="first-name"> Your firstname:</label>
      <input
        v-model="firstname"
        name="first-name"
        placeholder="Your firstname"
      />
    </p>
    <p>
      <label for="last-name"> Your lastname:</label>
      <input v-model="lastname" name="last-name" placeholder="Your lastname" />
    </p>
    <p>
      <label for="email"> Your emailadress:</label>
      <input v-model="email" name="email" placeholder="Your emailadress" />
    </p>
    <p>
      <label for="message"> Your message:</label>
      <textarea
        v-model="message"
        name="message"
        id="message"
        placeholder="Your message..."
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
    <button @click="formcheck" action="https://example.com" method="post">
      Send
    </button>
  </form>

  <div>
    <h2>Call us!</h2>
    <p>
      Feel more like talkning? you can call us on: <u>070 000 000.</u> Monday to
      Friday from 08am to 14pm
    </p>
  </div>
</template>

<!-- v-on submit på knappen -->

<!-- en ny sida dyker upp -->

<style lang="scss" scoped>
  form {
    margin: 10px;
    color: white;
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
  }
  textarea {
    height: 100px;
    width: 300px;
  }
</style>
