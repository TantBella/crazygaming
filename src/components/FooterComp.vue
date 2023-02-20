<template>
  <div>
    <form>
      <input class="email" placeholder="example@mail.com" />
    </form>
  </div>
</template>

<!--
      v-model="form.email" @input="$v.form.email.$touch"
      :state="$v.form.email.$dirty ? !$v.form.email.$error : null" -->

<script>
  // import { required, email } from 'vuelidate/lib/validators'

  // export default {
  //   data() {
  //     return {
  //       form: {
  //         email: null
  //       }
  //     }
  //   },
  //   validations: {
  //     form: {
  //       email: {
  //         required,
  //         email
  //       }
  //     }
  //   }
  // }
</script>

<style lang="scss">
  .email {
    display: block;
    width: 350px;
    margin: 20px auto;
    padding: 10px 45px;
    background: #d9d9d9 url('assets/email-icon.png') no-repeat 15px center;
    background-size: 15px 15px;
    font-size: 16px;
    border: none;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
</style>
