<template>
  <div id="title">
    <div>
      <RouterLink to="/my-pages">
        <img src="/assets/arrowBack.png" alt="White arrow pointing left" />
      </RouterLink>
    </div>

    <h1>MY DISCOUNTS</h1>
  </div>
  <div class="offers">
    <b-card style="background-color: transparent">
      <b-card-group deck>
        <b-card
          border-variant="dark"
          header="Congratulations"
          header-bg-variant="dark"
          header-text-variant="white"
          align="center"
          style="max-width: 20rem"
        >
          <b-img src="./assets/birthday.png" fluid alt="Responsive image" />
          <b-card-text
            >We wanna celebrate your birthday! Instead of a wrapped gift we
            wanna give you get a 10% discount on your next purchase. Use the
            code: "HAPPY10" in checkout.</b-card-text
          >
          <b-card-text>Valid to 2023-04-31</b-card-text>
        </b-card>
        <b-card
          border-variant="dark"
          header="Loyal customer"
          header-bg-variant="dark"
          header-text-variant="white"
          align="center"
          style="max-width: 20rem"
        >
          <b-img src="./assets/loyal.png" fluid alt="Responsive image" />
          <b-card-text
            >Thanks for being a loyal customer! As a 'thank you' we wanna give
            you 5% discount on your next purchase. Use the code: "THANKS" in
            checkout.</b-card-text
          >
          <b-card-text>Valid to 2023-04-11</b-card-text>
        </b-card>
      </b-card-group>
    </b-card>
  </div>
</template>

<style scoped>
  #title {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  p {
    color: #000;
  }

  .card {
    border: 0;
  }

  .offers {
    display: flex;
    justify-content: center;
  }

  img {
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    .card {
      margin-bottom: 20px;
    }
  }
</style>
