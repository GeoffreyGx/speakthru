<script setup lang="ts">

</script>
<template>
    <aside>
        <div class="title">
            <p>Speakthru</p>
            <div class="platform">
                <p>Desktop</p>
            </div>
        </div>
        <div class="navigation">
            <router-link class="button" to="/" exact-active-class="active-link">
                <p><i class="ri-phone-fill"></i>Call</p>
            </router-link>
            <router-link class="button" to="/yourcard" exact-active-class="active-link">    
                <p><i class="ri-id-card-fill"></i>Your Card</p>
            </router-link>
            <router-link class="button" to="/settings" exact-active-class="active-link">
                <p><i class="ri-settings-3-fill"></i>Settings</p>
            </router-link>
        </div>
		<div class="flex"></div>
    </aside>
</template>
<style lang="scss" scoped>
@import 'remixicon/fonts/remixicon.css';

aside {
    display: flex;
    flex-direction: column;

    width: 300px;
    min-height: 100vh;
    overflow: hidden;
    position: fixed;

    background-color: #D9D9D9;
    color: black;

    font-family: "Inter", sans-serif;

    .flex {
        flex: 1 1 0;
    }

    .title {
        position: relative;
        top: 12.5vh;
        left: 30px;

        font-size: 40px;
        font-weight: 500;
        .platform {
            margin-top: 4px;
            width: 70px;

            background-color: black;
            color: #ffffff;

            font-size: 15px;
            text-align: center;
        
            border: 3px solid black;
            border-radius: 6px;
        }
    }

    .navigation {
        position: relative;
        top: 25vh;
        left: 30px;

        font-size: 20px;
        font-weight: 400;

        .button {
            color: black;
            text-decoration: none;
            p {
                top: 10px;
                width: 240px;

                margin-bottom: 4px;

                border: 6px solid #00000000;
                border-radius: 6px;
                transition: 0.2s ease-in-out;
                
                i {
                    margin-right: 15px;
                    margin-left: 5px;
                }
            }

            &:hover p {
                background-color: #aaaaaa;
            }

            &.active-link p {
                background-color: #3A3A3A;
                color: #ffffff;
                
                transition: 0.2s ease-in-out;
            }
        }
    }
}
p {
    margin: 0px;
}
</style>