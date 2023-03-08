import { reactive } from 'vue'

const store = reactive({
    movies: [],
    seriesTv: [],
    search: "",
    api_key: "98ef93e079d0668313036d20d223c90d",
    sizeImgTv: [
        "w300",
        "w780",
        "w1280",
        "original",
    ],
    sizeImgMovie: [
        "w92",
        "w154",
        "w185",
        "w342",
        "w500",
        "w780",
        "original",
    ]
});

export default store

//https://api.themoviedb.org/3/movie/550?api_key=98ef93e079d0668313036d20d223c90d