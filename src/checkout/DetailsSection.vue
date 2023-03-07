<template>
  <div class="details-section">
    <h2>Delivery details</h2>
    <form>
      <div class="form-group">
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
      <div class="form-group">
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
      <div class="form-group">
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
      <div class="form-group">
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
      <div class="form-group">
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
      <div class="form-group">
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
  .details-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #3a0ca370;
    border-radius: 25px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: #fff;
  }

  .details-section h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  .form-group {
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

  .btn {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    background-color: #fff;
    color: #000000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    width: 6rem;
  }
  .button-group {
    display: flex;
    justify-content: space-between;
  }

  .btn:hover {
    transform: scale(1.1);
  }
  @media (max-width: 599px) {
    .details-section {
      width: 90vw;
    }
  }
</style>
