<template>
  <div class="empresas-page">
    <div class="sidebar">
      <h2>Menú</h2>
      <router-link to="/empresas">Empresas</router-link>
      <router-link to="/">Montacargas</router-link>
      <!-- Agrega aquí más enlaces según sea necesario -->
    </div>

    <div class="main-content">
      <button @click="logout" class="logout-button">Cerrar sesión</button>
      <div class="empresas-container">
        <h1>Empresas</h1>
        <h2>Lista de empresas</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="empresa in empresasList" :key="empresa.id">
              <td>{{ empresa.id }}</td>
              <td>{{ empresa.name }}</td>
              <td>
                <div class="action-buttons">
                  <button @click="editEmpresa(empresa)">Editar</button>
                  <button @click="confirmDeleteEmpresa(empresa.id)">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <h2 v-if="isEditing">Editar Empresa</h2>
        <h2 v-else>
          <a href="#" @click="showAddEmpresaForm">Agregar Empresa</a>
        </h2>
        <div v-if="showForm" class="form-container">
          <div class="form-wrapper">
            <form @submit.prevent="createEmpresa">
              <div>
                <label for="nombre">Nombre:</label>
                <input id="nombre" v-model="empresaForm.nombre" required>
              </div>
              <button type="submit">Crear Empresa</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmpresasScript from './EmpresasScript';

export default {
  mixins: [EmpresasScript],
  // Resto del código del componente Empresas.vue
}
</script>


<style scoped>
@import "@/assets/styles/Empresas.scss";
</style>
