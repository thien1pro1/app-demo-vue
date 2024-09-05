import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ConstructionPage from '../pages/ConstructionPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/construction', component: ConstructionPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
