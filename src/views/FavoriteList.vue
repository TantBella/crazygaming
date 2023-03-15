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
      },
      back() {
        window.history.back(1)
      }
    }
  }
</script>

<template>
  <div>
    <div id="title">
      <div>
        <img
          @click="back()"
          src="/assets/arrowBack.png"
          alt="White arrow pointing left"
        />
      </div>
      <h1>MY WISHLIST</h1>
    </div>
    <div>
      <p v-if="Object.keys(this.$store.state.favorites).length === 0">
        You have not added any products to your favorites.
      </p>
      <div class="flex-container">
        <div
          class="favorites"
          v-for="favorite in myFavoritesList"
          :key="favorite.id"
        >
          <router-link :to="`/product/${favorite.id}`">
            <img
              :src="favorite.image"
              :alt="favorite.name"
              class="product rounded-0"
            />
          </router-link>
          <p>{{ favorite.name }}</p>
          <button class="remove" @click="removeFromFavorites(favorite.id)">
            Remove from favorites
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #title {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .product {
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
  .remove {
    color: #fff;
    background-color: rgb(112, 13, 13);
    border: none;
    border-radius: 10px;
  }

  p {
    text-align: center;
    padding-top: 10px;
  }

  h1 {
    margin-bottom: 20px;
  }
</style>
