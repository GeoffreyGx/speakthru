<script setup lang="ts">
import Card from '../components/Card.vue';
</script>

<template>
    <main class="call-page">
        <h1 class="page-title">Call</h1>
        <div class="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </main>
</template>

<style lang="scss" scoped>
.page-title {
    padding-bottom: 10px
}

.cards {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 1rem;

}
    
@media (min-width: 1180px) {
    .cards { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1580px) {
    .cards { grid-template-columns: repeat(3, 1fr); }
}
@media (min-width: 1980px) {
    .cards { grid-template-columns: repeat(4, 1fr); }
}
</style>