<script>

export default {
    props: {
        movie: {
            type: Object,
            required: true,
        }
    }
}
</script>

<template>
    <li class="cards">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.original_title }}</p>
        <p>{{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
    </li>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.cards {
    margin: 1rem 0;
}
</style>