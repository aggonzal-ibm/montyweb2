// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Montacargas from '../components/Montacargas.vue';
import Login from '../components/login.vue';
import Empresas from '../components/Empresas.vue'; // Importa el componente Empresas aquí
import store from '../store'; // Importa la tienda aquí

const requireAuth = (to, from, next) => {
  const loggedIn = store.getters.token; // Utiliza la tienda Vuex aquí
  console.log('Token:', loggedIn);
  console.log('Ruta destino:', to.path);
  if (!loggedIn) {
    next('/login');
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'Montacargas',
    component: Montacargas,
    beforeEnter: requireAuth, // Añade la función requireAuth aquí
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/empresas', // Define la ruta a la página de Empresas aquí
    name: 'Empresas',   // Asigna el nombre de la ruta
    component: Empresas, // Asigna el componente Empresas a esta ruta
    beforeEnter: requireAuth, // Añade la función requireAuth aquí si la autenticación es necesaria
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;





