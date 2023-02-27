<template>
  <div id="about">
    <h1>About us</h1>
    <p>We created Crazy Gaming as a school project.</p>

    <p>
      We are six people in our group and we go to a school called IT-Högskolan.
    </p>
    <div class="image">
      <img src="/assets/AvatarBella.png" alt="Avatar picture of Bella" />
      <img src="/assets/AvatarEmilia.png" alt="Avatar picture of Emilia" />
      <img src="/assets/AvatarIvanna.png" alt="Avatar picture of Ivanna" />
      <img src="/assets/AvatarJohan.png" alt="Avatar picture of Johan" />
      <img src="/assets/AvatarJulia.png" alt="Avatar picture of Julia" />
      <img src="/assets/AvatarWilliam.png" alt="Avatar picture of William" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #about {
    color: #fff;
    margin: 10px auto;
    text-align: left;
    width: 50%;
  }
  p {
    display: flex;
    justify-content: center;
  }
  .image {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    gap: 20px;
  }
  img {
    width: 300px;
    height: 300px;
  }
  #credit {
    font-size: xx-small;
  }
</style>
