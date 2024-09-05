import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css';
import store from './store';
import router from './router/index';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';


const app = createApp(App);
app.use(store);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app');