<script></script>

<template>
  <input
    type="text"
    v-model="input"
    placeholder="Sök efter de bästa spelen..."
  />
  <!-- Nedan behövs först skapas en funktion som heter searchlist -->
  <!-- <div class="searchitem" v-for="game in searchList()" :key="game">
    <p>{{ game.name }}</p>
  </div>
  <div class="searchitem error" v-if="input && !searchList().length">
    <p>No results found!</p>
  </div> -->
</template>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    padding: 20px;
    min-height: 100vh;
    background-color: rgb(234, 242, 255);
  }

  input {
    display: block;
    width: 350px;
    margin: 20px auto;
    padding: 10px 45px;
    background: white url('assets/search-icon.png') no-repeat 15px center;
    background-size: 15px 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  .searchitem {
    width: 350px;
    margin: 0 auto 10px auto;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }

  .input {
    background-color: rgb(97, 62, 252);
    cursor: pointer;
  }
</style>
