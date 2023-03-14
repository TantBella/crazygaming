<template>
  <h1>Discounts</h1>

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
            >You recently had your birthday and therefore we offer you a 10%
            discount on your next purchase. Use the code: "crazy10" in
            checkout.</b-card-text
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
            >You are a loyal customer, therefore we offer you a 25% discount on
            your next purchase. Use the code: "crazy25" in
            checkout.</b-card-text
          >
          <b-card-text>Valid to 2023-04-11</b-card-text>
        </b-card>
      </b-card-group>
    </b-card>
  </div>
</template>

<style scoped>
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

  h1 {
    padding-top: 20px;
  }

  @media (max-width: 600px) {
    .card {
      margin-bottom: 20px;
    }
  }
</style>
