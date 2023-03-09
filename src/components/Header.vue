<script>
import store from '../store.js';

export default {
  data() {
    return {
      store,
    }
  },
  methods: {
  }
}
</script>

<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="logo">
          <img src="/img/logo.png" alt="">
        </div>
        <div class="search-bar">
          <input class="search" type="text" placeholder="Cerca il film" v-model="store.search">
          <button class="search_button" @click="$emit('AcSearch')">Search</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

header {
  background-color: rgb(37, 37, 37);
  padding: 2rem 0rem;
}

.container {
  max-width: 80%;
  margin: 0 auto;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    flex-basis: 40%;

    img {
      width: 100px;
    }
  }

  .search-bar {
    flex-basis: 40%;

    .search {
      background-color: #eee;
      border: none;
      padding: 5px 32px;
      text-align: left;
      text-decoration: none;
      font-size: 16px;
      margin: 4px 2px;
    }

    .search_button {
      background-color: #eee;
      border: none;
      padding: 5px 32px;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    }
  }
}
</style>