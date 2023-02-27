<script>
  import useVuelidate from '@vuelidate/core'
  import { required, email } from '@vuelidate/validators'

  export default {
    data() {
      return {
        v$: useVuelidate(),
        login: {
          email: '',
          password: ''
        }
      }
    },
    validations() {
      return {
        login: {
          email: { required, email },
          password: { required }
        }
      }
    },
    methods: {
      Login() {
        this.v$.$validate()
        if (!this.v$.$error) {
          alert('Right')
        } else alert('Wrong')
      }
    }
  }
</script>

<template>
  <h2>Log in</h2>
  <form>
    <p>
      <label for="email">Email</label>
      <input type="text" v-model="login.email" id="email" />
      <span v-if="v$.login.email.$error">Email required</span>
    </p>
    <p>
      <label for="password">Password</label>
      <input type="password" v-model="login.password" />
      <span v-if="v$.login.password.$error">Password required</span>
    </p>
    <button @click.prevent="Login">Login</button>
  </form>
</template>

<style scoped>
  * {
    color: white;
    max-width: 100%;
  }
  h2 {
    margin: 20px;
    text-decoration: underline;
  }
  span {
    text-decoration: underline;
    color: rgb(112, 13, 13);
    font-weight: bold;
  }
  input {
    border-radius: 5px;
    background-color: rgba(50, 50, 93, 0.25);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px;
    font-size: 16px;
    border: none;
    font-size: inherit;
    margin: 10px;
  }
  form {
    margin: 10px;
    box-sizing: border-box;
  }
  button {
    background-color: rgb(50, 50, 93);
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px;
    border: none;
    padding: 5px;
    width: 55px;
  }
  button:hover {
    background-color: rgb(102, 102, 153);
  }
  @media (min-width: 400px) {
    form,
    p,
    h2 {
      display: flex;
      flex-direction: column;
      align-items: left;
      margin-left: 30px;
    }
    input {
      display: inline-block;
      width: 400px;
    }
    button,
    h2 {
      margin-bottom: 30px;
    }
  }
</style>
