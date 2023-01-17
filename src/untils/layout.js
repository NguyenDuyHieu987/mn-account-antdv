import { defineAsyncComponent } from 'vue';

export function registerGlobalComponent(app) {
  app.component(
    'default-layout',
    defineAsyncComponent(() => import('../layouts/DefaultLayout.vue'))
  );
  app.component(
    'login-layout',
    defineAsyncComponent(() => import('../layouts/AuthLayout.vue'))
  );
}
