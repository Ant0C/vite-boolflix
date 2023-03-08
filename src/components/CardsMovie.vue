<script>

export default {
    props: {
        movie: {
            type: Object,
            required: true,
        },
    },
    methods: {
        imgPreUrl() {
            return "https://image.tmdb.org/t/p/w342/"
        }
    }
}
</script>

<template>
    <li class="cards">
        <img :src="`https://image.tmdb.org/t/p/w92/${movie.poster_path}`" />
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.original_title }}</p>
        <span>
            <p v-if="movie.original_language === 'en'">
                <img src="/img/Bandiera-Inglese.png" alt="">
            </p>
            <p v-else-if="movie.original_language === 'es'">
                <img src="/img/bandiera-spagnola.jpg" alt="">
            </p>
            <p v-else>
                {{ movie.original_language }}
            </p>
        </span>
        <p>{{ movie.vote_average }}</p>
    </li>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.cards {
    margin: 1rem 0;

    img {
        width: 50px;
    }
}
</style>