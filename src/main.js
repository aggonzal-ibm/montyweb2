import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Importa la tienda aquí

createApp(App)
  .use(router)
  .use(store) // Añade la tienda aquí
  .mount('#app');
