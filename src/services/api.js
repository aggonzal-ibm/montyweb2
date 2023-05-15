// services/api.js
import axios from 'axios';

const baseURL = 'https://montywebadmin.andyel.repl.co/api'; // Reemplaza con la URL de tu API

const api = {
  async getEmpresas() {
    return axios.get(`${baseURL}/empresas`);
  },

    async createEmpresa(empresa) {
    return axios.post(`${baseURL}/empresas/create`, empresa);
  },

  async getMontacargas(idEmpresa) {
    return axios.get(`${baseURL}/empresas/${idEmpresa}/montacargas`);
  },

  async createMontacargas(idEmpresa, montacargas) {
    return axios.post(`${baseURL}/empresas/${idEmpresa}/montacargas`, montacargas);
  },

  async updateMontacargas(idEmpresa, montacargas) {
    return axios.put(`${baseURL}/empresas/${idEmpresa}/montacargas/${montacargas.id}`, montacargas);
  },

  async deleteMontacargas(idEmpresa, idMontacargas) {
    return axios.delete(`${baseURL}/empresas/${idEmpresa}/montacargas/${idMontacargas}`);
  },
};

export default api;
