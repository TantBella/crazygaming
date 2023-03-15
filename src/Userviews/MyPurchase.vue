<template>
  <div id="top">
    <div id="arrowBack">
      <RouterLink to="/my-pages">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6667 36.6666L0 19.9999L16.6667 3.33325L19.625 6.29159L5.91667 19.9999L19.625 33.7083L16.6667 36.6666Z"
            fill="white"
          />
        </svg>
      </RouterLink>
    </div>

    <h1>My purchases</h1>
  </div>
  <div>
    <div class="purchaseBox">
      <div class="purchaseTop">
        <h3>In Transit</h3>
        <p>March 15, 2023</p>
      </div>
      <p class="grayText">Order #123456789</p>
      <img
        src="https://cdn.webhallen.com/images/product/347663?trim"
        alt="Hogwarts Legacy"
      />
      <div class="purchaseBottom">
        <div>
          <span class="grayText">1 Product </span
          ><span class="grayText">50€</span>
        </div>
        <button>
          <RouterLink to="/Trackorder">Track my order</RouterLink>
        </button>
      </div>
    </div>
    <div class="purchaseBox">
      <div class="purchaseTop">
        <h3>Delivered</h3>
        <p>February 27, 2023</p>
      </div>
      <p class="grayText">Order #123456788</p>
      <img
        src="https://cdn.webhallen.com/images/product/310508?trim"
        alt="God of War 2: Ragnarök"
      />
      <img
        src="https://cdn.webhallen.com/images/product/357199?trim"
        alt="The Witcher 3: Complete Edition"
      />
      <img
        src="https://cdn.webhallen.com/images/product/356947?trim"
        alt="Gamedec"
      />
      <div class="purchaseBottom">
        <div>
          <span class="grayText">3 Products </span
          ><span class="grayText">140€</span>
        </div>
        <p>Delivered: Mar 1, 2023</p>
      </div>
    </div>
    <div class="purchaseBox">
      <div class="purchaseTop">
        <h3>Delivered</h3>
        <p>January 15, 2023</p>
      </div>
      <p class="grayText">Order #123456787</p>
      <img
        src="https://cdn.webhallen.com/images/product/358168?trim"
        alt="WWE 2K23"
      />
      <img
        src="https://cdn.webhallen.com/images/product/354017?trim"
        alt="Dragon Ball Z: Kakarotn"
      />
      <div class="purchaseBottom">
        <div>
          <span class="grayText">2 Products </span
          ><span class="grayText">108€</span>
        </div>
        <p>Delivered: Jan 19, 2023</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  #top {
    width: 27rem;
    padding: 0.5rem 0rem 0rem 2rem;
    margin: 2rem auto;
    display: flex;
  }
  h1 {
    text-transform: uppercase;
  }
  .purchaseBox {
    background-color: #fffdfa;
    width: 22rem;
    border-radius: 9px;
    padding: 0.5rem 1rem;
    margin: 2rem auto;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    color: #000;
  }
  .purchaseTop {
    display: flex;
    justify-content: space-between;
  }
  .purchaseBottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    background-color: #3a0ca3;
    color: #fffdfa;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    padding: 8px 20px;
    text-transform: uppercase;
    border: none;
    border-radius: 30px;
    font-weight: 500;
    font-size: 0.7rem;
  }
  p {
    margin-bottom: 0%;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: #fffdfa;
  }
  .grayText {
    color: #616161;
    margin-right: 0.3rem;
  }
  img {
    width: 4rem;
    padding-right: 0.5rem;
  }
</style>
