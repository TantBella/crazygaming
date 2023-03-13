<script>
  import useVuelidate from '@vuelidate/core'
  import { required } from '@vuelidate/validators'

  export default {
    data() {
      return {
        v$: useVuelidate(),
        login: {
          username: '',
          password: ''
        }
      }
    },
    validations() {
      return {
        login: {
          username: { required },
          password: { required }
        }
      }
    },
    methods: {
      Login() {
        this.v$.$validate()
        if (!this.v$.$error && this.login.username !== 'Admin') {
          this.$router.push({ path: '/my-pages' })
        } else if (this.login.username === 'Admin') {
          this.$router.push({ path: '/admin' })
        }
      }
    }
  }
</script>

<template>
  <div>
    <h2>Log in</h2>
    <form>
      <p>
        <label for="username">Username</label>
        <input type="text" v-model="login.username" id="username" />
        <span v-if="v$.login.username.$error">Username required</span>
      </p>
      <p>
        <label for="password">Password</label>
        <input type="password" v-model="login.password" />
        <span v-if="v$.login.password.$error">Password required</span>
      </p>
      <button @click.prevent="Login">Login</button>
    </form>
  </div>
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
    width: 300px;
    background-color: rgba(50, 50, 93, 0.25);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px;
    font-size: 16px;
    border: none;
    font-size: inherit;
    margin: 10px;
  }
  form,
  label,
  p {
    margin: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
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
  @media (min-width: 375px) and (max-width: 500px) {
    form,
    p,
    h2 {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      align-items: normal;
    }
    input {
      display: inline-block;
      width: 400px;
    }
    button,
    h2 {
      margin: 15px;
    }
  }
</style>
