<template>
  <div class="foot">
    <div class="mail">
      <h2>Subscribe To Our Newsletter</h2>
      <form class="mailinputbtn">
        <input
          @keyup.enter="submitMail()"
          type="email"
          class="email"
          v-model="inputMail"
          placeholder="example@mail.com"
          name="email"
          required
        />
        <button
          @click="($event) => submitMail()"
          type="submit"
          :disabled="!inputMail"
        >
          <img src="assets/email-icon.png" alt="buttonpng" border="0" />
        </button>
      </form>
      <p>Subscribe to our newsletter to get exclusive offers!</p>
    </div>
    <div class="footcontainer">
      <div class="needhelp">
        <h3>Need help?</h3>
        <ul>
          <li><RouterLink to="/contact"> Contact </RouterLink></li>
          <li>
            <RouterLink to="/"> Track Your Order </RouterLink>
          </li>
          <li><RouterLink to="/"> Feedback </RouterLink></li>
        </ul>
      </div>
      <div class="crazy">
        <h3>Crazy Gaming</h3>
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
      <div class="profile">
        <h3>My profile</h3>
        <ul>
          <li><RouterLink to="/user"> My Account </RouterLink></li>
          <li><RouterLink to="/">My Wishlist </RouterLink></li>
          <li><RouterLink to="/"> Purchases </RouterLink></li>
        </ul>
      </div>
    </div>
    <div class="disclaimer">
      <h4>Disclaimer:</h4>
      <p>
        Pictures are taken from Webhallen.com (This site is a school project
        only)
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      submitMail() {
        alert("Thanks for Joining! You're in good company.")
      }
    },
    data() {
      return {
        inputMail: null
      }
    },
    // form: {
    //   email: null
    // }
    // validations: {
    //   form: {
    //     email: {
    //       required,
    //       email
    //     }
    //   }
    // }
    watch: {
      inputMail(t) {
        console.log(`Användaren har angett denna mail: ${t}, för nyhetsbrev.`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .foot {
    border-top: solid 2px white;
    color: white;
    margin-top: 20px;
  }

  .mail {
    padding: 20px;
    margin: 20px auto;
    text-align: center;
  }

  .mailinputbtn {
    display: flex;
    flex-direction: row;
  }

  .email {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border: none;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.172) no-repeat 15px center;
    background-size: 15px 15px;
    display: block;
    font-size: 16px;
    padding: 10px 35px;
    width: 70vw;
    margin: 10px;
  }

  button {
    border: none;
    cursor: pointer;
    appearance: none;
    background-color: inherit;
    transition: transform 0.7s ease-in-out;
  }

  button:hover {
    transform: rotate(360deg);
  }

  img {
    width: 20px;
    height: 20px;
  }

  .footcontainer {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-around;
    padding: 5px;
  }

  .profile {
    margin-right: 5px;
    padding-right: 3px;
  }
  p {
    font-size: smaller;
    padding: 10px 10px 3px 10px;
  }

  h2 {
    font-size: medium;
  }

  h3 {
    padding-left: 33px;
    // padding: 10px 10px 3px 10px;
    text-decoration: underline;
    font-size: small;
  }
  h4 {
    padding: 10px 10px 3px 10px;
    font-size: smaller;
    margin-bottom: 1px;
  }

  li {
    list-style: none;
  }
  a {
    text-align: left;
    text-decoration: none;
    font-size: small;
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
