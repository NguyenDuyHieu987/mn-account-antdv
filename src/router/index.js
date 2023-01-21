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
      import(/* webpackChunkName: "analytics" */ '../views/AnalyticsView.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      layout: 'default',
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'auth',
    },
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    meta: {
      layout: 'auth',
    },
    component: () =>
      import(/* webpackChunkName: "signup" */ '../views/SignupView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
