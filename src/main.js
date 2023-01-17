import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import './assets/style/globalStyle.scss';
import { registerGlobalComponent } from './untils/layout';

const app = createApp(App);
registerGlobalComponent(app);

app.use(Antd).use(router).use(store).mount('#app');
