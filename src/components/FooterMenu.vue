<template>
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
      <b-button v-b-toggle.collapse-2>Crazy Gaming</b-button>
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
      <b-button v-b-toggle.collapse-3>My Profile</b-button>
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
</template>

<style>
  .footcontainer {
    width: 100%;
    background-color: #d9d9d93b;
    padding: 5px;
  }

  .tabMenu {
    display: flex;
    flex-direction: column;
  }

  .tabMenu button {
    text-decoration: underline;
    background-color: #9757c215;
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
  }
</style>
