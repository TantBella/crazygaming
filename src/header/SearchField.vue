<!-- inspo: https://blog.logrocket.com/create-search-bar-vue/ -->
<script>
  export default {
    data() {
      return {
        products: [],
        search: ''
      }
    },
    created() {
      fetch('/products.json')
        .then((response) => response.json())
        .then((result) => {
          this.products = result.products
        })
    },
    methods: {
      clickedSearched(s) {
        if (s.length >= 1) {
          this.search = ''
        }
      },
      filtered() {
        if (this.search !== '') {
          return this.products.filter((product) => {
            return product.name
              .toLowerCase()
              .includes(this.search.toLowerCase())
          })
        }
      }
    }
  }
</script>

<template>
  <div id="container">
    <input
      id="search"
      v-model="search"
      type="text"
      placeholder="Search for a game..."
    />
    <button type="submit">
      <img src="/assets/search-icon.png" alt="Search icon" />
    </button>
  </div>
  <div class="searchResult">
    <ul
      class="searchedGame"
      :key="product"
      v-for="product in filtered()"
      @click="clickedSearched(search)"
    >
      <li>
        <RouterLink :to="`/product/${product.id}`">{{
          product.name
        }}</RouterLink>
      </li>
    </ul>
    <div class="search error" v-if="search && !filtered().length">
      <p>No results found!</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  input {
    color: #000;
    display: block;
    padding: 10px 45px;
    background: rgba(255, 255, 255, 0.172);
    background: rgba(255, 255, 255, 0.9) no-repeat 15px center;
    color: #000;
    background-size: 15px 15px;
    font-size: 16px;
    border: none;
    border-radius: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    cursor: pointer;
    margin-bottom: 25px;
    margin: 0 auto 10px auto;
    width: 70vw;
    height: 30px;
  }

  img {
    width: 30px;
    height: 30px;
  }
  input[type='text'] {
    text-align: left;
    padding-left: 1em;
  }
  #search {
    display: flex;
    justify-content: center;
    margin: 0.5em;
  }

  ::placeholder {
    text-align: left;
  }

  button {
    border: none;
    background-color: inherit;
    margin: 0;
  }
  img {
    width: 25px;
    height: 25px;
  }
  #container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search {
    color: red;
  }

  .searchResult {
    border-radius: 1em;
    background-color: rgba(255, 255, 255, 0.9);
    display: static;
    position: absolute;
    left: 14%;
    top: 22%;
    overflow: hidden;
    max-height: 100px;
    width: 65%;
    padding-left: 0.5em;
    z-index: 1000;
  }
  // ^inspo: https://stackoverflow.com/questions/65252244/aligning-search-results-under-search-bar
  a {
    color: #000000;
    text-decoration: none;
  }
  .searchedGame {
    padding-top: 0.7px;
    padding-bottom: 0.4px;
  }

  @media (min-width: 600px) {
    #search {
      width: 30vw;
    }
    .searchResult {
      background-color: rgba(255, 255, 255, 0.4);
      display: static;
      position: absolute;
      left: 37%;
      top: 13%;
      overflow: hidden;
      max-height: 73px;
      width: 29%;
      padding-left: 1em;
    }
    a {
      color: #ffffff;
      text-decoration: none;
    }
    a:hover {
      color: rgb(72, 70, 70);
    }
  }
</style>
