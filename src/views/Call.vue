<script setup lang="ts">
import Card from '../components/Card.vue';
</script>

<template>
    <main class="call-page">
        <h1 class="page-title">Call</h1>
        <div class="grid-container">
            <div class="grid-item">
                <Card />
            </div>
            <div class="grid-item">
                <Card />
            </div>
            <div class="grid-item">
                <Card />
            </div>
            <div class="grid-item">
                <Card />
            </div>
            <div class="grid-item">
                <Card />
            </div>
            <div class="grid-item">
                <Card />
            </div>
            <div class="grid-item">
                <Card />
            </div>
            <div class="grid-item">
                <Card />
            </div>
        </div>
    </main>
</template>

<style>
.page-title {
    padding-bottom: 10px
}

.grid-container {
    display: grid;
}
</style>