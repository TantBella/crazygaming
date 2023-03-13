<script>
  export default {
    computed: {
      myFavoritesList() {
        return this.$store.state.favorites
      }
    },
    methods: {
      removeFromFavorites(index) {
        this.$store.commit('removeFavorites', index)
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
      <b-row>
        <h1>My Wishlist</h1>
        <p v-if="$store.state.favorites.length === 0">
          You have not added any products to your favorites.
        </p>
        <div class="flex-container">
          <div
            class="favorites"
            v-for="favorite in myFavoritesList"
            :key="favorite.id"
          >
            <router-link :to="`/product/${favorite.id}`">
              <b-card-img
                :src="favorite.image"
                :alt="favorite.name"
                class="rounded-0"
              />
            </router-link>
            <p>{{ favorite.name }}</p>
            <b-button @click="removeFromFavorites(favorite.id)">
              Remove from favorites
            </b-button>
          </div>
        </div>
      </b-row>
    </b-container>
  </b-card>
</template>

<style scoped>
  img {
    width: 300px;
    height: 300px;
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .favorites {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    padding-top: 10px;
    color: #000;
  }

  h1 {
    color: #000;
    margin-bottom: 20px;
  }
</style>
