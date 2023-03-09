<script>

export default {
    props: {
        series: {
            type: Object,
            required: true,
        }
    }
}
</script>

<template>
    <li class="cards">
        <img :src="`https://image.tmdb.org/t/p/w300/${series.poster_path}`" />
        <h3>{{ series.name }}</h3>
        <p>{{ series.original_name }}</p>
        <ul>
            <li v-if="series.original_language === 'en'">
                <img src="/img/Bandiera-Inglese.png" alt="">
            </li>
            <li v-else-if="series.original_language === 'es'">
                <img src="/img/bandiera-spagnola.jpg" alt="">
            </li>
            <li v-else>
                {{ series.original_language }}
            </li>
        </ul>
        <ul>
            <li v-show="parseInt(series.vote_average) === 1 || parseInt(series.vote_average) === 2">
                <font-awesome-icon icon="fa-solid fa-star" />
            </li>
            <li v-show="parseInt(series.vote_average) === 3 || parseInt(series.vote_average) === 4">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
            </li>
            <li v-show="parseInt(series.vote_average) === 5 || parseInt(series.vote_average) === 6">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
            </li>
            <li v-show="parseInt(series.vote_average) === 7 || parseInt(series.vote_average) === 8">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
            </li>
            <li v-show="parseInt(series.vote_average) === 9 || parseInt(series.vote_average) === 10">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
            </li>
        </ul>
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