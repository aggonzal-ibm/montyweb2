<template>

	
  <div class="montacargas-page">

		<div class="sidebar">
      <h2>Menú</h2>
       <router-link to="/empresas">Empresas</router-link>
       <router-link to="/">Montacargas</router-link>
      <!-- Agrega aquí más enlaces según sea necesario -->
    </div>

		<div class="main-content">
    <button @click="logout" class="logout-button">Cerrar sesión</button>
    <div class="montacargas-container">
      <h1>Montacargas</h1>
      <label>Seleccionar empresa:</label>
      <select v-model="selectedEmpresa" @change="getEmpresas">
        <option disabled value="">Elige una empresa</option>
        <option v-for="empresa in empresas" :key="empresa.id" :value="empresa.id">{{ empresa.name }}</option>
      </select>
      <h2>Lista de montacargas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Modelo</th>
            <th>Serial/Placa/QR</th>
            <th>Horas Inicio</th>
            <th>Fecha Inicio</th>
            <th>Combustible Inicio</th>
            <th>Horas Fin</th>
            <th>Fecha Fin</th>
            <th>Combustible Fin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="montacargas in montacargasList" :key="montacargas.id">
            <td>{{ montacargas.id }}</td>
            <td>{{ montacargas.modelo }}</td>
            <td>{{ montacargas.serial_placa_qr }}</td>
            <td>{{ montacargas.horas_ini }}</td>
            <td>{{ montacargas.fecha_ini }}</td>
            <td>{{ montacargas.combustible_ini }}</td>
            <td>{{ montacargas.horas_fin }}</td>
            <td>{{ montacargas.fecha_fin }}</td>
            <td>{{ montacargas.combustible_fin }}</td>
           <td>
  <div class="action-buttons">
    <div>
      <button @click="editMontacargas(montacargas)">Editar</button>
    </div>
    <div>
      <button @click="confirmDeleteMontacargas(montacargas.id)">Eliminar</button>
    </div>
  </div>
</td>

          </tr>
        </tbody>
      </table>
      <h2 v-if="isEditing">Editar Montacargas</h2>
      <h2 v-else>
        <a href="#" @click="showAddMontacargasForm">Agregar Montacargas</a>
      </h2>

 
			<div class="form-wrapper">
  <div class="form-container">

				  <div class="form-image-container">
    <img v-if="isEditing || isAdding" :src="montacargasImageUrl" alt="Montacargas" />
  </div>
				
        <div v-if="isEditing || isAdding" class = "form_inputs">
					
          <form @submit.prevent="isEditing ? updateMontacargas() : addMontacargas()">
            <div class="form-group">
              <label>Modelo:</label>
              <input type="text" v-model="montacargasForm.modelo" required />
            </div>
            <div class="form-group">
              <label>Serial/Placa/QR:</label>
              <input type="text" v-model="montacargasForm.serial_placa_qr" required />
            </div>
            <div class="form-group">
              <label>Horas Inicio:</label>
              <input type="number" v-model="montacargasForm.horas_ini" />
            </div>
            <div class="form-group">
              <label>Fecha Inicio:</label>
              <input type="datetime-local" v-model="montacargasForm.fecha_ini" />
            </div>
            <div class="form-group">
              <label>Combustible Inicio:</label>
              <input type="number" v-model="montacargasForm.combustible_ini" />
            </div>
            <div class="form-group">
              <label>Horas Fin:</label>
              <input type="number" v-model="montacargasForm.horas_fin" />
            </div>
            <div class="form-group">
              <label>Fecha Fin:</label>
              <input type="datetime-local" v-model="montacargasForm.fecha_fin" />
            </div>
            <div class="form-group">
              <label>Combustible Fin:</label>
              <input type="number" v-model="montacargasForm.combustible_fin" />
            </div>
            <div class="form-actions">
              <button type="submit">{{ isEditing ? 'Guardar' : 'Agregar' }}</button>
              <button type="button" @click="cancelForm(isEditing || isAdding)">Cerrar</button>
            </div>
          </form>
        </div>

		  </div>
</div>
     
				
    </div>
  </div>
		</div>
</template>


<script>
import MontacargasScript from './MontacargasScript';

export default MontacargasScript;

</script>

<style scoped>
  @import "@/assets/styles/Montacargas.scss";
</style>


 






