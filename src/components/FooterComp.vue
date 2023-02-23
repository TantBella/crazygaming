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
      <!-- Kodref: https://bootstrap-vue.github.io/bootstrap-vue-next/components/Collapse.html#hiding-and-showing-content-in-the-toggle-button-based-on-collapse-state -->
      <div class="tabMenu">
        <b-button v-b-toggle.collapse-1>Need help?</b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <ul class="card-text">
              <li><RouterLink to="/contact"> Contact </RouterLink></li>
              <li>
                <RouterLink to="/"> Track Your Order </RouterLink>
              </li>
              <li><RouterLink to="/"> Feedback </RouterLink></li>
            </ul>
          </b-card>
        </b-collapse>
        <b-button v-b-toggle.collapse-1>Crazy Gaming</b-button>
        <b-collapse id="collapse-2" class="mt-2">
          <b-card>
            <ul class="card-text">
              <li>
                <RouterLink to="/about">About Us </RouterLink>
              </li>
              <li>
                <RouterLink to="/">Careers</RouterLink>
              </li>
              <li>
                <RouterLink to="/cookies">Privacy & Cookies</RouterLink>
              </li>
              <li><RouterLink to="/">Terms & Conditions</RouterLink></li>
            </ul>
          </b-card>
        </b-collapse>
        <b-button v-b-toggle.collapse-1>My Profile</b-button>
        <b-collapse id="collapse-3" class="mt-2">
          <b-card>
            <ul class="card-text">
              <li><RouterLink to="/user"> My Account </RouterLink></li>
              <li><RouterLink to="/">My Wishlist </RouterLink></li>
              <li><RouterLink to="/"> Purchases </RouterLink></li>
            </ul>
          </b-card>
        </b-collapse>
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
      },
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      }
    },
    data() {
      return {
        inputMail: null,
        tabIndex: 0
      }
    },

    watch: {
      inputMail(t) {
        console.log(`Användaren har angett denna mail: ${t}, för nyhetsbrev.`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footcontainer {
    width: 100%;
    background-color: #d9d9d93b;
    padding: 5px;
  }
  // Nedan gör så tabmeny-alternativen hamnar ovanför varandra
  .tabMenu {
    display: flex;
    flex-direction: column;
  }

  .tabMenu button {
    text-decoration: underline;
    background-color: #9757c254;
    text-align: left;
  }

  .tabMenu button:hover {
    font-weight: bold;
  }

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

  .mail button {
    border: none;
    cursor: pointer;
    appearance: none;
    background-color: inherit;
    transition: transform 0.7s ease-in-out;
  }

  .mail button:hover {
    transform: rotate(360deg);
  }

  img {
    width: 20px;
    height: 20px;
  }

  p {
    font-size: smaller;
    padding: 10px 10px 3px 10px;
  }

  h2 {
    font-size: medium;
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

    @media (min-width: 600px) {
      .tabMenu {
        display: flex;
        flex-direction: row;
      }
    }
  }
</style>
