<template>
  <div class="detailsSection">
    <h2>Delivery details</h2>
    <div class="line" />
    <form @submit.prevent="submitDetails">
      <div class="formGroup" v-for="(field, index) in fields" :key="index">
        <label :for="field.name">
          <input
            :placeholder="field.placeholder"
            :type="field.type"
            class="form-control"
            :id="field.name"
            v-model="details[field.name]"
            required
          />
        </label>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    emits: ['next-section'],
    data() {
      return {
        details: {
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          zip: ''
        },
        fields: [
          { name: 'name', placeholder: 'Name', type: 'text' },
          { name: 'email', placeholder: 'Email', type: 'email' },
          { name: 'phone', placeholder: 'Phone', type: 'tel' },
          { name: 'address', placeholder: 'Address', type: 'text' },
          { name: 'city', placeholder: 'City', type: 'text' },
          { name: 'zip', placeholder: 'Zip Code', type: 'text' }
        ]
      }
    },
    methods: {
      submitDetails() {
        this.$emit('next-section', 'shipping')
      }
    }
  }
</script>

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
  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
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
