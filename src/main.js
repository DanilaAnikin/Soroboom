import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import ru from './languages/ru.json';
import cz from './languages/cz.json';
import en from './languages/en.json';
import ua from './languages/ua.json';
import { createMemoryHistory, createRouter } from 'vue-router'
import ThankingPage from '../src/pages/ThankingPage.vue';

const routes = [
  { path: '/', component: App },
  { path: '/thanking-page', component: ThankingPage },

];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  messages: {
    ru,
    cz,
    en,
    ua
  }
})

createApp(App)
.use(i18n)
.use(router)
.mount('#app');
