<template>
  <div class="app-container">
    <img alt="Logo" class="logo" src="../assets/logo.svg" />
    <div class="login-container">
      <h1 class="login-title">Monty 2.0 Web Admin</h1>
      <form>
        <input type="email" v-model="email" placeholder="Correo electrónico">
        <input type="password" v-model="password" placeholder="Contraseña">
        <button class="login-button" @click.prevent="login()">Iniciar Sesión</button>
      </form>
      <a href="#" class="create-account">Crear Cuenta</a>
    </div>
    <div v-if="showError" class="error-container" @click="closeError">
      <div class="error-message">
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import loginMethods from '@/methods/loginMethods';

export default {
  name: 'login',

  data() {
    return {
      email: '',
      password: '',
      showError: false,
      errorMessage: '',
    };
  },

  methods: {
    ...mapActions(['setToken']),

    async login() {
      if (!this.email || !this.password) {
        this.showError = true;
        this.errorMessage = 'Debes ingresar un correo electrónico y una contraseña.';
        return;
      }

      try {
        const data = await loginMethods.login(this.email, this.password);
        this.setToken(data.token); // Guarda el token en la tienda Vuex
        localStorage.setItem('token', data.token);
        localStorage.setItem('userEmail', this.email); // Guarda el correo electrónico en localStorage
        this.$router.push('/');
      } catch (error) {
        console.error(error);
        this.showError = true;
        this.errorMessage = 'Error al iniciar sesión. Verifica tus credenciales.';
      }
    },

    closeError() {
      this.showError = false;
    },
  },
};
</script>

<style scoped>
  @import '../assets/base.css';

  .app-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }

  .logo {
    max-width: 150px; /* Ajusta el tamaño del logo según prefieras */
    margin-right: 2rem;
  }

  .error-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }

  .error-message {
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }
</style>
