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
  <header class="container">
    <div class="row">
      <div class="logo">
        Logo
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Cerca il film" v-model="store.search">
        <button @click="$emit('AcSearch')">Search</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
</style>