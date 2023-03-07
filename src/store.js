import { reactive } from 'vue'

const store = reactive({
    movies: [],
    seriesTv: [],
    search: "",
    api_key: "98ef93e079d0668313036d20d223c90d"
});

export default store

//https://api.themoviedb.org/3/movie/550?api_key=98ef93e079d0668313036d20d223c90d