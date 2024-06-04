<template>
    <div class="card">
        <div class="profile-picture">
            <img src="../../public/download.jpg">
        </div>
        <div class="inner-text">
            <p class="name">John Doe</p>
            <p class="status">Available</p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.card {
    height: 100px;
    width: 400px;
    background: rgba(0, 0, 0, 0.7);
    background-blend-mode: darken;
    background-repeat: no-repeat;
    background-size: 100%;

    border: 2px solid #ffffff;
    border-radius: 10px;

    .profile-picture {
        position: absolute;
        margin: 10px;
        margin-left: 20px;

        transition: 0.1s ease-in-out;
        img {
            width: 75px;
            height: 75px;
            border: 4px solid white;
            border-radius: 100%;
        }

        &:hover {
            filter: brightness(50%);
        }
    }

    .inner-text {
        margin: 25px;
        margin-left: 110px;

        .name {
            font-size: 25px;
            font-weight: 600;
            color: white;
        }

        .status {
            font-weight: 500;
            color: lightgreen;
        }
    }
}
</style>