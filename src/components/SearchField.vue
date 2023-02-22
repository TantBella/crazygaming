<script></script>

<template>
  <div id="container">
    <input
      id="search"
      v-model="input"
      type="text"
      placeholder="Sök efter de bästa spelen..."
    />
    <button type="submit">
      <img src="assets/search-icon.png" alt="Search icon" />
    </button>
  </div>
  <!-- Nedan behövs först skapas en funktion som heter searchlist -->
  <!-- <div class="searchitem" v-for="game in searchList()" :key="game">
    <p>{{ game.name }}</p>
  </div>
  <div class="searchitem error" v-if="input && !searchList().length">
    <p>No results found!</p>
  </div> -->
</template>

<style lang="scss" scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  input {
    display: block;
    padding: 10px 45px;
    background: rgba(255, 255, 255, 0.172);
    background: rgba(255, 255, 255, 0.172) no-repeat 15px center;
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
    margin: 0;
  }
</style>
