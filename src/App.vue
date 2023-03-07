<script>
import axios from 'axios'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import store from '../src/store.js'


export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    Getmovies() {
      console.log('START MOVIE')
      const search = this.store.search
      console.log('store.search = ', search)
      axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=98ef93e079d0668313036d20d223c90d', {
          params: {
            query: search,
          }
        })
        .then((res) => {
          console.log(res.data)
          console.log(res.data.results)
          this.store.movies = res.data.results
          console.log(this.store)
        })
    },

    GetSeries() {
      console.log('START SERIES')
      const search = this.store.search
      console.log('store.search = ', search)
      axios
        .get('https://api.themoviedb.org/3/search/tv?api_key=98ef93e079d0668313036d20d223c90d', {
          params: {
            query: search,
          }
        })
        .then((res) => {
          console.log(res.data)
          console.log(res.data.results)
          this.store.seriesTv = res.data.results
          console.log(this.store)
        })
    }
  },
  mounted() {
    console.log(this.store)
    this.Getmovies()
    this.GetSeries()
  }

}
</script>

<template>
  <Header @AcSearch="Getmovies(); GetSeries();"></Header>
  <Main></Main>
</template>

<style lang="scss">
@use './style/general.scss';
</style>