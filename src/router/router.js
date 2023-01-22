import {createRouter, createWebHistory} from 'vue-router';

export const routes = [
    {
        path: '/', name: 'Главная',
        component: () => import("@/pages/Components.vue")
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;