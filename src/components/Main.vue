<script>
import CardsMovie from './CardsMovie.vue'
import CardsSeries from './CardsSeries.vue'
import store from '../store.js'

export default {
  components: {
    CardsMovie,
    CardsSeries,
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
        <li class="section">
          FILM
        </li>
        <CardsMovie v-for="movie in store.movies" :key="movie.id" :movie="movie"></CardsMovie>
        <li class="section">
          SERIE TV
        </li>
        <CardsSeries v-for="series in store.seriesTv" :key="series.id" :series="series"></CardsSeries>
      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.section {
  font-size: 2rem;
}
</style>
