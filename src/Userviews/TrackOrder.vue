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

    <h1>Track my order</h1>
  </div>
  <div id="orderBox">
    <h3>Order #123456789</h3>
    <div id="itemPrice">
      <p>1 Item</p>
      <p>19,99 €</p>
    </div>
  </div>
  <div class="tracker">
    <div class="item">
      <div class="circle">
        <svg
          width="36"
          height="31"
          viewBox="0 0 36 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.2002 31H9.78592C7.18126 31 5.01898 29.0152 4.60129 26.4102L4.597 26.3779L2.08171 10.4974H33.9182L31.4029 26.3779C30.9809 29.0152 28.8187 31 26.214 31H26.1994H26.2002L26.2002 31ZM9.81236 29.3598H26.2107C28.0426 29.3598 29.5632 27.9637 29.8567 26.1316L29.8596 26.1089L32.0713 12.1376H3.92875L6.14036 26.1089C6.43683 27.9638 7.95744 29.3598 9.78922 29.3598H9.80047H9.79984H9.81236ZM36 12.1375H0V10.4973H36V12.1375ZM11.2852 14.4666H9.72V11.1534L14.2748 0L15.7132 0.646258L11.2852 11.4815L11.2852 14.4666ZM26.28 14.4666H24.7148V11.4814L20.2852 0.656168L21.7252 3.68204e-05L26.28 11.1535V14.4666ZM18.7826 25.4725H17.2174V17.6159H18.7826V25.4725ZM12.7878 25.4725H11.2226V17.6159H12.7878V25.4725ZM24.7774 25.4725H23.2121V17.6159H24.7774L24.7774 25.4725Z"
            fill="#FFFDFA"
          />
        </svg>
      </div>
      <div class="line" />
      <div class="label">
        <p class="orderText">Order placed</p>
        <p>March 14, 2023</p>
      </div>
    </div>
    <div class="item">
      <div class="circle">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.475 7.50004L16.1625 1.59379C15.8067 1.3968 15.4067 1.29346 15 1.29346C14.5933 1.29346 14.1933 1.3968 13.8375 1.59379L3.52502 7.50004C3.16491 7.70574 2.86583 8.00329 2.65831 8.36235C2.45078 8.7214 2.34224 9.12908 2.34377 9.54379V20.625C2.37072 21.0108 2.49268 21.3838 2.69879 21.711C2.90489 22.0381 3.18873 22.3092 3.52502 22.5L13.8375 28.3313C14.1933 28.5283 14.5933 28.6316 15 28.6316C15.4067 28.6316 15.8067 28.5283 16.1625 28.3313L26.475 22.5C26.8113 22.3092 27.0951 22.0381 27.3012 21.711C27.5073 21.3838 27.6293 21.0108 27.6563 20.625V9.46879C27.6448 9.06687 27.5301 8.67466 27.3232 8.32987C27.1163 7.98508 26.8242 7.69931 26.475 7.50004ZM13.8375 25.7063L9.84377 23.4563V13.5188L13.8375 15.6938V25.7063ZM15 13.6688L11.1 11.5313L20.1188 6.52504L24.0375 8.73754L15 13.6688ZM15 3.63754L17.7375 5.17504L8.66252 10.2188L5.96252 8.73754L15 3.63754ZM4.68752 10.7063L7.50002 12.2438V22.125L4.68752 20.625V10.7063ZM16.1625 25.7063V15.6938L25.3125 10.7063V20.625L16.1625 25.7063Z"
            fill="#FFFDFA"
          />
        </svg>
      </div>
      <div class="line" />
      <div class="label">
        <p class="orderText">Order packed</p>
        <p>March 15, 2023</p>
      </div>
    </div>
    <div class="item">
      <div class="circle">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.5 23.125C22.0027 23.125 21.5258 22.9275 21.1742 22.5758C20.8225 22.2242 20.625 21.7473 20.625 21.25C20.625 20.7527 20.8225 20.2758 21.1742 19.9242C21.5258 19.5725 22.0027 19.375 22.5 19.375C22.9973 19.375 23.4742 19.5725 23.8258 19.9242C24.1775 20.2758 24.375 20.7527 24.375 21.25C24.375 21.7473 24.1775 22.2242 23.8258 22.5758C23.4742 22.9275 22.9973 23.125 22.5 23.125ZM24.375 11.875L26.825 15H21.25V11.875M7.5 23.125C7.00272 23.125 6.52581 22.9275 6.17417 22.5758C5.82254 22.2242 5.625 21.7473 5.625 21.25C5.625 20.7527 5.82254 20.2758 6.17417 19.9242C6.52581 19.5725 7.00272 19.375 7.5 19.375C7.99728 19.375 8.47419 19.5725 8.82583 19.9242C9.17746 20.2758 9.375 20.7527 9.375 21.25C9.375 21.7473 9.17746 22.2242 8.82583 22.5758C8.47419 22.9275 7.99728 23.125 7.5 23.125ZM25 10H21.25V5H3.75C2.3625 5 1.25 6.1125 1.25 7.5V21.25H3.75C3.75 22.2446 4.14509 23.1984 4.84835 23.9017C5.55161 24.6049 6.50544 25 7.5 25C8.49456 25 9.44839 24.6049 10.1517 23.9017C10.8549 23.1984 11.25 22.2446 11.25 21.25H18.75C18.75 22.2446 19.1451 23.1984 19.8483 23.9017C20.5516 24.6049 21.5054 25 22.5 25C23.4946 25 24.4484 24.6049 25.1517 23.9017C25.8549 23.1984 26.25 22.2446 26.25 21.25H28.75V15L25 10Z"
            fill="#FFFDFA"
          />
        </svg>
      </div>
      <div class="line" id="lastLine" />
      <div class="label">
        <p class="orderText">Order in transit</p>
        <p>Gothenburg, Sweden</p>
      </div>
    </div>
    <div class="item">
      <div id="lastCircle" class="circle">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7755 0C13.4694 0 13.1633 0.15 12.8571 0.3L0.765306 6.9C0.306122 7.2 0 7.65 0 8.25V21.75C0 22.35 0.306122 22.8 0.765306 23.1L12.8571 29.7C13.1633 29.85 13.4694 30 13.7755 30C14.0816 30 14.3878 29.85 14.6939 29.7L16.0714 28.95C15.6122 28.05 15.4592 27 15.3061 25.95V15.9L24.4898 10.8V16.5C25.5612 16.5 26.6327 16.65 27.551 16.95V8.25C27.551 7.65 27.2449 7.2 26.7857 6.9L14.6939 0.3C14.3878 0.15 14.0816 0 13.7755 0ZM13.7755 3.3L22.9592 8.25L19.898 9.9L10.8673 4.8L13.7755 3.3ZM7.80612 6.45L16.8367 11.7L13.7755 13.35L4.59184 8.25L7.80612 6.45ZM3.06122 10.8L12.2449 15.9V25.95L3.06122 20.85V10.8ZM28.0102 20.7L22.5 26.1L20.051 23.7L18.3673 25.5L22.6531 30L30 22.8L28.0102 20.7Z"
            fill="#3A0CA3"
          />
        </svg>
      </div>
      <div class="label">
        <p class="orderText">Order delivered</p>
        <p>Not delivered yet</p>
      </div>
    </div>
    <p>Expected Delivery: March 17, 2023</p>
  </div>
</template>
<style lang="scss" scoped>
  h1 {
    text-transform: uppercase;
  }
  #top {
    width: 27rem;
    padding: 0.5rem 0rem 0rem 2rem;
    margin: 2rem auto;
    display: flex;
  }
  #orderBox {
    background-color: #fffdfa;
    width: 20rem;
    border-radius: 9px;
    padding: 0.5rem 1rem;
    margin: 2rem auto;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  h3 {
    color: #000;
    text-align: center;
    font-size: 1.4rem;
  }

  #itemPrice {
    color: #3a0ca3;
    display: flex;
    justify-content: space-between;
  }
  .tracker {
    width: 20rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  .item {
    display: flex;
    align-items: center;
  }
  .orderText {
    font-weight: bold;
    font-size: 1.1rem;
    margin: 0;
  }

  .circle {
    margin-bottom: 2rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: #3a0ca3;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  #lastCircle {
    background-color: #fffdfa;
  }
  .label {
    margin-left: 10px;
  }

  .item:not(:last-child) {
    margin-bottom: 20px;
  }
  #lastLine {
    background: linear-gradient(#3a0ca3, #fffdfa);
  }
  .line {
    margin-left: 2.4rem;
    margin-top: 6.2rem;
    width: 5px;
    height: 3.3rem;
    background-color: #3a0ca3;
    position: absolute;
  }
</style>
