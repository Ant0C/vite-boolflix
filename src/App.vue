<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import search from './components/Search.vue'
import store from '../src/store.js'


export default {
  components: {
    Header,
    Main,
    search,
    store,
  }
}
</script>

<template>
  <Header></Header>
  <Main></Main>
</template>

<style lang="scss">
@use './style/general.scss';
</style>