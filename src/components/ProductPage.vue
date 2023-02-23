<script>
  import axios from 'axios'
  export default {
    computed: {
      filteredProductByID() {
        if (this.products === null) {
          return []
        }
        return this.products.find((obj) => obj.id === +this.$route.params.id)
      }
    },
    created() {
      axios.get('/products.json').then((result) => {
        this.products = result.data.products
      })
    },
    data() {
      return {
        products: null
      }
    }
  }
</script>

<template>
  <b-card
    no-body
    class="overflow-hidden"
    style="
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 50px;
      padding: 40px;
      border: 1px solid #000;
    "
  >
    <b-container>
      <b-row class="g-0">
        <b-col md="4">
          <b-card-img
            :src="filteredProductByID.image"
            :alt="filteredProductByID.name"
            class="rounded-0"
          />
        </b-col>
        <b-col md="7">
          <b-card-body :title="filteredProductByID.name">
            <b-card-text>
              {{ filteredProductByID.description }}
            </b-card-text>
            <b-row style="justify-content: center; align-items: center">
              <b-col md="6">
                <b-card-text style="line-height: 2.4; text-align: center">
                  {{ filteredProductByID.price }} €
                </b-card-text>
              </b-col>
              <b-col md="6" style="text-align: center">
                <b-button>Add to cart</b-button>
              </b-col>
            </b-row>
          </b-card-body>
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<style scoped>
  img {
    max-width: 300px;
  }
</style>
