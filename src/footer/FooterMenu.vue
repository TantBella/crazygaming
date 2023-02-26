<template>
  <div class="footcontainer">
    <!-- Kodref: https://bootstrap-vue.github.io/bootstrap-vue-next/components/Collapse.html#hiding-and-showing-content-in-the-toggle-button-based-on-collapse-state -->

    <div class="tabMenu">
      <div class="menucolumn">
        <b-button v-b-toggle.collapse-3
          >My Profile
          <img
            src="/assets/down_arrow.png"
            alt="buttonpng"
            border="0"
            class="arrowdown"
        /></b-button>
        <b-collapse id="collapse-3" class="mt-2">
          <b-card
            no-body
            class="overflow-hidden"
            style="background-color: #9757c215"
          >
            <ul class="card-text">
              <li><RouterLink to="/user"> My Account </RouterLink></li>
              <li><RouterLink to="/">My Wishlist </RouterLink></li>
              <li><RouterLink to="/"> Purchases </RouterLink></li>
            </ul>
          </b-card>
        </b-collapse>
      </div>
      <div class="menucolumn">
        <b-button v-b-toggle.collapse-1
          >Need help?
          <img
            src="/assets/down_arrow.png"
            alt="buttonpng"
            border="0"
            class="arrowdown"
        /></b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card
            no-body
            class="overflow-hidden"
            style="background-color: #9757c215"
          >
            <ul class="card-text">
              <li><RouterLink to="/contact"> Contact </RouterLink></li>
              <li>
                <RouterLink to="/"> Track Your Order </RouterLink>
              </li>
              <li><RouterLink to="/"> Feedback </RouterLink></li>
            </ul>
          </b-card>
        </b-collapse>
      </div>
      <div class="menucolumn">
        <b-button v-b-toggle.collapse-2
          >Crazy Gaming
          <img
            src="/assets/down_arrow.png"
            alt="buttonpng"
            border="0"
            class="arrowdown"
        /></b-button>
        <b-collapse id="collapse-2" class="mt-2">
          <b-card
            no-body
            class="overflow-hidden"
            style="background-color: #9757c215"
          >
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
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .footcontainer {
    width: 100%;
    background-color: #d9d9d93b;
    padding: 5px;
  }

  .tabMenu {
    display: flex;
    flex-direction: column;
  }

  .arrowdown {
    width: 19px;
    padding-left: 10px;
  }

  .tabMenu button {
    text-decoration: underline;
    background-color: #9757c215;
    text-align: left;
    margin: 0;
    border: 0;
  }

  .tabMenu button:hover {
    font-weight: bold;
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
  @media (min-width: 600px) {
    .tabMenu {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .menucolumn {
      display: inline;
    }
  }
</style>
