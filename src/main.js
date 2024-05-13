import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import ru from './languages/ru.json';
import cz from './languages/cz.json';
import en from './languages/en.json';


const i18n = createI18n({
  locale: 'en',
  legacy: false,
  messages: {
    ru,
    cz,
    en,
  }
})

createApp(App)
.use(i18n)
.mount('#app');
