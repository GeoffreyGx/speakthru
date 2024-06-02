import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./views/Call.vue')
        },
        {
            path: '/yourcard',
            component: () => import('./views/YourCard.vue')
        },
        {
            path: '/settings',
            component: () => import('./views/Settings.vue')
        }
    ]
})

createApp(App).use(router).mount("#app");
