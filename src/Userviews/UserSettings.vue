<script>
  import DeleteAccount from './DeleteAccount.vue'
  import useVuelidate from '@vuelidate/core'
  import { required, email, sameAs } from '@vuelidate/validators'

  export default {
    components: {
      DeleteAccount
    },

    data() {
      return {
        unSubscribe: false,
        v$: useVuelidate(),
        firstname: '',
        lastname: '',
        address: '',
        email: '',
        password: {
          old: '',
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
        address: { required },
        password: {
          old: { required },
          new: { required },
          same: { required, sameAs: sameAs(this.password.new) }
        }
      }
    },
    methods: {
      saveChanges() {
        this.v$.$validate()
        if (!this.v$.$error) {
          this.$store.commit('registerUser', {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email
          })
          alert(' Your new settings have been saved :]')
          console.log(this.$store.state.registeredUser)
          this.$router.push({ path: '/my-pages' })
        }
      }
    }
  }
</script>

<template>
  <h1>Change your settings</h1>

  <form>
    <div class="form">
      <div>
        <p>
          <label for="firstname">Firstname:</label>
          <input id="firstname" v-model="firstname" />
        </p>
      </div>
      <div>
        <p>
          <label for="lastname">Lastname:</label>
          <input id="lastname" v-model="lastname" />
        </p>
      </div>
      <div>
        <p>
          <label for="email">Email:</label>
          <input id="email" v-model="email" />
        </p>
      </div>
      <div>
        <p>
          <label for="address">Address:</label>
          <input id="address" v-model="address" />
        </p>
      </div>
      <div>
        <p>
          <label for="old-password">Old password:</label>
          <input type="password" id="old-password" v-model="password.old" />
          <span id="inline-errors" v-if="v$.password.old.$error"
            >Password required</span
          >
        </p>
      </div>
      <div>
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
      </div>
      <div class="unsubscribe">
        <h5>Unsubscribe from Newsletter</h5>
        <label v-if="unSubscribe === false">
          <p>Are you sure?</p>
          <input type="checkbox" v-model="unSubscribe" />
        </label>
        <label v-else>Click again to subscribe</label>
        <p v-if="unSubscribe !== false">
          You have successfuly unsubscribed and will no longer receive any
          emails from us.
        </p>
      </div>
    </div>
    <div>
      <button @click.prevent="saveChanges">Save settings</button>
    </div>
  </form>
  <div class="test"><DeleteAccount /></div>
</template>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  input[type='checkbox'] {
    height: 16px;
    width: 16px;
  }

  label {
    margin-right: 5px;
  }

  .unsubscribe {
    margin-top: 20px;
  }

  form {
    margin: 10px;
    color: white;
  }

  #inline-errors {
    text-decoration: underline;
    color: rgb(112, 13, 13);
    font-weight: bold;
  }

  p,
  div,
  button,
  h2 {
    text-align: center;
  }

  h2 {
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
    margin: 10px;
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
    padding: 0 10%;
  }
  form,
  p,
  h1 {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 10px;
  }

  button,
  h1 {
    margin-bottom: 30px;
  }
  .test {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 600px) {
    .form {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    input {
      width: 60%;
    }
  }
</style>
