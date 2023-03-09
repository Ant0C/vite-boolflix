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
  <main>
    <div class="container">
      <div class="row">
        <ul class="section">
          <h2>FILM</h2>
          <li class="cards-grid">
            <CardsMovie v-for="movie in store.movies" :key="movie.id" :movie="movie"></CardsMovie>
          </li>
        </ul>
        <ul class="section">
          <h2>SERIE TV</h2>
          <li class="cards-grid">
            <CardsSeries v-for="series in store.seriesTv" :key="series.id" :series="series"></CardsSeries>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

main {
  background-color: beige;
}

.container {
  max-width: 80%;
  margin: 0 auto;
}

.row {
  display: flex;
  flex-wrap: wrap;

  .section {
    flex-basis: 100%;

    h2 {
      margin-top: 4rem;
      margin-bottom: 0.4rem;
      font-size: 3rem;
      color: #DB202C;
      border-bottom: 2px solid;

    }

    .cards-grid {
      display: grid;
      gap: 0.2rem;
      grid-template-columns: repeat(4, 1fr);

    }
  }

}
</style>
