import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    meta: {
      layout: 'default',
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ '../views/DashBoard.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      layout: 'default',
    },
    component: () =>
      import(/* webpackChunkName: "setting" */ '../views/AboutView.vue'),
  },
  {
    path: '/analytics',
    name: 'analytics',
    meta: {
      layout: 'default',
    },
    component: () =>
      import(/* webpackChunkName: "setting" */ '../views/AnalyticsView.vue'),
  },

  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'login',
    },
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
