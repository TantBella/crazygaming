<template>
  <div class="detailsSection">
    <h2>Delivery details</h2>
    <div class="line" />
    <form>
      <div class="formGroup">
        <label for="name">
          <input
            placeholder="Name"
            type="text"
            class="form-control"
            id="name"
            required
          />
        </label>
      </div>
      <div class="formGroup">
        <label for="email">
          <input
            placeholder="Email"
            type="email"
            class="form-control"
            id="email"
            required
          />
        </label>
      </div>
      <div class="formGroup">
        <label for="phone">
          <input
            placeholder="Phone"
            type="tel"
            class="form-control"
            id="phone"
            required
          />
        </label>
      </div>
      <div class="formGroup">
        <label for="address">
          <input
            placeholder="Address"
            type="text"
            class="form-control"
            id="address"
            required
          />
        </label>
      </div>
      <div class="formGroup">
        <label for="city">
          <input
            placeholder="City"
            type="text"
            class="form-control"
            id="city"
            required
          />
        </label>
      </div>
      <div class="formGroup">
        <label for="zip">
          <input
            placeholder="Zip Code"
            type="text"
            class="form-control"
            id="zip"
            required
          />
        </label>
      </div>
    </form>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  .detailsSection {
    width: 75vw;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #3a0ca370;
    border-radius: 25px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: #fff;
  }
  .detailsSection h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  .formGroup {
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type='text'],
  input[type='email'],
  input[type='tel'] {
    width: 100%;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
  }
  h2 {
    font-weight: normal;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
  }
  .line {
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 1rem 0;
  }

  @media (max-width: 599px) {
    .details-section {
      width: 90vw;
    }
  }
</style>
