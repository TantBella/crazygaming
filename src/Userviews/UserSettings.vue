<script>
  import useVuelidate from '@vuelidate/core'
  import { required, email, sameAs } from '@vuelidate/validators'

  export default {
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
        // conditions: { required, sameAS: sameAs(true) }
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
    <p>
      <label for="firstname">Firstname:</label>
      <input id="firstname" v-model="firstname" />
    </p>
    <p>
      <label for="lastname">Lastname:</label>
      <input id="lastname" v-model="lastname" />
    </p>

    <p>
      <label for="email">Email:</label>
      <input id="email" v-model="email" />
    </p>
    <p>
      <label for="address">Address:</label>
      <input id="address" v-model="address" />
    </p>
    <p>
      <label for="old-password">Old password:</label>
      <input type="password" id="old-password" v-model="password.old" />
      <span id="inline-errors" v-if="v$.password.old.$error"
        >Password required</span
      >
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

    <div class="unsubscribe">
      <h5>Unsubscribe from Newsletter</h5>
      <label v-if="unSubscribe === false">Are you sure?</label>
      <label v-else>Click again to subscribe</label>
      <input type="checkbox" v-model="unSubscribe" />
      <p v-if="unSubscribe !== false">
        You have successfuly unsubscribed and will no longer receive any emails
        from us.
      </p>
    </div>
    <div>
      <button @click.prevent="saveChanges">Save settings</button>
    </div>
  </form>
  <div>
    <b-button class="deleteBtn" @click="show = !show">Delete account</b-button>
    <b-modal
      @ok="homePage()"
      @cancel="myPage()"
      ok-title="Confirm"
      v-model="show"
      >Are you sure you want to leave us? :[
    </b-modal>
  </div>
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

  p,
  div,
  button,
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
  form,
  p,
  h1,
  div {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 10px;
  }

  input {
    display: inline-block;
  }
  button,
  h1 {
    margin-bottom: 30px;
  }

  @media (min-width: 600px) {
  }
</style>
