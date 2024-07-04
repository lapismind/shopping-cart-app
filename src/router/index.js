import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 其他路由
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
