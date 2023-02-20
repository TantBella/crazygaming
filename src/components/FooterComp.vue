<script></script>

<template>
  <div class="foot">
    <div class="mail">
      <h3>Subscribe To Our Newsletter</h3>
      <input class="email" placeholder="example@mail.com" />
      <p>Subscribe to our newsletter to get exclusive offers!</p>
    </div>
    <div class="needhelp">
      <h4>Need help?</h4>
      <ul>
        <li><RouterLink to="/contact"> Contact </RouterLink></li>
        <li>
          <RouterLink to="/"> Track Your Order </RouterLink>
        </li>
        <li><RouterLink to="/"> Feedback </RouterLink></li>
      </ul>
    </div>
    <div class="profile">
      <h4>My profile</h4>
      <ul>
        <li><RouterLink to="/user"> My Account </RouterLink></li>
        <li><RouterLink to="/">My Wishlist </RouterLink></li>
        <li><RouterLink to="/"> Purchases </RouterLink></li>
      </ul>
    </div>
    <div class="crazy">
      <h4>Crazy Gaming</h4>
      <ul>
        <li>
          <RouterLink to="/about">About Us </RouterLink>
        </li>
        <li>
          <RouterLink to="/">Careers</RouterLink>
        </li>
        <li><RouterLink to="/cookies">Privacy & Cookies</RouterLink></li>
        <li><RouterLink to="/">Terms & Conditions</RouterLink></li>
      </ul>
    </div>
    <div class="disclaimer">
      <h5>Disclaimer:</h5>
      <p>
        Pictures are taken from Webhallen.com (This site is a school project
        only)
      </p>
    </div>
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
  .foot {
    border-top: solid 2px white;
    color: white;
    margin-top: 20px;
  }

  .mail {
    padding: 20px;
    margin: 20px auto;
  }

  .email {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border: none;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.172) url('assets/email-icon.png')
      no-repeat 15px center;
    background-size: 15px 15px;
    display: block;
    font-size: 16px;
    padding: 10px 45px;
    width: 350px;
  }
  h4 {
    padding: 10px 10px 3px 10px;
    text-decoration: underline;
  }
  h5 {
    padding: 10px 10px 3px 10px;
    font-size: smaller;
    margin-bottom: 1px;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: #d9d9d9;
    font-weight: bold;
  }
  .disclaimer p {
    padding: 10px 10px 3px 10px;
    font-size: x-small;
    margin-bottom: 30px;
  }
</style>
