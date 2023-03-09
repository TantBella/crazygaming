<script>
  import useVuelidate from '@vuelidate/core'
  import {
    required,
    email,
    sameAs,
    numeric,
    maxLength,
    minLength
  } from '@vuelidate/validators'

  export default {
    data() {
      return {
        v$: useVuelidate(),
        firstname: '',
        lastname: '',
        email: '',
        adress: '',
        birthday: '',
        id: '',
        password: {
          new: '',
          same: ''
        },
        conditions: false,
        errors: false
      }
    },
    validations() {
      return {
        firstname: { required },
        lastname: { required },
        email: { required, email },
        adress: { required },
        birthday: { required, numeric },
        id: {
          required,
          numeric,
          minLength: minLength(10),
          maxLength: maxLength(12)
        },
        password: {
          new: { required },
          same: { required, sameAs: sameAs(this.password.new) }
        },
        conditions: { required, sameAS: sameAs(true) }
      }
    },
    methods: {
      register() {
        this.v$.$validate()
        if (!this.v$.$error) {
          this.$router.push({ path: '/my-pages' })
        }
      }
    }
  }
</script>

<template>
  <h2>Register new user</h2>
  <form>
    <p>
      <label for="firstname">Firstname:</label>
      <input id="firstname" v-model="firstname" />
      <span id="inline-errors" v-if="v$.firstname.$error"
        >Firstname required</span
      >
    </p>

    <p>
      <label for="lastname">Lastname:</label>
      <input id="lastname" v-model="lastname" />
      <span id="inline-errors" v-if="v$.lastname.$error"
        >Lastname required</span
      >
    </p>

    <p>
      <label for="email">Email:</label>
      <input id="email" v-model="email" />
      <span id="inline-errors" v-if="v$.email.$error">Email required</span>
    </p>

    <p>
      <label for="adress">Adress:</label>
      <input id="adress" v-model="adress" />
      <span id="inline-errors" v-if="v$.adress.$error">Adress required</span>
    </p>
    <p>
      <label for="birthday">Date of birth:</label>
      <input id="birthday" v-model="birthday" />
      <span id="inline-errors" v-if="v$.birthday.$error">{{
        v$.birthday.$errors[0].$message
      }}</span>
    </p>
    <p>
      <label for="new-password">New password:</label>
      <input type="password" id="new-password" v-model="password.new" />
      <span id="inline-errors" v-if="v$.password.new.$error"
        >Password required</span
      >
    </p>
    <p>
      <label for="same-password">Repeat password:</label>
      <input type="password" id="same-password" v-model="password.same" />
      <span id="inline-errors" v-if="v$.password.same.$error">{{
        v$.password.same.$errors[0].$message
      }}</span>
    </p>
    <p>
      <label for="conditions">I accept the terms and conditions:</label>
      <input
        class="check"
        type="checkbox"
        id="conditions"
        v-model="conditions"
      />
      <span id="inline-errors" v-if="v$.conditions.$error"
        >You need to accept the terms and conditions to become a member.</span
      >
    </p>
    <div class="errors" v-show="this.v$.$error">
      <h3>
        Oh no! Looks like you missed a few steps trying to register, please
        correct the mistakes.
      </h3>
      <ul>
        <li v-if="v$.firstname.$error">Firstname required</li>
        <li v-if="v$.lastname.$error">Lastname required</li>
        <li v-if="v$.email.$error">Email required</li>
        <li v-if="v$.adress.$error">Adress required</li>
        <li v-if="v$.birthday.$error">Date of birth required</li>
        <li v-if="v$.password.new.$error">Password required</li>
        <li v-if="v$.password.same.$error">Repeat/same password required</li>
        <li v-if="v$.conditions.$error">
          You need to accept the terms and conditions to become a member.
        </li>
      </ul>
    </div>
    <div>
      <button @click.prevent="register">Register</button>
    </div>
  </form>
</template>

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
  p,
  div,
  button,
  .errors {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h2 {
    text-align: center;
  }
  h2,
  div {
    color: white;
    margin: 10px;
    white-space: break-spaces;
  }
  input {
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
  .check {
    width: 40px;
    height: 25px;
    border-color: white;
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

  @media (min-width: 375px) and (max-width: 500px) {
    form,
    p,
    h1,
    div,
    .errors {
      display: flex;
      flex-direction: column;
      align-items: left;
      margin: 10px;
    }
    .errors {
      width: auto;
    }
    input {
      display: inline-block;
    }
    button,
    h1 {
      margin-bottom: 30px;
    }
  }
</style>
