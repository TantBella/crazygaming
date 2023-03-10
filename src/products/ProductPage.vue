<script>
  import axios from 'axios'
  export default {
    computed: {
      filteredProductByID() {
        if (this.dataResult === null) {
          return []
        }

        return this.dataResult.find((obj) => obj.id === +this.$route.params.id)
      }
    },
    created() {
      axios.get('/products.json').then((result) => {
        this.dataResult = result.data.products
      })
    },
    data() {
      return {
        dataResult: null,
        isFavorite: false,
        reviewFlag1: 'black',
        reviewFlag2: 'black',
        reviewFlag3: 'black',
        reviewFlag4: 'black',
        reviewFlag5: 'black'
      }
    },
    methods: {
      addToCart() {
        this.$store.commit('addToCart', this.filteredProductByID)
        this.$store.commit('openCart')
      },
      addOrRemoveToFavorites() {
        this.$store.commit('addToFavorites', this.filteredProductByID)
        this.isFavorite = this.isFavorite ? false : true
      },
      review(i) {
        /* eslint-disable no-fallthrough */
        switch (i) {
          case 4:
            this.reviewFlag5 = '#9857C2'
          case 3:
            this.reviewFlag4 = '#9857C2'
          case 2:
            this.reviewFlag3 = '#9857C2'
          case 1:
            this.reviewFlag2 = '#9857C2'
          case 0:
            this.reviewFlag1 = '#9857C2'
        }

        switch (i) {
          case 0:
            this.reviewFlag2 = 'black'
          case 1:
            this.reviewFlag3 = 'black'
          case 2:
            this.reviewFlag4 = 'black'
          case 3:
            this.reviewFlag5 = 'black'
        }
        /* eslint-enable no-fallthrough */
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
    <b-container class="productPage">
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
                <b-card-text
                  v-if="filteredProductByID.sale_price"
                  style="line-height: 2.4; text-align: center"
                >
                  <span class="sales"
                    >{{ filteredProductByID.sale_price }}€</span
                  >
                  <span class="line-throw"
                    >{{ filteredProductByID.price }}€</span
                  >
                </b-card-text>
                <b-card-text
                  v-else
                  style="line-height: 2.4; text-align: center"
                >
                  {{ filteredProductByID.price }}€
                </b-card-text>
              </b-col>
              <b-col md="6" style="text-align: center">
                <b-button @click="addToCart">Add to cart</b-button>
                <b-button
                  @click="addOrRemoveToFavorites"
                  class="heart"
                  :class="{ active: isFavorite }"
                >
                  &#9825;
                  {{
                    !isFavorite ? 'Add to favorites' : 'Remove from favorites'
                  }}
                </b-button>
              </b-col>
            </b-row>
          </b-card-body>
        </b-col>
      </b-row>
    </b-container>
    <div>
      <p id="rate">Rate this game:</p>
      <div>
        <span>
          <i
            @click="review(0)"
            :style="'color: ' + this.reviewFlag1"
            class="bi bi-controller"
        /></span>
        <span>
          <i
            @click="review(1)"
            :style="'color: ' + this.reviewFlag2"
            class="bi bi-controller"
        /></span>
        <span>
          <i
            @click="review(2)"
            :style="'color: ' + this.reviewFlag3"
            class="bi bi-controller"
        /></span>
        <span>
          <i
            @click="review(3)"
            :style="'color: ' + this.reviewFlag4"
            class="bi bi-controller"
        /></span>
        <span>
          <i
            @click="review(4)"
            :style="'color: ' + this.reviewFlag5"
            class="bi bi-controller"
        /></span>
      </div>
    </div>
  </b-card>
</template>

<style scoped>
  .btn.active {
    background-color: red;
  }
  .heart {
    margin-left: 10px;
  }
  .productPage {
    color: #000;
  }

  img {
    max-width: 300px;
  }

  .sales {
    color: red;
    padding-right: 10px;
  }

  .line-throw {
    text-decoration: line-through;
  }

  .bi {
    color: #000;
    font-size: 30px;
  }
  .bi:hover {
    background-color: rgb(54, 54, 58, 0.1);
    border-radius: 5px;
  }
  #rate {
    color: #000;
    margin: 0;
  }
</style>
