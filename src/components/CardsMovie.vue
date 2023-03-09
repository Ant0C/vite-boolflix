<script>

export default {
    props: {
        movie: {
            type: Object,
            required: true,
        },
    },
}
</script>

<template>
    <div class="cards">
        <img class="card_img" :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" />
        <div class="card_info">
            <span v-if="movie.title === movie.original_title">
                <h3 class="card_title">{{ movie.title }}</h3>
            </span>
            <span v-else>
                <h3 class="card_title">{{ movie.title }}</h3>
                <p class="card_second_title">{{ movie.original_title }}</p>
            </span>
            <ul class="card_language">
                <li v-if="movie.original_language === 'en'">
                    <p class="description">Language:</p><img src="/img/Bandiera-Inglese.png" alt="">
                </li>
                <li v-else-if="movie.original_language === 'es'">
                    <p class="description">Language:</p><img src="/img/bandiera-spagnola.jpg" alt="">
                </li>
                <li v-else>
                    <p class="description">Language:</p>
                    {{ movie.original_language }}
                </li>
            </ul>
            <ul class="card_vote">
                <li v-show="parseInt(movie.vote_average) === 1 || parseInt(movie.vote_average) === 2">
                    <p class="description">Vote:</p><font-awesome-icon icon="fa-solid fa-star" />
                </li>
                <li v-show="parseInt(movie.vote_average) === 3 || parseInt(movie.vote_average) === 4">
                    <p class="description">Vote:</p><font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                </li>
                <li v-show="parseInt(movie.vote_average) === 5 || parseInt(movie.vote_average) === 6">
                    <p class="description">Vote:</p><font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                </li>
                <li v-show="parseInt(movie.vote_average) === 7 || parseInt(movie.vote_average) === 8">
                    <p class="description">Vote:</p><font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                </li>
                <li v-show="parseInt(movie.vote_average) === 9 || parseInt(movie.vote_average) === 10">
                    <p class="description">Vote:</p><font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                </li>
                <li v-show="movie.vote_average === 0">
                    No vote
                </li>
            </ul>
            <p>
            <p class="description">Overview:</p>{{ movie.overview }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.cards {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    .card_img {
        width: 100%;
        display: inline-block;
    }

    .card_info {
        display: none;
        transition: .3s ease;
    }
}

.cards:hover {
    border: 1px solid rgb(155, 135, 99);
    padding: 1rem;

    .card_img {
        width: 100%;
        display: none;
    }

    .card_info {
        display: flex;
        flex-direction: column;
        gap: 1.7rem;
        transition: .3s ease;

        .card_title {
            font-size: 1.2rem;
        }

        .card_second_title {
            font-size: 0.7rem;
        }

        .card_language img {
            width: 30px;
        }

        .description {
            display: inline-block;
            font-size: 1.5;
            font-weight: 700;
            margin-right: 0.4rem;
        }

    }
}
</style>