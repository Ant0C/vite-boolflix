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
        <span>
            <p v-if="series.original_language === 'en'">
                <img src="/img/Bandiera-Inglese.png" alt="">
            </p>
            <p v-else-if="series.original_language === 'es'">
                <img src="/img/bandiera-spagnola.jpg" alt="">
            </p>
            <p v-else>
                {{ series.original_language }}
            </p>
        </span>
        <p>{{ series.vote_average }}</p>
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