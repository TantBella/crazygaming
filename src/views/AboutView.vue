<template>
  <div id="about">
    <div class="info">
      <h1>About us</h1>
      <p>
        Crazy Gaming is a gaming e-commerce and we created it as a school
        project!
      </p>

      <p>
        We are six incredibly good looking and funny people in our group and we
        go to a school called IT-Högskolan.
      </p>
    </div>
    <div class="image">
      <img src="/assets/AvatarBella.png" alt="Avatar picture of Bella" />
      <img src="/assets/AvatarEmilia.png" alt="Avatar picture of Emilia" />
      <img src="/assets/AvatarIvanna.png" alt="Avatar picture of Ivanna" />
      <img src="/assets/AvatarJohan.png" alt="Avatar picture of Johan" />
      <img src="/assets/AvatarJulia.png" alt="Avatar picture of Julia" />
      <img src="/assets/AvatarWilliam.png" alt="Avatar picture of William" />
    </div>
    <p id="contact">
      Feel free to fika with us!
      <RouterLink to="/contact">Click here</RouterLink> to find where we're
      located.
    </p>
  </div>
</template>

<style lang="scss" scoped>
  #about {
    color: #fff;
    margin: 0 10px;
    text-align: center;
    margin: 10px auto;
    width: 100%;
  }

  p {
    min-width: 250px;
  }
  .image {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 10px;
    min-width: 350px;
    margin-left: auto;
  }
  img {
    width: 150px;
    height: 150px;
  }
  #contact {
    margin-top: 10px;
  }
  a {
    color: #fff;
  }

  @media (min-width: 560px) {
    img {
      width: 265px;
      height: 265px;
    }
  }
  @media (min-width: 1150px) {
    .image {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    img {
      width: 350px;
      height: 350px;
    }
  }
</style>
