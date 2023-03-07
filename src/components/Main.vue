<script>
import Cards from './Cards.vue'
import store from '../store.js'

export default {
  components: {
    Cards,
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <main class="container">
    <div class="row">
      <ul class="cards-grid">
        <Cards v-for="element in store.movies" :key="element.id" :movie="element"></Cards>

      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
</style>
